import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class AcceptVoteApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_ACCEPT_VOTE;
    readonly CREATE_API_PATH = "trAcceptVote";
    readonly PACKAGE_API_PATH = "trAcceptVoteWithSign";
    readonly BROADCAST_API_PATH = "send/acceptVote";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.AcceptVoteTransactionParams) {
        return await super.createTransaction(argv);
    }
}
