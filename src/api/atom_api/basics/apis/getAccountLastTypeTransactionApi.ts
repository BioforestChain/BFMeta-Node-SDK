import { BasicPostApi } from "./_basicPostApi";
import { BASIC_API_PATH } from "../../../../constants";

export class GetAccountLastTypeTransactionApi extends BasicPostApi<BFMetaNodeSDK.Basic.GetAccountLastTypeTransactionResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_GET_ACCOUNT_LAST_TYPE_TRANSACTION;

    async sendPostRequest(argv: BFMetaNodeSDK.Basic.GetAccountLastTypeTransactionParams) {
        return await super.sendPostRequest(argv);
    }
}
