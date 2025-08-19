import { BasicPostApi } from "./_basicPostApi.js";
import { BASIC_API_PATH } from "../../../../constants/index.js";

export class GetKVStorageApi extends BasicPostApi<BFMetaNodeSDK.Basic.GetKVStorageResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.GET_KVSTORAGE;

    async sendPostRequest(argv: BFMetaNodeSDK.Basic.GetKVStorageParams) {
        return await super.sendPostRequest(argv);
    }
}
