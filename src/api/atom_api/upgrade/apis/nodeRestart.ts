import { UpgradePostApi } from "./_upgradePostApi";
import { UPGRADE_API_PATH } from "../../../../constants";

export class NodeRestartApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.NodeRestartResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.NODE_RESTART;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.NodeRestartRequest) {
        return await super.sendPostRequest(argv);
    }
}
