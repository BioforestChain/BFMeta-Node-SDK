import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class BeExchangeAnyMultiApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY_MULTI;
    readonly CREATE_API_PATH = "trBeExchangeAnyMulti";
    readonly PACKAGE_API_PATH = "trBeExchangeAnyMultiWithSign";
    readonly BROADCAST_API_PATH = "send/beExchangeAnyMulti";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.BeExchangeAnyMultiTransactionParams) {
        return await super.createTransaction(argv);
    }
}
