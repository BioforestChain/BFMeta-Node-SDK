export {};
declare global {
    export namespace BFMetaNodeSDK {
        export type HttpHelper = import("./network/index.js").HttpHelper;
        export type WebsocketHelper = import("./network/index.js").WebsocketHelper;
        export type NetworkHelper = HttpHelper | WebsocketHelper;

        export interface ApiSuccessReturn<T> {
            success: true;
            result: T;
        }
        export interface ApiFailureReturn {
            success: false;
            error: {
                code?: string;
                message: string;
                description?: string;
            };
        }

        export type ApiReturn<T> = ApiSuccessReturn<T> | ApiFailureReturn;
    }
}
