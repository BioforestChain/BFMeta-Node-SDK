import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class GetSystemConfigInfoDetailApi extends SystemPostApi<BFMetaNodeSDK.System.GetSystemConfigInfoDetailResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_CONFIG_INFO_DETAIL;

    async sendPostRequest(argv: BFMetaNodeSDK.System.GetSystemConfigInfoDetailParams) {
        return await super.sendPostRequest(argv);
    }
}
