import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class SetSystemWhiteListApi extends SystemPostApi<BFMetaNodeSDK.System.SetSystemWhiteListResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_SET_SYSTEM_WHITELIST;

    async sendPostRequest(argv: BFMetaNodeSDK.System.SetSystemWhiteListParams) {
        return await super.sendPostRequest(argv);
    }
}
