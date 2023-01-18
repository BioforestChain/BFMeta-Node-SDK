import { BasicGetApi } from "./_basicGetApi";
import { BASIC_API_PATH } from "../../../../constants";

export class GetBlockChainStatusApi extends BasicGetApi<BFMetaNodeSDK.Basic.GetBlockChainStatusResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_GET_BLOCK_CHAIN_STATUS;

    async sendGetRequest() {
        return await super.sendGetRequest();
    }
}
