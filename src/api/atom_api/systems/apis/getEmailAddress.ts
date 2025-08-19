import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class GetEmailAddressApi extends SystemPostApi<BFMetaNodeSDK.System.GetEmailAddressResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_EMAIL_ADDRESS;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetEmailAddressParams) {
        return await super.sendPostRequest(argv);
    }
}
