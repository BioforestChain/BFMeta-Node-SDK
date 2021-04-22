// 请求方式
export enum RequestMethod {
    GET = "get",
    POST = "post",
    PUT = "put",
}

export namespace API {
    export namespace BASIC {
        /**获得Bfchain版本号 */
        export const GET_BFCHAIN_VERSION: BFChainPcSdk.ApiInfo = {
            name: "getBfchainVersion",
            method: RequestMethod.GET,
        };

        /**获取交易类型 */
        export const GET_TRANSACTION_TYPE: BFChainPcSdk.ApiInfo = {
            name: "getTransactionType",
            method: RequestMethod.POST,
        };

        /**获取本地节点当前最新区块 */
        export const GET_LAST_BLOCK: BFChainPcSdk.ApiInfo = {
            name: "getLastBlock",
            method: RequestMethod.GET,
        };

        /**获取指定区块 */
        export const GET_BLOCK: BFChainPcSdk.ApiInfo = {
            name: "getBlock",
            method: RequestMethod.POST,
        };

        /**获取指定事件 */
        export const GET_TRANSACTIONS: BFChainPcSdk.ApiInfo = {
            name: "getTransactions",
            method: RequestMethod.POST,
        };

        /**生成账户私钥 */
        export const GENERATE_SECRET: BFChainPcSdk.ApiInfo = {
            name: "generateSecret",
            method: RequestMethod.POST,
        };

        /**获取账户公钥 */
        export const GET_ACCOUNT_PUBLIC_KEY: BFChainPcSdk.ApiInfo = {
            name: "getAccountPublicKey",
            method: RequestMethod.POST,
        };

        /**获取账户的最后一笔交易 */
        export const GET_ACCOUNT_LAST_TRANSACTION: BFChainPcSdk.ApiInfo = {
            name: "getAccountLastTransaction",
            method: RequestMethod.POST,
        };

        /**创建账户 */
        export const CREATE_ACCOUNT: BFChainPcSdk.ApiInfo = {
            name: "createAccount",
            method: RequestMethod.POST,
        };

        /**获取节点状态 */
        export const GET_BLOCKCHAIN_STATUS: BFChainPcSdk.ApiInfo = {
            name: "getBlockChainStatus",
            method: RequestMethod.GET,
        };
    }

    export namespace TRANSACTION {
        /**发送转账事件 */
        export const TR_TRANSFER_ASSET: BFChainPcSdk.ApiInfo = {
            name: "trTransferAsset",
            method: RequestMethod.POST,
        };

        /**发送设置二次密码事件 */
        export const TR_SIGNATURE: BFChainPcSdk.ApiInfo = {
            name: "trSignature",
            method: RequestMethod.POST,
        };

        /**发送设置用户名事件 */
        export const TR_USER_NAME: BFChainPcSdk.ApiInfo = {
            name: "trUsername",
            method: RequestMethod.POST,
        };

        /**发送注册受托人事件 */
        export const TR_DELEGATE: BFChainPcSdk.ApiInfo = {
            name: "trDelegate",
            method: RequestMethod.POST,
        };

        /**发送接收投票事件 */
        export const TR_ACCEPT_VOTE: BFChainPcSdk.ApiInfo = {
            name: "trAcceptVote",
            method: RequestMethod.POST,
        };

        /**发送拒绝投票事件  */
        export const TR_REJECT_VOTE: BFChainPcSdk.ApiInfo = {
            name: "trRejectVote",
            method: RequestMethod.POST,
        };

        /**发送投票事件 */
        export const TR_VOTE: BFChainPcSdk.ApiInfo = {
            name: "trVote",
            method: RequestMethod.POST,
        };

        /**发送dapp事件 */
        export const TR_DAPP: BFChainPcSdk.ApiInfo = {
            name: "trDapp",
            method: RequestMethod.POST,
        };

        /**发送dapp购买事件 */
        export const TR_DAPP_PURCHASING: BFChainPcSdk.ApiInfo = {
            name: "trDappPurchasing",
            method: RequestMethod.POST,
        };

        /**发送存证事件 */
        export const TR_MARK: BFChainPcSdk.ApiInfo = {
            name: "trMark",
            method: RequestMethod.POST,
        };

        /**发送资产发行事件 */
        export const TR_ISSUE_ASSET: BFChainPcSdk.ApiInfo = {
            name: "trIssueAsset",
            method: RequestMethod.POST,
        };

        /**发送销毁资产事件 */
        export const TR_DESTROYASSET: BFChainPcSdk.ApiInfo = {
            name: "trDestroyAsset",
            method: RequestMethod.POST,
        };

        /**发送数字资产交换事件 */
        export const TR_TO_EXCHANGE_ASSET: BFChainPcSdk.ApiInfo = {
            name: "trToExchangeAsset",
            method: RequestMethod.POST,
        };

        /**发送接收数字资产交换事件 */
        export const TR_BE_EXCHANGE_ASSET: BFChainPcSdk.ApiInfo = {
            name: "trBeExchangeAsset",
            method: RequestMethod.POST,
        };

        /**发送特殊资产交换事件 */
        export const TR_TO_EXCHANGE_SPEC_ASSET: BFChainPcSdk.ApiInfo = {
            name: "trToExchangeSpecAsset",
            method: RequestMethod.POST,
        };

        /**发送接收特殊资产交换事件 */
        export const TR_BE_EXCHANGE_SPEC_ASSET: BFChainPcSdk.ApiInfo = {
            name: "trBeExchangeSpecAsset",
            method: RequestMethod.POST,
        };

        /**发送资产赠与事件（红包事件） */
        export const TR_GIFT_ASSET: BFChainPcSdk.ApiInfo = {
            name: "trGiftAsset",
            method: RequestMethod.POST,
        };

        /**发送接收资产赠与事件（抢红包事件） */
        export const TR_GRAB_ASSET: BFChainPcSdk.ApiInfo = {
            name: "trGrabAsset",
            method: RequestMethod.POST,
        };

        /**发送委托数字资产事件 */
        export const TR_TRUST_ASSET: BFChainPcSdk.ApiInfo = {
            name: "trTrustAsset",
            method: RequestMethod.POST,
        };

        /**发送签收委托数字资产事件 */
        export const TR_SIGN_FOR_ASSET: BFChainPcSdk.ApiInfo = {
            name: "trSignForAsset",
            method: RequestMethod.POST,
        };

        /**发送注册、注销位名系统事件 */
        export const TR_LOCATION_NAME: BFChainPcSdk.ApiInfo = {
            name: "trLocationName",
            method: RequestMethod.POST,
        };

        /**发送设置位名系统管理员事件 */
        export const TR_SET_LNS_MANAGER: BFChainPcSdk.ApiInfo = {
            name: "trSetLnsManager",
            method: RequestMethod.POST,
        };

        /**发送设置位名系统解析值事件 */
        export const TR_SET_LNS_RECORD_VALUE: BFChainPcSdk.ApiInfo = {
            name: "trSetLnsRecordValue",
            method: RequestMethod.POST,
        };
    }

    export namespace SYSTEM {
        /**安全关闭节点 */
        export const SAFETY_CLOSE: BFChainPcSdk.ApiInfo = {
            name: "safetyClose",
            method: RequestMethod.POST,
        };

        /**设置节点密码 */
        export const SET_SYSTEM_KEY: BFChainPcSdk.ApiInfo = {
            name: "setSystemKey",
            method: RequestMethod.POST,
        };

        /**验证节点密码 */
        export const VERIFY_SYSTEM_KEY: BFChainPcSdk.ApiInfo = {
            name: "verifySystemKey",
            method: RequestMethod.POST,
        };

        /**增加节点管理员 */
        export const ADD_SYSTEM_ADMIN: BFChainPcSdk.ApiInfo = {
            name: "addSystemAdmin",
            method: RequestMethod.POST,
        };

        /**获得节点管理员 */
        export const GET_SYSTEM_ADMIN: BFChainPcSdk.ApiInfo = {
            name: "getSystemAdmin",
            method: RequestMethod.POST,
        };

        /**验证节点管理员 */
        export const VERIFY_SYSTEM_ADMIN: BFChainPcSdk.ApiInfo = {
            name: "verifySystemAdmin",
            method: RequestMethod.POST,
        };

        /**删除节点管理员 */
        export const DEL_SYSTEM_ADMIN: BFChainPcSdk.ApiInfo = {
            name: "delSystemAdmin",
            method: RequestMethod.POST,
        };

        /**重置节点管理员 */
        export const RESET_SYSTEM_ADMIN: BFChainPcSdk.ApiInfo = {
            name: "resetSystemAdmin",
            method: RequestMethod.POST,
        };

        /**绑定节点账户 */
        export const BINDING_ACCOUNT: BFChainPcSdk.ApiInfo = {
            name: "bindingAccount",
            method: RequestMethod.POST,
        };

        /**获得节点受托人 */
        export const GET_SYSTEM_DELEGATE: BFChainPcSdk.ApiInfo = {
            name: "getSystemDelegate",
            method: RequestMethod.POST,
        };

        /**节点信息查询 */
        export const MINING_MACHINE_INFO: BFChainPcSdk.ApiInfo = {
            name: "miningMachineInfo",
            method: RequestMethod.POST,
        };

        /**设置节点配置信息 */
        export const SET_SYSTEM_CONFIG: BFChainPcSdk.ApiInfo = {
            name: "setSystemConfig",
            method: RequestMethod.POST,
        };

        /**获得节点配置信息 */
        export const GET_SYSTEM_CONFIG_INFO_DETAIL: BFChainPcSdk.ApiInfo = {
            name: "getSystemConfigInfoDetail",
            method: RequestMethod.POST,
        };

        /**获得节点状态（实时信息） */
        export const GET_RUNTIME_STATE: BFChainPcSdk.ApiInfo = {
            name: "getRuntimeState",
            method: RequestMethod.POST,
        };

        /**获得节点访问统计信息 */
        export const GET_SYSTEM_MONITOR: BFChainPcSdk.ApiInfo = {
            name: "getSystemMonitor",
            method: RequestMethod.POST,
        };

        /**获得节点运行日志类型 */
        export const GET_SYSTEM_LOGGER_TYPE: BFChainPcSdk.ApiInfo = {
            name: "getSystemLoggerType",
            method: RequestMethod.POST,
        };

        /**获得节点运行日志列表 */
        export const GET_SYSTEM_LOGGER_LIST: BFChainPcSdk.ApiInfo = {
            name: "getSystemLoggerList",
            method: RequestMethod.POST,
        };

        /**获得节点运行日志内容 */
        export const GET_SYSTEM_LOGGER_DETAIL: BFChainPcSdk.ApiInfo = {
            name: "getSystemLoggerDetail",
            method: RequestMethod.POST,
        };

        /**删除矿机运行日志 */
        export const DEL_SYSTEM_LOGGER: BFChainPcSdk.ApiInfo = {
            name: "delSystemLogger",
            method: RequestMethod.POST,
        };

        /**获得节点邮箱地址 */
        export const GET_EMAIL_ADDRESS: BFChainPcSdk.ApiInfo = {
            name: "getEmailAddress",
            method: RequestMethod.POST,
        };

        /**设置节点邮箱地址 */
        export const SET_EMAIL_ADDRESS: BFChainPcSdk.ApiInfo = {
            name: "setEmailAddress",
            method: RequestMethod.POST,
        };

        /**通过节点私钥验证节点受托人 */
        export const VERIFY_SYSTEM_SECRET: BFChainPcSdk.ApiInfo = {
            name: "verifySystemSecret",
            method: RequestMethod.POST,
        };

        /**设置节点访问白名单 */
        export const SET_SYSTEM_WHITELIST: BFChainPcSdk.ApiInfo = {
            name: "setSystemWhiteList",
            method: RequestMethod.POST,
        };

        /**获得节点访问白名单 */
        export const GET_SYSTEM_WHITELIST: BFChainPcSdk.ApiInfo = {
            name: "getSystemWhiteList",
            method: RequestMethod.POST,
        };

        /**删除节点访问白名单 */
        export const DEL_SYSTEM_WHITELIST: BFChainPcSdk.ApiInfo = {
            name: "delSystemWhiteList",
            method: RequestMethod.POST,
        };

        /**获得节点进程的网络相关信息 */
        export const GET_PROCESS_NETWORK: BFChainPcSdk.ApiInfo = {
            name: "getProcessNetwork",
            method: RequestMethod.POST,
        };

        /**获得节点进程CPU信息 */
        export const GET_PROCESS_CPU: BFChainPcSdk.ApiInfo = {
            name: "getProcessCPU",
            method: RequestMethod.POST,
        };

        /**获得节点进程内存信息 */
        export const GET_PROCESS_MEMORY: BFChainPcSdk.ApiInfo = {
            name: "getProcessMemory",
            method: RequestMethod.POST,
        };

        /**定时发送节点状态  */
        export const SYSTEM_STATUS: BFChainPcSdk.ApiInfo = {
            name: "systemStatus",
            method: RequestMethod.POST,
        };

        /**定时发送节点CPU，内存，网络信息 */
        export const SYSTEM_PROCESS: BFChainPcSdk.ApiInfo = {
            name: "systemProcess",
            method: RequestMethod.POST,
        };
    }
}
