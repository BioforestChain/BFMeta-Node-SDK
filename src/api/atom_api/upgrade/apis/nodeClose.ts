import { UpgradePostApi } from "./_upgradePostApi.js";
import { UPGRADE_API_PATH } from "../../../../constants/index.js";

export class NodeCloseApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.NodeCloseResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.NODE_CLOSE;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.NodeCloseRequest) {
        return await super.sendPostRequest(argv);
    }
}
