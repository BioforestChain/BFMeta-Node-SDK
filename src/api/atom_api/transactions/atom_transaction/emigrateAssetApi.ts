import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class EmigrateAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_EMIGRATE_ASSET;
    readonly CREATE_API_PATH = "trEmigrateAsset";
    readonly PACKAGE_API_PATH = "trEmigrateAssetWithSign";
    readonly BROADCAST_API_PATH = "send/emigrateAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.EmigrateAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
