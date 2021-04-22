import { networkHelper } from "./network/networkHelper";
import { API } from "./api/apiConst";
import { ApiBase } from "./api/apiBase";
import { BASIC_API } from "./api";
import { TRS_API } from "./api/transactionApi";
import { SYSTEM_API } from "./api/systemApi";
import { EventEmitter } from "events";

/**BFChainPC_SDK */
export class BFChainPC_SDK extends EventEmitter {
    private __apiMap = new Map<string, ApiBase>();

    constructor() {
        super();
    }

    /**
     * 初始化sdk，配置节点的网络信息
     * @param options
     */
    async init(options: BFChainPcSdk.SdkNetOptions) {
        for (const key in BASIC_API) {
            const api: ApiBase = new BASIC_API[key]();
            const apiName = api.getName();
            this.__apiMap.set(apiName, api);
        }
        for (const key in TRS_API) {
            const api: ApiBase = new TRS_API[key]();
            const apiName = api.getName();
            this.__apiMap.set(apiName, api);
        }
        for (const key in SYSTEM_API) {
            const api: ApiBase = new SYSTEM_API[key]();
            const apiName = api.getName();
            this.__apiMap.set(apiName, api);
        }
        await networkHelper.init(this, options);
    }

    /**
     * 执行接口
     * @param apiName
     * @param request
     */
    async processApi<RespType extends BFChainPcSdk.SDKReturn>(apiName: string, request?: BFChainPcSdk.PcApiRequest): Promise<RespType> {
        const api = this.__apiMap.get(apiName);
        if (!api) {
            throw new Error(`api: ${apiName} is not exist`);
        }
        const result: any = await api.execute(request);
        return result;
    }

    //#region 基础接口

    /**获得Bfchain版本号 */
    async getBfchainVersion(): Promise<BFChainPcSdk.ApiResp.BASIC.GetBfchainVersion> {
        return await this.processApi(API.BASIC.GET_BFCHAIN_VERSION.name);
    }

    /**获取交易类型 */
    async getTransactionType(request: BFChainPcSdk.ApiRequest.BASIC.GetTransactionType): Promise<BFChainPcSdk.ApiResp.BASIC.GetTransactionType> {
        return await this.processApi(API.BASIC.GET_TRANSACTION_TYPE.name, request);
    }

    /**获取本地节点当前最新区块 */
    async getLastBlock(): Promise<BFChainPcSdk.ApiResp.BASIC.GetLastBlock> {
        return await this.processApi(API.BASIC.GET_LAST_BLOCK.name);
    }

    /**获取指定区块 */
    async getBlock(request: BFChainPcSdk.ApiRequest.BASIC.GetBlock): Promise<BFChainPcSdk.ApiResp.BASIC.GetBlock> {
        return await this.processApi(API.BASIC.GET_BLOCK.name, request);
    }

    /**获取指定事件 */
    async getTransactions(request: BFChainPcSdk.ApiRequest.BASIC.GetTransactions): Promise<BFChainPcSdk.ApiResp.BASIC.GetTransactions> {
        return await this.processApi(API.BASIC.GET_TRANSACTIONS.name, request);
    }

    /**生成账户私钥 */
    async generateSecret(request: BFChainPcSdk.ApiRequest.BASIC.GenerateSecret): Promise<BFChainPcSdk.ApiResp.BASIC.GenerateSecret> {
        return await this.processApi(API.BASIC.GENERATE_SECRET.name, request);
    }

    /**获取账户公钥 */
    async getAccountPublicKey(request: BFChainPcSdk.ApiRequest.BASIC.GetAccountPublicKey): Promise<BFChainPcSdk.ApiResp.BASIC.GetAccountPublicKey> {
        return await this.processApi(API.BASIC.GET_ACCOUNT_PUBLIC_KEY.name, request);
    }

    /**获取账户的最后一笔交易 */
    async GetAccountLastTransaction(
        request: BFChainPcSdk.ApiRequest.BASIC.GetAccountLastTransaction
    ): Promise<BFChainPcSdk.ApiResp.BASIC.GetAccountLastTransaction> {
        return await this.processApi(API.BASIC.GET_ACCOUNT_LAST_TRANSACTION.name, request);
    }

    /**创建账户 */
    async createAccount(request: BFChainPcSdk.ApiRequest.BASIC.CreateAccount): Promise<BFChainPcSdk.ApiResp.BASIC.CreateAccount> {
        return await this.processApi(API.BASIC.CREATE_ACCOUNT.name, request);
    }

    /**获取节点状态 */
    async getBlockChainStatus(): Promise<BFChainPcSdk.ApiResp.BASIC.GetBlockChainStatus> {
        return await this.processApi(API.BASIC.GET_BLOCKCHAIN_STATUS.name);
    }
    //#endregion

    //#region 交易类接口

    /**发送转账事件 */
    async trTransferAsset(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrTransferAsset): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrTransferAsset> {
        return await this.processApi(API.TRANSACTION.TR_TRANSFER_ASSET.name, request);
    }

    /**发送设置二次密码事件 */
    async trSignature(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrSignature): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrSignature> {
        return await this.processApi(API.TRANSACTION.TR_SIGNATURE.name, request);
    }

    /**发送设置用户名事件 */
    async trUsername(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrUsername): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrUsername> {
        return await this.processApi(API.TRANSACTION.TR_USER_NAME.name, request);
    }

    /**发送注册受托人事件 */
    async trDelegate(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrDelegate): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrDelegate> {
        return await this.processApi(API.TRANSACTION.TR_DELEGATE.name, request);
    }

    /**发送接收投票事件 */
    async trAcceptVote(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrAcceptVote): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrAcceptVote> {
        return await this.processApi(API.TRANSACTION.TR_ACCEPT_VOTE.name, request);
    }

    /**发送拒绝投票事件 */
    async trRejectVote(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrRejectVote): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrRejectVote> {
        return await this.processApi(API.TRANSACTION.TR_REJECT_VOTE.name, request);
    }

    /**发送投票事件 */
    async trVote(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrVote): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrVote> {
        return await this.processApi(API.TRANSACTION.TR_VOTE.name, request);
    }

    /**发送dapp事件 */
    async trDapp(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrDapp): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrDapp> {
        return await this.processApi(API.TRANSACTION.TR_DAPP.name, request);
    }

    /**发送dapp购买事件 */
    async trDappPurchasing(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrDappPurchasing): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrDappPurchasing> {
        return await this.processApi(API.TRANSACTION.TR_DAPP_PURCHASING.name, request);
    }

    /**发送存证事件 */
    async trMark(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrMark): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrMark> {
        return await this.processApi(API.TRANSACTION.TR_MARK.name, request);
    }

    /**发送资产发行事件 */
    async trIssueAsset(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrIssueAsset): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrIssueAsset> {
        return await this.processApi(API.TRANSACTION.TR_ISSUE_ASSET.name, request);
    }

    /**发送销毁资产事件 */
    async trDestroyAsset(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrDestroyAsset): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrDestroyAsset> {
        return await this.processApi(API.TRANSACTION.TR_DESTROYASSET.name, request);
    }

    /**发送数字资产交换事件 */
    async trToExchangeAsset(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrToExchangeAsset): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrToExchangeAsset> {
        return await this.processApi(API.TRANSACTION.TR_TO_EXCHANGE_ASSET.name, request);
    }

    /**发送接收数字资产交换事件 */
    async trBeExchangeAsset(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrBeExchangeAsset): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrBeExchangeAsset> {
        return await this.processApi(API.TRANSACTION.TR_BE_EXCHANGE_ASSET.name, request);
    }

    /**发送特殊资产交换事件 */
    async trToExchangeSpecAsset(
        request: BFChainPcSdk.ApiRequest.TRANSACTION.TrToExchangeSpecAsset
    ): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrToExchangeSpecAsset> {
        return await this.processApi(API.TRANSACTION.TR_TO_EXCHANGE_SPEC_ASSET.name, request);
    }

    /**发送接收特殊资产交换事件 */
    async trBeExchangeSpecAsset(
        request: BFChainPcSdk.ApiRequest.TRANSACTION.TrBeExchangeSpecAsset
    ): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrBeExchangeSpecAsset> {
        return await this.processApi(API.TRANSACTION.TR_BE_EXCHANGE_SPEC_ASSET.name, request);
    }

    /**发送资产赠与事件（红包事件） */
    async trGiftAsset(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrGiftAsset): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrGiftAsset> {
        return await this.processApi(API.TRANSACTION.TR_GIFT_ASSET.name, request);
    }

    /**发送接收资产赠与事件（抢红包事件） */
    async trGrabAsset(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrGrabAsset): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrGrabAsset> {
        return await this.processApi(API.TRANSACTION.TR_GRAB_ASSET.name, request);
    }

    /**发送委托数字资产事件 */
    async trTrustAsset(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrTrustAsset): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrTrustAsset> {
        return await this.processApi(API.TRANSACTION.TR_TRUST_ASSET.name, request);
    }

    /**发送签收委托数字资产事件 */
    async trSignForAsset(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrSignForAsset): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrSignForAsset> {
        return await this.processApi(API.TRANSACTION.TR_SIGN_FOR_ASSET.name, request);
    }

    /**发送注册、注销位名系统事件 */
    async trLocationName(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrLocationName): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrLocationName> {
        return await this.processApi(API.TRANSACTION.TR_LOCATION_NAME.name, request);
    }

    /**发送设置位名系统管理员事件 */
    async trSetLnsManager(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrSetLnsManager): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrSetLnsManager> {
        return await this.processApi(API.TRANSACTION.TR_SET_LNS_MANAGER.name, request);
    }

    /**发送设置位名系统解析值事件 */
    async trSetLnsRecordValue(request: BFChainPcSdk.ApiRequest.TRANSACTION.TrSetLnsRecordValue): Promise<BFChainPcSdk.ApiResp.TRANSACTION.TrSetLnsRecordValue> {
        return await this.processApi(API.TRANSACTION.TR_SET_LNS_RECORD_VALUE.name, request);
    }

    //#endregion

    //#region 矿机管理接口

    /**安全关闭节点 */
    async safetyClose(request: BFChainPcSdk.ApiRequest.SYSTEM.SafetyClose): Promise<BFChainPcSdk.ApiResp.SYSTEM.SafetyClose> {
        return await this.processApi(API.SYSTEM.SAFETY_CLOSE.name, request);
    }

    /**设置节点密码 */
    async setSystemKey(request: BFChainPcSdk.ApiRequest.SYSTEM.SetSystemKey): Promise<BFChainPcSdk.ApiResp.SYSTEM.SetSystemKey> {
        return await this.processApi(API.SYSTEM.SET_SYSTEM_KEY.name, request);
    }

    /**验证节点密码 */
    async verifySystemKey(request: BFChainPcSdk.ApiRequest.SYSTEM.VerifySystemKey): Promise<BFChainPcSdk.ApiResp.SYSTEM.VerifySystemKey> {
        return await this.processApi(API.SYSTEM.VERIFY_SYSTEM_KEY.name, request);
    }

    /**增加节点管理员 */
    async addSystemAdmin(request: BFChainPcSdk.ApiRequest.SYSTEM.AddSystemAdmin): Promise<BFChainPcSdk.ApiResp.SYSTEM.AddSystemAdmin> {
        return await this.processApi(API.SYSTEM.ADD_SYSTEM_ADMIN.name, request);
    }

    /**获得节点管理员 */
    async getSystemAdmin(request: BFChainPcSdk.ApiRequest.SYSTEM.GetSystemAdmin): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetSystemAdmin> {
        return await this.processApi(API.SYSTEM.GET_SYSTEM_ADMIN.name, request);
    }

    /**验证节点管理员 */
    async verifySystemAdmin(request: BFChainPcSdk.ApiRequest.SYSTEM.VerifySystemAdmin): Promise<BFChainPcSdk.ApiResp.SYSTEM.VerifySystemAdmin> {
        return await this.processApi(API.SYSTEM.VERIFY_SYSTEM_ADMIN.name, request);
    }

    /**删除节点管理员 */
    async delSystemAdmin(request: BFChainPcSdk.ApiRequest.SYSTEM.DelSystemAdmin): Promise<BFChainPcSdk.ApiResp.SYSTEM.DelSystemAdmin> {
        return await this.processApi(API.SYSTEM.DEL_SYSTEM_ADMIN.name, request);
    }

    /**重置节点管理员 */
    async resetSystemAdmin(request: BFChainPcSdk.ApiRequest.SYSTEM.ResetSystemAdmin): Promise<BFChainPcSdk.ApiResp.SYSTEM.ResetSystemAdmin> {
        return await this.processApi(API.SYSTEM.RESET_SYSTEM_ADMIN.name, request);
    }

    /**绑定节点账户 */
    async bindingAccount(request: BFChainPcSdk.ApiRequest.SYSTEM.BindingAccount): Promise<BFChainPcSdk.ApiResp.SYSTEM.BindingAccount> {
        return await this.processApi(API.SYSTEM.BINDING_ACCOUNT.name, request);
    }

    /**获得节点受托人 */
    async getSystemDelegate(request: BFChainPcSdk.ApiRequest.SYSTEM.GetSystemDelegate): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetSystemDelegate> {
        return await this.processApi(API.SYSTEM.GET_SYSTEM_DELEGATE.name, request);
    }

    /**节点信息查询 */
    async miningMachineInfo(request: BFChainPcSdk.ApiRequest.SYSTEM.MiningMachineInfo): Promise<BFChainPcSdk.ApiResp.SYSTEM.MiningMachineInfo> {
        return await this.processApi(API.SYSTEM.MINING_MACHINE_INFO.name, request);
    }

    /**设置节点配置信息 */
    async setSystemConfig(request: BFChainPcSdk.ApiRequest.SYSTEM.SetSystemConfig): Promise<BFChainPcSdk.ApiResp.SYSTEM.SetSystemConfig> {
        return await this.processApi(API.SYSTEM.SET_SYSTEM_CONFIG.name, request);
    }

    /**获得节点配置信息 */
    async getSystemConfigInfoDetail(
        request: BFChainPcSdk.ApiRequest.SYSTEM.GetSystemConfigInfoDetail
    ): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetSystemConfigInfoDetail> {
        return await this.processApi(API.SYSTEM.GET_SYSTEM_CONFIG_INFO_DETAIL.name, request);
    }

    /**获得节点状态（实时信息） */
    async getRuntimeState(request: BFChainPcSdk.ApiRequest.SYSTEM.GetRuntimeState): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetRuntimeState> {
        return await this.processApi(API.SYSTEM.GET_RUNTIME_STATE.name, request);
    }

    /**获得节点访问统计信息 */
    async getSystemMonitor(request: BFChainPcSdk.ApiRequest.SYSTEM.GetSystemMonitor): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetSystemMonitor> {
        return await this.processApi(API.SYSTEM.GET_SYSTEM_MONITOR.name, request);
    }

    /**获得节点运行日志类型 */
    async getSystemLoggerType(request: BFChainPcSdk.ApiRequest.SYSTEM.GetSystemLoggerType): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetSystemLoggerType> {
        return await this.processApi(API.SYSTEM.GET_SYSTEM_LOGGER_TYPE.name, request);
    }

    /**获得节点运行日志列表 */
    async getSystemLoggerList(request: BFChainPcSdk.ApiRequest.SYSTEM.GetSystemLoggerList): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetSystemLoggerList> {
        return await this.processApi(API.SYSTEM.GET_SYSTEM_LOGGER_LIST.name, request);
    }

    /**获得节点运行日志内容 */
    async getSystemLoggerDetail(request: BFChainPcSdk.ApiRequest.SYSTEM.GetSystemLoggerDetail): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetSystemLoggerDetail> {
        return await this.processApi(API.SYSTEM.GET_SYSTEM_LOGGER_DETAIL.name, request);
    }

    /**删除矿机运行日志 */
    async delSystemLogger(request: BFChainPcSdk.ApiRequest.SYSTEM.DelSystemLogger): Promise<BFChainPcSdk.ApiResp.SYSTEM.DelSystemLogger> {
        return await this.processApi(API.SYSTEM.DEL_SYSTEM_LOGGER.name, request);
    }

    /**获得节点邮箱地址 */
    async getEmailAddress(request: BFChainPcSdk.ApiRequest.SYSTEM.GetEmailAddress): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetEmailAddress> {
        return await this.processApi(API.SYSTEM.GET_EMAIL_ADDRESS.name, request);
    }

    /**设置节点邮箱地址 */
    async setEmailAddress(request: BFChainPcSdk.ApiRequest.SYSTEM.SetEmailAddress): Promise<BFChainPcSdk.ApiResp.SYSTEM.SetEmailAddress> {
        return await this.processApi(API.SYSTEM.SET_EMAIL_ADDRESS.name, request);
    }

    /**通过节点私钥验证节点受托人 */
    async verifySystemSecret(request: BFChainPcSdk.ApiRequest.SYSTEM.VerifySystemSecret): Promise<BFChainPcSdk.ApiResp.SYSTEM.VerifySystemSecret> {
        return await this.processApi(API.SYSTEM.VERIFY_SYSTEM_SECRET.name, request);
    }

    /**设置节点访问白名单 */
    async setSystemWhiteList(request: BFChainPcSdk.ApiRequest.SYSTEM.SetSystemWhiteList): Promise<BFChainPcSdk.ApiResp.SYSTEM.SetSystemWhiteList> {
        return await this.processApi(API.SYSTEM.SET_SYSTEM_WHITELIST.name, request);
    }

    /**获得节点访问白名单 */
    async getSystemWhiteList(request: BFChainPcSdk.ApiRequest.SYSTEM.GetSystemWhiteList): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetSystemWhiteList> {
        return await this.processApi(API.SYSTEM.GET_SYSTEM_WHITELIST.name, request);
    }

    /**删除节点访问白名单 */
    async delSystemWhiteList(request: BFChainPcSdk.ApiRequest.SYSTEM.DelSystemWhiteList): Promise<BFChainPcSdk.ApiResp.SYSTEM.DelSystemWhiteList> {
        return await this.processApi(API.SYSTEM.DEL_SYSTEM_WHITELIST.name, request);
    }

    /**获得节点进程的网络相关信息 */
    async getProcessNetwork(request: BFChainPcSdk.ApiRequest.SYSTEM.GetProcessNetwork): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetProcessNetwork> {
        return await this.processApi(API.SYSTEM.GET_PROCESS_NETWORK.name, request);
    }

    /**获得节点进程CPU信息 */
    async getProcessCPU(request: BFChainPcSdk.ApiRequest.SYSTEM.GetProcessCPU): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetProcessCPU> {
        return await this.processApi(API.SYSTEM.GET_PROCESS_CPU.name, request);
    }

    /**获得节点进程内存信息 */
    async getProcessMemory(request: BFChainPcSdk.ApiRequest.SYSTEM.GetProcessMemory): Promise<BFChainPcSdk.ApiResp.SYSTEM.GetProcessMemory> {
        return await this.processApi(API.SYSTEM.GET_PROCESS_MEMORY.name, request);
    }

    /**定时发送节点状态 */
    async systemStatus(request: BFChainPcSdk.ApiRequest.SYSTEM.SystemStatus): Promise<BFChainPcSdk.ApiResp.SYSTEM.SystemStatus> {
        return await this.processApi(API.SYSTEM.SYSTEM_STATUS.name, request);
    }

    /**定时发送节点CPU，内存，网络信息 */
    async systemProcess(request: BFChainPcSdk.ApiRequest.SYSTEM.SystemProcess): Promise<BFChainPcSdk.ApiResp.SYSTEM.SystemProcess> {
        return await this.processApi(API.SYSTEM.SYSTEM_PROCESS.name, request);
    }

    //#endregion
}
