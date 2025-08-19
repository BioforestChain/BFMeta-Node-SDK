import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class GetSystemLoggerListApi extends SystemPostApi<BFMetaNodeSDK.System.GetSystemLoggerListResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_LOGGER_LIST;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetSystemLoggerListParams) {
        return await super.sendPostRequest(argv);
    }
}
