import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class DeleteSystemLoggerApi extends SystemPostApi<BFMetaNodeSDK.System.DeleteSystemLoggerResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_DELETE_SYSTEM_LOGGER;

    async sendPostRequest(argv: BFMetaNodeSDK.System.DeleteSystemLoggerParams) {
        return await super.sendPostRequest(argv);
    }
}
