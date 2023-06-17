import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class IssueCertificateApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_ISSUE_CERTIFICATE;
    readonly CREATE_API_PATH = "trIssueCertificate";
    readonly PACKAGE_API_PATH = "trIssueCertificateWithSign";
    readonly BROADCAST_API_PATH = "send/issueCertificate";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.IssueCertificateTransactionParams) {
        return await super.createTransaction(argv);
    }
}
