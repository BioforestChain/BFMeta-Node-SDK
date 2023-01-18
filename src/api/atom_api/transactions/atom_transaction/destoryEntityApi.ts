import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class DestoryEntityApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_DESTORY_ENTITY;
    readonly CREATE_API_PATH = "trDestoryEntity";
    readonly PACKAGE_API_PATH = "trDestoryEntityWithSign";
    readonly BROADCAST_API_PATH = "send/destoryEntity";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.DestoryEntityTransactionParams) {
        return await super.createTransaction(argv);
    }
}
