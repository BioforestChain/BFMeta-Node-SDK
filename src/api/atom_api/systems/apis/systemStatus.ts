import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class SystemStatusApi extends SystemPostApi<BFMetaNodeSDK.System.SystemStatusResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_STATUS;

    async sendPostRequest(argv: BFMetaNodeSDK.System.SystemStatusParams) {
        return await super.sendPostRequest(argv);
    }
}
