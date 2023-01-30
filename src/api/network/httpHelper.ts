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

    constructor(configHelper: ApiConfigHelper) {
        this.__configHelper = configHelper;
        this.__config = this.__configHelper.apiConfig;

        this.TRANSACTION_SERVER_URL_PREFIX = `http://127.0.0.1:${this.__config.transactionServerPort}`;
    }

    private __getUrlPrefix() {
        const node = this.__config.node;
        return `http://${node.ip}:${node.port}/`;
    }

    get URL_PREFIX() {
        return this.__getUrlPrefix();
    }

    createTransaction<T>(url: string, argv: { [key: string]: any }) {
        return new Promise<T>((resolve, reject) => {
            const req = http.request(url, { method: "POST", headers: { "content-type": "application/json" } }, async (res) => {
                const body = await parsePostRequestParameter(res);
                return resolve(body as any);
            });
            req.setTimeout(this.__config.requestTimeOut, () => {
                return reject("timeout");
            });
            req.on("error", (e) => {
                return reject(e);
            });
            req.write(JSON.stringify(argv));
            req.end();
        });
    }

    sendGetRequest<T>(url: string, argv?: { [key: string]: any }) {
        const completeUrl = url + (argv ? `?${JSON.stringify(argv)}` : "");
        return new Promise<T>((resolve, reject) => {
            const req = http.get(completeUrl, async (res) => {
                const body = await parsePostRequestParameter(res);
                return resolve(body as any);
            });
            req.setTimeout(this.__config.requestTimeOut, () => {
                return reject("timeout");
            });
            req.on("error", (e) => {
                return reject(e);
            });
        });
    }

    sendPostRequest = this.createTransaction;
}
