import * as fs from "fs";
import * as path from "path";
import { REQUEST_PROTOCOL } from "../constants";

export class ApiConfigHelper {
    private __apiConfig!: BFMetaNodeSDK.ApiConfig;

    constructor(configOptions?: BFMetaNodeSDK.ApiConfigOptions) {
        this.__initConfig(configOptions && configOptions.configRootPath);
        configOptions && this.setApiConfig(configOptions);
    }

    private __initConfig(configRootPath?: string) {
        this.__apiConfig = {
            ips: ["127.0.0.1"],
            port: 9003,
            requestTimeOut: 10000,
            requestProtocol: REQUEST_PROTOCOL.WEBSOCKET,
        };

        const configPath = path.join(configRootPath || path.join(process.cwd(), "config"), "config.json");
        if (fs.existsSync(configPath)) {
            const configData: BFMetaNodeSDK.ApiConfigOptions = JSON.parse(fs.readFileSync(configPath).toString());
            if (configData) {
                this.setApiConfig(configData);
            }
        }
    }

    setApiConfig(apiConfigOptions: BFMetaNodeSDK.ApiConfigOptions) {
        if (!this.__apiConfig) {
            this.__initConfig();
        }
        const { ips, port, requestTimeOut, requestProtocol } = apiConfigOptions;
        ips !== undefined && (this.__apiConfig.ips = ips);
        port !== undefined && (this.__apiConfig.port = port);
        requestTimeOut !== undefined && (this.__apiConfig.requestTimeOut = requestTimeOut);
        requestProtocol !== undefined && (this.__apiConfig.requestProtocol = requestProtocol);
    }

    get apiConfig() {
        if (!this.__apiConfig) {
            this.__initConfig();
        }
        return this.__apiConfig;
    }
}
