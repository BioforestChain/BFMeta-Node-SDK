import { UpgradePostApi } from "./_upgradePostApi";
import { UPGRADE_API_PATH } from "../../../../constants";

export class DownloadPackageApi extends UpgradePostApi<BFMetaNodeSDK.Upgrade.DownloadPackageResult> {
    readonly REQUEST_API_PATH = UPGRADE_API_PATH.DOWNLOAD_PACKAGE;

    async sendPostRequest(argv: BFMetaNodeSDK.Upgrade.DownloadPackageRequest) {
        return await super.sendPostRequest(argv);
    }
}
