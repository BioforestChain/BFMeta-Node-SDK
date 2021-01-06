//节点api接口
export enum CHAIN_API_PATH {
    /**获取本地节点当前最新区块 */
    getLastBlock = "get/api/basic/getLastBlock",
    /**获取指定区块 */
    getBlock = "post/api/basic/getBlock",
    /**查询交易 */
    getTransactions = "post/api/basic/getTransactions",
    /**获取指定账户 */
    getAccountInfoAndAssets = "post/api/basic/getAccountInfoAndAssets",
    /**创建账户 */
    createAccount = "post/api/basic/createAccount",

    /**存证交易 */
    trMark = "post/api/transaction/trMark",
}

//节点事件类型
export enum CHAIN_TR_TYPE {
    /**注册为受托人 */
    TR_DELEGATE = "BFT-BFCHAIN-BSE-02",
    /**存证 */
    TR_MARK = "BFT-BFCHAIN-EXT-00",
}
