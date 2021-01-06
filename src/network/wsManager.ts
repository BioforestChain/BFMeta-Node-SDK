import * as io from "socket.io-client";

/**Websocket管理器 */

export class WsManager {
    private __socket?: SocketIOClient.Socket;
    /**网络配置 */
    constructor(private __ip: string, private __port: number, private __timeout: number) {}

    /**
     * 初始化 socket 连接
     *
     * @param url 完整地址
     * @return 连接成功的socket
     */
    private async _init(url: string) {
        return new Promise<SocketIOClient.Socket>((resolve, reject) => {
            const uri = `${url}/systemChannel`;
            const socket = io.connect(uri, {
                transports: ["websocket"],
                reconnection: true,
                timeout: this.__timeout,
                forceNew: true,
            });
            this.__socket = socket;
            socket.on("connect", () => {
                console.info(`connected to ${url} `);
                return resolve(socket);
            });
            socket.on("connect_error", (data: any) => {
                this.__disconnect();
                return reject(new Error(`${url} connect_error`));
            });
            socket.on("connect_timeout", (data: any) => {
                this.__disconnect();
                return reject(new Error(`${url} connect_timeout`));
            });
            socket.on("reconnect_attempt", (data: any) => {
                return reject(new Error(`${url} reconnect_attempt`));
            });
            socket.on("reconnect_error", (data: any) => {
                this.__disconnect();
                return reject(new Error(`${url} reconnect_error`));
            });
            socket.on("error", (data: any) => {
                this.__disconnect();
                return reject(new Error(`${url} error with`));
            });
            socket.on("close", (data: any) => {
                this.__disconnect();
                return reject(new Error(`${url} close with`));
            });
            socket.on("disconnect", () => {
                this.__disconnect();
                return reject(new Error(`url ${url} disconnected `));
            });
        });
    }

    /**
     * 获取 socket 连接
     *
     * @param hostname 目标hostname
     * @return 连接成功的socket
     */
    private async __getSocket(): Promise<SocketIOClient.Socket> {
        const url = `http://${this.__ip}:${this.__port}`;
        if (!this.__socket) {
            this.__socket = await this._init(url);
        }
        return this.__socket;
    }

    /**
     * 发出事件
     *
     * @param socket
     * @param path 事件path
     * @param data 事件参数
     * @param hostname 目标hostname
     * @return ReturnParamsType
     */
    async socketEmit(path: string, data?: BFChainPcSdk.PcApiRequest): Promise<BFChainPcSdk.SDKReturn> {
        const socket = await this.__getSocket();
        return new Promise((resolve, reject) => {
            const url = `http://${this.__ip}:${this.__port}`;
            const timeout = setTimeout(() => {
                this.__disconnect();
                reject(new Error(`${url} timeout`));
            }, this.__timeout);
            socket.emit(path, data, (result: BFChainPcSdk.PcApiReturn) => {
                if (!result.success) {
                    clearTimeout(timeout);
                    return resolve({ success: false, result: undefined, message: result.error?.message, code: result.error?.code, minFee: result.minFee });
                }
                delete result.success;
                clearTimeout(timeout);
                return resolve({ success: true, result: Object.keys(result).length > 0 ? result : undefined });
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
                this.__disconnect();
                clearTimeout(timeout);
                return reject(new Error(`url ${url} disconnected `));
            });
        });
    }

    /**
     * socket被动断开
     *
     */
    private __disconnect() {
        if (this.__socket) {
            this.__socket.disconnect();
            this.__socket = undefined;
        }
    }
}
