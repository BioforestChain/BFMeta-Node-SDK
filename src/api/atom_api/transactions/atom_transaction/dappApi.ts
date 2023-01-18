import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class DAppApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_DAPP;
    readonly CREATE_API_PATH = "trDapp";
    readonly PACKAGE_API_PATH = "trDappWithSign";
    readonly BROADCAST_API_PATH = "send/dapp";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.DAppTransactionParams) {
        return await super.createTransaction(argv);
    }
}
