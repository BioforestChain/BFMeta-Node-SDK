import { TransactionApi } from "./_transactionApi.js";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants/index.js";

export class TransferAssetApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ASSET;
    readonly CREATE_API_PATH = "trTransferAsset";
    readonly PACKAGE_API_PATH = "trTransferAssetWithSign";
    readonly BROADCAST_API_PATH = "send/transferAsset";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.TransferAssetTransactionParams) {
        return await super.createTransaction(argv);
    }
}
