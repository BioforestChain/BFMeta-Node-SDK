import type { ApiConfigHelper } from "../../helpers";
import * as io from "socket.io-client";
import { sleep } from "@bnqkl/util-node";
import { maxOneFileSize, REQUEST_PROTOCOL } from "../../constants";

export class WebsocketHelper {
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

        this.__init().catch((e) => {});
    }

    private __getUrl(args: BFMetaNodeSDK.NodeHost) {
        return `http://${args.ip}:${args.port}`;
    }

    private __getWebsocketHost(url: string) {
        return `${url}/systemChannel`;
    }

    private __socketMap = new Map<string, SocketIOClient.Socket>();

    private async __init() {
        while (true) {
            try {
                const { node, multiNodes } = this.__config;
                const taskList: Promise<void>[] = [];
                if (node) {
                    const url = this.__getUrl(node);
                    if (!this.__socketMap.has(url)) {
                        taskList.push(this.__reconnect(url));
                    }
                }
                if (multiNodes && multiNodes.enable) {
                    const { nodes } = multiNodes;
                    for (const node of nodes) {
                        const url = this.__getUrl(node);
                        if (!this.__socketMap.has(url)) {
                            taskList.push(this.__reconnect(url));
                        }
                    }
                }
                await Promise.all(taskList);
            } catch (error) {
            } finally {
                await sleep(30 * 1000);
            }
        }
    }

    private __connect(url: string) {
        return new Promise<SocketIOClient.Socket>((resolve, reject) => {
            const wsHost = this.__getWebsocketHost(url);
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
                return reject(new Error(`connect_error ${url}`));
            });
            socket.on("connect_timeout", (data: any) => {
                return reject(new Error(`connect_timeout ${url}`));
            });
        });
    }

    private __bindEvent(socket: SocketIOClient.Socket, url: string) {
        socket.on("reconnect_error", (data: any) => {
            socket.close();
        });
        socket.on("error", (data: any) => {
            socket.close();
        });
        socket.on("disconnect", () => {
            this.__socketMap.delete(url);
            this.__reconnect(url);
        });
    }

    private async __reconnect(url: string) {
        try {
            const socket = await this.__connect(url);
            this.__bindEvent(socket, url);
            this.__socketMap.set(url, socket);
        } catch (error: any) {
            console.debug(error.message || error);
        }
    }

    getSocket() {
        if (this.__socketMap.size === 0) {
            return undefined;
        }
        // 节点数量不会多到哪去，这样估计就够了
        const sockets = [...this.__socketMap.values()];
        return sockets[Math.floor(Math.random() * sockets.length)];
    }

    createTransaction<T>(url: string, argv: { [key: string]: any }) {
        return new Promise<T>(async (resolve, reject) => {
            let timeoutId!: NodeJS.Timeout;
            try {
                timeoutId = setTimeout(() => {
                    clearTimeout(timeoutId);
                    reject(new Error(`request timeout ${url}`));
                }, this.__config.requestTimeOut);
                const socket = this.getSocket();
                if (!socket) {
                    return reject(new Error(`no nodes available`));
                }
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
                const socket = this.getSocket();
                if (!socket) {
                    return reject(new Error(`no nodes available`));
                }
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

    getSocketByNode(node: BFMetaNodeSDK.NodeHost) {
        return this.__socketMap.get(this.__getUrl(node));
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
                let socket: SocketIOClient.Socket;
                if (this.upgradeSocket) {
                    socket = this.upgradeSocket;
                } else {
                    socket = await this.__initUpgrade();
                }
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
        if (node && node.upgradePort) {
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
            throw new Error(`upgradePort: ${JSON.stringify(node)} is not init`);
        }
    }
}
