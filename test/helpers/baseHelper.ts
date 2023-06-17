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
            port: 19003,
        },
        multiNodes: {
            enable: true,
            nodes: [
                {
                    ip: "34.84.140.206",
                    port: 19003,
                },
            ],
        },
        //  "请求超时时间, 单位 ms, 默认 10000",
        requestTimeOut: 10000,
        requestProtocol: REQUEST_PROTOCOL.WEBSOCKET,
    },
    { netType: "testnet", cryptoHelper },
    fecthDemo
);
export const CHAIN_INFO = {
    chainName: "bfmetatest",
    chainAssetType: "BFMTEST",
    chainMagic: "YC4CN",
};

function getWrods() {
    let words = "-_";
    for (let i = 0; i < 10; i++) {
        words += i;
    }
    const buf1 = Buffer.allocUnsafe(26);
    const buf2 = Buffer.allocUnsafe(26);
    for (let i = 0; i < 26; i++) {
        buf1[i] = i + 97;
        buf2[i] = i + 65;
    }
    words += buf1.toString("ascii") + buf2.toString("ascii");
    return words;
}

export function getRandomCertificateId(onChainHeight?: number, len?: number) {
    const suffixLen = len || Math.ceil(Math.random() * 100);
    const prefix = onChainHeight || Math.ceil(Math.random() * 10 ** 8);
    const words = getWrods();
    let suffix = "";
    for (let i = 0; i < suffixLen; i++) {
        suffix += words[Math.floor(Math.random() * words.length)];
    }
    return `${prefix}:${suffix}`;
}
