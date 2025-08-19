import { UpgradePostApi } from "./_upgradePostApi.js";
import { UPGRADE_API_PATH } from "../../../../constants/index.js";

export class UpgradeStatusApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.UpgradeStatusResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.UPGRADE_STATUS;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.UpgradeStatusRequest) {
        return await super.sendPostRequest(argv);
    }
}
