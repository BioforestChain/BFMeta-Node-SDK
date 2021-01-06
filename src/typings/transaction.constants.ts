// #region locationName
/**
 * 未知名称等级
 *
 */
export enum LOCATION_NAME_LEVEL {
  /**顶级(1 级) */
  TOP_LEVEL = "TOP_LEVEL",
  /**多级(2、3、4..... 级) */
  MULTI_LEVEL = "MULTI_LEVEL",
}
export enum LOCATION_NAME_OPERATION_TYPE {
  /**注册 lns */
  REGISTRATION,
  /**注销 */
  CANCELLATION,
}

/**
 * lns 解析类型
 *
 */
export enum RECORD_TYPE {
  /**IPV4解析 */
  IPV4 = "A",
  /**IPV6解析 */
  IPV6 = "AAAA",
  /**经纬度解析 */
  LNG_LAT = "LNG_LAT",
  /**账户地址解析 */
  ADDRESSV1 = "BLOCK_CHAIN_ACCOUNT_ADDRESS",
}

/**
 * lns 解析值操作类型
 *
 */
export enum RECORD_OPERATION_TYPE {
  /**添加解析值 */
  ADD,
  /**删除解析值 */
  DELETE,
  /**更新解析值 */
  UPDATE,
}
// #endregion

// #region account
/**账户状态 */
export enum ACCOUNT_STATUS {
  /**
   * NORMAL: 正常账户
   */
  NORMAL = 0x00,
  /**
   * FROZEN: 冻结作为事件接收账户的权力
   */
  FROZEN_IN = 0x01,
  /**
   * FROZEN: 冻结发起事件的权力
   */
  FROZEN_OUT = 0x10,
  /**
   * FROZEN: 冻结作为事件接收账户和发起事件的权力
   */
  FROZEN_IN_AND_OUT = 0x11,
}
// #endregion

// #region asset
/**资产状态 */
export enum ASSET_STATUS {
  /**
   * NORMAL: 正常资产
   */
  NORMAL = 0x00,
  /**
   * FROZEN: 冻结资产
   */
  FROZEN = 0x11,
}
// #endregion

// #region DApp
/**
 * DApp 类型
 *
 */
export enum DAPP_TYPE {
  /**付费应用 */
  PAID_APP = 0, // "PAID_APP",
  /**免费应用 */
  FREE_APP = 1, // "FREE_APP",
}
// #endregion

// #region gift
/**礼物的分配规则 */
export enum GIFT_DISTRIBUTION_RULE {
  /**平均分配 */
  AVERAGE,
  /**根据任意账户的地址的随机分配法 */
  RANDOM,
  /**根据接收者列表中账户地址的随机分配法
   * 这种规则会确保赠送的资产尽可能的被分配完，并且确保每一个接收账户都有能得到的金额
   */
  RECIPIENT_RANDOM,
}
// #endregion

// #region exchange asset
export enum EXCHANGE_DIRECTION {
  /**特殊资产来自 to 交易的发起账户，即出售 */
  ASSET_FROM_SENDER = 0,
  /**特殊资产来自 be 交易的发起账户，即求购 */
  ASSET_FROM_RECIPIENT = 1,
}

export enum SPECIAL_ASSET_TYPE {
  /**特殊资产类型：dapp */
  DAPP_ID,
  /**特殊资产类型：链域名 */
  LOCATION_NAME,
}
// #endregion

/**交易的接收范围 */
export enum RANGE_TYPE {
  /**不限定范围 */
  EMPTY = 0,
  /**多地址 */
  MULTI_ADDRESS = 1,
  /**DAppid范围 */
  MULTI_DAPPID = 2,
  /**链域名范围 */
  MULTI_LOCATION_NAME = 4,
}

// #region tpow
/**TPOW 可用参数列表 */
export enum TPOW_PARAMETER {
  /**账户的权益 */
  ACCOUNT_PARTICIPATION = "accountParticipation",
  /**账户当前持有的主权益数量 */
  ACCOUNT_POSSESS_MAIN_ASSETS = "accountPossessMainAssets",
  /**账户当前块内的的事件量 */
  ACCOUNT_NUMBER_OF_TRANSACTION_IN_BLOCK = "accountNumberOfTransactionInBlock",
  /**当前区块高度 */
  BLOCK_HEIGHT = "blockHeight",
}
/**TPOW 可用运算符 */
export enum TPOW_OPERATOR {
  /**加 */
  ADD = "+",
  /**减 */
  SUBTRACT = "-",
  /**乘 */
  MULTIPLY = "*",
  /**除 */
  DIVIDE = "/",
  /**乘方 */
  POWER = "**",
  /**取模 */
  MODULAR = "%",
}

/**TPOW 可用的运算辅助符号 */
export enum TPOW_AUXILIARY_SYMBOL {
  /**左括号 */
  LEFT_BRACKET = "(",
  /**右括号 */
  RIGHT_BRACKET = ")",
}
export const TPOW_PARAMETER_LIST = [
  TPOW_PARAMETER.ACCOUNT_PARTICIPATION,
  TPOW_PARAMETER.ACCOUNT_POSSESS_MAIN_ASSETS,
  TPOW_PARAMETER.ACCOUNT_NUMBER_OF_TRANSACTION_IN_BLOCK,
  TPOW_PARAMETER.BLOCK_HEIGHT,
];
export const TPOW_OPERATOR_LIST = [
  TPOW_OPERATOR.ADD,
  TPOW_OPERATOR.SUBTRACT,
  TPOW_OPERATOR.MULTIPLY,
  TPOW_OPERATOR.DIVIDE,
  TPOW_OPERATOR.POWER,
  TPOW_OPERATOR.MODULAR,
];
export const TPOW_AUXILIARY_SYMBOL_LIST = [
  TPOW_AUXILIARY_SYMBOL.LEFT_BRACKET,
  TPOW_AUXILIARY_SYMBOL.RIGHT_BRACKET,
];
// #endregion
