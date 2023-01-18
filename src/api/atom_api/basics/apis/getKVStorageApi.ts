import { BasicPostApi } from "./_basicPostApi";
import { BASIC_API_PATH } from "../../../../constants";

export class GetKVStorageApi extends BasicPostApi<BFMetaNodeSDK.Basic.GetKVStorageResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.GET_KVSTORAGE;

    async sendPostRequest(argv: BFMetaNodeSDK.Basic.GetKVStorageParams) {
        return await super.sendPostRequest(argv);
    }
}
