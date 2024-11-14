export default {
    urlB64ToUint8Array(base64String) {
        // Pad the string with equal signs based on the encoded string length
        const padding = '='.repeat((4 - base64String.length % 4) % 4);

        // Convert to Base64
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        // Decode Base64-encoded string
        const rawData = self.atob(base64);

        // Prepare Uint8 array
        const outputArray = new Uint8Array(rawData.length);

        // Copy over the decoded string to the Uint8 array
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }

        // All done
        return outputArray;
    }
};
