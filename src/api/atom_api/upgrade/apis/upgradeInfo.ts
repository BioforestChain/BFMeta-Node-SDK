import { UpgradePostApi } from "./_upgradePostApi.js";
import { UPGRADE_API_PATH } from "../../../../constants/index.js";

export class UpgradeInfoApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.UpgradeInfoResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.UPGRADE_INFO;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.UpgradeInfoRequest) {
        return await super.sendPostRequest(argv);
    }
}
