import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class GetProcessMemoryApi extends SystemPostApi<BFMetaNodeSDK.System.GetProcessMemoryResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_PROCESS_MEMORY;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetProcessMemoryParams) {
        return await super.sendPostRequest(argv);
    }
}
