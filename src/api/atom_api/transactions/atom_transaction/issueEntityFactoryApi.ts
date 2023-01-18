import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class IssueEntityFactoryApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY;
    readonly CREATE_API_PATH = "trIssueEntityFactory";
    readonly PACKAGE_API_PATH = "trIssueEntityFactoryWithSign";
    readonly BROADCAST_API_PATH = "send/issueEntityFactory";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.IssueEntityFactoryTransactionParams) {
        return await super.createTransaction(argv);
    }
}
