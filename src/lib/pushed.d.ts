declare module 'pushed-web-sdk' {
    export function registerWebPushes(params: { appId: string }): Promise<string>;
    export function setNotificationListener(callback: (data: any) => void): void;
    export function validateClientToken(): Promise<string>;
    export function setApiEndpoint(): void;
}