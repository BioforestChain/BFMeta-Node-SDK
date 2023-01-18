import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class SetSystemConfigApi extends SystemPostApi<BFMetaNodeSDK.System.SetSystemConfigResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_SET_SYSTEM_CONFIG;

    async sendPostRequest(argv: BFMetaNodeSDK.System.SetSystemConfigParams) {
        return await super.sendPostRequest(argv);
    }
}
