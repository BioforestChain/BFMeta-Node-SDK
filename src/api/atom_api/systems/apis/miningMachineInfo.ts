import { SystemPostApi } from "./_systemPostApi";
import { SYSTEM_API_PATH } from "../../../../constants";

export class MiningMachineInfoApi extends SystemPostApi<BFMetaNodeSDK.System.MiningMachineInfoResult> {
    readonly REQUEST_API_PATH = SYSTEM_API_PATH.SYSTEM_MINING_MACHINE_INFO;

    async sendPostRequest(argv: BFMetaNodeSDK.System.MiningMachineInfoParams) {
        return await super.sendPostRequest(argv);
    }
}
