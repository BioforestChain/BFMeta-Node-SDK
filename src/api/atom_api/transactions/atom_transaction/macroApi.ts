import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class MacroApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_MACRO;
    readonly CREATE_API_PATH = "trMacro";
    readonly PACKAGE_API_PATH = "trMacroWithSign";
    readonly BROADCAST_API_PATH = "send/macro";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.MacroTransactionParams) {
        return await super.createTransaction(argv);
    }
}
