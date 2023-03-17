import type { ApiConfigHelper } from "../../helpers";
import * as http from "http";
import { REQUEST_PROTOCOL } from "../../constants";
import { parsePostRequestParameter } from "../../helpers";

export class HttpHelper {
    private __configHelper: ApiConfigHelper;
    private __config: BFMetaNodeSDK.ApiConfig;

    // FIXME: 兼容老燕辉设计的神奇的 api
    public readonly REQUEST_PROTOCOL = REQUEST_PROTOCOL.HTTP;
    public readonly TRANSACTION_SERVER_URL_PREFIX: string;

    constructor(configHelper: ApiConfigHelper, public fetch: BFMetaNodeSDK.FetchInterface) {
        this.__configHelper = configHelper;
        this.__config = this.__configHelper.apiConfig;

        this.TRANSACTION_SERVER_URL_PREFIX = `http://127.0.0.1:${this.__config.transactionServerPort}`;
    }

    private __getUrlPrefix() {
        if (this.__config.multiNodes && this.__config.multiNodes.enable) {
            const nodes = this.__config.multiNodes.nodes;
            const node = nodes[Math.floor(Math.random() * nodes.length)];
            return `http://${node.ip}:${node.port}/`;
        } else {
            const node = this.__config.node;
            return `http://${node.ip}:${node.port}/`;
        }
    }

    get URL_PREFIX() {
        return this.__getUrlPrefix();
    }

    createTransaction<T>(url: string, argv: { [key: string]: any }) {
        return this.fetch.post(url, argv);
    }

    sendGetRequest<T>(url: string, argv?: { [key: string]: any }) {
        const completeUrl = url + (argv ? `?${JSON.stringify(argv)}` : "");
        return this.fetch.get(completeUrl);
    }

    sendPostRequest = this.createTransaction;
}
