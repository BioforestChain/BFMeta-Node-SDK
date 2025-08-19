import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class GetSystemAdminApi extends SystemPostApi<BFMetaNodeSDK.System.GetSystemAdminResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_ADMIN;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetSystemAdminParams) {
        return await super.sendPostRequest(argv);
    }
}
