import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class DeleteSystemAdminApi extends SystemPostApi<BFMetaNodeSDK.System.DeleteSystemAdminResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_DELETE_SYSTEM_ADMIN;

    async sendPostRequest(argv: BFMetaNodeSDK.System.DeleteSystemAdminParams) {
        return await super.sendPostRequest(argv);
    }
}
