import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class ClearAllUntreatedTrsApi extends SystemPostApi<BFMetaNodeSDK.System.ClearAllUntreatedTrsResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_CLEAR_All_UNTREATED_TRS;

    async sendPostRequest(argv: BFMetaNodeSDK.System.ClearAllUntreatedTrsParams) {
        return await super.sendPostRequest(argv);
    }
}
