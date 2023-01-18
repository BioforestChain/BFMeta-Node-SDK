import { MigrateCertificateApi } from "./_migrateCertificateApi";
import { MIGRATE_CERTIFICATE_API_PATH } from "../../../../constants";

export class GenerateMigrateCertificateApi extends MigrateCertificateApi {
    readonly GENERATE_API_PATH = MIGRATE_CERTIFICATE_API_PATH.MIGRATE_CERTIFICATE_GENERATE;

    async sendPostRequest<T>(argv: BFMetaNodeSDK.CrossChain.GenerateMigrateCertificateParams) {
        const apiPath = `${this.networkHelper.TRANSACTION_SERVER_URL_PREFIX}${this.GENERATE_API_PATH}`;
        try {
            const result = await this.networkHelper.sendPostRequest<BFMetaNodeSDK.ApiReturn<T>>(apiPath, argv);
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
