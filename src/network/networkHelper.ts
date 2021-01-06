import { WsManager } from "../network/wsManager";
import { ApiBase } from "../api/apiBase";
import { ApiType, ProtocolType } from "../constants";
import * as requestApi from "request";
import { RequestMethod } from "../api/apiConst";

/**网络层 */
class NetworkHelper {
    private __wsManager?: WsManager;
    private __apiType?: ApiType;
    private __httpHost: string = ``;

    constructor() {}

    /**
     * 初始化sdk，配置节点的网络信息
     * @param options
     */
    init(options: BFChainPcSdk.SdkNetOptions) {
        //默认用WS方式调用
        this.__apiType = options.apiType ?? ApiType.WS;
        this.__httpHost = `${options.protocol ?? ProtocolType.HTTP}${options.ip}:${options.port}`;
        switch (this.__apiType) {
            case ApiType.WS:
                this.__wsManager = new WsManager(options.ip, options.port, options.timeout ?? 10000);
                break;
            default:
                break;
        }
    }

    /**
     * 向节点发送api请求
     * @param api
     * @param request
     */
    async sendRequest(api: ApiBase, request?: BFChainPcSdk.PcApiRequest) {
        switch (this.__apiType) {
            case ApiType.WS:
                return await this.__sendWsRequest(api.getWsPath(), request);
            case ApiType.HTTP:
                return await this.__sendHttpRequest(api.getMethod(), api.getPath(), request);
            default:
                break;
        }
        throw new Error(`sendRequest api: ${api.getName()} fail. apiType:${this.__apiType} is invalid`);
    }

    /**
     * 用websocket向节点发送api请求
     * @param path
     * @param request
     */
    private async __sendWsRequest(path: string, request?: BFChainPcSdk.PcApiRequest): Promise<BFChainPcSdk.SDKReturn> {
        try {
            if (!this.__wsManager) {
                throw new Error(`__wsManager is undefined`);
            }
            const result = await this.__wsManager.socketEmit(path, request);
            return result;
        } catch (e) {
            throw new Error(`__sendWsRequest api: ${path} fail. error: ${e.message}`);
        }
    }

    /**
     * 用http向节点发送api请求
     * @param path
     * @param request
     */
    private async __sendHttpRequest(method: RequestMethod, path: string, request?: BFChainPcSdk.PcApiRequest): Promise<BFChainPcSdk.SDKReturn> {
        try {
            return new Promise((resolve, reject) => {
                const url = this.__httpHost + path;
                const func = requestApi[method];
                if (!func) {
                    throw new Error(`method:${method} is invalid`);
                }
                func(
                    url,
                    { headers: { "Content-Type": "application/json" }, json: request },
                    (error: any, response: requestApi.Response, result: BFChainPcSdk.PcApiReturn) => {
                        if (error) {
                            return reject(error);
                        }
                        if (!result.success) {
                            return resolve({
                                success: false,
                                result: undefined,
                                message: result.error?.message,
                                code: result.error?.code,
                                minFee: result.minFee,
                            });
                        }
                        delete result.success;
                        return resolve({ success: true, result: Object.keys(result).length > 0 ? result : undefined });
                    }
                );
            });
        } catch (e) {
            throw new Error(`__sendHttpRequest api: ${path} fail. error: ${e.message}`);
        }
    }
}

export const networkHelper = new NetworkHelper();
