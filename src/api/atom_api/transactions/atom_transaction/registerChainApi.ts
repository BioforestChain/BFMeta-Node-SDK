import { TransactionApi } from "./_transactionApi.js";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants/index.js";

export class RegisterChainApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_REGISTER_CHAIN;
    readonly CREATE_API_PATH = "trRegisterChain";
    readonly PACKAGE_API_PATH = "trRegisterChainWithSign";
    readonly BROADCAST_API_PATH = "send/registerChain";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.RegisterChainTransactionParams) {
        return await super.createTransaction(argv);
    }
}
