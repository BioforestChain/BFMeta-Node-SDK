import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "../../../../constants";

export class VerifyAddressApi extends CommonApi<boolean> {
    readonly EXEC_API_PATH = COMMON_API_PATH.VERIFY_ADDRESS;

    async sendPostRequest(argv: BFMetaNodeSDK.Common.VerifyAddressParams) {
        return super.sendPostRequest(argv);
    }
}
