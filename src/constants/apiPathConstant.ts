export const enum API_NAMESPACE {
    /**basic api 命名空间 */
    BASIC = "api/basic",
    /**system api 命名空间 */
    SYSTEM = "api/system",
    /**transaction api 命名空间 */
    TRANSACTION = "api/transaction",
}

export const enum BASIC_API_PATH {
    /**设置矿机密码 */
    BASIC_SET_PASSWORD = "/setPassword",
    /**创建创世块 */
    BASIC_GENERATE_GENESIS_BLOCK = "/generateGenesisBlock",
    /**获取区块 */
    BASIC_GET_BLOCK = "/getBlock",
    /**获取最新区块 */
    BASIC_GET_LAST_BLOCK = "/getLastBlock",
    /**获取交易类型 */
    BASIC_GET_TRANSACTION_TYPE = "/getTransactionType",
    /**获取交易 */
    BASIC_GET_TRANSACTIONS = "/getTransactions",
    /**获取区块链版本号 */
    BASIC_GET_BFCHAIN_VERSION = "/getBfchainVersion",
    /**获取区块链版本号 */
    BASIC_GET_NODE_VERSION = "/nodeVersion",
    /**获取区块链版本号 */
    BASIC_GET_BLOCK_CHAIN_STATUS = "/getBlockChainStatus",

    /**获取随机主密码 */
    BASIC_GENERATE_SECRET = "/generateSecret",
    /**创建账户 */
    BASIC_CREATE_ACCOUNT = "/createAccount",
    /**获取账户公钥 */
    BASIC_GET_ACCOUNT_PUBLICKEY = "/getAccountPublicKey",
    /**获取账户最后一笔交易 */
    BASIC_GET_ACCOUNT_LAST_TRANSACTION = "/getAccountLastTransaction",
    /**获取账户指定类型的最后一笔交易 */
    BASIC_GET_ACCOUNT_LAST_TYPE_TRANSACTION = "/getAccountLastTypeTransaction",
    /**临时设置KV二进制数据 */
    SET_KVSTORAGE_TEMP = "/setKVStorageTemp",
    /**获取KV二进制数据 */
    GET_KVSTORAGE = "/getKVStorage",
}

export const enum SERVICE_API_PATH {
    SERVICE_USER_GET_PACKAGE_SOURCE = "/user/getPackageSource",
    SERVICE_USER_GET_UPLOAD_PACKAGE_TOKEN = "/user/getUploadPackageToken",
    SERVICE_USER_TEST = "/user/test",

    SERVICE_ADMIN_GET_PACKAGE_INFO = "/admin/getPackageInfo",
    SERVICE_ADMIN_GET_ADMIN_PACKAGE = "/admin/getAdminPackage",
    SERVICE_ADMIN_GET_MINER_MACHINE_DAPP_TYPE = "/admin/getMinerMachineDappType",
    SERVICE_ADMIN_GET_DOWNLOADED_PACKAGE_INFO = "/admin/getDownloadedPackageInfo",
    SERVICE_ADMIN_GET_ADMIN_UPLOAD_PACKAGE_TOKEN = "/admin/getAdminUploadPackageToken",
    SERVICE_ADMIN_SET_MINER_MACHINE_DAPP_TYPE = "/admin/setMinerMachineDappType",
    SERVICE_ADMIN_DOWNLOAD_PACKAGE = "/admin/downloadPackage",
    SERVICE_ADMIN_INSTALL_PACKAGE = "/admin/installPackage",
    SERVICE_ADMIN_CLEAR_DOWNLOAD_STATE = "/admin/clearDownloadState",
    SERVICE_ADMIN_UNINSTALL_AND_DELETE_PACKAGE = "/admin/uninstallAndDeletePackage",
    SERVICE_ADMIN_INSTALL_PACKAGE_HISTORY = "/admin/installPackageHistory",
    SERVICE_ADMIN_TEST = "/admin/test",

    SERVICE_AUTH_CODE = "/authCode",
    SERVICE_ADD_USER = "/addUser",
    SERVICE_ADD_SYSTEM_ADMINUSER = "/addSystemAdminuser",
    SERVICE_GET_PACKAGE_FILE = "/getPackageFile",
    SERVICE_GET_USER_PACKAGE = "/getUserPackage",
}

export const enum SYSTEM_API_PATH {
    SYSTEM_SAFETY_CLOSE = "/safetyClose",

    SYSTEM_SET_SYSTEM_KEY = "/setSystemKey",
    SYSTEM_VERIFY_SYSTEM_KEY = "/verifySystemKey",
    SYSTEM_ADD_SYSTEM_ADMIN = "/addSystemAdmin",
    SYSTEM_GET_SYSTEM_ADMIN = "/getSystemAdmin",
    SYSTEM_VERIFY_SYSTEM_ADMIN = "/verifySystemAdmin",
    SYSTEM_DELETE_SYSTEM_ADMIN = "/deleteSystemAdmin",
    SYSTEM_RESET_SYSTEM_ADMIN = "/resetSystemAdmin",

    SYSTEM_BINDING_ACCOUNT = "/bindingAccount",
    SYSTEM_GET_SYSTEM_DELEGATE = "/getSystemDelegate",

    SYSTEM_SET_SYSTEM_CONFIG = "/setSystemConfig",
    SYSTEM_GET_SYSTEM_CONFIG_INFO_DETAIL = "/getSystemConfigInfoDetail",

    SYSTEM_GET_RUNTIME_STATE = "/getRuntimeState",
    SYSTEM_MINING_MACHINE_INFO = "/miningMachineInfo",

    SYSTEM_GET_SYSTEM_MONITOR = "/getSystemMonitor",
    SYSTEM_GET_SYSTEM_LOGGER_TYPE = "/getSystemLoggerType",
    SYSTEM_GET_SYSTEM_LOGGER_LIST = "/getSystemLoggerList",
    SYSTEM_GET_SYSTEM_LOGGER_DETAIL = "/getSystemLoggerDetail",
    SYSTEM_DELETE_SYSTEM_LOGGER = "/delSystemLogger",

    SYSTEM_GET_EMAIL_ADDRESS = "/getEmailAddress",
    SYSTEM_SET_EMAIL_ADDRESS = "/setEmailAddress",

    SYSTEM_VERIFY_SYSTEM_SECRET = "/verifySystemSecret",
    SYSTEM_SET_SYSTEM_WHITELIST = "/setSystemWhitelist",
    SYSTEM_GET_SYSTEM_WHITELIST = "/getSystemWhitelist",
    SYSTEM_DELETE_SYSTEM_WHITELIST = "/delSystemWhitelist",

    SYSTEM_GET_PROCESS_CPU = "/getProcessCpu",
    SYSTEM_GET_PROCESS_MEMORY = "/getProcessMemory",
    SYSTEM_GET_PROCESS_NETWORK = "/getProcessNetwork",

    SYSTEM_STATUS = "/systemStatus",
    SYSTEM_PROCESS = "/systemProcess",

    SYSTEM_GET_SERVICE_INFO = "systemGetServiceInfo",
    SYSTEM_GET_SYSTEM_NODEINFO = "systemGetSystemNodeinfo",
    SYSTEM_GET_SERVICE_PEERINFO = "systemGetServicePeerinfo",
    SYSTEM_SET_SOCKET_EMIT_ENABLE = "systemSetSocketEmitEnable",
    SYSTEM_GET_INJECT_GENERATORS = "systemGetInjectGenerators",
    SYSTEM_SET_SYSTEM_DELEGATE_MULTI = "systemSetSystemDelegateMulti",
    SYSTEM_GET_SYSTEM_DELEGATE_DETAIL = "systemGetSystemDelegateDetail",
}

export const enum UPGRADE_API_PATH {
    /**查看升级服务版本号 */
    UPGRADE_VERSION = "post/upgradeVersion",
    /**更新升级服务 */
    UPGRADE_SELF = "post/upgradeSelf",
    /**关闭节点 */
    NODE_CLOSE = "post/close",
    /**重启节点 */
    NODE_RESTART = "post/restart",
    /**恢复节点(升级节点失败) */
    NODE_RECOVER = "post/recover",
    /**更新节点 */
    NODE_UPGRADE = "post/upgrade",
    /**下载更新包 */
    DOWNLOAD_PACKAGE = "get/download",
    /**获取升级进度 */
    UPGRADE_PROCESS = "get/upgrade/process",
    /**获取升级任务信息 */
    TASK_INFO = "get/task/info",
    /**获取版本信息 */
    UPGRADE_INFO = "post/upgrade/info",
    /**获取升级服务状态 */
    UPGRADE_STATUS = "get/upgrade/status",
}

export const enum GENERATE_TRANSACTION_API_PATH {
    /**通用的构建交易，就是没有 */
    TR_COMMON = "/generate",

    /**创建设置用户名交易 */
    TR_USERNAME = "/generate/username",
    /**创建设置安全密码交易 */
    TR_SIGNATURE = "/generate/signature",
    /**创建注册受托人交易 */
    TR_DELEGATE = "/generate/delegate",
    /**创建开启收票交易 */
    TR_ACCEPT_VOTE = "/generate/acceptVote",
    /**创建关闭收票交易 */
    TR_REJECT_VOTE = "/generate/rejectVote",
    /**创建治理投票交易 */
    TR_VOTE = "/generate/vote",

    /**创建权益发行交易 */
    TR_ISSUE_ASSET = "/generate/issueAsset",
    /**创建权益转移交易 */
    TR_TRANSFER_ASSET = "/generate/transferAsset",
    /**创建权益销毁交易 */
    TR_DESTROY_ASSET = "/generate/destroyAsset",
    /**创建权益赠送交易 */
    TR_GIFT_ASSET = "/generate/giftAsset",
    /**创建接受权益赠送交易 */
    TR_GRAB_ASSET = "/generate/grabAsset",
    /**创建权益委托交易 */
    TR_TRUST_ASSET = "/generate/trustAsset",
    /**创建接受权益委托交易 */
    TR_SIGN_FOR_ASSET = "/generate/signForAsset",
    /**创建权益交换交易 */
    TR_TO_EXCHANGE_ASSET = "/generate/toExchangeAsset",
    /**创建接受权益交换交易 */
    TR_BE_EXCHANGE_ASSET = "/generate/beExchangeAsset",

    /**创建注册 dappid 交易 */
    TR_DAPP = "/generate/dapp",
    /**创建 dappid 购买 交易 */
    TR_DAPP_PURCHASING = "/generate/dappPurchasing",
    /**创建数据存证交易 */
    TR_MARK = "/generate/mark",
    /**创建注册/注销链域名交易 */
    TR_LOCATION_NAME = "/generate/locationName",
    /**创建设置链域名管理员交易 */
    TR_SET_LNS_MANAGER = "/generate/setLnsManager",
    /**创建设置链域名解析值交易 */
    TR_SET_LNS_RECORD_VALUE = "/generate/setLnsRecordValue",
    /**创建资产交换交易 */
    TR_TO_EXCHANGE_SPECIAL_ASSET = "/generate/toExchangeSpecAsset",
    /**创建接受资产交换交易 */
    TR_BE_EXCHANGE_SPECIAL_ASSET = "/generate/beExchangeSpecAsset",

    /**创建非同质权益模板 - V0 冻结发行 */
    TR_ISSUE_ENTITY_FACTORY = "/generate/issueEntityFactory",
    /**创建非同质权益模板 - V1 销毁发行 */
    TR_ISSUE_ENTITY_FACTORY_V1 = "/generate/issueEntityFactoryV1",
    /**创建非同质权益 */
    TR_ISSUE_ENTITY = "/generate/issueEntity",
    /**销毁非同质权益 */
    TR_DESTROY_ENTITY = "/generate/destroyEntity",

    /**创建任意资产转移交易 */
    TR_TRANSFER_ANY = "/generate/transferAny",
    /**创建任意资产赠送交易 */
    TR_GIFT_ANY = "/generate/giftAny",
    /**创建接受任意资产赠送交易 */
    TR_GRAB_ANY = "/generate/grabAny",

    /**创建任意资产交换交易 */
    TR_TO_EXCHANGE_ANY = "/generate/toExchangeAny",
    /**创建接受任意资产交换交易 */
    TR_BE_EXCHANGE_ANY = "/generate/beExchangeAny",

    /**批量创建非同质权益 */
    TR_ISSUE_ENTITY_MULTI = "/generate/issueEntityMulti",

    /**创建批量任意资产交换交易 */
    TR_TO_EXCHANGE_ANY_MULTI = "/generate/toExchangeAnyMulti",
    /**创建接受批量任意资产交换交易 */
    TR_BE_EXCHANGE_ANY_MULTI = "/generate/beExchangeAnyMulti",

    /**创建注册链交易 */
    TR_REGISTER_CHAIN = "/generate/registerChain",
    /**创建权益迁出交易 */
    TR_EMIGRATE_ASSET = "/generate/emigrateAsset",
    /**创建权益迁入交易 */
    TR_IMMIGRATE_ASSET = "/generate/immigrateAsset",

    /**创建发行凭证交易 */
    TR_ISSUE_CERTIFICATE = "/generate/issueCertificate",
    /**创建销毁交易 */
    TR_DESTROY_CERTIFICATE = "/generate/destroyCertificate",
}

export const enum MIGRATE_CERTIFICATE_API_PATH {
    /**创建迁移凭证 */
    MIGRATE_CERTIFICATE_GENERATE = "/generate/migrateCertificate",
    /**迁移凭证的迁出授权签名 */
    MIGRATE_CERTIFICATE_FROM_AUTH_SIGNATURE = "/generate/migrateCertificateFromAuthSignature",
    /**迁移凭证的迁入授权签名 */
    MIGRATE_CERTIFICATE_TO_AUTH_SIGNATURE = "/generate/migrateCertificateToAuthSignature",
}

export const enum COMMON_API_PATH {
    /**是否是合法的地址 */
    VERIFY_ADDRESS = "/common/verifyAddress",
    /**是否是合法的公钥 */
    VERIFY_PUBLICKEY = "/common/verifyPublicKey",
    /**创建公私钥对 */
    GENERATE_KEYPAIR = "/common/generateKeypair",
    /**创建账户 */
    GENERATE_ACCOUNT = "/common/generateAccount",
    /**根据密钥获取地址*/
    GENERATE_ADDRESS_BY_SECRET = "/common/generateAddressBySecret",
    /**根据公钥获取地址*/
    GENERATE_ADDRESS_BY_PUBLICKEY = "/common/generateAddressByPublicKey",
    /**非对称加密 */
    ASYMMETRIC_ENCRYPT = "/common/asymmetricEncrypt",
    /**非对称解密 */
    ASYMMETRIC_DECRYPT = "/common/asymmetricDecrypt",
    /**计算事件的最小手续费 */
    CALC_TRANSACTION_MIN_FEE = "/common/calcTransactionMinFee",

    /**创建加密签名*/
    GENERATE_CIPHERTEXT_SIGNATURE = "/common/generateCiphertextSignature",
}
