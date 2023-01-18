import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class RejectVoteApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_REJECT_VOTE;
    readonly CREATE_API_PATH = "trRejectVote";
    readonly PACKAGE_API_PATH = "trRejectVoteWithSign";
    readonly BROADCAST_API_PATH = "send/rejectVote";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.RejectVoteTransactionParams) {
        return await super.createTransaction(argv);
    }
}
