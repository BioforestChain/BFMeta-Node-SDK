import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class SignForAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_SIGN_FOR_ASSET;
    readonly CREATE_API_PATH = "trSignForAsset";
    readonly PACKAGE_API_PATH = "trSignForAssetWithSign";
    readonly BROADCAST_API_PATH = "send/signForAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.SignForAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
