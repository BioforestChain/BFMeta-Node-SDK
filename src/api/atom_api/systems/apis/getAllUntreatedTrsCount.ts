import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class GetAllUntreatedTrsCountApi extends SystemPostApi<BFMetaNodeSDK.System.GetAllUntreatedTrsCountResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_All_UNTREATED_TRS_COUNT;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetAllUntreatedTrsCountParams) {
        return await super.sendPostRequest(argv);
    }
}
