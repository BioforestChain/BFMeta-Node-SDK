import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class SignatureApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_SIGNATURE;
    readonly CREATE_API_PATH = "trSignature";
    readonly PACKAGE_API_PATH = "trSignatureWithSign";
    readonly BROADCAST_API_PATH = "send/signature";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.SignatureTransactionParams) {
        return await super.createTransaction(argv);
    }
}
