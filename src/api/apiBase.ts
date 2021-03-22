import { networkHelper } from "../network/networkHelper";
import { RequestMethod } from "./apiConst";

/**接口基类 */
export abstract class ApiBase {
    constructor(protected __apiInfo: BFChainPcSdk.ApiInfo) {}

    getApiInfo() {
        return this.__apiInfo;
    }

    /**
     * 接口名称
     */
    getName() {
        return this.__apiInfo.name;
    }

    /**
     * http的Method，[GET,POST,PUT...]
     */
    getMethod() {
        return this.__apiInfo.method ?? RequestMethod.GET;
    }

    /**
     * 接口前缀
     */
    abstract getPrefix();

    /**
     * http接口的完整路径
     */
    getPath() {
        return `${this.getPrefix()}/${this.getName()}`;
    }

    /**
     * websocket接口的完整路径
     */
    getWsPath() {
        return `${this.getMethod()}${this.getPath()}`;
    }

    /**
     * 执行接口
     * @param request
     */
    async execute(request?: BFChainPcSdk.PcApiRequest): Promise<BFChainPcSdk.SDKReturn> {
        return await this.sendRequest(request);
    }

    /**
     * 向节点发送api请求
     * @param request
     */
    async sendRequest(request?: BFChainPcSdk.PcApiRequest): Promise<BFChainPcSdk.SDKReturn> {
        return await networkHelper.sendRequest(this, request);
    }
}
