import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class SafetyCloseApi extends SystemPostApi<BFMetaNodeSDK.System.SafetyCloseResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_SAFETY_CLOSE;

    async sendPostRequest(argv: BFMetaNodeSDK.System.SafetyCloseParams) {
        return await super.sendPostRequest(argv);
    }
}
