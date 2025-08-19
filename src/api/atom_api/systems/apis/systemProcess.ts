import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class SystemProcessApi extends SystemPostApi<BFMetaNodeSDK.System.SystemProcessResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_PROCESS;

    async sendPostRequest(argv: BFMetaNodeSDK.System.SystemProcessParams) {
        return await super.sendPostRequest(argv);
    }
}
