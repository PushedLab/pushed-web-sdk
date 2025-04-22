const config = {
  version: '1.0.12',
  apiUrl: 'https://api.pushed.ru'
};

let requestPayload = null;

self.addEventListener('push', function (event) {
  const data = event.data.json() || {};
  requestPayload = getRequestPayload(data.WebClientToken, data.MessageId);

  // подтверждаем доставку пуша до клиента
  requestPayload && confirmDelivery();

  const image = data.Image || 'https://multipushed.ru/favicon-32x32.png';
  const placeholderImage = data.PlaceholderImage || '';
  const title = data.Title || '';
  const body = data.Body || '';
  // кнопки действий. макс. 2 шт.
  const actions = data.Actions || [];

  const options = {
    actions: actions,
    body: body,
    icon: image,
    image: placeholderImage,
    badge: image,
    data: {
      url: data.Url
    }
  };

  event.waitUntil(
      (async () => {
        await self.registration.showNotification(title, options);
        requestPayload && setClientInteractionStatus('Show', requestPayload);
      })()
  );

  clients.matchAll({ includeUncontrolled: true, type: 'window' }).then(clients => {
    data._pushed = true;

    clients.forEach(client => {
      client.postMessage(data, [new MessageChannel().port2]);
    });
  });

  serviceWorker.dispatchEvent(new CustomEvent('message', {detail: data}));
});

self.addEventListener('notificationclick', function (event) {
  requestPayload && setClientInteractionStatus('Click', requestPayload);
  const url = event.notification.data.url;
  if (url) {
    event.waitUntil(clients.openWindow(url));
  }
});

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  return self.clients.claim();
});

function getRequestPayload(token, messageId) {
  if (!token || !messageId) {
    return null;
  }

  const headers = new Headers();
  const base64BasicHeader = self.btoa(token + ':' + messageId);
  headers.set('Authorization', 'Basic ' + base64BasicHeader);

  return { method: 'POST', headers: headers };
}

function setClientInteractionStatus(status, requestPayload) {
  if (status !== 'Show' && status !== 'Click' && status !== 'Close') {
    throw Error('Wrong client interaction status');
  }
  fetch(`${config.apiUrl}/v2/web-push/confirm-client-interaction?clientInteraction=${status}`, requestPayload);
}

function confirmDelivery() {
  fetch(`${config.apiUrl}/v2/web-push/confirm`, requestPayload);
}