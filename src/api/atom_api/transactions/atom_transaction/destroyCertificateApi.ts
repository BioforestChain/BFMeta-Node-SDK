import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class DestroyCertificateApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_DESTROY_CERTIFICATE;
    readonly CREATE_API_PATH = "trDestroyCertificate";
    readonly PACKAGE_API_PATH = "trDestroyCertificateWithSign";
    readonly BROADCAST_API_PATH = "send/destroyCertificate";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.DestroyCertificateTransactionParams) {
        return await super.createTransaction(argv);
    }
}
