import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class UsernameApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_USERNAME;
    readonly CREATE_API_PATH = "trUsername";
    readonly PACKAGE_API_PATH = "trUsernameWithSign";
    readonly BROADCAST_API_PATH = "send/username";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.UsernameTransactionParams) {
        return await super.createTransaction(argv);
    }
}
