/**请求协议 */
export const enum REQUEST_PROTOCOL {
    /**http 协议 */
    HTTP = "http",
    /**websocket 协议 */
    WEBSOCKET = "websocket",
}

/**请求类型 */
export const enum REQUEST_TYPE {
    /**get 请求 */
    GET = "get",
    /**post 请求 */
    POST = "post",
}

/**区块链网络类型 */
export const enum BLOCK_CHAIN_NET_WORK_TYPE {
    /**测试网络 */
    TESTNET = "testnet",
    /**正式网络 */
    MAINNET = "mainnet",
}

/**主密钥的语言类型 */
export const enum SECRET_LANGUAGE_TYPE {
    /**汉语 */
    CHINESE = "cn",
    /**日语 */
    JAPANESE = "jp",
    /**西班牙语 */
    SPANISH = "sp",
    /**意大利语 */
    ITALIAN = "it",
    /**法语 */
    FRENCH = "fr",
    /**英语 */
    ENGLISH = "en",
}

/**Read File Type */
export const enum READ_FILE_TYPE {
    READ_FILE_ASYNC = 0,
    CREATE_READ_STREAM = 1,
}

//二进制数据单文件大小限制
export const maxOneFileSize = 200 * 1024 * 1024; //200M

export const enum MACRO_INPUT_TYPE {
    TEXT = "text",
    ADDRESS = "address",
    PUBLICKEY = "publicKey",
    SIGNATURE = "signature",
    NUMBER = "number",
    CALC = "calc",
}

export const enum MACRO_NUMBER_FORMAT {
    /**字符串 */
    STRING = "string",
    /**数字字面量 */
    LITERAL = "literal",
}

export const enum CERTIFICATE_TYPE {
    /**禁止销毁 */
    DESTROY_FORBIDDEN = 0,
    /**发行者销毁 */
    DESTROY_BY_APPLICANT = 1,
    /**拥有者销毁 */
    DESTROY_BY_POSSESSOR = 2,
}
