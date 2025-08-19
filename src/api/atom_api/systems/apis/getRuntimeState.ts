import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class GetRuntimeStateApi extends SystemPostApi<BFMetaNodeSDK.System.GetRuntimeStateResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_RUNTIME_STATE;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetRuntimeStateParams) {
        return await super.sendPostRequest(argv);
    }
}
