export abstract class CommonApi<T> {
    abstract readonly EXEC_API_PATH: BFMetaNodeSDK.Common.COMMON_API_PATH;

    constructor(protected networkHelper: BFMetaNodeSDK.NetworkHelper) {}

    async sendPostRequest(argv: BFMetaNodeSDK.Common.CommonParams) {
        const apiPath = `${this.networkHelper.TRANSACTION_SERVER_URL_PREFIX}${this.EXEC_API_PATH}`;
        try {
            const result = await this.networkHelper.createTransaction<BFMetaNodeSDK.ApiReturn<T>>(apiPath, argv);
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
