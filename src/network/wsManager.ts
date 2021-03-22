import * as io from "socket.io-client";
import { BFChainPC_SDK } from "../sdk";
import { WsEventType } from "../typings/enumTypes";

/**Websocket管理器 */

export class WsManager {
    private __socket?: SocketIOClient.Socket;
    /**网络配置 */
    constructor(private __sdk: BFChainPC_SDK, private __ip: string, private __port: number, private __timeout: number = 10000) {}

    /**
     * 初始化 socket 连接
     * @param url 完整地址
     * @return 连接成功的socket
     */
    private async _init(url: string) {
        return new Promise<SocketIOClient.Socket>((resolve, reject) => {
            const uri = `${url}/systemChannel`;
            const socket = io.connect(uri, {
                timeout: this.__timeout,
            });
            this.__socket = socket;
            socket.on("connect", () => {
                console.info(`connected to ${url} `);
                this.__sdk.emit(WsEventType.onConnect);
                return resolve(socket);
            });
            socket.on("connect_error", (data: any) => {
                return reject(new Error(`${url} connect_error`));
            });
            socket.on("connect_timeout", (data: any) => {
                return reject(new Error(`${url} connect_timeout`));
            });
            socket.on("reconnect_attempt", (data: any) => {
                return reject(new Error(`${url} reconnect_attempt`));
            });
            socket.on("reconnect_error", (data: any) => {
                return reject(new Error(`${url} reconnect_error`));
            });
            socket.on("error", (data: any) => {
                return reject(new Error(`${url} error with`));
            });
            socket.on("close", (data: any) => {
                return reject(new Error(`${url} close with`));
            });
            socket.on("disconnect", () => {
                return reject(new Error(`url ${url} disconnected `));
            });

            socket.on(WsEventType.onNewBlock, (data: any) => {
                this.__sdk.emit(WsEventType.onNewBlock, data);
            });
            socket.on(WsEventType.onDeleteBlock, (data: any) => {
                this.__sdk.emit(WsEventType.onDeleteBlock, data);
            });
        });
    }

    /**
     * 获取 socket 连接
     * @param hostname 目标hostname
     * @return 连接成功的socket
     */
    async getSocket(): Promise<SocketIOClient.Socket> {
        const url = `http://${this.__ip}:${this.__port}`;
        if (!this.__socket) {
            this.__socket = await this._init(url);
        }
        return this.__socket;
    }

    /**
     * 发出事件
     * @param socket
     * @param path 事件path
     * @param data 事件参数
     * @param hostname 目标hostname
     * @return ReturnParamsType
     */
    async socketEmit(path: string, data?: BFChainPcSdk.PcApiRequest): Promise<BFChainPcSdk.SDKReturn> {
        const socket = await this.getSocket();
        return new Promise((resolve, reject) => {
            const url = `http://${this.__ip}:${this.__port}`;
            const timeout = setTimeout(() => {
                reject(new Error(`${url} timeout`));
            }, this.__timeout);
            socket.emit(path, data, (result: BFChainPcSdk.PcApiReturn) => {
                if (!result.success) {
                    clearTimeout(timeout);
                    const resp: BFChainPcSdk.SDKReturn = { success: false };
                    if (result.error?.message) {
                        resp.message = result.error?.message;
                    }
                    if (result.error?.code) {
                        resp.code = result.error?.code;
                    }
                    if (result.minFee) {
                        resp.minFee = result.minFee;
                    }
                    return resolve(resp);
                }
                delete result.success;
                clearTimeout(timeout);
                const resp: BFChainPcSdk.SDKReturn = { success: true };
                if (Object.keys(result).length > 0) {
                    resp.result = result;
                }
                if (result.minFee) {
                    resp.minFee = result.minFee;
                }
                return resolve(resp);
            });
            socket.on("error", (data: any) => {
                clearTimeout(timeout);
                return reject(new Error(`${url} error`));
            });
            socket.on("close", (data: any) => {
                clearTimeout(timeout);
                return reject(new Error(`${url} close`));
            });
            socket.on("disconnect", () => {
                clearTimeout(timeout);
                return reject(new Error(`url ${url} disconnected `));
            });
        });
    }
}
