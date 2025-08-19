import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class GetProcessNetworkApi extends SystemPostApi<BFMetaNodeSDK.System.GetProcessNetworkResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_PROCESS_NETWORK;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetProcessNetworkParams) {
        return await super.sendPostRequest(argv);
    }
}
