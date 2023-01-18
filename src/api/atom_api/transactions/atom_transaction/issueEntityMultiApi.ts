import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class IssueEntityMultiApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_MULTI;
    readonly CREATE_API_PATH = "trIssueEntityMultiV1";
    readonly PACKAGE_API_PATH = "trIssueEntityMultiWithSignV1";
    readonly BROADCAST_API_PATH = "send/issueEntityMultiV1";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.IssueEntityMultiTransactionParams) {
        return await super.createTransaction(argv);
    }
}
