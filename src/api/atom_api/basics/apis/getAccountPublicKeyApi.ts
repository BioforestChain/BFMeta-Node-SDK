import { BasicPostApi } from "./_basicPostApi";
import { BASIC_API_PATH } from "../../../../constants";

export class GetAccountPublicKeyApi extends BasicPostApi<BFMetaNodeSDK.Basic.GetAccountPublicKeyResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_GET_ACCOUNT_PUBLICKEY;

    async sendPostRequest(argv: BFMetaNodeSDK.Basic.GetAccountPublicKeyParams) {
        return await super.sendPostRequest(argv);
    }
}
