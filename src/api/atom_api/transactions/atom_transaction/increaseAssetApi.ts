import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class IncreaseAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_INCREASE_ASSET;
    readonly CREATE_API_PATH = "trIncreaseAsset";
    readonly PACKAGE_API_PATH = "trIncreaseAssetWithSign";
    readonly BROADCAST_API_PATH = "send/increaseAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.IncreaseAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
