import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class GrabAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_GRAB_ASSET;
    readonly CREATE_API_PATH = "trGrabAsset";
    readonly PACKAGE_API_PATH = "trGrabAssetWithSign";
    readonly BROADCAST_API_PATH = "send/grabAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.GrabAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
