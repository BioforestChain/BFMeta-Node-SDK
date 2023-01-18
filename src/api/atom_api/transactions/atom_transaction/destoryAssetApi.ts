import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class DestoryAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_DESTORY_ASSET;
    readonly CREATE_API_PATH = "trDestroyAsset";
    readonly PACKAGE_API_PATH = "TrDestroyAssetWithSign";
    readonly BROADCAST_API_PATH = "send/destoryAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.DestoryAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
