import { UpgradePostApi } from "./_upgradePostApi.js";
import { UPGRADE_API_PATH } from "../../../../constants/index.js";

export class NodeRestartApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.NodeRestartResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.NODE_RESTART;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.NodeRestartRequest) {
        return await super.sendPostRequest(argv);
    }
}
