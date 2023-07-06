import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class ToExchangeAnyMultiAllApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY_MULTI_ALL;
    readonly CREATE_API_PATH = "trToExchangeAnyMultiAll";
    readonly PACKAGE_API_PATH = "trToExchangeAnyMultiAllWithSign";
    readonly BROADCAST_API_PATH = "send/toExchangeAnyMultiAll";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.ToExchangeAnyMultiAllTransactionParams) {
        return await super.createTransaction(argv);
    }
}
