import { API_NAMESPACE, REQUEST_PROTOCOL, REQUEST_TYPE } from "../../../../constants";

export abstract class SystemPostApi<T extends BFMetaNodeSDK.System.SystemApiRequestResult> {
    private readonly __API_NAMESPACE = API_NAMESPACE.SYSTEM;
    abstract readonly REQUEST_API_PATH: BFMetaNodeSDK.System.SYSTEM_API_PATH;

    constructor(protected networkHelper: BFMetaNodeSDK.NetworkHelper) {}

    async sendPostRequest(argv: BFMetaNodeSDK.System.SystemApiRequestParams) {
        // FIXME: 兼容老燕辉设计的神奇的 api
        const apiPath = `${this.networkHelper.URL_PREFIX}${this.networkHelper.REQUEST_PROTOCOL === REQUEST_PROTOCOL.WEBSOCKET ? REQUEST_TYPE.POST + "/" : ""}${
            this.__API_NAMESPACE
        }${this.REQUEST_API_PATH}`;
        try {
            const result = await this.networkHelper.sendPostRequest<BFMetaNodeSDK.System.SystemApiReturn<T>>(apiPath, argv);
            return result;
        } catch (e: any) {
            const errorInfo: BFMetaNodeSDK.System.SystemApiFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request post api ${apiPath} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }
}
