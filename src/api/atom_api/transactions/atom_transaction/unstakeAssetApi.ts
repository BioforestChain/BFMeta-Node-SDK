import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class UnstakeAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_TRUST_ASSET;
    readonly CREATE_API_PATH = "trUnstakeAsset";
    readonly PACKAGE_API_PATH = "trUnstakeAssetWithSign";
    readonly BROADCAST_API_PATH = "send/unstakeAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.UnstakeAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
