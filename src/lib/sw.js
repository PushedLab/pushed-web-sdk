const config = {
  version: '2.0.6',
  apiUrl: 'https://api.pushed.ru'
};

let requestPayload = null;
let options = {};

self.addEventListener('push', function (event) {
  const data = event.data.json() || {};
  requestPayload = getRequestPayload(data.WebClientToken, data.MessageId);

  // подтверждаем доставку пуша до клиента
  requestPayload && confirmDelivery();

  /**
   * URL иконки для пуша
   * Рекомендуемый размер 64x64px
   */
  const image = data.Image || 'https://multipushed.ru/favicon-32x32.png';
  /**
   * URL заглавного изображения для пуша
   * Рекомендуемый размер 320x160px
   */
  const placeholderImage = data.PlaceholderImage || '';
  /**
   * Текст заголовка пуша
   */
  const title = data.Title || '';
  /**
   * Основной текст пуша
   */
  const body = data.Body || '';
  /**
   * Кнопки действий
   * Макс. 2 шт.
   */
  const actions = data.PushActions ? data.PushActions.map(x => {
    return {
      action: x.ActionCode,
      title: x.Title,
      url: x.ActionUrl
    };
  }) : [];
  /**
   * Пуш не будет отображен, если этот параметр равен true
   */
  const silent = data.Silent || false;

  options = {
    actions: actions,
    body: body,
    icon: image,
    tag: data.MessageId || '',
    image: placeholderImage,
    badge: image,
    silent: silent,
    data: {
      url: data.Url
    }
  };

  shouldShowNotification(data) && event.waitUntil(
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

/**
 * При клике на пуш или заглавную картинку, загружается страница по адресу в data.Url (если задан)
 * При клике на кнопку действия, загружается страница по адресу в ActionUrl этой кнопки (если задан)
 */
self.addEventListener('notificationclick', async function (event) {
  requestPayload && setClientInteractionStatus('Click', requestPayload);

  let url;
  const notification = event.notification;
  const action = options.actions.find(x => x.action === event.action);
  url = action ? action.url : notification.data.url;
  url && event.waitUntil(clients.openWindow(url));

  await closeNotification(notification.tag);
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

function shouldShowNotification(data) {
  if (data.Silent) {
    return false;
  }
  return (data.Title && data.Body) || !data.Payload;
}

async function closeNotification(tag) {
  const notifications = await self.registration.getNotifications();
  const currentNotification = notifications.find(x => x.tag === tag);
  if (currentNotification) {
    currentNotification.close();
  }
}