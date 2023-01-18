import { HttpHelper, WebsocketHelper } from "./network";
import { REQUEST_PROTOCOL } from "../constants";
import { BasicApi, SystemApi, TransactionApi } from "./atom_api";
import { ApiConfigHelper } from "../helpers";

export class Api {
    private __configHelper: ApiConfigHelper;
    private __basicApi!: BasicApi;
    private __systemApi!: SystemApi;
    private __transactionApi!: TransactionApi;

    constructor(configOptions?: BFMetaNodeSDK.ApiConfigOptions) {
        this.__configHelper = new ApiConfigHelper(configOptions);
        const apiConfig = this.__configHelper.apiConfig;
        let networkHelper: BFMetaNodeSDK.NetworkHelper;
        if (apiConfig.requestProtocol == REQUEST_PROTOCOL.HTTP) {
            networkHelper = new HttpHelper(apiConfig.port, this.__configHelper);
        } else {
            networkHelper = new WebsocketHelper(apiConfig.port, this.__configHelper);
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
