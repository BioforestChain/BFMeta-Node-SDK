import { BasicPostApi } from "./_basicPostApi";
import { BASIC_API_PATH } from "../../../../constants";

export class GetBlockApi extends BasicPostApi<BFMetaNodeSDK.Basic.GetBlockResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_GET_BLOCK;

    async sendPostRequest(argv: BFMetaNodeSDK.Basic.GetBlockParams) {
        return await super.sendPostRequest(argv);
    }
}
