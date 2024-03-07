import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class StakeAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_STAKE_ASSET;
    readonly CREATE_API_PATH = "trStakeAsset";
    readonly PACKAGE_API_PATH = "trStakeAssetWithSign";
    readonly BROADCAST_API_PATH = "send/stakeAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.StakeAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
