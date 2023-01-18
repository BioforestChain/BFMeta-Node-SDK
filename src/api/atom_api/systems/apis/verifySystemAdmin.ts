import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class VerifySystemAdminApi extends SystemPostApi<BFMetaNodeSDK.System.VerifySystemAdminResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_VERIFY_SYSTEM_ADMIN;

    async sendPostRequest(argv: BFMetaNodeSDK.System.VerifySystemAdminParams) {
        return await super.sendPostRequest(argv);
    }
}
