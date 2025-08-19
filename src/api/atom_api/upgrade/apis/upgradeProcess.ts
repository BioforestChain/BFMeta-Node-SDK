import { UpgradePostApi } from "./_upgradePostApi.js";
import { UPGRADE_API_PATH } from "../../../../constants/index.js";

export class UpgradeProcessApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.UpgradeProcessResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.UPGRADE_PROCESS;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.UpgradeProcessRequest) {
        return await super.sendPostRequest(argv);
    }
}
