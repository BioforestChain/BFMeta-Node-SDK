import {
    SafetyCloseApi,
    SetSystemKeyApi,
    VerifySystemKeyApi,
    AddSystemAdminApi,
    GetSystemAdminApi,
    VerifySystemAdminApi,
    DeleteSystemAdminApi,
    ResetSystemAdminApi,
    BindingAccountApi,
    GetSystemDelegateApi,
    SetSystemConfigApi,
    GetSystemConfigInfoDetailApi,
    GetRuntimeStateApi,
    MiningMachineInfoApi,
    GetSystemMonitorApi,
    GetSystemLoggerTypeApi,
    GetSystemLoggerListApi,
    GetSystemLoggerDetailApi,
    DeleteSystemLoggerApi,
    GetEmailAddressApi,
    SetEmailAddressApi,
    VerifySystemSecretApi,
    SetSystemWhiteListApi,
    GetSystemWhiteListApi,
    DeleteSystemWhiteListApi,
    GetProcessCPUApi,
    GetProcessMemoryApi,
    GetProcessNetworkApi,
    SystemStatusApi,
    SystemProcessApi,
    GetAllUntreatedTrsCountApi,
    ClearAllUntreatedTrsApi,
    RestoreAllUntreatedTrsApi,
} from "./apis";
import { SYSTEM_API_PATH } from "../../../constants";

export class SystemApi {
    private __SYSTEM_API_MAP = new Map<BFMetaNodeSDK.System.SYSTEM_API_PATH, BFMetaNodeSDK.System.SystemApi>();

    constructor(private __networkHelper: BFMetaNodeSDK.NetworkHelper) {
        this.__init();
    }

    private __init() {
        const { __networkHelper: networkHelper, __SYSTEM_API_MAP: SYSTEM_API_MAP } = this;

        const safetyCloseApi = new SafetyCloseApi(networkHelper);
        const setSystemKeyApi = new SetSystemKeyApi(networkHelper);
        const verifySystemKeyApi = new VerifySystemKeyApi(networkHelper);
        const addSystemAdminApi = new AddSystemAdminApi(networkHelper);
        const getSystemAdminApi = new GetSystemAdminApi(networkHelper);
        const verifySystemAdminApi = new VerifySystemAdminApi(networkHelper);
        const deleteSystemAdminApi = new DeleteSystemAdminApi(networkHelper);
        const resetSystemAdminApi = new ResetSystemAdminApi(networkHelper);
        const bindingAccountApi = new BindingAccountApi(networkHelper);
        const getSystemDelegateApi = new GetSystemDelegateApi(networkHelper);
        const setSystemConfigApi = new SetSystemConfigApi(networkHelper);
        const getSystemConfigInfoDetailApi = new GetSystemConfigInfoDetailApi(networkHelper);
        const getRuntimeStateApi = new GetRuntimeStateApi(networkHelper);
        const miningMachineInfoApi = new MiningMachineInfoApi(networkHelper);
        const getSystemMonitorApi = new GetSystemMonitorApi(networkHelper);
        const getSystemLoggerTypeApi = new GetSystemLoggerTypeApi(networkHelper);
        const getSystemLoggerListApi = new GetSystemLoggerListApi(networkHelper);
        const getSystemLoggerDetailApi = new GetSystemLoggerDetailApi(networkHelper);
        const deleteSystemLoggerApi = new DeleteSystemLoggerApi(networkHelper);
        const getEmailAddressApi = new GetEmailAddressApi(networkHelper);
        const setEmailAddressApi = new SetEmailAddressApi(networkHelper);
        const verifySystemSecretApi = new VerifySystemSecretApi(networkHelper);
        const setSystemWhiteListApi = new SetSystemWhiteListApi(networkHelper);
        const getSystemWhiteListApi = new GetSystemWhiteListApi(networkHelper);
        const deleteSystemWhiteListApi = new DeleteSystemWhiteListApi(networkHelper);
        const getProcessCPUApi = new GetProcessCPUApi(networkHelper);
        const getProcessMemoryApi = new GetProcessMemoryApi(networkHelper);
        const getProcessNetworkApi = new GetProcessNetworkApi(networkHelper);
        const systemStatusApi = new SystemStatusApi(networkHelper);
        const systemProcessApi = new SystemProcessApi(networkHelper);
        const getAllUntreatedTrsCountApi = new GetAllUntreatedTrsCountApi(networkHelper);
        const clearAllUntreatedTrsApi = new ClearAllUntreatedTrsApi(networkHelper);
        const restoreAllUntreatedTrsApi = new RestoreAllUntreatedTrsApi(networkHelper);

        SYSTEM_API_MAP.set(safetyCloseApi.REQUEST_API_PATH, safetyCloseApi);
        SYSTEM_API_MAP.set(setSystemKeyApi.REQUEST_API_PATH, setSystemKeyApi);
        SYSTEM_API_MAP.set(verifySystemKeyApi.REQUEST_API_PATH, verifySystemKeyApi);
        SYSTEM_API_MAP.set(addSystemAdminApi.REQUEST_API_PATH, addSystemAdminApi);
        SYSTEM_API_MAP.set(getSystemAdminApi.REQUEST_API_PATH, getSystemAdminApi);
        SYSTEM_API_MAP.set(verifySystemAdminApi.REQUEST_API_PATH, verifySystemAdminApi);
        SYSTEM_API_MAP.set(deleteSystemAdminApi.REQUEST_API_PATH, deleteSystemAdminApi);
        SYSTEM_API_MAP.set(resetSystemAdminApi.REQUEST_API_PATH, resetSystemAdminApi);
        SYSTEM_API_MAP.set(bindingAccountApi.REQUEST_API_PATH, bindingAccountApi);
        SYSTEM_API_MAP.set(getSystemDelegateApi.REQUEST_API_PATH, getSystemDelegateApi);
        SYSTEM_API_MAP.set(setSystemConfigApi.REQUEST_API_PATH, setSystemConfigApi);
        SYSTEM_API_MAP.set(getSystemConfigInfoDetailApi.REQUEST_API_PATH, getSystemConfigInfoDetailApi);
        SYSTEM_API_MAP.set(getRuntimeStateApi.REQUEST_API_PATH, getRuntimeStateApi);
        SYSTEM_API_MAP.set(miningMachineInfoApi.REQUEST_API_PATH, miningMachineInfoApi);
        SYSTEM_API_MAP.set(getSystemMonitorApi.REQUEST_API_PATH, getSystemMonitorApi);
        SYSTEM_API_MAP.set(getSystemLoggerTypeApi.REQUEST_API_PATH, getSystemLoggerTypeApi);
        SYSTEM_API_MAP.set(getSystemLoggerListApi.REQUEST_API_PATH, getSystemLoggerListApi);
        SYSTEM_API_MAP.set(getSystemLoggerDetailApi.REQUEST_API_PATH, getSystemLoggerDetailApi);
        SYSTEM_API_MAP.set(deleteSystemLoggerApi.REQUEST_API_PATH, deleteSystemLoggerApi);
        SYSTEM_API_MAP.set(getEmailAddressApi.REQUEST_API_PATH, getEmailAddressApi);
        SYSTEM_API_MAP.set(setEmailAddressApi.REQUEST_API_PATH, setEmailAddressApi);
        SYSTEM_API_MAP.set(verifySystemSecretApi.REQUEST_API_PATH, verifySystemSecretApi);
        SYSTEM_API_MAP.set(setSystemWhiteListApi.REQUEST_API_PATH, setSystemWhiteListApi);
        SYSTEM_API_MAP.set(getSystemWhiteListApi.REQUEST_API_PATH, getSystemWhiteListApi);
        SYSTEM_API_MAP.set(deleteSystemWhiteListApi.REQUEST_API_PATH, deleteSystemWhiteListApi);
        SYSTEM_API_MAP.set(getProcessCPUApi.REQUEST_API_PATH, getProcessCPUApi);
        SYSTEM_API_MAP.set(getProcessMemoryApi.REQUEST_API_PATH, getProcessMemoryApi);
        SYSTEM_API_MAP.set(getProcessNetworkApi.REQUEST_API_PATH, getProcessNetworkApi);
        SYSTEM_API_MAP.set(systemStatusApi.REQUEST_API_PATH, systemStatusApi);
        SYSTEM_API_MAP.set(systemProcessApi.REQUEST_API_PATH, systemProcessApi);
        SYSTEM_API_MAP.set(getAllUntreatedTrsCountApi.REQUEST_API_PATH, getAllUntreatedTrsCountApi);
        SYSTEM_API_MAP.set(clearAllUntreatedTrsApi.REQUEST_API_PATH, clearAllUntreatedTrsApi);
        SYSTEM_API_MAP.set(restoreAllUntreatedTrsApi.REQUEST_API_PATH, restoreAllUntreatedTrsApi);

        Object.freeze(SYSTEM_API_MAP);
    }

    private __getSystemApi<T extends BFMetaNodeSDK.System.SystemApi>(apiPath: BFMetaNodeSDK.System.SYSTEM_API_PATH) {
        return this.__SYSTEM_API_MAP.get(apiPath) as T;
    }

    // #region systemApi
    /**安全关闭节点 */
    async safetyClose(argv: BFMetaNodeSDK.System.SafetyCloseParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.SafetyCloseApi>(SYSTEM_API_PATH.SYSTEM_SAFETY_CLOSE);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**设置节点密码 */
    async setSystemKey(argv: BFMetaNodeSDK.System.SetSystemKeyParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.SetSystemKeyApi>(SYSTEM_API_PATH.SYSTEM_SET_SYSTEM_KEY);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**验证节点密码 */
    async verifySystemKey(argv: BFMetaNodeSDK.System.VerifySystemKeyParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.VerifySystemKeyApi>(SYSTEM_API_PATH.SYSTEM_VERIFY_SYSTEM_KEY);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**增加节点管理员 */
    async addSystemAdmin(argv: BFMetaNodeSDK.System.AddSystemAdminParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.AddSystemAdminApi>(SYSTEM_API_PATH.SYSTEM_ADD_SYSTEM_ADMIN);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获取节点管理员 */
    async getSystemAdmin(argv: BFMetaNodeSDK.System.GetSystemAdminParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetSystemAdminApi>(SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_ADMIN);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**验证节点管理员 */
    async verifySystemAdmin(argv: BFMetaNodeSDK.System.VerifySystemAdminParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.VerifySystemAdminApi>(SYSTEM_API_PATH.SYSTEM_VERIFY_SYSTEM_ADMIN);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**删除节点管理员 */
    async deleteSystemAdmin(argv: BFMetaNodeSDK.System.DeleteSystemAdminParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.DeleteSystemAdminApi>(SYSTEM_API_PATH.SYSTEM_DELETE_SYSTEM_ADMIN);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**重置节点管理员 */
    async resetSystemAdmin(argv: BFMetaNodeSDK.System.ResetSystemAdminParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.ResetSystemAdminApi>(SYSTEM_API_PATH.SYSTEM_RESET_SYSTEM_ADMIN);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**绑定节点账户 */
    async bindingAccount(argv: BFMetaNodeSDK.System.BindingAccountParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.BindingAccountApi>(SYSTEM_API_PATH.SYSTEM_BINDING_ACCOUNT);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获得节点受托人 */
    async getSystemDelegate(argv: BFMetaNodeSDK.System.GetSystemDelegateParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetSystemDelegateApi>(SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_DELEGATE);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**设置节点配置信息 */
    async setSystemConfig(argv: BFMetaNodeSDK.System.SetSystemConfigParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.SetSystemConfigApi>(SYSTEM_API_PATH.SYSTEM_SET_SYSTEM_CONFIG);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获得节点配置信息 */
    async getSystemConfigInfoDetail(argv: BFMetaNodeSDK.System.GetSystemConfigInfoDetailParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetSystemConfigInfoDetailApi>(SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_CONFIG_INFO_DETAIL);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获得节点状态（实时信息） */
    async getRuntimeState(argv: BFMetaNodeSDK.System.GetRuntimeStateParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetRuntimeStateApi>(SYSTEM_API_PATH.SYSTEM_GET_RUNTIME_STATE);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**节点信息查询 */
    async miningMachineInfo(argv: BFMetaNodeSDK.System.MiningMachineInfoParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.MiningMachineInfoApi>(SYSTEM_API_PATH.SYSTEM_MINING_MACHINE_INFO);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获得节点访问统计信息 */
    async getSystemMonitor(argv: BFMetaNodeSDK.System.GetSystemMonitorParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetSystemMonitorApi>(SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_MONITOR);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获得节点运行日志类型 */
    async getSystemLoggerType(argv: BFMetaNodeSDK.System.GetSystemLoggerTypeParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetSystemLoggerTypeApi>(SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_LOGGER_TYPE);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获得节点运行日志列表 */
    async getSystemLoggerList(argv: BFMetaNodeSDK.System.GetSystemLoggerListParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetSystemLoggerListApi>(SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_LOGGER_LIST);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获得节点运行日志内容 */
    async getSystemLoggerDetail(argv: BFMetaNodeSDK.System.GetSystemLoggerDetailParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetSystemLoggerDetailApi>(SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_LOGGER_DETAIL);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**删除矿机运行日志 */
    async deleteSystemLogger(argv: BFMetaNodeSDK.System.DeleteSystemLoggerParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.DeleteSystemLoggerApi>(SYSTEM_API_PATH.SYSTEM_DELETE_SYSTEM_LOGGER);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获取节点邮箱地址 */
    async getEmailAddress(argv: BFMetaNodeSDK.System.GetEmailAddressParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetEmailAddressApi>(SYSTEM_API_PATH.SYSTEM_GET_EMAIL_ADDRESS);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**设置节点邮箱地址 */
    async setEmailAddress(argv: BFMetaNodeSDK.System.SetEmailAddressParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.SetEmailAddressApi>(SYSTEM_API_PATH.SYSTEM_SET_EMAIL_ADDRESS);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**通过节点私钥验证节点受托人 */
    async verifySystemSecret(argv: BFMetaNodeSDK.System.VerifySystemSecretParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.VerifySystemSecretApi>(SYSTEM_API_PATH.SYSTEM_VERIFY_SYSTEM_SECRET);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**设置节点访问白名单 */
    async setSystemWhiteList(argv: BFMetaNodeSDK.System.SetSystemWhiteListParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.SetSystemWhiteListApi>(SYSTEM_API_PATH.SYSTEM_SET_SYSTEM_WHITELIST);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**设置节点访问白名单 */
    async getSystemWhiteList(argv: BFMetaNodeSDK.System.GetSystemWhiteListParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetSystemWhiteListApi>(SYSTEM_API_PATH.SYSTEM_GET_SYSTEM_WHITELIST);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**删除节点访问白名单 */
    async deleteSystemWhiteList(argv: BFMetaNodeSDK.System.DeleteSystemWhiteListParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.DeleteSystemWhiteListApi>(SYSTEM_API_PATH.SYSTEM_DELETE_SYSTEM_WHITELIST);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获得节点进程CPU信息 */
    async getProcessCPU(argv: BFMetaNodeSDK.System.GetProcessCPUParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetProcessCPUApi>(SYSTEM_API_PATH.SYSTEM_GET_PROCESS_CPU);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获得节点进程内存信息 */
    async getProcessMemory(argv: BFMetaNodeSDK.System.GetProcessMemoryParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetProcessMemoryApi>(SYSTEM_API_PATH.SYSTEM_GET_PROCESS_MEMORY);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获得节点进程的网络相关信息 */
    async getProcessNetwork(argv: BFMetaNodeSDK.System.GetProcessNetworkParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetProcessNetworkApi>(SYSTEM_API_PATH.SYSTEM_GET_PROCESS_NETWORK);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**节点状态 */
    async systemStatus(argv: BFMetaNodeSDK.System.SystemStatusParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.SystemStatusApi>(SYSTEM_API_PATH.SYSTEM_STATUS);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**节点CPU，内存，网络信息 */
    async systemProcess(argv: BFMetaNodeSDK.System.SystemProcessParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.SystemProcessApi>(SYSTEM_API_PATH.SYSTEM_PROCESS);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获取所有的未处理交易数量 */
    async getAllUntreatedTrsCount(argv: BFMetaNodeSDK.System.GetAllUntreatedTrsCountParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.GetAllUntreatedTrsCountApi>(SYSTEM_API_PATH.SYSTEM_GET_All_UNTREATED_TRS_COUNT);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**清除所有的未处理交易 */
    async clearAllUntreatedTrs(argv: BFMetaNodeSDK.System.ClearAllUntreatedTrsParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.ClearAllUntreatedTrsApi>(SYSTEM_API_PATH.SYSTEM_CLEAR_All_UNTREATED_TRS);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**恢复所有的未处理交易 */
    async restoreAllUntreatedTrs(argv: BFMetaNodeSDK.System.RestoreAllUntreatedTrsParams) {
        const api = this.__getSystemApi<BFMetaNodeSDK.System.RestoreAllUntreatedTrsApi>(SYSTEM_API_PATH.SYSTEM_RESTORE_All_UNTREATED_TRS);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    // #endregion
}
