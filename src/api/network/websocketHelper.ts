import type { ApiConfigHelper } from "../../helpers";
import * as io from "socket.io-client";
import { maxOneFileSize, REQUEST_PROTOCOL } from "../../constants";

export class WebsocketHelper {
    private __socketMap = new Map<string, SocketIOClient.Socket>();
    private __configHelper: ApiConfigHelper;
    private __config: BFMetaNodeSDK.ApiConfig;

    // FIXME: 兼容老燕辉设计的神奇的 api
    public readonly REQUEST_PROTOCOL = REQUEST_PROTOCOL.WEBSOCKET;
    public readonly URL_PREFIX = ``;
    public readonly TRANSACTION_SERVER_URL_PREFIX: string;

    constructor(configHelper: ApiConfigHelper) {
        this.__configHelper = configHelper;
        this.__config = this.__configHelper.apiConfig;

        this.TRANSACTION_SERVER_URL_PREFIX = `http://127.0.0.1:${this.__config.transactionServerPort}`;
    }

    private __getUrl() {
        if (this.__config.multiNodes && this.__config.multiNodes.enable) {
            const nodes = this.__config.multiNodes.nodes;
            const node = nodes[Math.floor(Math.random() * nodes.length)];
            return `http://${node.ip}:${node.port}`;
        } else {
            const node = this.__config.node;
            return `http://${node.ip}:${node.port}`;
        }
    }

    private __getWebsocketHost(url = this.__getUrl()) {
        return `${url}/systemChannel`;
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

    createTransaction<T>(url: string, argv: { [key: string]: any }) {
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

    sendPostRequest = this.createTransaction;

    async getSocketByIp(host: string) {
        let socket = this.__socketMap.get(host);
        if (socket) {
            return socket;
        }
    }

    private __upgradeSocket: SocketIOClient.Socket | undefined;
    get upgradeSocket() {
        return this.__upgradeSocket;
    }
    async sendUpgradeRequest<T>(url: string, argv: { [key: string]: any }) {
        return new Promise<T>(async (resolve, reject) => {
            let timeoutId!: NodeJS.Timeout;
            try {
                timeoutId = setTimeout(() => {
                    clearTimeout(timeoutId);
                    reject(new Error(`request timeout ${url}`));
                }, this.__config.requestTimeOut);
                const socket = await this.__initUpgrade();
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

    private __initUpgrade() {
        const node = this.__config.node;
        if (node.upgradePort) {
            const wsHost = `ws://${node.ip}:${node.upgradePort}`;
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
                    console.debug(`connected to ${wsHost}`);
                    this.__upgradeSocket = socket;
                    return resolve(socket);
                });
                socket.on("connect_error", (data: any) => {
                    this.__upgradeSocket = undefined;
                    return reject(new Error(`${wsHost} connect_error`));
                });
                socket.on("connect_timeout", (data: any) => {
                    this.__upgradeSocket = undefined;
                    return reject(new Error(`${wsHost} connect_timeout`));
                });
                socket.on("reconnect_attempt", (data: any) => {
                    return reject(new Error(`${wsHost} reconnect_attempt`));
                });
                socket.on("reconnect_error", (data: any) => {
                    this.__upgradeSocket = undefined;
                    return reject(new Error(`${wsHost} reconnect_error`));
                });
                socket.on("error", (data: any) => {
                    this.__upgradeSocket = undefined;
                    return reject(new Error(`${wsHost} error`));
                });
                socket.on("close", (data: any) => {
                    this.__upgradeSocket = undefined;
                    return reject(new Error(`${wsHost} close`));
                });
                socket.on("disconnect", () => {
                    this.__upgradeSocket = undefined;
                    return reject(new Error(`${wsHost} disconnected`));
                });
            });
        } else {
            throw new Error(`upgradePort: ${node.upgradePort} is not init`);
        }
    }
}
