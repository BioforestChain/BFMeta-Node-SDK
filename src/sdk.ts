import { Api } from "./api";
import { AsymmetricUtil } from "@bfchain/sign-util";
export class BFMetaSDK {
    private __api: Api;
    private __configOptions: BFMetaNodeSDK.ApiConfigOptions = {};
    private __bfchainSignUtil: AsymmetricUtil | undefined;
    constructor(public signUtilParam?: BFMetaNodeSDK.SignUtilParam, public configOptions?: BFMetaNodeSDK.ApiConfigOptions) {
        if (configOptions) {
            this.__configOptions = configOptions;
        }
        this.__api = new Api(this.__configOptions);
        if (this.signUtilParam) {
            const { netType, cryptoHelper } = this.signUtilParam;
            let bnid = "";
            if (netType === "mainnet") {
                bnid = "b";
            } else if (netType === "testnet") {
                bnid = "c";
            } else {
                throw new Error(`invaild netType: ${netType}`);
            }
            this.__bfchainSignUtil = new AsymmetricUtil(bnid, Buffer as any, cryptoHelper);
        }
    }

    get api() {
        return this.__api;
    }

    get bfchainSignUtil() {
        if (this.__bfchainSignUtil) {
            return this.__bfchainSignUtil;
        } else {
            throw new Error(`bfchainSignUtil is not init`);
        }
    }

    setApiConfig(configOptions: BFMetaNodeSDK.ApiConfigOptions) {
        this.api.setApiconfig(configOptions);
    }
}
