import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class IssueEntityApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY;
    readonly CREATE_API_PATH = "trIssueEntity";
    readonly PACKAGE_API_PATH = "trIssueEntityWithSign";
    readonly BROADCAST_API_PATH = "send/issueEntity";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.IssueEntityTransactionParams) {
        return await super.createTransaction(argv);
    }
}
