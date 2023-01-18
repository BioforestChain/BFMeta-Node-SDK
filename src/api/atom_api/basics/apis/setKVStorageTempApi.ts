import { BasicPostApi } from "./_basicPostApi";
import { BASIC_API_PATH } from "../../../../constants";

export class SetKVStorageTempApi extends BasicPostApi<BFMetaNodeSDK.Basic.SetKVStorageTempResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.SET_KVSTORAGE_TEMP;

    async sendPostRequest(argv: BFMetaNodeSDK.Basic.SetKVStorageTempParams) {
        return await super.sendPostRequest(argv);
    }
}
