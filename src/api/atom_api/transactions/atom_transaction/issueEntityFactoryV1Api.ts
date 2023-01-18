import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class IssueEntityFactoryV1Api extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY_V1;
    readonly CREATE_API_PATH = "trIssueEntityFactoryV1";
    readonly PACKAGE_API_PATH = "trIssueEntityFactoryV1WithSign";
    readonly BROADCAST_API_PATH = "send/issueEntityFactoryV1";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.IssueEntityFactoryTransactionV1Params) {
        return await super.createTransaction(argv);
    }
}
