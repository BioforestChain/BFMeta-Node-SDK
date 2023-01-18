import { BasicPostApi } from "./_basicPostApi";
import { BASIC_API_PATH } from "../../../../constants";

export class GetTransactionsApi extends BasicPostApi<BFMetaNodeSDK.Basic.GetTransactionsResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_GET_TRANSACTIONS;

    async sendPostRequest(argv: BFMetaNodeSDK.Basic.GetTransactionsParams) {
        return await super.sendPostRequest(argv);
    }
}
