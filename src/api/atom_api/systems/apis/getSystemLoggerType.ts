import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class GetSystemLoggerTypeApi extends SystemPostApi<BFMetaNodeSDK.System.GetSystemLoggerTypeResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_LOGGER_TYPE;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetSystemLoggerTypeParams) {
        return await super.sendPostRequest(argv);
    }
}
