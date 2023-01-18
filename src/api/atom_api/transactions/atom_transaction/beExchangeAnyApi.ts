import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class BeExchangeAnyApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY;
    readonly CREATE_API_PATH = "trBeExchangeAny";
    readonly PACKAGE_API_PATH = "trBeExchangeAnyWithSign";
    readonly BROADCAST_API_PATH = "send/beExchangeAny";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.BeExchangeAnyTransactionParams) {
        return await super.createTransaction(argv);
    }
}
