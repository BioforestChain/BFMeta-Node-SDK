# BFChain-SDK

## Installation - 安装

`$ npm install @bfchain/pc-sdk`

### Requrements - 必要条件

-   npm

-   typescript

## Docs & Community - 文档 & 社区

https://github.com/BioforestChain/bfcc.dev
https://www.bfcc.dev

## Usage - 用法

```ts
import { BFChainPC_SDK } from "@bfchain/pc-sdk";

const sdk = new BFChainPC_SDK();

// 连接的节点ip及端口
sdk.init({ ip: "127.0.0.1", port: 19003, timeout: 10000 });

// 获取最新区块
await sdk.getLastBlock();
```

## Changelog - 更新日志

-   1.2.1
    - 废弃getAccountAsset 接口，添加getAccountLastTransaction接口
-   1.2.0
    -   支持 BFChain pc 节点 v3.6.12 的接口调用
    -   添加 getAccountAsset 接口
    -   添加 generateSecret 接口
-   1.0.0
    -   支持 BFChain pc 节点 v3.5.29 的接口调用

## License- 许可

<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />本作品采用 <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a> 进行许可。
