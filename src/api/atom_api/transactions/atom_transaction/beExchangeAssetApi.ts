import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class BeExchangeAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ASSET;
    readonly CREATE_API_PATH = "trBeExchangeAsset";
    readonly PACKAGE_API_PATH = "trBeExchangeAssetWithSign";
    readonly BROADCAST_API_PATH = "send/beExchangeAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.BeExchangeAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
