import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class ResetSystemAdminApi extends SystemPostApi<BFMetaNodeSDK.System.ResetSystemAdminResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_RESET_SYSTEM_ADMIN;

    async sendPostRequest(argv: BFMetaNodeSDK.System.ResetSystemAdminParams) {
        return await super.sendPostRequest(argv);
    }
}
