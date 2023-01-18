import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class VoteApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_VOTE;
    readonly CREATE_API_PATH = "trVote";
    readonly PACKAGE_API_PATH = "trVoteWithSign";
    readonly BROADCAST_API_PATH = "send/vote";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.VoteTransactionParams) {
        return await super.createTransaction(argv);
    }
}
