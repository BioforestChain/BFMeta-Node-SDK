import { API_NAMESPACE, REQUEST_PROTOCOL, REQUEST_TYPE } from "../../../../constants";

export abstract class TransactionApi {
    private readonly __API_NAMESPACE = API_NAMESPACE.TRANSACTION;
    abstract readonly GENERATE_API_PATH: BFMetaNodeSDK.Transaction.GENERATE_TRANSACTION_API_PATH;
    abstract readonly CREATE_API_PATH: string;
    abstract readonly PACKAGE_API_PATH: string;
    abstract readonly BROADCAST_API_PATH: string;

    constructor(protected networkHelper: BFMetaNodeSDK.NetworkHelper) {}

    getApiPath(suffix?: string) {
        let apiPath = `${this.networkHelper.URL_PREFIX}${this.networkHelper.REQUEST_PROTOCOL === REQUEST_PROTOCOL.WEBSOCKET ? REQUEST_TYPE.POST + "/" : ""}${
            this.__API_NAMESPACE
        }`;
        if (suffix) {
            apiPath += `/${suffix}`;
        }
        return apiPath;
    }

    async createTransaction(argv: BFMetaNodeSDK.Transaction.TransactionCommonParams) {
        const apiPath = this.getApiPath(this.CREATE_API_PATH);
        try {
            const result = await this.networkHelper.sendPostRequest<BFMetaNodeSDK.Transaction.CreateResult>(apiPath, argv);
            return result;
        } catch (e: any) {
            const errorInfo: BFMetaNodeSDK.ApiFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request api ${apiPath} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }

    async packageTransaction(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const apiPath = this.getApiPath(this.PACKAGE_API_PATH);
        try {
            const result = await this.networkHelper.sendPostRequest<BFMetaNodeSDK.Transaction.PackageResult>(apiPath, argv);
            return result;
        } catch (e: any) {
            const errorInfo: BFMetaNodeSDK.ApiFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request api ${apiPath} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }

    async broadcastTransaction<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const apiPath = this.getApiPath(this.BROADCAST_API_PATH);
        try {
            const result = await this.networkHelper.sendPostRequest<BFMetaNodeSDK.Transaction.BroadcastResult<T>>(apiPath, argv);
            return result;
        } catch (e: any) {
            const errorInfo: BFMetaNodeSDK.ApiFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request api ${apiPath} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }
}
