import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class RestoreAllUntreatedTrsApi extends SystemPostApi<BFMetaNodeSDK.System.RestoreAllUntreatedTrsResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_RESTORE_All_UNTREATED_TRS;

    async sendPostRequest(argv: BFMetaNodeSDK.System.RestoreAllUntreatedTrsParams) {
        return await super.sendPostRequest(argv);
    }
}
