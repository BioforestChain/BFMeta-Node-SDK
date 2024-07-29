import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class MacroCallApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_MACRO_CALL;
    readonly CREATE_API_PATH = "trMacroCall";
    readonly PACKAGE_API_PATH = "trMacroCallWithSign";
    readonly BROADCAST_API_PATH = "send/macroCall";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.MacroCallTransactionParams) {
        return await super.createTransaction(argv);
    }
}
