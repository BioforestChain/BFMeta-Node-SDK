import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class LocationNameApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_LOCATION_NAME;
    readonly CREATE_API_PATH = "trLocationName";
    readonly PACKAGE_API_PATH = "trLocationNameWithSign";
    readonly BROADCAST_API_PATH = "send/locationName";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.LocationNameTransactionParams) {
        return await super.createTransaction(argv);
    }
}
