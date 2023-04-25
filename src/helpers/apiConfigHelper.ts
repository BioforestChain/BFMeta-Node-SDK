import { REQUEST_PROTOCOL } from "../constants";

export class ApiConfigHelper {
    private __apiConfig!: BFMetaNodeSDK.ApiConfig;

    constructor(configOptions?: BFMetaNodeSDK.ApiConfigOptions) {
        configOptions && this.setApiConfig(configOptions);
    }

    setApiConfig(apiConfigOptions: BFMetaNodeSDK.ApiConfigOptions) {
        this.__apiConfig = {
            node: apiConfigOptions.node,
            requestTimeOut: apiConfigOptions.requestTimeOut || 10000,
            requestProtocol: apiConfigOptions.requestProtocol || REQUEST_PROTOCOL.WEBSOCKET,
            multiNodes: apiConfigOptions.multiNodes,
        };
    }

    get apiConfig() {
        return this.__apiConfig;
    }
}
