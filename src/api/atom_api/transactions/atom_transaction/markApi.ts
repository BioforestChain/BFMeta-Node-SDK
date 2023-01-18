import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class MarkApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_MARK;
    readonly CREATE_API_PATH = "trMark";
    readonly PACKAGE_API_PATH = "trMarkWithSign";
    readonly BROADCAST_API_PATH = "send/mark";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.MarkTransactionParams) {
        return await super.createTransaction(argv);
    }
}
