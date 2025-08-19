import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class SafetyCloseApi extends SystemPostApi<BFMetaNodeSDK.System.SafetyCloseResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_SAFETY_CLOSE;

    async sendPostRequest(argv: BFMetaNodeSDK.System.SafetyCloseParams) {
        return await super.sendPostRequest(argv);
    }
}
