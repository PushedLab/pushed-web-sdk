import api from '../util/api';
import config from '../config'; 
import Base64 from '../util/base64';
import Promise from 'promise-polyfill';

var Pushed = {
    registerWebPushes() {
        return new Promise(async (resolve, reject) => {
            if (!('PushManager' in self) || !('serviceWorker' in navigator || typeof ServiceWorkerRegistration !== 'undefined')) {
                if (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
                    return reject(new Error('For Web Push on iOS 16.4+, you will first need to click the "Share" button -> "Add to Home Screen" before you can sign up for push notifications.'));
                }
                else {
                    return reject(new Error('Web push is not supported'));
                }
            }

            const localStorage = self.localStorage;

            if (!localStorage) {
                return reject(new Error('Local storage is not supported'));
            }

            let registration;
            
            try {
                if (navigator.serviceWorker) {
                    registration = await navigator.serviceWorker.register(`/${config.serviceWorker.fileName}`);
                } else if (self.registration) {
                    registration = self.registration;
                }
            }
            catch (e) {
                return reject(new Error(`Failed to load '${self.location.origin}/${config.serviceWorker.fileName}': ${e.message}`, e));
            }

            if (navigator.serviceWorker) {
                await navigator.serviceWorker.ready;
            }

            let subscription = await registration.pushManager.getSubscription();

            if (!subscription) {
                const publicKey = config.vapidDetails.publicKey;

                try {
                    subscription = await registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: Base64.urlB64ToUint8Array(publicKey) });
                }
                catch (e) {
                    return reject(new Error(`Failed to subscribe the device: ${e.message}`, e));
                }
            }
            else {
                const existToken = localStorage.getItem(config.localStorageKeys.token);

                if (existToken) {
                    try {
                        await this.validateClientToken(existToken);
                        return resolve(existToken);
                    }
                    catch (e) {
                        
                    }
                }
            }

            const jsonSubscription = JSON.parse(JSON.stringify(subscription));

            const auth = jsonSubscription.keys.auth;
            const p256dhKey = jsonSubscription.keys.p256dh;
            const webApiEndpoint = jsonSubscription.endpoint;

            if (!p256dhKey || !auth || !webApiEndpoint) {
                return reject(new Error('The push subscription is missing a required field.'));
            }

            const postData = {
                sdkVersion: config.version,
                auth: auth,
                webApiEndpoint: webApiEndpoint,
                P256dhKey: p256dhKey,
                hostname: self.location.hostname
            };

            let response;

            try {
                response = await api.post(config.api.registerEndpoint, postData);
            }
            catch (e) {
                return reject(new Error(`The API request failed: ${e.message}`, e));
            }

            if (!response.success || !response.model.clientToken) {
                return reject(new Error('An unexpected response was received from the Pushed API.'));
            }

            localStorage.setItem(config.localStorageKeys.token, response.model.clientToken);

            resolve(response.model.clientToken);
        });
    },

    async setNotificationListener(handler) {
        if (!('PushManager' in self) || !('serviceWorker' in navigator || typeof ServiceWorkerRegistration !== 'undefined')) {
            return console.error('Web push is not supported by this browser.');
        }

        if (navigator.serviceWorker) {
            await navigator.serviceWorker.ready;
        }
        else if (self.registration) {
            while (!self.registration.active) {
                
            }

            navigator.serviceWorker = self.registration.active;
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

    validateClientToken() {
        return new Promise(async (resolve, reject) => {
            this.attemptedValidation = true;

            const localStorage = self.localStorage;

            if (!localStorage) {
                return reject(new Error('Local storage is not supported by this browser.'));
            }

            const clientToken = localStorage.getItem(config.localStorageKeys.token);

            if (!clientToken) {
                return reject(new Error('The device is not registered to receive push notifications.'));
            }

            const postData = { 
                clientToken: clientToken, 
                hostname: self.location.hostname 
            };

            let response;

            try {
                response = await api.post(config.api.authEndpoint, postData);
            }
            catch (e) {
                return reject(new Error(`The API request failed: ${e.message}`, e));
            }

            if (!response.success || !response.model.clientToken || response.model.clientToken != clientToken) {
                return reject(new Error('An unexpected response was received from the Pushed API.'));
            }

            resolve();
        });
    },

    setApiEndpoint(endpoint) {
        if (!endpoint || typeof endpoint !== 'string'){
            return;
        }

        const localStorage = self.localStorage;

        if (!localStorage) {
            return reject(new Error('Local storage is not supported by this browser.'));
        }

        const previousEndpoint = localStorage.getItem(config.localStorageKeys.apiEndpoint);

        if (endpoint != previousEndpoint) {
            localStorage.removeItem(config.localStorageKeys.token);
            localStorage.setItem(config.localStorageKeys.apiEndpoint, endpoint);
        }
    },
}

export default Pushed;

try {
    module.exports = Pushy;
}
catch (err) {
    //ignore
}