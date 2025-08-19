import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class DeleteSystemWhiteListApi extends SystemPostApi<BFMetaNodeSDK.System.DeleteSystemWhiteListResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_DELETE_SYSTEM_WHITELIST;

    async sendPostRequest(argv: BFMetaNodeSDK.System.DeleteSystemWhiteListParams) {
        return await super.sendPostRequest(argv);
    }
}
