import { CommonApi } from "./_commonApi.js";
import { COMMON_API_PATH } from "../../../../constants/index.js";

export class GenerateAccountApi extends CommonApi<BFMetaNodeSDK.Common.AccountInfo> {
    readonly EXEC_API_PATH = COMMON_API_PATH.GENERATE_ACCOUNT;

    async sendPostRequest(argv: BFMetaNodeSDK.Common.GenerateAccountParams) {
        return super.sendPostRequest(argv);
    }
}
