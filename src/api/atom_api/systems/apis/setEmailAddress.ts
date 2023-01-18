import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class SetEmailAddressApi extends SystemPostApi<BFMetaNodeSDK.System.SetEmailAddressResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_SET_EMAIL_ADDRESS;

    async sendPostRequest(argv: BFMetaNodeSDK.System.SetEmailAddressParams) {
        return await super.sendPostRequest(argv);
    }
}
