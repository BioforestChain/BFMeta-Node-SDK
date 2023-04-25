declare namespace BFMetaNodeSDK {
    type SignUtilParam = {
        netType: "mainnet" | "testnet";
        cryptoHelper: BFMetaSignUtil.CryptoHelperInterface;
    };

    type NodeHost = {
        /**节点 ip, 默认值 [127.0.0.1] */
        ip: string;
        /**节点端口号, 默认值 9003 */
        port: number;
        /**升级服务端口号, 仅在请求协议为websocket时支持 */
        upgradePort?: number;
    };

    interface ApiConfig {
        /**配置文件的根路径，如果提供的路径不存在会使用默认路径 */
        configRootPath?: string;
        /**节点信息 */
        node?: NodeHost;
        /**多节点模式 */
        multiNodes?: { enable: boolean; nodes: NodeHost[] };
        /**请求超时时间，单位 ms，默认 10000 */
        requestTimeOut: number;
        /**请求协议, http || websocket, 默认值 websocket */
        requestProtocol: BFMetaNodeSDK.REQUEST_PROTOCOL;
        /**transactionServer Port */
        transactionServerPort?: number;
    }

    type ApiConfigOptions = Partial<ApiConfig>;
}
