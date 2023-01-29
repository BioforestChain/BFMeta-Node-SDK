import { UpgradePostApi } from "./_upgradePostApi";
import { UPGRADE_API_PATH } from "../../../../constants";

export class NodeUpgradeApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.NodeUpgradeResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.NODE_UPGRADE;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.NodeUpgradeRequest) {
        return await super.sendPostRequest(argv);
    }
}
