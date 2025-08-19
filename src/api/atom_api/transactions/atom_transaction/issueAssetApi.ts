import { TransactionApi } from "./_transactionApi.js";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants/index.js";

export class IssueAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ASSET;
    readonly CREATE_API_PATH = "trIssueAsset";
    readonly PACKAGE_API_PATH = "trIssueAssetWithSign";
    readonly BROADCAST_API_PATH = "send/issueAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.IssueAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
