import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class PromiseApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_PROMISE;
    readonly CREATE_API_PATH = "trPromise";
    readonly PACKAGE_API_PATH = "trPromiseWithSign";
    readonly BROADCAST_API_PATH = "send/promise";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.PromiseTransactionParams) {
        return await super.createTransaction(argv);
    }
}
