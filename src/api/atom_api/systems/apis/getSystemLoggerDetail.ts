import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class GetSystemLoggerDetailApi extends SystemPostApi<BFMetaNodeSDK.System.GetSystemLoggerDetailResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_LOGGER_DETAIL;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetSystemLoggerDetailParams) {
        return await super.sendPostRequest(argv);
    }
}
