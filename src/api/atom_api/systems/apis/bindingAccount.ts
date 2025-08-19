import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class BindingAccountApi extends SystemPostApi<BFMetaNodeSDK.System.BindingAccountResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_BINDING_ACCOUNT;

    async sendPostRequest(argv: BFMetaNodeSDK.System.BindingAccountParams) {
        return await super.sendPostRequest(argv);
    }
}
