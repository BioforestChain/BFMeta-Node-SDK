import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class ResetSystemAdminApi extends SystemPostApi<BFMetaNodeSDK.System.ResetSystemAdminResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_RESET_SYSTEM_ADMIN;

    async sendPostRequest(argv: BFMetaNodeSDK.System.ResetSystemAdminParams) {
        return await super.sendPostRequest(argv);
    }
}
