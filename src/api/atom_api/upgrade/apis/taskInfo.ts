import { UpgradePostApi } from "./_upgradePostApi";
import { UPGRADE_API_PATH } from "../../../../constants";

export class TaskInfoApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.TaskInfoResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.TASK_INFO;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.TaskInfoRequest) {
        return await super.sendPostRequest(argv);
    }
}
