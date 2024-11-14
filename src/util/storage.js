import config from '../config';

const browser = self.browser || self.chrome;

export const localStorage = {
    cache: {},

    async recacheWebExtensionStorage() {
        if (this.isWebExtension()) {
            for (const i in config.localStorageKeys) {
                const key = config.localStorageKeys[i];
                this.cache[key] = (await browser.storage.local.get(key))[key];
            }
        }
    },

    getItem(key) {
        return self.localStorage ? self.localStorage.getItem(key) : this.cache[key];
    },

    setItem(key, value) {
        if (self.localStorage) {
            self.localStorage.setItem(key, value);
        }

        else if (this.isWebExtension()) {
            browser.storage.local.set({ [key]: value });
            this.cache[key] = value;
        }
    },

    removeItem(key) {
        if (self.localStorage) {
            self.localStorage.removeItem(key);
        }

        else if (this.isWebExtension()) {
            browser.storage.local.remove(key);
            this.cache[key] = null;
        }
    },

    isSupported() {
        return self.localStorage || this.isWebExtension();
    },

    isWebExtension() {
        const webExtensionNamespace = 'browser' in self ? 'browser' : 'chrome' in self ? 'chrome' : undefined;
        return webExtensionNamespace && webExtensionNamespace in self && 'storage' in self[webExtensionNamespace] && 'local' in self[webExtensionNamespace].storage;
    }
};

localStorage.recacheWebExtensionStorage();