import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "../../../../constants";

export class CalcTransactionMinFeeApi extends CommonApi<BFMetaNodeSDK.Common.TransactionMinFee> {
    readonly EXEC_API_PATH = COMMON_API_PATH.CALC_TRANSACTION_MIN_FEE;

    async sendPostRequest(argv: BFMetaNodeSDK.Common.CalcTransactionMinFeeParams) {
        return super.sendPostRequest(argv);
    }
}
