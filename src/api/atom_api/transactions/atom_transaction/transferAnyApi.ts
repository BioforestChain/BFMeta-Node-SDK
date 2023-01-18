import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class TransferAnyApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ANY;
    readonly CREATE_API_PATH = "trTransferAny";
    readonly PACKAGE_API_PATH = "trTransferAnyWithSign";
    readonly BROADCAST_API_PATH = "send/transferAny";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.TransferAnyTransactionParams) {
        return await super.createTransaction(argv);
    }
}
