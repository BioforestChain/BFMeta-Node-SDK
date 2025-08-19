import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class ClearAllUntreatedTrsApi extends SystemPostApi<BFMetaNodeSDK.System.ClearAllUntreatedTrsResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_CLEAR_All_UNTREATED_TRS;

    async sendPostRequest(argv: BFMetaNodeSDK.System.ClearAllUntreatedTrsParams) {
        return await super.sendPostRequest(argv);
    }
}
