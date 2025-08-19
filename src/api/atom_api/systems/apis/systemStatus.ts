import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class SystemStatusApi extends SystemPostApi<BFMetaNodeSDK.System.SystemStatusResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_STATUS;

    async sendPostRequest(argv: BFMetaNodeSDK.System.SystemStatusParams) {
        return await super.sendPostRequest(argv);
    }
}
