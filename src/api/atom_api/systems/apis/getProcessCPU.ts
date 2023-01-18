import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class GetProcessCPUApi extends SystemPostApi<BFMetaNodeSDK.System.GetProcessCPUResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_PROCESS_CPU;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetProcessCPUParams) {
        return await super.sendPostRequest(argv);
    }
}
