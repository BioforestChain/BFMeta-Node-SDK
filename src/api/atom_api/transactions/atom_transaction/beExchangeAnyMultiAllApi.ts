import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class BeExchangeAnyMultiAllApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY_MULTI_ALL;
    readonly CREATE_API_PATH = "trBeExchangeAnyMultiAll";
    readonly PACKAGE_API_PATH = "trBeExchangeAnyMultiAllWithSign";
    readonly BROADCAST_API_PATH = "send/beExchangeAnyMultiAll";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.BeExchangeAnyMultiAllTransactionParams) {
        return await super.createTransaction(argv);
    }
}
