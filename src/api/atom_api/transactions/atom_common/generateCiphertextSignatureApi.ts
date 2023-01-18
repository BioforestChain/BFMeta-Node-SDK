import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "../../../../constants";

export class GenerateCiphertextSignatureApi extends CommonApi<string> {
    readonly EXEC_API_PATH = COMMON_API_PATH.GENERATE_CIPHERTEXT_SIGNATURE;

    async sendPostRequest(argv: BFMetaNodeSDK.Common.GenerateCiphertextSignatureParams) {
        return super.sendPostRequest(argv);
    }
}
