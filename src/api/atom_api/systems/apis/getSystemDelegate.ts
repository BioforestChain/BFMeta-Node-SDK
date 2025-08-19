import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class GetSystemDelegateApi extends SystemPostApi<BFMetaNodeSDK.System.GetSystemDelegateResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_DELEGATE;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetSystemDelegateParams) {
        return await super.sendPostRequest(argv);
    }
}
