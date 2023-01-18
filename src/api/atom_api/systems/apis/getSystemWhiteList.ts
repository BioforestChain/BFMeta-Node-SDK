import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class GetSystemWhiteListApi extends SystemPostApi<BFMetaNodeSDK.System.GetSystemWhiteListResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_WHITELIST;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetSystemWhiteListParams) {
        return await super.sendPostRequest(argv);
    }
}
