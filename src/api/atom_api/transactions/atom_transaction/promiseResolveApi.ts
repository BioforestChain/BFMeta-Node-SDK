import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class PromiseResolveApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_PROMISE_RESOLVE;
    readonly CREATE_API_PATH = "trPromiseResolve";
    readonly PACKAGE_API_PATH = "trPromiseResolveWithSign";
    readonly BROADCAST_API_PATH = "send/promiseResolve";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.PromiseResolveTransactionParams) {
        return await super.createTransaction(argv);
    }
}
