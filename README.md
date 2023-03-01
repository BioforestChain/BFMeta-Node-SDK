# BFMeta-SDK

## 工具介绍

- 本工具支持BFMeta链节点端的接口访问。提供BFMeta链的公私钥对、地址及签名生成工具。
- 交易buffer数据由连接的节点生成，再由本sdk进行签名后发往节点。
- 建议自行部署节点达到更好的效果。 https://developer.bfmeta.org/download/
## Installation - 安装

 `$ npm install @bfmeta/node-sdk`

### Requrements - 必要条件

*   npm

*   typescript

## Docs & Community - 文档 & 社区

- 接口文档参考 https://developer.bfmeta.org/336/overview/


## Usage - 用法

```ts
import { BFMetaSDK, REQUEST_PROTOCOL} from "@bfmeta/node-sdk";

// 也可以再运行目录下建 config/config.json 填入以下内容，new 的时候就不用传参

 const config: BFMetaNodeSDK.ApiConfig = {
    node: {
        /**节点 ip, 默认值 [127.0.0.1] */
        ip: "127.0.0.1",
        /**节点端口号, 默认值 9003 */
        port: 9003,
    },
    //  "请求超时时间, 单位 ms, 默认 10000",
    requestTimeOut: 10000,
    // "请求协议, http || websocket, 默认值 websocket",
    requestProtocol: REQUEST_PROTOCOL.WEBSOCKET,
};

// 这里根据本地环境去实现，可参考以下
import { CryptoHelper } from "@bfmeta/node-sdk/build/test/helpers/cryptoHelper";
const cryptoHelper = new CryptoHelper();
const bfmetaSDK = new BFMetaSDK({ netType: "testnet", cryptoHelper }, config);

// 生成待签名的数据
let keypair = await bfmetaSDK.bfchainSignUtil.createKeypair("your secret");

// 这是该账户的地址
console.log(await bfmetaSDK.bfchainSignUtil.getAddressFromPublicKey(keypair.publicKey));

const createResult = await bfmetaSDK.api.transaction.createTransferAsset({
    amount: "100000000000",
    recipientId: address,
    publicKey: keypair.publicKey.toString("hex"),
    fee: "2000",
});
if (!createResult.success) {
    throw createResult;
}
const buffer = createResult.result.buffer;
const bytes = Buffer.from(buffer, "base64");
// 生成签名
const signature = (
    await bfmetaSDK.bfchainSignUtil.detachedSign(bytes, keypair.secretKey)
).toString("hex");
// 广播交易
const broadcastResult = await bfmetaSDK.api.transaction.broadcastTransferAsset(
    {
    buffer,
    signature,
    }
);
if (!broadcastResult.success) {
    throw broadcastResult;
}
console.log(broadcastResult);
// 广播交易到节点成功
```

## Changelog - 更新日志
-   3.0.7
    - 完善 multiNodes 参数的使用 
-   3.0.6
    - 新增支持升级服务的接口
-   3.0.5
    - 修改初始化时传入节点的参数格式
-   3.0.4
    - 添加 setSignUtil 函数
-   3.0.2
    - sdk 初始化参数调整
-   3.0.1
    - sdk中提供了 bfchainSignUtil 工具
-   3.0.0
    - 重构了本sdk。

## License- 许可

<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />本作品采用 <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a> 进行许可。
