import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class VerifySystemKeyApi extends SystemPostApi<BFMetaNodeSDK.System.VerifySystemKeyResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_VERIFY_SYSTEM_KEY;

    async sendPostRequest(argv: BFMetaNodeSDK.System.VerifySystemKeyParams) {
        return await super.sendPostRequest(argv);
    }
}
