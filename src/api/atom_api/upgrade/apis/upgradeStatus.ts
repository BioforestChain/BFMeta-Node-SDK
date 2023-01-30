import { UpgradePostApi } from "./_upgradePostApi";
import { UPGRADE_API_PATH } from "../../../../constants";

export class UpgradeStatusApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.UpgradeStatusResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.UPGRADE_STATUS;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.UpgradeStatusRequest) {
        return await super.sendPostRequest(argv);
    }
}
