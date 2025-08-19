import { BasicPostApi } from "./_basicPostApi.js";
import { BASIC_API_PATH } from "../../../../constants/index.js";

export class GetAccountLastTransactionApi extends BasicPostApi<BFMetaNodeSDK.Basic.GetAccountLastTransactionResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_GET_ACCOUNT_LAST_TRANSACTION;

    async sendPostRequest(argv: BFMetaNodeSDK.Basic.GetAccountLastTransactionParams) {
        return await super.sendPostRequest(argv);
    }
}
