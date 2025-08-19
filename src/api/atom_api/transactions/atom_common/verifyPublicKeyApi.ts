import { CommonApi } from "./_commonApi.js";
import { COMMON_API_PATH } from "../../../../constants/index.js";

export class VerifyPublicKeyApi extends CommonApi<boolean> {
    readonly EXEC_API_PATH = COMMON_API_PATH.VERIFY_PUBLICKEY;

    async sendPostRequest(argv: BFMetaNodeSDK.Common.VerifyPublicKeyParams) {
        return super.sendPostRequest(argv);
    }
}
