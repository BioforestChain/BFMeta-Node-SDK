import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class SetSystemKeyApi extends SystemPostApi<BFMetaNodeSDK.System.SetSystemKeyResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_SET_SYSTEM_KEY;

    async sendPostRequest(argv: BFMetaNodeSDK.System.SetSystemKeyParams) {
        return await super.sendPostRequest(argv);
    }
}
