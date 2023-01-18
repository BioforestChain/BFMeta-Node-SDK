import { BasicPostApi } from "./_basicPostApi";
import { BASIC_API_PATH } from "../../../../constants";

export class GetTransactionTypeApi extends BasicPostApi<BFMetaNodeSDK.Basic.GetTransactionTypeResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_GET_TRANSACTION_TYPE;

    async sendPostRequest(argv: BFMetaNodeSDK.Basic.GetTransactionTypeParams) {
        return await super.sendPostRequest(argv);
    }
}
