import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "../../../../constants";

export class AsymmetricEncryptApi extends CommonApi<BFMetaNodeSDK.Common.AsymmetricEncrypt> {
    readonly EXEC_API_PATH = COMMON_API_PATH.ASYMMETRIC_ENCRYPT;

    async sendPostRequest(argv: BFMetaNodeSDK.Common.AsymmetricEncryptParams) {
        return super.sendPostRequest(argv);
    }
}
