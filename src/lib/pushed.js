import api from '../util/api';
import config from '../config';
import Base64 from '../util/base64';

var Pushed = {
    async requestNotificationPermission() {
        if (Notification.permission === 'default') {
            const permission = await Notification.requestPermission();
            return permission === 'granted';
        }
        return Notification.permission === 'granted';
    },

    async registerWebPushes() {
        this.isSupportWebPush();

        const isPermissionGranted = await this.requestNotificationPermission();

        if (!isPermissionGrnated) {
            throw new Error('Request permissions was denied');
        }

        const registration = await this.getRegistration();
        const subscription = await registration.pushManager.getSubscription();

        if (!subscription) {
            return await this.register();
        }

        return await this.validateSubscription();
    },

    async validateSubscription() {
        this.isSupportWebPush();

        const permission = Notification.permission;
        if (permission !== 'granted') {
            throw new Error('Request permissions was denied or not requested');
        }

        const registration = await this.getRegistration();
        const subscription = await registration.pushManager.getSubscription();
        const clientToken = localStorage.getItem(config.localStorageKeys.token);

        if (!clientToken) {
            if (subscription){
                await subscription.unsubscribe();
            }

            return await this.register();
        }

        const tokenTimestamp = this.getSavedTokenTimestamp();
        const currentTime = this.getCurrentUnixTime();
        const tokenLifetime = 24 * 60 * 60; //24 hours

        if (tokenTimestamp && currentTime - tokenTimestamp < tokenLifetime) {
            return clientToken;
        }

        if (subscription){
            await subscription.unsubscribe();
        }

        return await this.register();
    },

    async register() {
        const registration = await this.getRegistration();
        const subscription = await registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: Base64.urlB64ToUint8Array(config.vapidDetails.publicKey) });

        const token = localStorage.getItem(config.localStorageKeys.token);
        const jsonSubscription = JSON.parse(JSON.stringify(subscription));

        const auth = jsonSubscription.keys.auth;
        const p256dhKey = jsonSubscription.keys.p256dh;
        const webApiEndpoint = jsonSubscription.endpoint;

        if (!p256dhKey || !auth || !webApiEndpoint) {
            throw new Error('The push subscription is missing a required field.');
        }

        const postData = {
            sdkVersion: config.version,
            auth: auth,
            webApiEndpoint: webApiEndpoint,
            P256dhKey: p256dhKey,
            hostname: self.location.hostname,
            clientToken: token
        };

        let response;
        let responseClientToken = '';

        try {
            response = await api.post(config.api.registerEndpoint, postData);
        }
        catch (e) {
            throw new Error(`The API request failed: ${e.message}`, e);
        }

        if (!response.success || !response.model.clientToken) {
            throw new Error('An unexpected response was received from the Pushed API.');
        }

        responseClientToken = response.model.clientToken;
        localStorage.setItem(config.localStorageKeys.token, responseClientToken);

        const unixDateTime = this.getCurrentUnixTime();
        localStorage.setItem(config.localStorageKeys.tokenTimestamp, unixDateTime);

        return responseClientToken;
    },

    async setNotificationListener(handler) {
        if (!('PushManager' in self) || !('serviceWorker' in navigator || typeof ServiceWorkerRegistration !== 'undefined')) {
            return console.error('Web push is not supported by this browser.');
        }

        if (navigator.serviceWorker) {
            await navigator.serviceWorker.ready;
        }

        if (!navigator.serviceWorker) {
            throw new Error('Service Worker not found');
        }

        navigator.serviceWorker.addEventListener('message', function (event) {
            if (!event.data && event.detail) {
                event.data = event.detail;
            }

            if (event.data && event.data._pushed) {
                handler(event.data);
            }
        });
    },

    setApiEndpoint(endpoint) {
        if (!endpoint || typeof endpoint !== 'string') {
            return;
        }

        const localStorage = self.localStorage;

        if (!localStorage) {
            throw new Error('Local storage is not supported by this browser.');
        }

        const previousEndpoint = localStorage.getItem(config.localStorageKeys.apiEndpoint);

        if (endpoint != previousEndpoint) {
            localStorage.removeItem(config.localStorageKeys.token);
            localStorage.setItem(config.localStorageKeys.apiEndpoint, endpoint);
        }
    },

    getSavedTokenTimestamp() {
        const tokenTimestamp = localStorage.getItem(config.localStorageKeys.tokenTimestamp);
        return tokenTimestamp ? parseInt(tokenTimestamp, 10) : null;
    },

    getCurrentUnixTime() {
        return Math.floor(Date.now() / 1000);
    },

    async getRegistration() {
        let registration;

        try {
            if (navigator.serviceWorker) {
                registration = await navigator.serviceWorker.register(`/${config.serviceWorker.fileName}`);
            } else if (self.registration) {
                registration = self.registration;
            }
        }
        catch (e) {
            throw Error(`Failed to load '${self.location.origin}/${config.serviceWorker.fileName}': ${e.message}`, e);
        }

        if (navigator.serviceWorker) {
            await navigator.serviceWorker.ready;
        }

        return registration;
    },

    isSupportWebPush() {
        if (!('PushManager' in self) || !('serviceWorker' in navigator || typeof ServiceWorkerRegistration !== 'undefined')) {
            if (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
                throw new Error('For Web Push on iOS 16.4+, you will first need to click the "Share" button -> "Add to Home Screen" before you can sign up for push notifications.');
            }
            else {
                throw new Error('Web push is not supported');
            }
        }

        const localStorage = self.localStorage;

        if (!localStorage) {
            throw new Error('Local storage is not supported');
        }
    }
}

export default Pushed;

try {
    module.exports = Pushed;
}
catch (err) {
    //ignore
}