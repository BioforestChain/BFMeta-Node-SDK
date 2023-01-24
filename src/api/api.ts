import { HttpHelper, WebsocketHelper } from "./network";
import { REQUEST_PROTOCOL } from "../constants";
import { BasicApi, SystemApi, TransactionApi } from "./atom_api";
import { ApiConfigHelper } from "../helpers";

export class Api {
    private __configHelper: ApiConfigHelper;
    private __basicApi!: BasicApi;
    private __systemApi!: SystemApi;
    private __transactionApi!: TransactionApi;

    private __httpHelper: HttpHelper | undefined;
    get httpHelper() {
        if (this.__httpHelper) {
            return this.__httpHelper;
        } else {
            throw new Error(`httphelper is not init`);
        }
    }

    private __websocketHelper: WebsocketHelper | undefined;
    get websocketHelper() {
        if (this.__websocketHelper) {
            return this.__websocketHelper;
        } else {
            throw new Error(`websocketHelper is not init`);
        }
    }

    constructor(configOptions?: BFMetaNodeSDK.ApiConfigOptions) {
        this.__configHelper = new ApiConfigHelper(configOptions);
        const apiConfig = this.__configHelper.apiConfig;
        let networkHelper: BFMetaNodeSDK.NetworkHelper;
        if (apiConfig.requestProtocol == REQUEST_PROTOCOL.HTTP) {
            this.__httpHelper = new HttpHelper(this.__configHelper);
            networkHelper = this.__httpHelper;
        } else {
            this.__websocketHelper = new WebsocketHelper(this.__configHelper);
            networkHelper = this.websocketHelper;
        }

        this.__basicApi = new BasicApi(networkHelper);
        this.__systemApi = new SystemApi(networkHelper);
        this.__transactionApi = new TransactionApi(networkHelper);
    }

    get config() {
        return this.__configHelper.apiConfig;
    }

    get basic() {
        return this.__basicApi;
    }

    get system() {
        return this.__systemApi;
    }

    get transaction() {
        return this.__transactionApi;
    }

    setApiconfig(configOptions: BFMetaNodeSDK.ApiConfigOptions) {
        return this.__configHelper.setApiConfig(configOptions);
    }
}
