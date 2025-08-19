import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class AddSystemAdminApi extends SystemPostApi<BFMetaNodeSDK.System.AddSystemAdminResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_ADD_SYSTEM_ADMIN;

    async sendPostRequest(argv: BFMetaNodeSDK.System.AddSystemAdminParams) {
        return await super.sendPostRequest(argv);
    }
}
