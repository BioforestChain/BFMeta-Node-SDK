import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class GiftAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_GIFT_ASSET;
    readonly CREATE_API_PATH = "trGiftAsset";
    readonly PACKAGE_API_PATH = "trGiftAssetWithSign";
    readonly BROADCAST_API_PATH = "send/giftAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.GiftAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
