import { CommonApi } from "./_commonApi.js";
import { COMMON_API_PATH } from "../../../../constants/index.js";

export class GenerateKeypairApi extends CommonApi<BFMetaNodeSDK.Common.Keypairs> {
    readonly EXEC_API_PATH = COMMON_API_PATH.GENERATE_KEYPAIR;

    async sendPostRequest(argv: BFMetaNodeSDK.Common.GenerateKeypairParams) {
        return super.sendPostRequest(argv);
    }
}
