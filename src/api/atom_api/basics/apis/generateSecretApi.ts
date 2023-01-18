import { BasicPostApi } from "./_basicPostApi";
import { BASIC_API_PATH } from "../../../../constants";

export class GenerateSecretApi extends BasicPostApi<BFMetaNodeSDK.Basic.GenerateSecretResult> {
    readonly REQUEST_API_PATH = BASIC_API_PATH.BASIC_GENERATE_SECRET;

    async sendPostRequest(argv: BFMetaNodeSDK.Basic.GenerateSecretParams) {
        return await super.sendPostRequest(argv);
    }
}
