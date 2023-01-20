import { Api } from "./api";
import { AsymmetricUtil } from "@bfchain/sign-util";
export class BFMetaSDK {
    private __api: Api;
    private __configOptions: BFMetaNodeSDK.ApiConfigOptions = {};
    private __bfchainSignUtil: AsymmetricUtil | undefined;
    constructor(netType: BFMetaNodeSDK.NetType, public cryptoHelper?: BFChainSignUtil.CryptoHelperInterface, configOptions?: BFMetaNodeSDK.ApiConfigOptions) {
        if (configOptions) {
            this.__configOptions = configOptions;
        }
        this.__api = new Api(this.__configOptions);
        let bnid = "";
        if (netType === "mainnet") {
            bnid = "b";
        } else if (netType === "testnet") {
            bnid = "c";
        } else {
            throw new Error(`invaild netType: ${netType}`);
        }
        if (this.cryptoHelper) {
            this.__bfchainSignUtil = new AsymmetricUtil(bnid, Buffer as any, this.cryptoHelper);
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
