import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class TrustAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_TRUST_ASSET;
    readonly CREATE_API_PATH = "trTrustAsset";
    readonly PACKAGE_API_PATH = "trTrustAssetWithSign";
    readonly BROADCAST_API_PATH = "send/trustAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.TrustAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
