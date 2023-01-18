import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "../../../../constants";

export class GenerateAddressByPublicKeyApi extends CommonApi<string> {
    readonly EXEC_API_PATH = COMMON_API_PATH.GENERATE_ADDRESS_BY_PUBLICKEY;

    async sendPostRequest(argv: BFMetaNodeSDK.Common.GenerateAddressByPublicKeyParams) {
        return super.sendPostRequest(argv);
    }
}
