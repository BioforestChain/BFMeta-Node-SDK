import { API_NAMESPACE, REQUEST_PROTOCOL, REQUEST_TYPE } from "../../../../constants";

export abstract class BasicGetApi<T extends BFMetaNodeSDK.Basic.BasicApiRequestResult> {
    private readonly __API_NAMESPACE = API_NAMESPACE.BASIC;
    abstract readonly REQUEST_API_PATH: BFMetaNodeSDK.Basic.BASIC_API_PATH;

    constructor(protected networkHelper: BFMetaNodeSDK.NetworkHelper) {}

    async sendGetRequest(argv?: BFMetaNodeSDK.Basic.BasicApiRequestParams) {
        // FIXME: 兼容老燕辉设计的神奇的 api
        const apiPath = `${this.networkHelper.URL_PREFIX}${this.networkHelper.REQUEST_PROTOCOL === REQUEST_PROTOCOL.WEBSOCKET ? REQUEST_TYPE.GET + "/" : ""}${
            this.__API_NAMESPACE
        }${this.REQUEST_API_PATH}`;
        try {
            const result = await this.networkHelper.sendGetRequest<BFMetaNodeSDK.Basic.BasicApiReturn<T>>(apiPath, argv);
            return result;
        } catch (e: any) {
            const errorInfo: BFMetaNodeSDK.Basic.BasicApiFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request get api ${apiPath} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }
}
