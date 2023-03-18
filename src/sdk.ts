import { Api } from "./api";
import { BFMetaSignUtil } from "@bfmeta/sign-util";
export class BFMetaSDK {
    private __api: Api;
    private __configOptions: BFMetaNodeSDK.ApiConfigOptions = {};
    private __bfchainSignUtil: BFMetaSignUtil | undefined;
    constructor(
        public configOptions?: BFMetaNodeSDK.ApiConfigOptions,
        public signUtilParam?: BFMetaNodeSDK.SignUtilParam,
        public fetch?: BFMetaNodeSDK.FetchInterface
    ) {
        if (configOptions) {
            this.__configOptions = configOptions;
        }
        this.__api = new Api(this.__configOptions, fetch);
        if (this.signUtilParam) {
            this.setSignUtil(this.signUtilParam);
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

    setSignUtil(signUtilParam: BFMetaNodeSDK.SignUtilParam) {
        const { netType, cryptoHelper } = signUtilParam;
        let bnid = "";
        if (netType === "mainnet") {
            bnid = "b";
        } else if (netType === "testnet") {
            bnid = "c";
        } else {
            throw new Error(`invaild netType: ${netType}`);
        }
        this.__bfchainSignUtil = new BFMetaSignUtil(bnid, Buffer as any, cryptoHelper);
    }

    setApiConfig(configOptions: BFMetaNodeSDK.ApiConfigOptions) {
        this.api.setApiconfig(configOptions);
    }

    getSocketByIp(host: string) {
        this.api.websocketHelper.getSocketByIp(host);
    }

    getUpgradeSocket() {
        return this.api.websocketHelper.upgradeSocket;
    }
}
