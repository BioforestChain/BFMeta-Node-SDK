import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class ToExchangeAnyMultiApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY_MULTI;
    readonly CREATE_API_PATH = "trToExchangeAnyMulti";
    readonly PACKAGE_API_PATH = "trToExchangeAnyMultiWithSign";
    readonly BROADCAST_API_PATH = "send/toExchangeAnyMulti";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.ToExchangeAnyMultiTransactionParams) {
        return await super.createTransaction(argv);
    }
}
