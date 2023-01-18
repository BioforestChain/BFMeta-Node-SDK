import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class SetLnsManagerApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_MANAGER;
    readonly CREATE_API_PATH = "trSetLnsManager";
    readonly PACKAGE_API_PATH = "trSetLnsManagerWithSign";
    readonly BROADCAST_API_PATH = "send/setLnsManager";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.SetLnsManagerTransactionParams) {
        return await super.createTransaction(argv);
    }
}
