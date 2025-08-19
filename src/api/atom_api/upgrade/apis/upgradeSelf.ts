import { UpgradePostApi } from "./_upgradePostApi.js";
import { UPGRADE_API_PATH } from "../../../../constants/index.js";

export class UpgradeSelfApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.UpgradeSelfResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.UPGRADE_SELF;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.UpgradeSelfRequest) {
        return await super.sendPostRequest(argv);
    }
}
