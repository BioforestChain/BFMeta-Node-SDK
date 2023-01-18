import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class BeExchangeSpecialAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_SPECIAL_ASSET;
    readonly CREATE_API_PATH = "trBeExchangeSpecAsset";
    readonly PACKAGE_API_PATH = "trBeExchangeSpecAssetWithSign";
    readonly BROADCAST_API_PATH = "send/beExchangeSpecAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.BeExchangeSpecialAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
