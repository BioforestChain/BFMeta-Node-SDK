import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class SetLnsRecordValueApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_RECORD_VALUE;
    readonly CREATE_API_PATH = "trSetLnsRecordValue";
    readonly PACKAGE_API_PATH = "trSetLnsRecordValueWithSign";
    readonly BROADCAST_API_PATH = "send/setLnsRecordValue";

    async createTransaction(argv: BFMetaNodeSDK.Transaction.SetLnsRecordValueTransactionParams) {
        return await super.createTransaction(argv);
    }
}
