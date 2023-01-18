import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class ToExchangeSpecialAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_SPECIAL_ASSET;
    readonly CREATE_API_PATH = "trToExchangeSpecAsset";
    readonly PACKAGE_API_PATH = "trToExchangeSpecAssetWithSign";
    readonly BROADCAST_API_PATH = "send/toExchangeSpecAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.ToExchangeSpecialAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
