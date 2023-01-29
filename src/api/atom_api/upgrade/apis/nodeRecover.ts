import { UpgradePostApi } from "./_upgradePostApi";
import { UPGRADE_API_PATH } from "../../../../constants";

export class NodeRecoverApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.NodeRecoverResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.NODE_RECOVER;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.NodeRecoverRequest) {
        return await super.sendPostRequest(argv);
    }
}
