export default {
    urlB64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);

        // Convert to Base64
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = self.atob(base64);

        const outputArray = new Uint8Array(rawData.length);

        const length = rawData.length;
        for (let i = 0; i < length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }

        return outputArray;
    }
};
