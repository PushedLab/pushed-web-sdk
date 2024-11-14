const config = {
    version: 1,
    platform: 'web',
    api: {
        endpoint: 'https://api.pushed.ru'
    },
    vapidDetails: {
        publicKey: 'BKkzxPkCIPpSGAzVx3g3AHOsA738n64rNa7T9ERP1I8fSgLQGxZLjNYw9ABNTf0Mbdp8_4MXufXa8q3t_7epHCI'
    },
    localStorageKeys: {
        token: 'clientToken',
        apiEndpoint: 'pushedApiEndpoint',
        proxyApiEndpoint: 'proxyApiEndpoint',
        environment: 'pushedEnvironment',
    },
    serviceWorker: {
        fileName: 'sw.js'
    },
    logic: {
        deviceValidationDelay: 5000
    }
};

export default config;

try {
    module.exports = config;
}
catch (err) {
    //ignore
}