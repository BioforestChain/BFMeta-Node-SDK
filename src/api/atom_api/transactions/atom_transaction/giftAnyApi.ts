import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class GiftAnyApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_GIFT_ANY;
    readonly CREATE_API_PATH = "trGiftAny";
    readonly PACKAGE_API_PATH = "trGiftAnyWithSign";
    readonly BROADCAST_API_PATH = "send/giftAny";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.GiftAnyTransactionParams) {
        return await super.createTransaction(argv);
    }
}
