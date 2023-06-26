import { BasicGetApi } from "./_basicGetApi";
import { BASIC_API_PATH } from "../../../../constants";

export class GetTransactionMinFeePerByteApi extends BasicGetApi<BFMetaNodeSDK.Basic.GetTransactionMinFeePerByteResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_GET_TRANSACTION_MIN_FEE_PER_BYTE;

    async sendGetRequest() {
        return await super.sendGetRequest();
    }
}
