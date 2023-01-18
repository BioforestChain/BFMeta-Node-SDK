declare namespace BFMetaNodeSDK {
    namespace Basic {
        // #region core
        interface TransactionStorageJSON {
            /**事件的索引键，提供额外查询使用的字段名 */
            key: string;
            /**事件的索引值，提供额外查询使用的字段值 */
            value: string;
        }

        interface TransactionJSON<AssetJSON extends object = object> {
            /**事件版本号 */
            version: number;
            /**事件类型 */
            type: string;
            /**事件的发起账户地址，base58 编码的 16 进制字符串 */
            senderId: string;
            /**事件的发起账户公钥，128 个字节的 16 进制字符串 */
            senderPublicKey: string;
            /**事件的发起账户安全公钥，128 个字节的 16 进制字符串 */
            senderSecondPublicKey?: string;
            /**事件的接收账户地址，base58 编码的 16 进制字符串 */
            recipientId?: string;
            /**事件的接收范围类型 */
            rangeType: 0 | 1 | 2 | 4;
            /**事件的接收范围 */
            range: string[];
            /**事件的手续费 */
            fee: string;
            /**事件的时间戳 */
            timestamp: number;
            /**事件所属的 dappid */
            dappid?: string;
            /**事件所属的位名 */
            lns?: string;
            /**事件的来源IP，IPv4或者IPv6，不包含头尾(例如: 127.0.0.1)，默认为空 */
            sourceIP?: string;
            /**事件的来源链网络标识符 */
            fromMagic: string;
            /**事件的去往链网络标识符 */
            toMagic: string;
            /**事件的发起高度 */
            applyBlockHeight: number;
            /**事件的有效高度 */
            effectiveBlockHeight: number;
            /**事件的签名 */
            signature: string;
            /**事件的安全签名 */
            signSignature?: string;
            /**事件的备注信息 */
            remark: { [key: string]: string };
            /**实际事件部分 */
            asset: AssetJSON;
            /**事件的索引对象 */
            storage?: TransactionStorageJSON;
            /**事件的索引键，提供额外查询使用的字段名 */
            storageKey?: TransactionStorageJSON["key"];
            /**事件的索引值，提供额外查询使用的字段值 */
            storageValue?: TransactionStorageJSON["value"];
            /**事件 pow 噪点 */
            nonce: number;
        }

        interface SomeTransactionJSON<T extends TransactionJSON> {
            transaction: T;
        }

        type AssetPrealnumJSON = {
            /**剩余的权益数量 */
            remainAssetPrealnum: string;
            /**冻结的主权益数量 */
            frozenMainAssetPrealnum: string;
        };

        interface TransactionInBlockJSON<T extends TransactionJSON = TransactionJSON> extends SomeTransactionJSON<T> {
            /**事件在区块内的索引 */
            tIndex: number;
            /**区块高度 */
            height: number;
            /**事件涉及的账户权益变动信息 */
            transactionAssetChanges: TransactionAssetChangeJSON[];
            /**权益销毁前权益的最新信息 */
            assetPrealnum?: AssetPrealnumJSON;
            /**区块锻造者的签名 */
            signature: string;
            /**区块锻造者的安全签名 */
            signSignature?: string;
        }
        interface TransactionAssetChangeJSON {
            /**账户类型 */
            accountType: number;
            /**变动的权益所属网络标识符 */
            sourceChainMagic: string;
            /**变动的权益名 */
            assetType: string;
            /**变动后的权益数 */
            assetPrealnum: string;
        }

        interface RoundOfflineGeneratersHashMap {
            /**
             * 使用逗号分隔的地址
             * address,address */
            [roundOffset: string]: string;
        }

        interface BlockWithoutTransactionJSON<AssetJSON extends object = object> {
            /**区块版本号 */
            version: number;
            /**区块高度 */
            height: number;
            /**区块大小 */
            blockSize: number;
            /**区块时间戳 */
            timestamp: number;
            /**区块签名 */
            signature: string;
            /**区块安全签名 */
            signSignature?: string;
            /**锻造者gong'yao */
            generatorPublicKey: string;
            /**锻造者的安全公钥 */
            generatorSecondPublicKey?: string;
            /**锻造者权益 */
            generatorEquity: string;
            /**前块签名 */
            previousBlockSignature: string;
            /**区块奖励值 */
            reward: string;
            /**区块的链标识符 */
            magic: string;
            /**区块参与度 */
            blockParticipation: string;
            /**区块备注信息 */
            remark: { [key: string]: string };
            /**区块附加信息 */
            asset: AssetJSON;
            /**锻造者掉线列表 */
            roundOfflineGeneratersHashMap: RoundOfflineGeneratersHashMap;
        }

        interface CountAndAmountStatisticJSON {
            /**变动总值，某个账户的增加或者减少都会有影响 */
            changeAmount: string;
            /**变动总次数，某个账户的增加或者减少都会有影响 */
            changeCount: number;
            /**资产迁移总量 */
            moveAmount: string;
            /**交易次数统一 */
            transactionCount: number;
        }
        interface AssetStatisticJSON {
            /**区块打包的事件类型统计明细，JSON 对象 */
            typeStatisticHashMap: { [baseType: string]: CountAndAmountStatisticJSON };
            /**区块打包的事件类型统计，JSON 对象 */
            total: CountAndAmountStatisticJSON;
        }

        interface AssetTypeAssetStatisticJSON {
            /**区块打包的权益统计明细，JSON 对象 */
            assetTypeTypeStatisticHashMap: { [assetType: string]: AssetStatisticJSON };
        }

        interface StatisticInfoJSON {
            /**区块打包的事件的总手续费 */
            totalFee: string;
            /**区块打包的事件的总权益值（不区分权益类型） */
            totalAsset: string;
            /**区块打包的事件的总主权益值 */
            totalChainAsset: string;
            /**区块打包的事件涉及的总账户数 */
            totalAccount: number;
            /**区块打包的权益统计明细，JSON 对象 */
            magicAssetTypeTypeStatisticHashMap: { [magic: string]: AssetTypeAssetStatisticJSON };
        }

        type BlockTransactionInfoJSON = {
            startTindex: number;
            numberOfTransactions: number;
            payloadHash: string;
            payloadLength: number;
            totalAmount: string;
            totalFee: string;
            transactionInBlocks: TransactionInBlockJSON[];
            statisticInfo: StatisticInfoJSON;
        };

        interface BlockJSON<AssetJSON extends object = object> extends BlockWithoutTransactionJSON<AssetJSON> {
            /**事件 */
            transactionInfo: BlockTransactionInfoJSON;
        }

        interface BlockchainStatusJSON<S = any> {
            status: S;
        }

        type LastBlockInfo<T = any> = {
            /**区块版本号 */
            version: number;
            /**区块高度 */
            height: number;
            /**区块时间戳 */
            timestamp: number;
            /**区块大小 */
            blockSize: number;
            /**锻造者公钥 */
            generatorPublicKey: string;
            /**锻造者的安全公钥 */
            generatorSecondPublicKey?: string;
            /**锻造者权益 */
            generatorEquity: string;
            /**前块签名 */
            previousBlockSignature: string;
            /**区块奖励值 */
            reward: string;
            /**区块的链标识符 */
            magic: string;
            /**区块参与度 */
            blockParticipation: string;
            /**区块签名 */
            signature: string;
            /**区块安全签名 */
            signSignature?: string;
            /**区块备注信息 */
            remark: { [key: string]: string };
            /**区块事件信息 */
            transactionInfo: BlockTransactionInfoJSON;
            /**区块附加信息 */
            asset: T;
        };
        // #endregion

        // #region request
        interface BasicApiRequestParams {}

        /**获取指定区块 */
        interface GetBlockParams extends BasicApiRequestParams {
            /**区块签名 */
            signature?: string;
            /**区块高度 */
            height?: number;
            /**查看第几页（一页20条记录） */
            page?: number;
        }
        /**获取事件类型 */
        interface GetTransactionTypeParams extends BasicApiRequestParams {
            /**事件基础类型 */
            baseType: string;
        }
        /**获取指定事件 */
        interface GetTransactionsParams extends BasicApiRequestParams {
            /**事件id */
            signature?: string;
            /**事件所属区块高度 */
            height?: number;
            /**事件所属的最低高度 */
            minHeight?: number;
            /**事件所属的最高高度 */
            maxHeight?: number;
            /**事件发起方 */
            senderId?: string;
            /**事件接收方 */
            recipientId?: string;
            /**事件涉及的账户 */
            address?: string;
            /**事件类型，如果不传入则不筛选事件类型，事件类型请参考<事件类型> */
            type?: string[];
            /**索引值 */
            storageValue?: string;
            /**查看第几页（一页20条记录） */
            page?: number;
            /**排序，1 正序 -1 逆序，默认正序 */
            sort?: number;
        }
        /**生成账户私钥 */
        interface GenerateSecretParams extends BasicApiRequestParams {
            /**语言 */
            lang: string;
        }
        /**创建账户 */
        interface CreateAccountParams extends BasicApiRequestParams {
            /**账户密钥 */
            secret: string;
        }
        /**获取账户公钥 */
        interface GetAccountPublicKeyParams extends BasicApiRequestParams {
            /**账户地址 */
            address: string;
        }
        /**获取账户的最后一笔交易 */
        interface GetAccountLastTransactionParams extends BasicApiRequestParams {
            /**账户地址 */
            address: string;
            /**交易事件类型，通过GetTransactionType接口获得 */
            assetType: string;
        }
        /**获取账户指定类型的最后一笔交易 */
        interface GetAccountLastTypeTransactionParams extends BasicApiRequestParams {
            /**账户地址 */
            address: string;
            /**交易事件类型，通过GetTransactionType接口获得 */
            transactionType: string;
        }
        /**临时设置KV二进制数据 */
        interface SetKVStorageTempParams extends BasicApiRequestParams {
            /**二进制的数据 */
            datas: Uint8Array[];
        }
        /**获取KV二进制数据 */
        interface GetKVStorageParams extends BasicApiRequestParams {
            /**二进制的存储key值 */
            key: string;
        }
        // #endregion

        // #region response
        interface BasicApiRequestResult {}

        /**获取指定区块 */
        interface GetBlockResult extends BasicApiRequestResult {
            blocks: BlockJSON[];
            count: number;
            cmdLimitPerQuery: number;
        }
        /**获取本地节点当前最新区块 */
        type GetLastBlockResult = LastBlockInfo<any>;
        /**获取事件类型 */
        interface GetTransactionTypeResult extends BasicApiRequestResult {
            /**事件类型全称 */
            type: string;
        }
        /**获取指定事件 */
        interface GetTransactionsResult extends BasicApiRequestResult {
            trs: TransactionInBlockJSON[];
            count: number;
            cmdLimitPerQuery: number;
        }
        /**生成账户私钥 */
        interface GenerateSecretResult extends BasicApiRequestResult {
            /**账户私钥 */
            secret: string;
        }
        /**创建账户 */
        interface CreateAccountResult extends BasicApiRequestResult {
            /**账户地址 */
            address: string;
            /**账户公钥 */
            publicKey: string;
            /**账户私钥 */
            secretKey: string;
        }
        /**获取账户公钥 */
        interface GetAccountPublicKeyResult extends BasicApiRequestResult {
            /**账户公钥 */
            publicKey?: string;
        }
        /**获得节点版本号 */
        interface GetNodeVersionResult extends BasicApiRequestResult {
            /**当前节点的版本号 */
            version: string;
        }
        /**获得Bfchain版本号 */
        interface GetBfchainVersionResult extends BasicApiRequestResult {
            /**当前节点的版本号 */
            version: string;
        }
        /**获取节点状态 */
        interface GetBlockChainStatusResult extends BasicApiRequestResult {
            status: BlockchainStatusJSON["status"];
            peers: number;
            isReady: boolean;
            serverTimestamp: number;
        }
        /**获取账户的最后一笔交易 */
        interface GetAccountLastTransactionResult extends BasicApiRequestResult {
            transactionInBlock?: TransactionInBlockJSON;
            assetIndex?: { [assetType: string]: number };
            block?: BlockJSON;
        }
        /**获取账户指定类型的最后一笔交易 */
        interface GetAccountLastTypeTransactionResult extends BasicApiRequestResult {
            transactionInBlock?: TransactionInBlockJSON;
        }
        /**临时设置KV二进制数据 */
        interface SetKVStorageTempResult extends BasicApiRequestResult {
            keys: string[];
        }

        /**获取KV二进制数据 */
        interface GetKVStorageResult extends BasicApiRequestResult {
            data: Uint8Array;
        }
        // #endregion

        interface BasicApiSuccessReturn<T extends BasicApiRequestResult> extends BFMetaNodeSDK.ApiSuccessReturn<T> {
            result: T;
        }
        interface BasicApiFailureReturn extends ApiFailureReturn {}

        type BasicApiReturn<T extends BasicApiRequestResult> = BasicApiSuccessReturn<T> | BasicApiFailureReturn;

        type BasicApi = import("./apis/_basicGetApi").BasicGetApi<any> | import("./apis/_basicPostApi").BasicPostApi<any>;
        type GetBlockApi = import("./apis").GetBlockApi;
        type GetLastBlockApi = import("./apis").GetLastBlockApi;
        type GetTransactionTypeApi = import("./apis").GetTransactionTypeApi;
        type GetTransactionsApi = import("./apis").GetTransactionsApi;
        type GetBfchainVersionApi = import("./apis").GetBfchainVersionApi;
        type GetNodeVersionApi = import("./apis").GetNodeVersionApi;
        type GetBlockChainStatusApi = import("./apis").GetBlockChainStatusApi;
        type GenerateSecretApi = import("./apis").GenerateSecretApi;
        type CreateAccountApi = import("./apis").CreateAccountApi;
        type GetAccountPublicKeyApi = import("./apis").GetAccountPublicKeyApi;
        type GetAccountLastTransactionApi = import("./apis").GetAccountLastTransactionApi;
        type GetAccountLastTypeTransactionApi = import("./apis").GetAccountLastTypeTransactionApi;
        type SetKVStorageTempApi = import("./apis").SetKVStorageTempApi;
        type GetKVStorageApi = import("./apis").GetKVStorageApi;
    }
}
