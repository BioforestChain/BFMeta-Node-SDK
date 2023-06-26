import { BasicPostApi } from "./_basicPostApi";
import { BASIC_API_PATH } from "../../../../constants";

export class GetTransactionMinFeePerByteApi extends BasicPostApi<BFMetaNodeSDK.Basic.GetTransactionMinFeePerByteResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_GET_TRANSACTION_MIN_FEE_PER_BYTE;

    async sendPostRequest(argv: BFMetaNodeSDK.Basic.GetTransactionMinFeePerByteParams) {
        return await super.sendPostRequest(argv);
    }
}
