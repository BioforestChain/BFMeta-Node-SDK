import {} from "@bfchain/sign-util";

export * from "./baseHelper";

export const enum EXCHANGE_DIRECTION {
    /**特殊资产来自 to 交易的发起账户，即出售 */
    ASSET_FROM_SENDER = 0,
    /**特殊资产来自 be 交易的发起账户，即求购 */
    ASSET_FROM_RECIPIENT = 1,
}

export const enum SPECIAL_ASSET_TYPE {
    /**特殊资产类型：dapp */
    DAPP_ID = 0,
    /**特殊资产类型：位名 */
    LOCATION_NAME = 1,
    /**特殊资产类型：非同质资产（非同质化权益） */
    ENTITY = 2,
}

export const enum PARENT_ASSET_TYPE {
    /**资产类型：dapp */
    DAPP = 1,
    /**资产类型：位名 */
    LOCATION_NAME = 2,
    /**资产类型：非同质资产 */
    ENTITY = 3,
    /**资产类型: 权益 */
    ASSETS = 5,
}

export const enum GIFT_DISTRIBUTION_RULE {
    /**平均分配 */
    AVERAGE = 0,
    /**根据任意账户的地址的随机分配法 */
    RANDOM = 1,
    /**根据接收者列表中账户地址的随机分配法
     * 这种规则会确保赠送的资产尽可能的被分配完，并且确保每一个接收账户都有能得到的金额
     */
    RECIPIENT_RANDOM = 2,
}

export const enum RECORD_OPERATION_TYPE {
    /**添加解析值 */
    ADD,
    /**删除解析值 */
    DELETE,
    /**更新解析值 */
    UPDATE,
}

export const enum RECORD_TYPE {
    /**自由类型 */
    UNKNOWN = 0,
    /**IPV4解析 */
    IPV4 = 1,
    /**IPV6解析 */
    IPV6 = 2,
    /**经纬度解析 */
    LNG_LAT = 3,
    /**账户地址解析 */
    ADDRESSV1 = 4,
    /**另一个位名 */
    LOCATION_NAME = 5,
    /**域名 */
    DNS = 6,
    /**url */
    URL = 7,
    /**电子邮箱 */
    EMAIL = 8,
}

export const enum LOCATION_NAME_OPERATION_TYPE {
    /**注册 lns */
    REGISTRATION,
    /**注销 */
    CANCELLATION,
}
