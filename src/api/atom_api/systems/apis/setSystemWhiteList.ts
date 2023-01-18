import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class SetSystemWhiteListApi extends SystemPostApi<BFMetaNodeSDK.System.SetSystemWhiteListResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_SET_SYSTEM_WHITELIST;

    async sendPostRequest(argv: BFMetaNodeSDK.System.SetSystemWhiteListParams) {
        return await super.sendPostRequest(argv);
    }
}
