const config = {
  version: '2.0.6',
  platform: 'web',
  api: {
    endpoint: 'https://api.pushed.ru',
    registerEndpoint: '/v2/web-push/register',
    authEndpoint: '/v2/web-push/auth-client',
    clientInteractionEndpoint: '/v2/web-push/confirm-client-interaction',
    generateTokenEndpoint: '/v2/web-push/generate-client-token',
    setNotificationPermissionStateEndpoint: '/v2/web-push/set-notification-permission',
    setClientInfoEndpoint: '/v2/web-push/set-client-info'
  },
  vapidDetails: {
    publicKey: 'BKkzxPkCIPpSGAzVx3g3AHOsA738n64rNa7T9ERP1I8fSgLQGxZLjNYw9ABNTf0Mbdp8_4MXufXa8q3t_7epHCI'
  },
  localStorageKeys: {
    token: 'clientToken',
    tokenTimestamp: 'tokenTimestamp',
    apiEndpoint: 'pushedApiEndpoint',
    proxyApiEndpoint: 'proxyApiEndpoint',
    environment: 'pushedEnvironment',
    clientInfo: 'webPushClientInfo'
  },
  serviceWorker: {
    fileName: 'sw.js'
  },
  token: {
    lifetime: 24 * 60 * 60 * 1000 // 24 hours in ms
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