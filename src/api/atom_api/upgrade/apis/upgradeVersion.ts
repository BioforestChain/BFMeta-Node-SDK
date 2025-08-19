import { UpgradePostApi } from "./_upgradePostApi.js";
import { UPGRADE_API_PATH } from "../../../../constants/index.js";

export class UpgradeVersionApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.UpgradeVersionResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.UPGRADE_VERSION;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.UpgradeVersionRequest) {
        return await super.sendPostRequest(argv);
    }
}
