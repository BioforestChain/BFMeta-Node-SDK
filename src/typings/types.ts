declare namespace BFChainPcSdk {
    /**Sdk网络选项 */
    type SdkNetOptions = {
        ip: string;
        port: number;
        timeout?: number;
        apiType?: import("../constants/api.constants").ApiType;
        protocol?: import("../constants/api.constants").ProtocolType;
    };

    type AllPartial<T> = {
        [P in keyof T]?: AllPartial<T[P]>;
    };

    export const enum RegistEventType {
        startNode,
        receviedBlock,
        receviedTr,
        generateBlock,
        error,
        closeNode,
    }

    type InsideInterfaceGetBlockChainStatusReturn = {
        status: BFChainCore.BlockchainStatusJSON["status"];
        peers: number;
        isReady: boolean;
        serverTimestamp: number;
    };

    namespace SystemInfo {
        type RunTimeState = {
            memory: NodeJS.MemoryUsage;
            platform: NodeJS.Platform;
            cpuCount: number;
            freemem: number;
            totalmen: number;
            cpuUsage: number;
            cpuUsageV2: number[];
            cpuModel: string;
            process: {
                pid: number;
                name?: string;
            };
        };

        type SystemMonitor = {
            requestIpMonitorInfo?: RequestIpMonitor;
            requestMethodInfo?: RequestMethodModel;
            requestPathInfo?: RequestPathModel;
            requestApiUrlInfo?: RequestApiUrlModel;
            requestMethodNameInfo?: RequestMethodNameModel;
            requestAccountInfo?: AccountMonitorInfo;
            transaction?: TransactionInfo;
            trsCount?: { [key: string]: number };
            blockCount?: BlockInfo[];
        };

        // Read File Type
        const enum ReadFileType {
            readFileAsync = 0,
            createReadStream = 1,
        }

        // 访问URL
        type ApiUrlModel = {
            [urlPath: string]: number;
        };

        // 访问IP统计
        type RequestIpMonitor = {
            [ip: string]: RequestIpInfoModel;
        };

        type RequestIpInfoModel = {
            requestCount: number;
            requestErrorCount: number;
            requestRejectCount: number;
            downloadFlow: number;
            uploadFlow: number;
        };

        type RequestMethodModel = {
            [method: string]: RequestTypeBaseInfo;
        };

        type RequestPathModel = {
            [path: string]: RequestTypeBaseInfo;
        };

        type RequestApiUrlModel = {
            [apiUrl: string]: RequestTypeBaseInfo;
        };

        type RequestMethodNameModel = {
            [methodName: string]: RequestTypeBaseInfo;
        };

        type RequestTypeBaseInfo = {
            count: number;
        };

        type AccountMonitorInfo = {
            [account: string]: number;
        };

        type BlockInfo = {
            height: number;
            time: number;
            reward: string;
            payloadLength: number;
            numberOfTransactions: number;
        };

        type TransactionInfo = {
            amount: string;
            fee: string;
        };

        type SystemAdminModel = {
            adminAddress: string;
            adminAddTime: number;
            adminName: string;
        };

        type LoggerType = {
            loggerType: string;
            loggerName: string;
            loggerAmount: number;
            loggerSize: number;
            loggerUpdateTime: number;
        };

        type LoggerList = {
            logName: string;
            logUpdateTime: number;
            logSize: number;
            logPath: string;
        }[];

        type SystemConfigInfo = {
            receiveVoteEnable: boolean;
            autoVoteEnable: boolean;
            serverMarketEnable: boolean;
            minFeePerByte: number;
            remark: string;
            reqCheckWhiteList: { [key: string]: boolean };
            transactionsLimitPerBlock: number;
            requestLimitEnable: boolean;
            requestLimitCount: number;
            flowRequestLimitCount: number;
            consoleLogLevelInfo: { [key: string]: string };
            consoleLogLevel: string;
            interceptIllegalRequestEnable: boolean;
            fileLogLimit: number;
            generateBlockEnable: boolean;
        };

        //  节点管理详细配置类型
        type SystemConfigInfoDetail = Pick<
            Config.ConfigModel,
            | "startConfig"
            | "chainPort"
            | "coreForProcess"
            | "transactionConfig"
            | "logConfig"
            | "networkConfig"
            | "flowControlConfig"
            | "noticeConfig"
            | "diskMonitorConfig"
        >;

        type StringConfigValue = {
            type: string;
            value: string;
            range?: { [key: string]: string };
        };
        type BoolConfigValue = {
            type: string;
            value: boolean;
        };
        type NumberConfigValue = {
            type: string;
            value: number;
            minimum?: number;
            maximum?: number;
        };
        type ConfigInfo = {
            booleanSet: {
                receiveVoteEnable: BoolConfigValue;
                autoVoteEnable: BoolConfigValue;
                serverMarketEnable: BoolConfigValue;
                interceptIllegalRequestEnable: BoolConfigValue;
                untrestedTranEnable: BoolConfigValue;
            };
            flowSet: {
                requestLimitEnable: {
                    type: string;
                    value: boolean;
                    properties: {
                        flowRequestLimitCount: NumberConfigValue;
                        requestLimitCount: NumberConfigValue;
                    };
                };
            };
            loggerSet: {
                consoleLogLevelInfo: StringConfigValue;
                fileLogLimit: NumberConfigValue;
            };
            blockSet: {
                transactionsLimitPerBlock: NumberConfigValue;
                minFeePerByte: NumberConfigValue;
                remark: StringConfigValue;
            };
        };

        // 路由配置
        type RouterConfig = {
            prefix: string;
            map: any;
        };

        // 系统受托人
        type SystemDelegateModel = {
            publicKey: string;
            address: string;
            addTime: number;
            name: string | undefined;
        };

        // 节点受托人详情
        type SystemDelegateDetailModel = {
            balance: string;
            reward: string;
            forgerBlocks: number;
            address: string;
            isDelegate: boolean;
            username?: string;
        };

        // 节点详情
        type SystemNodeInfoModel = {
            addressList: { address: string; isDelegate: boolean; username?: string }[];
            accumulativeReward: string;
            height: number;
            version: string;
            magic: string;
            chainName: string;
            osType: string;
            gensisBlockSignature: string;
        };

        // 邮箱配置
        type EMailInfo = {
            verifyType: string;
            systemOwner: string;
            emailToAddress: string;
            emailFromAddress: string;
            emailConfig: EmailConfig;
        };

        // 邮箱地址信息
        type EMailAddressInfo = {
            emailToAddress: string;
            emailFromAddress: string;
            emailConfig: EmailConfig;
        };

        // 邮件发送配置
        type EmailConfig = {
            type: string;
            host?: string;
            port?: number;
            secureConnection?: boolean;
            ssl?: boolean;
            tls?: boolean;
            auth?: {
                user: string;
                pass: string;
            };
        };

        // 黑名单IP
        type BlackIPData = {
            ip: string;
            requestType: string;
            requestData: {
                path: string;
                method: string;
                params: {
                    query: any;
                    body: any;
                };
            };
        };

        // 矿机状态信息
        type SystemStatusModel = {
            cpusStatus: import("os").CpuInfo[];
            memStatus: {
                freeMem: number;
                totalmem: number;
            };
            bandwithStatus: {
                total: number;
                usage: number;
            };
            diskSpace: {
                free: number;
                size: number;
            };
            machineStatus: number;
            deletegateInfo: DeletegateInfo;
            miningMachineVersionName: string;
            cpuUsage: number;
        };

        // 受托人的相关收益信息，包括收益率，获得投票数量，锻造区块数量
        type DeletegateInfo = {
            reward: string;
            voteCount: number;
            forgerBlocks: number;
        };

        // CPU使用率
        type CpuInfo = {
            [processID: number]: {
                kernelTime: number;
            };
        };

        // CPU使用情况
        type UsageCPU = {
            processCount: number; // 进程数
            speed: number; // 速度
            runtime: number; // 正常运行时间
            threadCount: number; // 线程数
            handleCount: number; // 句柄数
            CPUusage: number; // CPU使用率
        };

        // 内存使用情况
        type MemoryInfo = {
            physcial: number; // 物理内存
            physcialUsed: number; // 物理内存使用
            physcialWait: number; // 物理内存空闲
            virtual: number; // 虚拟内存
            virtualUsed: number; // 虚拟内存使用
            virtualWait: number; // 虚拟内存空闲
        };

        // 网络使用情况
        type NetworkInfo = {
            receive: number; // 接收网络流量
            send: number; // 发送网络流量
            sum: number; // 总网络流量
        };

        // 进程CPU
        type ProcessCPU = {
            processType: string;
            name: string;
            percent: number;
            state: string;
        };

        // 进程内存
        type ProcessMemory = {
            processType: string;
            name: string;
            share: number;
            rss: number;
        };

        // 进程网络
        type ProcessNetwork = {
            processType: string;
            name: string;
            send: number;
            receive: number;
            sum: number;
        };

        // 进程ID信息
        type ProcessId = {
            processId: number;
            processName: string | undefined;
        };

        // 进程基本信息
        type ProcessInfo = {
            CPUPercent: number; //CPU使用百分比
            memoryPercent: number; //内存使用百分比
            send: number; //每秒发送
            receive: number; //每秒接收
        };

        // 校验码Model
        type AuthCodeModel = {
            code: string;
            expireTime: number;
        };

        // i18n基本信息
        type serviceI18nBaseModel = {
            [langusage: string]: string;
        };

        // i18n图片信息
        type serviceI18nScreenModel = {
            [langusage: string]: {
                small: string;
                large: string;
            };
        };

        // i18n备注信息
        type serviceI18nRemarkModel = {
            [langusage: string]: {
                online: number;
                title: string;
                subTitle: string;
                description: string;
            };
        };

        // 节点信息
        type MiningMachineModel = {
            hostname: string;
            updateServicePort: number;
            systemInfoPort: number;
            serviceMarketPort: number;
            port: number;
            platform: string;
            cpuCount: number;
            cpuModel: string;
            cpuSpeed: string;
            totalMem: number;
            memModel: string;
            memHz: number;
            totalDisk: number;
            diskModel: string;
            delegateStatus: boolean;
        };

        // 请求基本类型
        interface RequestBaseIF {
            type: string;
            ip: string;
            requestType: string;
            uploadFlow: number;
            downloadFlow: number;
            account: string;
            // apiUrl: string;
        }
        interface RequestIF extends RequestBaseIF {
            reqMethod: string;
            reqPath: string;
            methodName: string;
        }
    }

    namespace Config {
        type AutoVoteModel = {
            /**是否开启自动投票 */
            enable: boolean;
            /**是否使用配置手续费 */
            useConfigFee: boolean;
            /**自动投票手续费 */
            fee: string;
            /**是否优先保证推荐人个数 */
            priorRecommendedNumber: boolean;
            /**选出的推荐人数量上限 */
            maxNumberOfRecommended: number;
            /**选取的区块范围, 最近的 100 轮 */
            numberOfRounds: number;
            /**在线率占比 */
            productivityPercent: number;
            /**打块数量占比 */
            forgedBlocksPercent: number;
            /**打包交易数量占比 */
            applyTxPercent: number;
            /**上一轮的得票率占比 */
            votePercent: number;
            /**新受托人占比 */
            newDelegatePercent: number;
            /**最小可被推荐得账户在线率 */
            minBeSelectProductivity: number;
        };

        type SecretModel = {
            secret: string;
            secondSecret?: string;
        };

        type ConfigModel = {
            // 这里区分是否能够通过接口调整
            //#region 无法通过接口调整的参数
            /**打块配置 */
            forging: {
                /**打块账户密钥 */
                secrets: SecretModel[];
            };
            /**链端口号 */
            chainPort: {
                turnserver: number;
                mongodb: number;
                system_websocket_port: number;
                clusterLock: number;
                grpc: number;
                update_service_port: number;
                // service_port: number; //弃用，service统一使用system_websocket_port
                comlink_port: number;
            };
            /**mongo数据库配置 */
            mongoDb: {
                /**开启外部链接 */
                externalConnection: boolean;
                /**数据库管理账户 */
                user: {
                    /**账户名 */
                    user: string;
                    /**密码 */
                    pwd: string;
                };
                /**mongo 二进制文件路径 */
                dbPath: {
                    win32: string;
                    linux: string;
                    darwin: string;
                    freebsd: string;
                    aix: string;
                };
                /**mongo 日志路径 */
                logPath: {
                    win32: string;
                    linux: string;
                    darwin: string;
                    freebsd: string;
                    aix: string;
                };
                /**每次查询的文档数 */
                limitPerQuery: number;
                /**每次查询的文档数 */
                cmdLimitPerQuery: number;
                /**每次插入的文档数 */
                limitPerInsert: number;
            };
            /**请求限制白名单 */
            reqCheckWhiteList: {
                [ip: string]: boolean;
            };
            /**开启禁用访问不存在的api的IP */
            apiRequestBlackIp: boolean;
            /**是否拦截非法请求 */
            interceptIllegalRequestEnable: boolean;
            //#endregion 无法通过接口调整的参数

            //#region 可以通过接口调整的参数

            /**矿机自动投票 */
            /**进程参数配置  */
            coreForProcess: {
                /**未知 */
                forceUseConfig: boolean;
                /**处理交易的进程数 */
                coreNumForDealTransaction: number;
                /**处理账户的进程数 */
                coreNumForMemInfo: number;
                /**处理未处理交易的进程数 */
                coreNumForUntreatedTrs: number;
            };
            transactionConfig: {
                /**是否接收投票 */
                receiveVoteEnable: boolean;
                /**每轮可处理的最大投票交易数 */
                maxTransactionLimitForVote: number;
                /**每个区块的交易上限 */
                transactionsLimitPerBlock: number;
                /**矿机最小手续费 */
                minFeePerByte: {
                    numerator: number;
                    denominator: number;
                };
                /**事件的最大手续费，单位: B */
                maxFee: string;
                autoVote: AutoVoteModel;
            };

            /**文件日志配置 */
            logConfig: {
                /**控制台输出等级: "error" | "warn" | "info" | "debug" */
                consoleLogLevel: string;
                /**日志等级: "error" | "warn" | "info" | "debug" */
                fileLogLevel: string;
                /**日志文件大小限制(b) */
                fileLogLimit: number;
                /**备份日志时分割的份数 */
                fileLogBackup: number;
                /**日志过期时间 */
                fileLogDateExpire: boolean;
                /**日志保存时间 */
                fileLogDaysToKeep: number;
            };
            /**启动参数 */
            startConfig: {
                /**开启是否打块，true：开始打块，false：停止打块 */
                generateBlockEnable: boolean;
                /**区块标记 */
                remark: string;
                /**使用关键检查点 */
                useCheckPoint: boolean;
                /**关键检查点保留轮次数 */
                numberOfReservedCheckPoint: number;
                /**节点配置 */
                peers: string[];
                maxChannelNumber: number;
            };
            /**网络配置 */
            networkConfig: {
                /**是否开启grpc */
                grpcEnable: boolean;
            };
            /**流控配置 */
            flowControlConfig: {
                /**流量控制 */
                requestLimit: {
                    /**是否开启 */
                    enable: boolean;
                    /**访问次数总上限 */
                    count: number;
                    /**各api访问次数上限 */
                    apiRequestInterface: {
                        [apiName: string]: number;
                    };
                    /**重置间隔 */
                    time: number;
                };
                /**总流量限制 */
                flowRequestLimit: {
                    enable: boolean;
                    /**总流量上限 */
                    count: number;
                    time: number;
                };
            };
            /**磁盘监控 */
            diskMonitorConfig: {
                enable: boolean;
                /**监控磁盘路径及配置 */
                clearPath: string[];
                /**当磁盘空间不足x时清理 */
                clearWhenFreeSpaceLowerThan: number;
                /**检查时间间隔 */
                checkInterval: number;
                /**清理后缀为xxx的文件 */
                clearWithSuffix?: string[];
                /**后缀为xxx的文件不清理 */
                noClearWithSuffix?: string[];
                /**最后修改时间大于n毫秒的文件不清理 */
                noClearWithLastModifyTimeGreaterThen?: number;
            };
            /**通知配置 */
            noticeConfig: {
                enable: boolean;
                /**邮箱发送条件 */
                sendCondition: {
                    usageCPU: number;
                    usageDisk: number;
                    usageMemory: number;
                    missedBlocks: number;
                };
                /**邮箱发送间隔时间 */
                sendIntervalTime: number;
            };
            /**开发者SDK配置参数 */
            developerSDK: {
                eventTimeoutMS: number;
            };
            /**节点的版本名称 */
            miningMachineVersionName: string;
            /**服务市场配置 @lyh */
            serviceConfig: {
                /**是否开启服务市场 */
                serverMarketEnable: boolean;
                userMaxUploadNumber: number;
                uploadTokenExpireTime: number;
                remainTimeToClearUserSessoin: number;
            };
            //#endregion 可以通过接口调整的参数

            //#region debug
            /**是否开启内存泄漏检测 */
            checkMemoryLeak: boolean;
            /**打印内存间隔(毫秒) */
            checkMemoryInterval: number;
            //#endregion debug
        };
    }

    namespace Mongodb {
        /**交易 */
        interface TransactionInsertModel extends BFChainCore.TransactionJSON {}

        /**交易资产变动 */
        interface TransactionAssetChangesInsertModel extends BFChainCore.TransactionAssetChangeJSON {}

        /**交易资产权益信息 */
        interface AssetPrealnumInsertModel extends BFChainCore.AssetPrealnumJSON {}

        /**交易表 */
        type TransactionInBlockInsertModel = {
            tIndex: number;
            blockId: string;
            height: number;
            transactionAssetChanges: TransactionAssetChangesInsertModel[];
            assetPrealnum?: AssetPrealnumInsertModel;
            signature: string;
            signSignature: string;
            transaction: TransactionInsertModel;
            dateCreated: number;
        };
    }

    namespace MemInfoModel {
        type AccountInfoAndAsset = {
            accountInfo: BFChainCore.AccountInfo;
            accountAssets: BFChainCore.AccountAssets;
        };
    }

    namespace BFChainCore {
        type LastBlockInfo<T extends Block> = {
            height: number;
            timestamp: number;
            blockSize: number;
            generatorPublicKey: string;
            generatorSecondPublicKey?: string;
            generatorEquity: string;
            numberOfTransactions: number;
            payloadHash: string;
            payloadLength: number;
            previousBlockSignature: string;
            totalAmount: string;
            totalFee: string;
            reward: string;
            magic: string;
            blockParticipation: string;
            signature: string;
            signSignature?: string;
            remark: { [key: string]: string };
            asset: GetBlockAssetJSON<T>;
        };

        type Block<AJ extends object = object> = import("./block").Block<AJ>;

        type GetBlockAssetJSON<T extends Block> = T["ASSET_JSON_TYPE"];

        interface BlockWithoutTransactionJSON<AssetJSON extends object = object> {
            version: number;
            height: number;
            blockSize: number;
            timestamp: number;
            signature: string;
            signSignature?: string;
            generatorPublicKey: string;
            generatorSecondPublicKey?: string;
            generatorEquity: string;
            numberOfTransactions: number;
            payloadHash: string;
            payloadLength: number;
            previousBlockSignature: string;
            totalAmount: string;
            totalFee: string;
            reward: string;
            magic: string;
            blockParticipation: string;
            remark: { [key: string]: string };
            asset: AssetJSON;
            statisticInfo: StatisticInfoJSON;
            roundOfflineGeneratersHashMap: RoundOfflineGeneratersHashMap;
        }

        interface BlockJSON<AssetJSON extends object = object> extends BlockWithoutTransactionJSON<AssetJSON> {
            transactions: TransactionInBlockJSON[];
        }

        type TransactionMixJSON<AssetJSON extends object = object, Opts extends TransactionOptions = {}> = Opts["hasRecipientId"] extends true
            ? Omit<TransactionJSON<AssetJSON>, "recipientId"> & { recipientId: string }
            : Opts["hasRecipientId"] extends false
            ? Omit<TransactionJSON<AssetJSON>, "recipientId"> & { recipientId: undefined }
            : TransactionJSON<AssetJSON>;

        type TransactionOptions = {
            hasRecipientId?: boolean;
        };
        interface TransactionStorageJSON {
            key: string;
            value: string;
        }

        interface TransactionJSON<AssetJSON extends object = object> {
            version: number;
            type: string;
            senderId: string;
            senderPublicKey: string;
            senderSecondPublicKey?: string;
            recipientId?: string;
            rangeType: BFChainCore.RANGE_TYPE;
            range: string[];
            fee: string;
            timestamp: number;
            dappid?: string;
            lns?: string;
            sourceIP?: string;
            fromMagic: string;
            toMagic: string;
            applyBlockHeight: number;
            effectiveBlockHeight: number;
            signature: string;
            signSignature?: string;
            remark: { [key: string]: string };
            asset: AssetJSON;
            storage?: TransactionStorageJSON;
            storageKey?: TransactionStorageJSON["key"];
            storageValue?: TransactionStorageJSON["value"];
            nonce: number;
        }

        interface SomeTransactionJSON<T extends TransactionJSON> {
            transaction: T;
        }

        type AssetPrealnumJSON = {
            remainAssetPrealnum: string;
            frozenMainAssetPrealnum: string;
        };

        interface TransactionInBlockJSON<T extends TransactionJSON = TransactionJSON> extends SomeTransactionJSON<T> {
            index: number;
            height: number;
            numberOfSenderTransactions: number;
            transactionAssetChanges: TransactionAssetChangeJSON[];
            assetPrealnum?: AssetPrealnumJSON;
            signature: string;
            signSignature?: string;
        }
        interface TransactionAssetChangeJSON {
            accountType: number;
            assetTypes: number;
            assetBalance: string;
        }

        interface RoundOfflineGeneratersHashMap {
            /**
             * 使用逗号分隔的地址
             * address,address */
            [roundOffset: string]: string;
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

        type AssetInfoJSON = {
            magic: string;
            assetType: string;
        };

        interface AssetStatisticJSON extends AssetInfoJSON {
            index: number;
            typeStatisticHashMap: { [baseType: number]: CountAndAmountStatisticJSON };
            total: CountAndAmountStatisticJSON;
        }

        interface StatisticInfoJSON {
            totalFee: string;
            totalAsset: string;
            totalChainAsset: string;
            totalAccount: number;
            assetStatisticHashMap: { [index: number]: AssetStatisticJSON };
        }

        type EXCHANGE_DIRECTION = import("./").EXCHANGE_DIRECTION;
        type SPECIAL_ASSET_TYPE = import("./").SPECIAL_ASSET_TYPE;
        type DAPP_TYPE = import("./").DAPP_TYPE;
        type LOCATION_NAME_OPERATION_TYPE = import("./").LOCATION_NAME_OPERATION_TYPE;
        type RECORD_TYPE = import("./").RECORD_TYPE;
        type RECORD_OPERATION_TYPE = import("./").RECORD_OPERATION_TYPE;
        type GIFT_DISTRIBUTION_RULE = import("./").GIFT_DISTRIBUTION_RULE;
        type RANGE_TYPE = import("./").RANGE_TYPE;
        type TPOW_PARAMETER = import("./").TPOW_PARAMETER;
        type TPOW_OPERATOR = import("./").TPOW_OPERATOR;
        type TPOW_AUXILIARY_SYMBOL = import("./").TPOW_AUXILIARY_SYMBOL;

        interface FractionJSON<T extends number | bigint | string = number> {
            numerator: T;
            denominator: T;
        }
        interface RangeJSON {
            start: number;
            end: number;
        }
        interface RateJSON<T extends number | bigint | string = number> {
            prevWeight: T;
            nextWeight: T;
        }

        //#region Transaction Asset
        interface UsernameJSON {
            alias: string;
        }
        interface UsernameAssetJSON {
            username: UsernameJSON;
        }
        interface DelegateAssetJSON {}
        interface AcceptVoteAssetJSON {}
        interface RejectVoteAssetJSON {}
        interface VoteJSON {
            equity: string;
        }
        interface VoteAssetJSON {
            vote: VoteJSON;
        }

        interface DAppPurchaseAssetJSON {
            sourceChainName: string;
            sourceChainMagic: string;
            assetType: string;
            amount: string;
        }
        interface DAppJSON {
            sourceChainName: string;
            sourceChainMagic: string;
            dappid: string;
            type: BFChainCore.DAPP_TYPE;
            purchaseAsset?: DAppPurchaseAssetJSON;
        }
        interface DAppAssetJSON {
            dapp: DAppJSON;
        }
        interface DAppPurchasingJSON {
            dappAsset: DAppJSON;
        }
        interface DAppPurchasingAssetJSON {
            dappPurchasing: DAppPurchasingJSON;
        }

        interface MarkJSON {
            content: string;
            type?: string;
            sourceChainName?: string;
            sourceChainMagic?: string;
            dappid?: string;
            verifyCode?: string;
        }
        interface MarkAssetJSON {
            mark: MarkJSON;
        }

        interface SignatureJSON {
            publicKey: string;
        }
        interface SignatureAssetJSON {
            signature: SignatureJSON;
        }

        interface IssueAssetJSON {
            sourceChainName: string;
            sourceChainMagic: string;
            assetType: string;
            expectedIssuedAssets: string;
        }
        interface IssueAssetAssetJSON {
            issueAsset: IssueAssetJSON;
        }
        interface TransferAssetJSON {
            sourceChainName: string;
            sourceChainMagic: string;
            assetType: string;
            amount: string;
        }
        interface TransferAssetAssetJSON {
            transferAsset: TransferAssetJSON;
        }
        interface DestoryAssetJSON {
            sourceChainName: string;
            sourceChainMagic: string;
            assetType: string;
            amount: string;
        }
        interface DestoryAssetAssetJSON {
            destoryAsset: DestoryAssetJSON;
        }
        interface EmigrateAssetJSON {
            genesisDelegateSignature: AccountSignatureJSON;
            sourceChainName: string;
            sourceChainMagic: string;
            assetType: string;
            amount: string;
        }
        interface EmigrateAssetAssetJSON {
            emigrateAsset: EmigrateAssetJSON;
        }

        type EmigrateAssetTransactionJSON = TransactionMixJSON<EmigrateAssetAssetJSON, { hasRecipientId: false }>;

        interface ImmigrateAssetJSON {
            genesisDelegateSignature: AccountSignatureJSON;
            emigrateAssetTransaction: EmigrateAssetTransactionJSON;
        }
        interface ImmigrateAssetAssetJSON {
            immigrateAsset: ImmigrateAssetJSON;
        }
        interface GiftAssetJSON {
            cipherPublicKeys: string[];
            sourceChainMagic: string;
            sourceChainName: string;
            assetType: string;
            amount: string;
            totalGrabableTimes: number;
            // unitReserveFee: string;
            beginUnfrozenBlockHeight?: number;
            giftDistributionRule: BFChainCore.GIFT_DISTRIBUTION_RULE;
        }
        interface GiftAssetAssetJSON {
            giftAsset: GiftAssetJSON;
        }

        interface GrabAssetJSON {
            blockSignature: string;
            transactionSignature: string;
            /**根据共识规则计算出来的：抢到的金额 */
            amount: string;
            /**用于校验身份的密文签名，如果需要的话 */
            ciphertextSignature?: AccountSignatureJSON;
            //#region 冗余的字段
            /**以下是冗余的字段
             * 都是能从`transactionSignature`中查询出来的，但这个仍然做了存储，是为了确保能够在独立的情况下仍然能够将之渲染出来
             */

            /**礼物配置 */
            giftAsset: GiftAssetJSON;
            //#endregion
        }
        interface GrabAssetAssetJSON {
            grabAsset: GrabAssetJSON;
        }
        interface TrustAssetJSON {
            trustees: string[];
            numberOfSignFor: number;
            sourceChainName: string;
            sourceChainMagic: string;
            assetType: string;
            amount: string;
        }
        interface TrustAssetAssetJSON {
            trustAsset: TrustAssetJSON;
        }
        interface AccountSignatureJSON {
            publicKey: string;
            signature: string;
            secondPublicKey?: string;
            signSignature?: string;
        }
        interface SignForAssetJSON {
            transactionSignature: string;
            trustSenderId: string;
            trustRecipientId: string;
            /**委托信息 */
            trustAsset: TrustAssetJSON;
        }
        interface SignForAssetAssetJSON {
            signForAsset: SignForAssetJSON;
        }
        interface FeeRateJSON {
            senderPaidFeeRate: BFChainCore.FractionJSON;
            recipientPaidFeeRate: BFChainCore.FractionJSON;
        }
        interface ToExchangeAssetJSON {
            cipherPublicKeys: string[];
            toExchangeSource: string;
            beExchangeSource: string;
            toExchangeChainName: string;
            beExchangeChainName: string;
            toExchangeAsset: string;
            beExchangeAsset: string;
            toExchangeNumber: string;
            exchangeRate: BFChainCore.RateJSON<string>;
        }
        interface ToExchangeAssetAssetJSON {
            toExchangeAsset: ToExchangeAssetJSON;
        }

        interface BeExchangeAssetJSON {
            transactionSignature: string;
            ciphertextSignature?: AccountSignatureJSON;
            toExchangeNumber: string;
            beExchangeNumber: string;
            exchangeAsset: ToExchangeAssetJSON;
        }
        interface BeExchangeAssetAssetJSON {
            beExchangeAsset: BeExchangeAssetJSON;
        }

        interface ToExchangeSpecialAssetJSON {
            cipherPublicKeys: string[];
            toExchangeSource: string;
            beExchangeSource: string;
            toExchangeChainName: string;
            beExchangeChainName: string;
            toExchangeAsset: string;
            beExchangeAsset: string;
            exchangeNumber: string;
            exchangeAssetType: BFChainCore.SPECIAL_ASSET_TYPE;
            exchangeDirection: BFChainCore.EXCHANGE_DIRECTION;
        }
        interface ToExchangeSpecialAssetAssetJSON {
            toExchangeSpecialAsset: ToExchangeSpecialAssetJSON;
        }
        interface BeExchangeSpecialAssetJSON {
            transactionSignature: string;
            ciphertextSignature?: AccountSignatureJSON;
            exchangeSpecialAsset: ToExchangeSpecialAssetJSON;
        }
        interface BeExchangeSpecialAssetAssetJSON {
            beExchangeSpecialAsset: BeExchangeSpecialAssetJSON;
        }

        interface LocationNameJSON {
            name: string;
            sourceChainName: string;
            sourceChainMagic: string;
            operationType: BFChainCore.LOCATION_NAME_OPERATION_TYPE;
        }
        interface LocationNameAssetJSON {
            locationName: LocationNameJSON;
        }
        interface LocationNameRecordJSON {
            recordType: BFChainCore.RECORD_TYPE;
            recordValue: string;
        }
        interface SetLnsManagerJSON {
            name: string;
            sourceChainName: string;
            sourceChainMagic: string;
        }
        interface SetLnsManagerAssetJSON {
            lnsManager: SetLnsManagerJSON;
        }
        interface SetLnsRecordValueJSON {
            name: string;
            sourceChainName: string;
            sourceChainMagic: string;
            operationType: BFChainCore.RECORD_OPERATION_TYPE;
            addRecord?: LocationNameRecordJSON;
            deleteRecord?: LocationNameRecordJSON;
        }
        interface SetLnsRecordValueAssetJSON {
            lnsRecordValue: SetLnsRecordValueJSON;
        }
        //#endregion

        /**区块链节点状态 */
        export const enum BLOCKCHAIN_STATUS {
            /**离线：不可用 */
            OFFLINE,
            /**自由状态，有空闲资源可用 */
            FREE,
            /**繁忙：重建区块链 */
            REBUIDING,
            /**繁忙：节点共识 */
            PEER_SCANNING,
            /**繁忙：重放区块
             * 下载区块并校验
             * download & verify
             */
            REPLAY_BLOCK,
            /**繁忙：锻造区块 */
            GENERATING,
            /**繁忙：回滚区块 */
            ROLLBACK,
        }
        interface BlockchainStatusJSON<S extends BLOCKCHAIN_STATUS = any> {
            status: S;
        }

        type AccountInfo = {
            address: string;
            publicKey?: string;
            username?: string;
            secondPublicKey?: string;
            accountStatus: number;
            isDelegate: boolean;
            isAcceptVote: boolean;
            voteInfo: {
                round: number;
                vote: bigint;
            };
            equityInfo: {
                round: number;
                equity: bigint;
                fixedEquity: bigint;
            };
            lastRoundInfo: {
                round: number;
                assetNumber: bigint;
                txCount: number;
            };
        };
        type AssetInfo = {
            sourceChainMagic: string;
            assetType: string;
            sourceChainName?: string;
            assetNumber: bigint;
        };
        type AccountAssets = {
            [sourceChainMagic: string]: {
                [assetType: string]: AssetInfo;
            };
        };
        type AccountInfoAndAssets = {
            accountInfo: AccountInfo;
            accountAssets: AccountAssets;
        };

        //#region RoundLastBlock
        interface NextRoundDelegateJSON {
            address: string;
            equity: string;
        }
        interface RoundDelegateJSON {
            nextRoundDelegates: NextRoundDelegateJSON[];
            newDelegates: string[];
            maxBeginBalance: string;
            maxTxCount: number;
            rate: string;
        }
        interface RoundLastAssetJSON extends RoundDelegateJSON {
            hash: string;
        }
        interface RoundLastBlockAssetJSON {
            roundLastAsset: RoundLastAssetJSON;
        }
        type RoundLastBlockJSON = BlockJSON<RoundLastBlockAssetJSON>;
        //#endregion

        //#region GenesisBlock
        interface RewardPercentJSON {
            votePercent: FractionJSON;
            forgePercent: FractionJSON;
        }
        interface PortsJSON {
            port: number;
            scan_peer_port: number;
        }
        interface RewardPerBlockJSON {
            readonly heights: number[];
            readonly rewards: string[];
        }
        interface TransactionPowOfWorkConfigJSON {
            growthFactor: FractionJSON<string>;
            participationRatio: FractionJSON;
        }

        interface AccountParticipationWeightRatioJSON {
            balanceWeight: number;
            numberOfTransactionsWeight: number;
        }

        interface BlockParticipationWeightRatioJSON {
            balanceWeight: number;
            numberOfTransactionsWeight: number;
        }

        export const enum BNID_TYPE {
            /**测试网络 */
            TESTNET = "c",
            /**正式网络 */
            MAINNET = "b",
        }

        interface GenesisAssetJSON extends RoundDelegateJSON {
            chainName: string;
            assetType: string;
            magic: string;
            bnid: BNID_TYPE;
            beginEpochTime: number;
            genesisLocationName: string;
            genesisAmount: string;
            minTransactionFeePerByte: FractionJSON;
            maxTransactionSize: number;
            maxBlockSize: number;
            maxTPSPerBlock: number;
            consessusBeforeSyncBlockDiff: number;
            maxDelegateTxsPerRound: number;
            maxGrabTimesOfGiftAsset: number;
            issueAssetMinChainAsset: string;
            registerChainMinChainAsset: string;
            maxApplyAndConfirmedBlockHeightDiff: number;
            blockPerRound: number;
            delegates: number;
            whetherToAllowDelegateContinusElections: boolean;
            forgeInterval: number;
            rewardPercent: RewardPercentJSON;
            ports: PortsJSON;
            rewardPerBlock: RewardPerBlockJSON;
            accountParticipationWeightRatio: AccountParticipationWeightRatioJSON;
            blockParticipationWeightRatio: BlockParticipationWeightRatioJSON;
            // tpowDiffFormula: string;
            averageComputingPower: number;
            tpowOfWorkExemptionBlocks: number;
            transactionPowOfWorkConfig: TransactionPowOfWorkConfigJSON;
        }
        interface GenesisBlockAssetJSON {
            genesisAsset: GenesisAssetJSON;
        }
        type GenesisBlockJSON = BlockJSON<GenesisBlockAssetJSON>;
        //#endregion
    }
}
