import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class DestroyAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_DESTROY_ASSET;
    readonly CREATE_API_PATH = "trDestroyAsset";
    readonly PACKAGE_API_PATH = "trDestroyAssetWithSign";
    readonly BROADCAST_API_PATH = "send/destroyAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.DestroyAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
