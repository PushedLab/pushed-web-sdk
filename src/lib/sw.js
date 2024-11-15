self.addEventListener('push', function (event) {
    var data = event.data.json() || {};

    var image = data.Image || 'https://pushed.ru/facicon-256x256.png';

    var title = data.Title || '';
    var body = data.Body || '';

    var options = {
        body: body,
        icon: image,
        badge: image,
        data: {
            url: data.Url
        }
    };

    if (data['_pushedCollapseKey'])
        options.tag = data['_pushedCollapseKey'];

    event.waitUntil(self.registration.showNotification(title, options));

    clients.matchAll({ includeUncontrolled: true, type: 'window' }).then(clients => {
        data._pushed = true;

        clients.forEach(client => {
            client.postMessage(data, [new MessageChannel().port2]);
        });
    });

    serviceWorker.dispatchEvent(new CustomEvent('message', {detail: data}));
    
    if (data.WebClientToken && data.MessageId && data.ConfirmApiUrl){
        let headers = new Headers();
        const base64BasicHeader = self.btoa(data.WebClientToken + ":" + data.MessageId);

        headers.set('Authorization', 'Basic ' + base64BasicHeader);

        fetch(data.ConfirmApiUrl + "/v2/web-push/confirm", { method: 'POST', headers: headers });
    }
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    var url = event.notification.data.url;
    if (url) {
        event.waitUntil(clients.openWindow(url));
    }
});