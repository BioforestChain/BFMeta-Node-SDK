import { CryptoHelper } from "./cryptoHelper";
import { FecthDemo } from "./fecthDemo";
import { BFMetaSDK, REQUEST_PROTOCOL } from "../../src";
export const cryptoHelper = new CryptoHelper();
export const fecthDemo = new FecthDemo();

export const bfmetaSDK = new BFMetaSDK(
    {
        node: {
            /**节点 ip, 默认值 [127.0.0.1] */
            ip: "192.168.200.21",
            /**节点端口号, 默认值 9003 */
            port: 9003,
        },
        //  "请求超时时间, 单位 ms, 默认 10000",
        requestTimeOut: 10000,
        requestProtocol: REQUEST_PROTOCOL.HTTP,
    },
    { netType: "testnet", cryptoHelper },
    fecthDemo
);
export const CHAIN_INFO = {
    chainName: "bfmetatest",
    chainAssetType: "BFMTEST",
    chainMagic: "YC4CN",
};
