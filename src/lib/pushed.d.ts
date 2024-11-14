declare module 'pushed-web-sdk-test' {
    export function register(params: { appId: string }): Promise<string>;
    export function setNotificationListener(callback: (data: any) => void): void;
    export function validateDeviceCredentials(): Promise<void>;
    export function isEnterpriseConfigured(): boolean;
    export function setApiEndpoint(): void;
}