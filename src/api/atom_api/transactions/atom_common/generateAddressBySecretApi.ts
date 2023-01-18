import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "../../../../constants";

export class GenerateAddressBySecretApi extends CommonApi<string> {
    readonly EXEC_API_PATH = COMMON_API_PATH.GENERATE_ADDRESS_BY_SECRET;

    async sendPostRequest(argv: BFMetaNodeSDK.Common.GenerateAddressBySecretParams) {
        return super.sendPostRequest(argv);
    }
}
