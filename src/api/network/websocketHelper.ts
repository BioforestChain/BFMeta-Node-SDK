import type { ApiConfigHelper } from "../../helpers";
import * as http from "http";
import * as io from "socket.io-client";
import { maxOneFileSize, REQUEST_PROTOCOL } from "../../constants";
import { parsePostRequestParameter } from "../../helpers";

export class WebsocketHelper {
    private __socketMap = new Map<string, SocketIOClient.Socket>();
    private __port: number;
    private __configHelper: ApiConfigHelper;
    private __config: BFMetaNodeSDK.ApiConfig;

    // FIXME: 兼容老燕辉设计的神奇的 api
    public readonly REQUEST_PROTOCOL = REQUEST_PROTOCOL.WEBSOCKET;
    public readonly URL_PREFIX = ``;
    public readonly TRANSACTION_SERVER_URL_PREFIX: string;

    constructor(port: number, configHelper: ApiConfigHelper) {
        this.__port = port;
        this.__configHelper = configHelper;
        this.__config = this.__configHelper.apiConfig;

        this.TRANSACTION_SERVER_URL_PREFIX = `http://127.0.0.1:${this.__port}`;
    }

    private __getUrl() {
        const ips = this.__config.ips;
        return `http://${ips[Math.floor(Math.random() * ips.length)]}:${this.__config.port}`;
    }

    private __getWebsocketHost(url = this.__getUrl()) {
        return `${url}/systemChannel`;
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

    private __init(url: string) {
        const wsHost = this.__getWebsocketHost(url);
        return new Promise<SocketIOClient.Socket>((resolve, reject) => {
            const socket = io.connect(wsHost, {
                transports: ["websocket"],
                timeout: this.__config.requestTimeOut,
                transportOptions: {
                    websocket: {
                        maxPayload: maxOneFileSize,
                    },
                },
            });
            socket.on("connect", () => {
                console.debug(`connected to ${url}`);
                this.__socketMap.set(url, socket);
                return resolve(socket);
            });
            socket.on("connect_error", (data: any) => {
                this.__socketMap.delete(url);
                return reject(new Error(`${url} connect_error`));
            });
            socket.on("connect_timeout", (data: any) => {
                this.__socketMap.delete(url);
                return reject(new Error(`${url} connect_timeout`));
            });
            socket.on("reconnect_attempt", (data: any) => {
                return reject(new Error(`${url} reconnect_attempt`));
            });
            socket.on("reconnect_error", (data: any) => {
                this.__socketMap.delete(url);
                return reject(new Error(`${url} reconnect_error`));
            });
            socket.on("error", (data: any) => {
                this.__socketMap.delete(url);
                return reject(new Error(`${url} error`));
            });
            socket.on("close", (data: any) => {
                this.__socketMap.delete(url);
                return reject(new Error(`${url} close`));
            });
            socket.on("disconnect", () => {
                this.__socketMap.delete(url);
                return reject(new Error(`${url} disconnected`));
            });
        });
    }

    async getSocket() {
        const url = this.__getUrl();
        let socket = this.__socketMap.get(url);
        if (!socket) {
            socket = await this.__init(url);
        }
        return socket;
    }

    async sendGetRequest<T>(url: string, argv?: { [key: string]: any }) {
        return new Promise<T>(async (resolve, reject) => {
            let timeoutId!: NodeJS.Timeout;
            try {
                timeoutId = setTimeout(() => {
                    clearTimeout(timeoutId);
                    reject(new Error(`request timeout ${url}`));
                }, this.__config.requestTimeOut);
                const socket = await this.getSocket();
                socket.emit(url, argv, (result: BFMetaNodeSDK.ApiReturn<T>) => {
                    clearTimeout(timeoutId);
                    return resolve(result as any);
                });
            } catch (e) {
                clearTimeout(timeoutId);
                return reject(e);
            }
        });
    }

    async sendPostRequest<T>(url: string, argv: { [key: string]: any }) {
        return new Promise<T>(async (resolve, reject) => {
            let timeoutId!: NodeJS.Timeout;
            try {
                timeoutId = setTimeout(() => {
                    clearTimeout(timeoutId);
                    reject(new Error(`request timeout ${url}`));
                }, this.__config.requestTimeOut);
                const socket = await this.getSocket();
                socket.emit(url, argv, (result: BFMetaNodeSDK.ApiReturn<T>) => {
                    clearTimeout(timeoutId);
                    return resolve(result as any);
                });
            } catch (e) {
                clearTimeout(timeoutId);
                return reject(e);
            }
        });
    }
}
