import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class ToExchangeAnyApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY;
    readonly CREATE_API_PATH = "trToExchangeAny";
    readonly PACKAGE_API_PATH = "trToExchangeAnyWithSign";
    readonly BROADCAST_API_PATH = "send/toExchangeAny";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.ToExchangeAnyTransactionParams) {
        return await super.createTransaction(argv);
    }
}
