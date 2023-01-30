import { API_NAMESPACE, REQUEST_PROTOCOL, REQUEST_TYPE } from "../../../../constants";

export abstract class UpgradePostApi<T extends BFMetaNodeSDK.Upgrade.UpgradeApiRequestResult> {
    abstract readonly REQUEST_API_PATH: BFMetaNodeSDK.Upgrade.UPGRADE_API_PATH;

    constructor(protected networkHelper: BFMetaNodeSDK.WebsocketHelper) {}

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.UpgradeApiRequestParams) {
        const apiPath = `${this.REQUEST_API_PATH}`;
        try {
            const result = await this.networkHelper.sendUpgradeRequest<BFMetaNodeSDK.Upgrade.UpgradeApiReturn<T>>(apiPath, argv);
            return result;
        } catch (e: any) {
            const errorInfo: BFMetaNodeSDK.Upgrade.UpgradeApiFailureReturn = {
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
