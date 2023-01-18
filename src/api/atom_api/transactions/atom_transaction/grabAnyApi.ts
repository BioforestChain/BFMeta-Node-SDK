import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class GrabAnyApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_GRAB_ANY;
    readonly CREATE_API_PATH = "trGrabAny";
    readonly PACKAGE_API_PATH = "trGrabAnyWithSign";
    readonly BROADCAST_API_PATH = "send/grabAny";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.GrabAnyTransactionParams) {
        return await super.createTransaction(argv);
    }
}
