import { BasicGetApi } from "./_basicGetApi";
import { BASIC_API_PATH } from "../../../../constants";

export class GetNodeVersionApi extends BasicGetApi<BFMetaNodeSDK.Basic.GetNodeVersionResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_GET_NODE_VERSION;

    async sendGetRequest() {
        return await super.sendGetRequest();
    }
}
