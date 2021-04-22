import { API } from "./apiConst";
import { ApiBase } from "./apiBase";

export namespace BASIC_API {
    /**基础接口基类 */
    abstract class BasicApi extends ApiBase {
        constructor(apiInfo: BFChainPcSdk.ApiInfo) {
            super(apiInfo);
        }

        getPrefix() {
            return "/api/basic";
        }
    }

    /**获得Bfchain版本号 */
    export class GetBfchainVersion extends BasicApi {
        constructor() {
            super(API.BASIC.GET_BFCHAIN_VERSION);
        }
    }

    /**获取交易类型 */
    export class GetTransactionType extends BasicApi {
        private __trTypeMap = new Map<BFChainPcSdk.TRANSACTION_TYPES_BASE, string>();
        constructor() {
            super(API.BASIC.GET_TRANSACTION_TYPE);
        }

        async execute(request: BFChainPcSdk.ApiRequest.BASIC.GetTransactionType): Promise<BFChainPcSdk.ApiResp.BASIC.GetTransactionType> {
            const type = this.__trTypeMap.get(request.baseType);
            if (type) {
                return { success: true, result: { type } };
            }
            const result = (await this.sendRequest(request)) as BFChainPcSdk.ApiResp.BASIC.GetTransactionType;
            if (result.success && result.result.type) {
                //缓存交易类型
                this.__trTypeMap.set(request.baseType, result.result.type);
            }
            return result;
        }
    }

    /**获取本地节点当前最新区块 */
    export class GetLastBlock extends BasicApi {
        constructor() {
            super(API.BASIC.GET_LAST_BLOCK);
        }
    }

    /**获取指定区块 */
    export class GetBlock extends BasicApi {
        constructor() {
            super(API.BASIC.GET_BLOCK);
        }
    }

    /**获取指定事件 */
    export class GetTransactions extends BasicApi {
        constructor() {
            super(API.BASIC.GET_TRANSACTIONS);
        }
    }

    /**生成账户私钥 */
    export class GenerateSecret extends BasicApi {
        constructor() {
            super(API.BASIC.GENERATE_SECRET);
        }
    }

    /**获取账户公钥 */
    export class GetAccountPublicKey extends BasicApi {
        constructor() {
            super(API.BASIC.GET_ACCOUNT_PUBLIC_KEY);
        }
    }

    /**获取账户的最后一笔交易 */
    export class GetAccountLastTransaction extends BasicApi {
        constructor() {
            super(API.BASIC.GET_ACCOUNT_LAST_TRANSACTION);
        }
    }

    /**创建账户 */
    export class CreateAccount extends BasicApi {
        constructor() {
            super(API.BASIC.CREATE_ACCOUNT);
        }
    }

    /**获取节点状态 */
    export class GetBlockChainStatus extends BasicApi {
        constructor() {
            super(API.BASIC.GET_BLOCKCHAIN_STATUS);
        }
    }
}
