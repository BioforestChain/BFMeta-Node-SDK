import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class MultipleApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_MULTIPLE;
    readonly CREATE_API_PATH = "trMultiple";
    readonly PACKAGE_API_PATH = "trMultipleWithSign";
    readonly BROADCAST_API_PATH = "send/multiple";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.MultipleTransactionParams) {
        return await super.createTransaction(argv);
    }
}
