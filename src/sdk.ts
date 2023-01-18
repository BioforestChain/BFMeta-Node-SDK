import { Api } from "./api";

export class Sdk {
    private __api: Api;
    private __configOptions: BFMetaNodeSDK.ApiConfigOptions = {};
    constructor(configOptions?: BFMetaNodeSDK.ApiConfigOptions) {
        if (configOptions) {
            this.__configOptions = configOptions;
        }
        this.__api = new Api(this.__configOptions);
    }

    get api() {
        return this.__api;
    }

    setApiConfig(configOptions: BFMetaNodeSDK.ApiConfigOptions) {
        this.api.setApiconfig(configOptions);
    }
}
