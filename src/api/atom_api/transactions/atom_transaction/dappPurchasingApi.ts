import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class DAppPurchasingApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_DAPP_PURCHASING;
    readonly CREATE_API_PATH = "trDappPurchasing";
    readonly PACKAGE_API_PATH = "trDappPurchasingWithSign";
    readonly BROADCAST_API_PATH = "send/dappPurchasing";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.DAppPurchasingTransactionParams) {
        return await super.createTransaction(argv);
    }
}
