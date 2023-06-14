import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class DestroyEntityApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_DESTROY_ENTITY;
    readonly CREATE_API_PATH = "trDestroyEntity";
    readonly PACKAGE_API_PATH = "trDestroyEntityWithSign";
    readonly BROADCAST_API_PATH = "send/destroyEntity";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.DestroyEntityTransactionParams) {
        return await super.createTransaction(argv);
    }
}
