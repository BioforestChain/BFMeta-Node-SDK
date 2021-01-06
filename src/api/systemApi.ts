import { ApiBase } from "./apiBase";
import { API } from "./apiConst";

export namespace SYSTEM_API {
    /**节点管理接口基类 */
    abstract class SystemApi extends ApiBase {
        constructor(apiInfo: BFChainPcSdk.ApiInfo) {
            super(apiInfo);
        }

        getPrefix() {
            return "/api/system";
        }
    }

    /**安全关闭节点 */
    export class SafetyClose extends SystemApi {
        constructor() {
            super(API.SYSTEM.SAFETY_CLOSE);
        }
    }

    /**设置节点密码 */
    export class SetSystemKey extends SystemApi {
        constructor() {
            super(API.SYSTEM.SET_SYSTEM_KEY);
        }
    }

    /**验证节点密码 */
    export class VerifySystemKey extends SystemApi {
        constructor() {
            super(API.SYSTEM.VERIFY_SYSTEM_KEY);
        }
    }

    /**增加节点管理员 */
    export class AddSystemAdmin extends SystemApi {
        constructor() {
            super(API.SYSTEM.ADD_SYSTEM_ADMIN);
        }
    }

    /**获得节点管理员 */
    export class GetSystemAdmin extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_SYSTEM_ADMIN);
        }
    }

    /**验证节点管理员 */
    export class VerifySystemAdmin extends SystemApi {
        constructor() {
            super(API.SYSTEM.VERIFY_SYSTEM_ADMIN);
        }
    }

    /**删除节点管理员 */
    export class DelSystemAdmin extends SystemApi {
        constructor() {
            super(API.SYSTEM.DEL_SYSTEM_ADMIN);
        }
    }

    /**重置节点管理员 */
    export class ResetSystemAdmin extends SystemApi {
        constructor() {
            super(API.SYSTEM.RESET_SYSTEM_ADMIN);
        }
    }

    /**绑定节点账户 */
    export class BindingAccount extends SystemApi {
        constructor() {
            super(API.SYSTEM.BINDING_ACCOUNT);
        }
    }

    /**获得节点受托人 */
    export class GetSystemDelegate extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_SYSTEM_DELEGATE);
        }
    }

    /**节点信息查询 */
    export class MiningMachineInfo extends SystemApi {
        constructor() {
            super(API.SYSTEM.MINING_MACHINE_INFO);
        }
    }

    /**设置节点配置信息 */
    export class SetSystemConfig extends SystemApi {
        constructor() {
            super(API.SYSTEM.SET_SYSTEM_CONFIG);
        }
    }

    /**获得节点配置信息 */
    export class GetSystemConfigInfoDetail extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_SYSTEM_CONFIG_INFO_DETAIL);
        }
    }

    /**获得节点状态（实时信息） */
    export class GetRuntimeState extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_RUNTIME_STATE);
        }
    }

    /**获得节点访问统计信息 */
    export class GetSystemMonitor extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_SYSTEM_MONITOR);
        }
    }

    /**获得节点运行日志类型 */
    export class GetSystemLoggerType extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_SYSTEM_LOGGER_TYPE);
        }
    }

    /**获得节点运行日志列表 */
    export class GetSystemLoggerList extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_SYSTEM_LOGGER_LIST);
        }
    }

    /**获得节点运行日志内容 */
    export class GetSystemLoggerDetail extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_SYSTEM_LOGGER_DETAIL);
        }
    }

    /**删除矿机运行日志 */
    export class DelSystemLogger extends SystemApi {
        constructor() {
            super(API.SYSTEM.DEL_SYSTEM_LOGGER);
        }
    }

    /**获得节点邮箱地址 */
    export class GetEmailAddress extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_EMAIL_ADDRESS);
        }
    }

    /**设置节点邮箱地址 */
    export class SetEmailAddress extends SystemApi {
        constructor() {
            super(API.SYSTEM.SET_EMAIL_ADDRESS);
        }
    }

    /**通过节点私钥验证节点受托人 */
    export class VerifySystemSecret extends SystemApi {
        constructor() {
            super(API.SYSTEM.VERIFY_SYSTEM_SECRET);
        }
    }

    /**设置节点访问白名单 */
    export class SetSystemWhiteList extends SystemApi {
        constructor() {
            super(API.SYSTEM.SET_SYSTEM_WHITELIST);
        }
    }

    /**获得节点访问白名单 */
    export class GetSystemWhiteList extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_SYSTEM_WHITELIST);
        }
    }

    /**删除节点访问白名单 */
    export class DelSystemWhiteList extends SystemApi {
        constructor() {
            super(API.SYSTEM.DEL_SYSTEM_WHITELIST);
        }
    }

    /**获得节点进程的网络相关信息 */
    export class GetProcessNetwork extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_PROCESS_NETWORK);
        }
    }

    /**获得节点进程CPU信息 */
    export class GetProcessCPU extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_PROCESS_CPU);
        }
    }

    /**获得节点进程内存信息 */
    export class GetProcessMemory extends SystemApi {
        constructor() {
            super(API.SYSTEM.GET_PROCESS_MEMORY);
        }
    }

    /**定时发送节点状态 */
    export class SystemStatus extends SystemApi {
        constructor() {
            super(API.SYSTEM.SYSTEM_STATUS);
        }
    }

    /**定时发送节点CPU，内存，网络信息 */
    export class SystemProcess extends SystemApi {
        constructor() {
            super(API.SYSTEM.SYSTEM_PROCESS);
        }
    }
}
