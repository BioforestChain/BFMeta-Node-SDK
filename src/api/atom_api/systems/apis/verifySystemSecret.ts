import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class VerifySystemSecretApi extends SystemPostApi<BFMetaNodeSDK.System.VerifySystemSecretResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_VERIFY_SYSTEM_SECRET;

    async sendPostRequest(argv: BFMetaNodeSDK.System.VerifySystemSecretParams) {
        return await super.sendPostRequest(argv);
    }
}
