declare namespace BFMetaNodeSDK {
    type HttpHelper = import("./network").HttpHelper;
    type WebsocketHelper = import("./network").WebsocketHelper;
    type NetworkHelper = HttpHelper | WebsocketHelper;

    interface ApiSuccessReturn<T> {
        success: true;
        result: T;
    }
    interface ApiFailureReturn {
        success: false;
        error: {
            code?: string;
            message: string;
            description?: string;
        };
    }

    type ApiReturn<T> = ApiSuccessReturn<T> | ApiFailureReturn;
}
