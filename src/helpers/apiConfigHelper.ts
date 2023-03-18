import { REQUEST_PROTOCOL } from "../constants";

export class ApiConfigHelper {
    private __apiConfig!: BFMetaNodeSDK.ApiConfig;

    constructor(configOptions?: BFMetaNodeSDK.ApiConfigOptions) {
        this.__initConfig();
        configOptions && this.setApiConfig(configOptions);
    }

    private __initConfig() {
        this.__apiConfig = {
            node: { ip: "127.0.0.1", port: 9003 },
            requestTimeOut: 10000,
            transactionServerPort: 9003,
            requestProtocol: REQUEST_PROTOCOL.WEBSOCKET,
        };
    }

    setApiConfig(apiConfigOptions: BFMetaNodeSDK.ApiConfigOptions) {
        if (!this.__apiConfig) {
            this.__initConfig();
        }
        const { node, requestTimeOut, requestProtocol, multiNodes } = apiConfigOptions;
        node !== undefined && (this.__apiConfig.node = node);
        requestTimeOut !== undefined && (this.__apiConfig.requestTimeOut = requestTimeOut);
        requestProtocol !== undefined && (this.__apiConfig.requestProtocol = requestProtocol);
        multiNodes !== undefined && (this.__apiConfig.multiNodes = multiNodes);
    }

    get apiConfig() {
        if (!this.__apiConfig) {
            this.__initConfig();
        }
        return this.__apiConfig;
    }
}
