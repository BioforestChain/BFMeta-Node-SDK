import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "../../../../constants";

export class AsymmetricDecryptApi extends CommonApi<BFMetaNodeSDK.Common.AsymmetricDecrypt> {
    readonly EXEC_API_PATH = COMMON_API_PATH.ASYMMETRIC_DECRYPT;

    async sendPostRequest(argv: BFMetaNodeSDK.Common.AsymmetricDecryptParams) {
        return super.sendPostRequest(argv);
    }
}
