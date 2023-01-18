import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class ToExchangeAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ASSET;
    readonly CREATE_API_PATH = "trToExchangeAsset";
    readonly PACKAGE_API_PATH = "trToExchangeAssetWithSign";
    readonly BROADCAST_API_PATH = "send/toExchangeAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.ToExchangeAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
