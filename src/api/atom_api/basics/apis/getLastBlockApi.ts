import { BasicGetApi } from "./_basicGetApi";
import { BASIC_API_PATH } from "../../../../constants";

export class GetLastBlockApi extends BasicGetApi<BFMetaNodeSDK.Basic.GetLastBlockResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_GET_LAST_BLOCK;

    async sendGetRequest() {
        return await super.sendGetRequest();
    }
}
