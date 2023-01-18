import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class DelegateApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_DELEGATE;
    readonly CREATE_API_PATH = "trDelegate";
    readonly PACKAGE_API_PATH = "trDelegateWithSign";
    readonly BROADCAST_API_PATH = "send/delegate";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.DelegateTransactionParams) {
        return await super.createTransaction(argv);
    }
}
