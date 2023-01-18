import { BasicPostApi } from "./_basicPostApi";
import { BASIC_API_PATH } from "../../../../constants";

export class CreateAccountApi extends BasicPostApi<BFMetaNodeSDK.Basic.CreateAccountResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_CREATE_ACCOUNT;

    async sendPostRequest(argv: BFMetaNodeSDK.Basic.CreateAccountParams) {
        return await super.sendPostRequest(argv);
    }
}
