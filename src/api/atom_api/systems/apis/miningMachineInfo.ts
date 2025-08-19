import { SystemPostApi } from "./_systemPostApi.js";
import { SYSTEM_API_PATH } from "../../../../constants/index.js";

export class MiningMachineInfoApi extends SystemPostApi<BFMetaNodeSDK.System.MiningMachineInfoResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_MINING_MACHINE_INFO;

    async sendPostRequest(argv: BFMetaNodeSDK.System.MiningMachineInfoParams) {
        return await super.sendPostRequest(argv);
    }
}
