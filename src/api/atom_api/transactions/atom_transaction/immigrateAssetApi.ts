import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class ImmigrateAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_IMMIGRATE_ASSET;
    readonly CREATE_API_PATH = "trImmigrateAsset";
    readonly PACKAGE_API_PATH = "trImmigrateAssetWithSign";
    readonly BROADCAST_API_PATH = "send/immigrateAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.ImmigrateAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
