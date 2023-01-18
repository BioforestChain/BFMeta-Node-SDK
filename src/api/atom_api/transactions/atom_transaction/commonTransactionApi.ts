import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "../../../../constants";

export class CommonTransactionApi extends TransactionApi {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_COMMON;
    readonly CREATE_API_PATH = "";
    readonly PACKAGE_API_PATH = "";
    readonly BROADCAST_API_PATH = "";

    async broadcastCompleteTransaction<T>(argv: { [key: string]: any }) {
        const apiPath = this.getApiPath();
        try {
            const result = await this.networkHelper.sendPostRequest<BFMetaNodeSDK.Transaction.TransactionApiReturn<T>>(apiPath, argv);
            return result;
        } catch (e: any) {
            const errorInfo: BFMetaNodeSDK.ApiFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request api ${apiPath} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }
}
