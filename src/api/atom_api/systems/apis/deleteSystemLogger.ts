import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class DeleteSystemLoggerApi extends SystemPostApi<BFMetaNodeSDK.System.DeleteSystemLoggerResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_DELETE_SYSTEM_LOGGER;

    async sendPostRequest(argv: BFMetaNodeSDK.System.DeleteSystemLoggerParams) {
        return await super.sendPostRequest(argv);
    }
}
