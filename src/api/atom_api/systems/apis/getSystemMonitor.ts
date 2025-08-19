import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class GetSystemMonitorApi extends SystemPostApi<BFMetaNodeSDK.System.GetSystemMonitorResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_MONITOR;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetSystemMonitorParams) {
        return await super.sendPostRequest(argv);
    }
}
