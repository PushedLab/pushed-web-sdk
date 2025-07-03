declare module '@pushedlab/pushed-web-sdk' {
    export function registerWebPushes(userConfig?: WebPushUserConfig): Promise<string>;
    export function setNotificationListener(callback: (data: any) => void): void;
    export function validateSubscription(): Promise<string>;
    export function setApiEndpoint(): void;
    export function requestNotificationPermission(): Promise<boolean>;
    export function unsubscribeFromPush(): Promise<void>;
    export function removeClientToken(): void;

    export interface WebPushUserConfig {
        websiteId?: string;
    }
}
