import 'whatwg-fetch';
import config from '../config';

export default {
    async post(path, json) {

        if ( json === null || undefined){
            return;
        }

        const options = {};

        options.method = 'POST';
        options.body = JSON.stringify(json);

        options.headers = {
            'Content-Type': 'application/json'
        };  

        return await this.execute(path, options);
    },

    async execute(path, options) {
        const url = this.getApiHost() + path;
    
        let response = await fetch(url, options);

        if (response.status < 200 || response.status > 299) {
            let json = await response.json();

            let error = json.error || 'An unknown error occurred';

            throw { status: response.status, message: error };
        }

        return await response.json();
    },

    getApiHost() {
        const localStorage = self.localStorage;
        const proxyEndpoint = localStorage.getItem(config.localStorageKeys.proxyApiEndpoint);

        if (proxyEndpoint) {
            return 'https://' + proxyEndpoint;
        }

        const apiEndpoint = localStorage.getItem(config.localStorageKeys.apiEndpoint);

        return apiEndpoint || config.api.endpoint;
    }
}
