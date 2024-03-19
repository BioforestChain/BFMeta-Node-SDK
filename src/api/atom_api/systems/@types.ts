export {};
declare global {
    export namespace BFMetaNodeSDK {
        export namespace System {
            // #region request
            export interface SystemApiRequestParams {
                /**校验类型:001:节点所有者校验 002:管理员校验 */
                verifyType: string;
                /**校验值 */
                verifyKey: string;
            }

            /**安全关闭节点 */
            export interface SafetyCloseParams extends SystemApiRequestParams {
                /**是否要关机 */
                isShutdown?: boolean;
            }

            /**设置节点密码 */
            export interface SetSystemKeyParams extends SystemApiRequestParams {
                /**节点旧密码，另外节点初始密码由厂商提供 */
                systemKeyOld: string;
                /**节点新密码 */
                systemKeyNew: string;
                /**是否要用非对称方式对新密码进行解密(True:使用非对称方式进行解密，False:不使用非对称方式进行解密，明文传输) */
                newKeyDecryptEnable?: boolean;
            }

            /**验证节点密码 */
            export interface VerifySystemKeyParams extends SystemApiRequestParams {
                /**节点密码 */
                systemKey: string;
            }

            /**增加节点管理员 */
            export interface AddSystemAdminParams extends SystemApiRequestParams {
                /**节点密码 */
                systemKey: string;
                /**节点管理员地址，管理员说明请参考<节点管理员> */
                systemAdminAddress: string;
            }

            /**获得节点管理员 */
            export interface GetSystemAdminParams extends SystemApiRequestParams {
                /**节点密码 */
                systemKey: string;
                /**节点管理员地址，如果有传入地址，则返回该管理员地址的信息，如没有传入，则返回所有管理员的信息 */
                systemAdminAddress?: string;
            }

            /**验证节点管理员 */
            export interface VerifySystemAdminParams extends SystemApiRequestParams {
                /**加密后的管理员地址 */
                cryptoAdminAddress: string;
            }

            /**删除节点管理员 */
            export interface DeleteSystemAdminParams extends SystemApiRequestParams {
                /**节点密码 */
                systemKey: string;
                /**节点管理员地址，管理员说明请参考<节点管理员> */
                systemAdminAddress: string;
            }

            /**重置节点管理员 */
            export interface ResetSystemAdminParams extends SystemApiRequestParams {
                /**节点密码 */
                systemKey: string;
                /**节点管理员地址，管理员说明请参考<节点管理员> */
                systemAdminAddresses: string[];
            }

            /**绑定节点账户 */
            export interface BindingAccountParams extends SystemApiRequestParams {
                /**节点密码 */
                systemKey: string;
                /**加密后的受托人私钥 */
                cryptoSecret: string;
                /**加密后的二次密钥 */
                secondSecret?: string;
            }

            /**获得节点受托人 */
            export interface GetSystemDelegateParams extends SystemApiRequestParams {}

            /**节点信息查询 */
            export interface MiningMachineInfoParams extends SystemApiRequestParams {}

            export interface ConfigPort {
                /**turnsever服务器使用端口 */
                turnserver: number;
                /**数据库使用的端口 */
                mongodb: number;
                /**节点管理使用端口 */
                system_websocket_port: number;
                /**进程锁使用端口 */
                clusterLock: number;
                /**grpc使用端口 */
                grpc: number;
                /**升级服务使用端口 */
                update_service_port: number;
                /**comlink使用端口 */
                comlink_port: number;
            }
            export interface AutoVoteModel {
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
            }
            export interface SecretModel {
                secret: string;
                secondSecret?: string;
            }
            export interface ConfigReadable extends ConfigRevisable {
                /**链端口号 */
                chainPort: ConfigPort;
            }
            export interface ConfigRevisable {
                /**进程参数配置  */
                coreForProcess: {
                    /**是否使用配置的核心数 */
                    forceUseConfig: boolean;
                    /**处理交易的进程数 */
                    coreNumForDealTransaction: number;
                    /**处理账户的进程数 */
                    coreNumForMemInfo: number;
                    /**处理未处理交易的进程数 */
                    coreNumForUntreatedTrs: number;
                };
                /**事件参数 */
                transactionConfig: {
                    /**事件表分表 */
                    subTrsCollection: boolean;
                    /**是否接收投票 */
                    receiveVoteEnable: boolean;
                    /**每轮可处理的最大投票交易数 */
                    maxTransactionLimitForVote: number;
                    /**每个区块的交易上限 */
                    transactionsLimitPerBlock: number;
                    /**矿机最小手续费 */
                    minFeePerByte: {
                        /**分子 */
                        numerator: number;
                        /**分母 */
                        denominator: number;
                    };
                    /**事件的最大手续费，单位: B */
                    maxFee: string;
                    /**自动投票配置 */
                    autoVote: AutoVoteModel;
                    /**blob 配置 */
                    blob: {
                        /**交易携带的 blob 最大值 */
                        maxTransactionBlobSize: number;
                        /**区块携带的 blob 最大值 */
                        maxBlockBlobSize: number;
                    };
                };

                /**文件日志配置 */
                logConfig: {
                    /**控制台输出等级: "error" | "warn" | "info"  */
                    consoleLogLevel: string;
                    /**日志等级: "error" | "warn" | "info"  */
                    fileLogLevel: string;
                    /**日志文件大小限制(mb) */
                    fileLogLimit: number;
                    /**备份日志时分割的份数 */
                    fileLogBackup: number;
                    /**是否使用日期进行分割 */
                    fileLogDateExpire: boolean;
                    /**日志保存天数 */
                    fileLogDaysToKeep: number;
                };
                /**启动参数 */
                startConfig: {
                    /**开启是否打块，true：开始打块，false：停止打块 */
                    generateBlockEnable: boolean;
                    /**区块标记 */
                    remark: string;
                    /**使用关键检查点启动 */
                    useCheckPoint: boolean;
                    /**关键检查点保留轮次数 */
                    numberOfReservedCheckPoint: number;
                    /**节点初始连接ip */
                    peers: string[];
                    /**最大连接数 */
                    maxChannelNumber: number;
                    /**节点负载数 */
                    nodeLoadCount: number;
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
                /**服务市场配置 */
                serviceConfig: {
                    /**是否开启服务市场 */
                    serverMarketEnable: boolean;
                    userMaxUploadNumber: number;
                    uploadTokenExpireTime: number;
                    remainTimeToClearUserSessoin: number;
                };
            }
            export type ConfigModel = {
                // 这里区分是否能够通过接口调整
                //#region 无法通过接口调整的参数
                /**打块配置 */
                forging: {
                    /**打块账户密钥 */
                    secrets: SecretModel[];
                };
                /**链端口号 */
                chainPort: ConfigPort;
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

                //#endregion 可以通过接口调整的参数

                //#region debug
                /**开发者SDK配置参数 */
                developerSDK: {
                    eventTimeoutMS: number;
                };
                /**节点的版本名称 */
                miningMachineVersionName: string;
                /**是否开启内存泄漏检测 */
                checkMemoryLeak: boolean;
                /**打印内存间隔(毫秒) */
                checkMemoryInterval: number;
                //#endregion debug
            } & ConfigRevisable;

            /**设置节点配置信息 */
            export interface SetSystemConfigParams extends SystemApiRequestParams {
                /**配置信息 */
                config: AllPartial<ConfigRevisable>;
            }

            /**获得节点配置信息 */
            export interface GetSystemConfigInfoDetailParams extends SystemApiRequestParams {}

            /**获得节点状态（实时信息） */
            export interface GetRuntimeStateParams extends SystemApiRequestParams {}

            /**获得节点访问统计信息 */
            export interface GetSystemMonitorParams extends SystemApiRequestParams {
                /**指定访问类型，包括访问 IP 的流量，次数，访问接口的次数，区块数量，事件数据等 */
                monitorType?: string;
                /**查询数量，例limit=10，表示可以查询10条数据。 */
                limit?: number;
                /**查询开始位置，例offset =20，表示从第20行开始查询。 */
                offset?: number;
            }

            /**获得节点运行日志类型 */
            export interface GetSystemLoggerTypeParams extends SystemApiRequestParams {}

            /**获得节点运行日志列表 */
            export interface GetSystemLoggerListParams extends SystemApiRequestParams {
                /**日志类型 */
                loggerType: string;
            }

            /**获得节点运行日志内容 */
            export interface GetSystemLoggerDetailParams extends SystemApiRequestParams {
                /**日志文件名 */
                loggerName: string;
                /**查询数量，例limit=10，表示可以查询10条数据。 */
                limit?: number;
                /**查询开始位置，例offset =20，表示从第20行开始查询。 */
                offset?: number;
                /**搜索的字符串 */
                searchString?: string;
                /**读取文件的方式 */
                readFileType?: BFMetaNodeSDK.READ_FILE_TYPE;
            }

            /**删除矿机运行日志 */
            export interface DeleteSystemLoggerParams extends SystemApiRequestParams {
                /**日志文件名 */
                loggerName: string;
            }

            /**获得节点邮箱地址 */
            export interface GetEmailAddressParams extends SystemApiRequestParams {
                /**需要查询的邮箱地址 */
                emailAddress?: string;
            }

            /**邮件发送配置 */
            export interface EmailConfig {
                /**邮箱配置类型，POP3/SMTP/IMAP */
                type: string;
                /**邮箱配置主机 */
                host?: string;
                /**邮箱配置端口 */
                port?: number;
                /**是否开启邮箱安全控制 */
                secureConnection?: boolean;
                /**是否开启 ssl */
                ssl?: boolean;
                /**是否开启 tls */
                tls?: boolean;
                /**中转邮箱配置信息 */
                auth?: {
                    /**中转邮箱配置用户名 */
                    user: string;
                    /**中转邮箱配置密码 */
                    pass: string;
                };
            }
            /**设置节点邮箱地址 */
            export interface SetEmailAddressParams extends SystemApiRequestParams {
                /**邮箱接收地址 */
                emailToAddress: string;
                /**邮箱发送地址 */
                emailFromAddress: string;
                /**邮箱配置 */
                emailConfig: EmailConfig;
            }

            /**通过节点私钥验证节点受托人 */
            export interface VerifySystemSecretParams extends SystemApiRequestParams {
                /**加密后的受托人私钥 */
                cryptoSecret: string;
            }

            /**设置节点访问白名单 */
            export interface SetSystemWhiteListParams extends SystemApiRequestParams {
                /**白名单清单 */
                whiteList: string[];
            }

            /**获得节点访问白名单 */
            export interface GetSystemWhiteListParams extends SystemApiRequestParams {}

            /**删除节点访问白名单 */
            export interface DeleteSystemWhiteListParams extends SystemApiRequestParams {
                /**白名单清单 */
                whiteList: string[];
            }

            /**获得节点进程的网络相关信息 */
            export interface GetProcessNetworkParams extends SystemApiRequestParams {
                /**查询数量，例limit=10，表示可以查询10条数据。 */
                limit?: number;
                /**查询开始位置，例offset =20，表示从第20行开始查询。 */
                offset?: number;
                /**进程类型 */
                processType?: string;
            }

            /**获得节点进程CPU信息 */
            export interface GetProcessCPUParams extends SystemApiRequestParams {
                /**查询数量，例limit=10，表示可以查询10条数据。 */
                limit?: number;
                /**查询开始位置，例offset =20，表示从第20行开始查询。 */
                offset?: number;
                /**进程类型 */
                processType?: string;
            }

            /**获得节点进程内存信息 */
            export interface GetProcessMemoryParams extends SystemApiRequestParams {
                /**查询数量，例limit=10，表示可以查询10条数据。 */
                limit?: number;
                /**查询开始位置，例offset =20，表示从第20行开始查询。 */
                offset?: number;
                /**进程类型 */
                processType?: string;
            }

            /**定时发送节点状态 */
            export interface SystemStatusParams extends SystemApiRequestParams {}

            /**定时发送节点CPU，内存，网络信息 */
            export interface SystemProcessParams extends SystemApiRequestParams {}

            /**获取所有的未处理交易数量 */
            export interface GetAllUntreatedTrsCountParams extends SystemApiRequestParams {}

            /**清除所有的未处理交易 */
            export interface ClearAllUntreatedTrsParams extends SystemApiRequestParams {}

            /**恢复所有的未处理交易 */
            export interface RestoreAllUntreatedTrsParams extends SystemApiRequestParams {}
            // #endregion

            // #region response
            export interface SystemApiRequestResult {}

            /**安全关闭节点 */
            export interface SafetyCloseResult extends SystemApiRequestResult {
                machineStatus: number;
            }

            /**设置节点密码 */
            export interface SetSystemKeyResult extends SystemApiRequestResult {}

            /**验证节点密码 */
            export interface VerifySystemKeyResult extends SystemApiRequestResult {}

            export interface SystemAdminModel {
                /**管理员地址 */
                adminAddress: string;
                /**管理员增加时的时间戳 */
                adminAddTime: number;
                /**管理员名称 */
                adminName: string;
            }
            /**增加节点管理员 */
            export interface AddSystemAdminResult extends SystemApiRequestResult {
                systemAdmin: SystemAdminModel;
            }

            /**获得节点管理员 */
            export interface GetSystemAdminResult extends SystemApiRequestResult {
                systemAdmin: SystemAdminModel[];
            }

            /**验证节点管理员 */
            export interface VerifySystemAdminResult extends SystemApiRequestResult {}

            /**删除节点管理员 */
            export interface DeleteSystemAdminResult extends SystemApiRequestResult {}

            /**重置节点管理员 */
            export interface ResetSystemAdminResult extends SystemApiRequestResult {
                systemAdmins: SystemAdminModel[];
            }

            /**绑定节点账户 */
            export interface BindingAccountResult extends SystemApiRequestResult {
                /**账户地址 */
                address: string;
                /**账户公钥 */
                publicKey: string;
                /**受托人注入时间 */
                delegateAddTime: number;
            }

            /**获得节点受托人 */
            export interface GetSystemDelegateResult extends SystemApiRequestResult {
                /**节点受托人公钥 */
                publicKey: string;
                /**节点受托人地址 */
                address: string;
                /**节点受托人设置成功时的时间戳 */
                addTime: number;
                /**受托人 */
                name: string | undefined;
            }

            /**节点信息查询 */
            export interface MiningMachineInfoResult extends SystemApiRequestResult {
                data: {
                    /**主机名称 */
                    hostname: string;
                    /**更新功能端口 */
                    updateServicePort: number;
                    /**节点管理功能端口 */
                    systemInfoPort: number;
                    /**服务市场端口 */
                    serviceMarketPort: number;
                    /**区块链网络端口 */
                    port: number;
                    /**操作系统 */
                    platform: string;
                    /**CPU 核心数 */
                    cpuCount: number;
                    /**CPU 型号信息 */
                    cpuModel: string;
                    /**CPU 速率 */
                    cpuSpeed: string;
                    /**内存大小 单位: 字节 */
                    totalMem: number;
                    /**内存型号 */
                    memModel: string;
                    /**内存赫兹 */
                    memHz: number;
                    /**磁盘大小 单位: 字节 */
                    totalDisk: number;
                    /**磁盘类型 */
                    diskModel: string;
                    /**该节点是否设置了受托人 true: 已经设置受托人，false: 未设置受托人 */
                    delegateStatus: boolean;
                };
            }

            /**设置节点配置信息 */
            export interface SetSystemConfigResult extends SystemApiRequestResult {}

            /**节点管理详细配置类型 */
            export type SystemConfigInfoDetail = Pick<
                ConfigModel,
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
            /**获得节点配置信息 */
            export interface GetSystemConfigInfoDetailResult extends SystemApiRequestResult, SystemConfigInfoDetail {}

            export interface MemoryUsage {
                /**驻留集大小，给这个进程分配了多少物理内存 */
                rss: number;
                /**堆的总大小，包含 3 个部分：1、已分配的内存，用于对象的创建和存储，对应于 heapUsed 2、未分配的但可用于分配的内存 3、未分配的但不能分配的内存 */
                heapTotal: number;
                /**已分配的内存，即堆中所有对象的总大小 */
                heapUsed: number;
                /**进程使用到的系统链接库所占用的内存 */
                external: number;
            }
            /**获得节点状态（实时信息） */
            export interface GetRuntimeStateResult extends SystemApiRequestResult {
                /**内存信息，JSON对象 */
                memory: MemoryUsage;
                /**操作系统 */
                platform: NodeJS.Platform;
                /**CPU 核心数 */
                cpuCount: number;
                /**可用内存大小 */
                freemem: number;
                /**总共内存大小 */
                totalmen: number;
                /**CPU 使用率，单位：% */
                cpuUsage: number;
                /**CPU 平均负载 */
                cpuUsageV2: number[];
                /**CPU 型号信息 */
                cpuModel: string;
                /**进程信息，JSON对象 */
                process: {
                    /**进程ID */
                    pid: number;
                    /**进程名称 */
                    name?: string;
                };
            }

            /**访问IP统计 */
            export interface RequestIpMonitor {
                /**IP信息对象，JSON对象 */
                [ip: string]: RequestIpInfoModel;
            }
            export interface RequestIpInfoModel {
                /**访问次数 */
                requestCount: number;
                /**访问错误次数 */
                requestErrorCount: number;
                /**访问拒绝次数 */
                requestRejectCount: number;
                /**下载流量 */
                downloadFlow: number;
                /**上行流量 */
                uploadFlow: number;
            }
            export interface RequestMethodModel {
                /**访问方式统计信息，JSON对象 */
                [method: string]: RequestTypeBaseInfo;
            }
            export interface RequestPathModel {
                /**访问路径统计信息，JSON对象 */
                [path: string]: RequestTypeBaseInfo;
            }
            export interface RequestApiUrlModel {
                /**访问 url 统计信息，JSON对象 */
                [apiUrl: string]: RequestTypeBaseInfo;
            }
            export interface RequestMethodNameModel {
                /**访问接口名称统计信息，JSON对象 */
                [methodName: string]: RequestTypeBaseInfo;
            }
            export interface RequestTypeBaseInfo {
                /**访问次数 */
                count: number;
            }
            export interface AccountMonitorInfo {
                /**访问账户统计信息，JSON对象 */
                [account: string]: number;
            }
            export interface BlockInfo {
                /**区块高度 */
                height: number;
                /**区块生成时间戳 */
                time: number;
                /**区块奖励数量 */
                reward: string;
                /**区块大小 */
                blockSize: number;
                /**区块事件数量 */
                numberOfTransactions: number;
            }
            export interface TransactionInfo {
                /**节点事件权益数量 */
                amount: string;
                /**节点事件手续费数量 */
                fee: string;
            }
            /**获得节点访问统计信息 */
            export interface GetSystemMonitorResult extends SystemApiRequestResult {
                requestIpMonitorInfo?: RequestIpMonitor;
                requestMethodInfo?: RequestMethodModel;
                requestPathInfo?: RequestPathModel;
                requestApiUrlInfo?: RequestApiUrlModel;
                requestMethodNameInfo?: RequestMethodNameModel;
                requestAccountInfo?: AccountMonitorInfo;
                transaction?: TransactionInfo;
                trsCount?: { [key: string]: number };
                blockCount?: BlockInfo[];
            }

            export interface LoggerType {
                /**日志类型 */
                loggerType: string;
                /**日志文件名 */
                loggerName: string;
                /**该类型日志数量 */
                loggerAmount: number;
                /**该类型日志总大小，单位：字节 */
                loggerSize: number;
                /**该类型日志最后创建时间 */
                loggerUpdateTime: number;
            }
            /**获得节点运行日志类型 */
            export interface GetSystemLoggerTypeResult extends SystemApiRequestResult {
                loggerType: LoggerType[];
            }

            export interface LoggerInfo {
                /**日志文件名 */
                logName: string;
                /**日志最后修改时间 */
                logUpdateTime: number;
                /**日志文件大小 */
                logSize: number;
                /**日志文件路径 */
                logPath: string;
            }
            /**获得节点运行日志列表 */
            export interface GetSystemLoggerListResult extends SystemApiRequestResult {
                loggerList: LoggerInfo[];
            }

            /**获得节点运行日志内容 */
            export interface GetSystemLoggerDetailResult extends SystemApiRequestResult {
                result: {
                    loggerDetail: string[];
                    linesTotal: number;
                };
            }

            /**删除矿机运行日志 */
            export interface DeleteSystemLoggerResult extends SystemApiRequestResult {}

            /**获得节点邮箱地址 */
            export interface GetEmailAddressResult extends SystemApiRequestResult {
                result: {
                    emailToAddress: string;
                    emailFromAddress: string;
                    emailConfig: EmailConfig;
                };
            }

            /**设置节点邮箱地址 */
            export interface SetEmailAddressResult extends SystemApiRequestResult {}

            /**通过节点私钥验证节点受托人 */
            export interface VerifySystemSecretResult extends SystemApiRequestResult {}

            /**设置节点访问白名单 */
            export interface SetSystemWhiteListResult extends SystemApiRequestResult {}

            /**获得节点访问白名单 */
            export interface GetSystemWhiteListResult extends SystemApiRequestResult {
                whileList: string[];
            }

            /**删除节点访问白名单 */
            export interface DeleteSystemWhiteListResult extends SystemApiRequestResult {}

            /**进程网络 */
            export interface ProcessNetwork {
                /**进程类型 */
                processType: string;
                /**进程名称 */
                name: string;
                /**进程发送网络流量 */
                send: number;
                /**进程接收网络流量 */
                receive: number;
                /**进程发送接收的总网络流量 */
                sum: number;
            }
            /**获得节点进程的网络相关信息 */
            export interface GetProcessNetworkResult extends SystemApiRequestResult {
                result?: {
                    processNetwork: ProcessNetwork[];
                    count: number;
                };
            }

            /**进程CPU */
            export interface ProcessCPU {
                /**进程类型 */
                processType: string;
                /**进程名称 */
                name: string;
                /**进程 CPU 使用率 */
                percent: number;
                /**进程 CPU 状态 */
                state: string;
            }
            /**获得节点进程CPU信息 */
            export interface GetProcessCPUResult extends SystemApiRequestResult {
                result?: {
                    processCPU: ProcessCPU[];
                    count: number;
                };
            }

            /**进程内存 */
            export interface ProcessMemory {
                /**进程类型 */
                processType: string;
                /**进程名称 */
                name: string;
                /**进程共享内存大小 */
                share: number;
                /**进程专用内存大小 */
                rss: number;
            }
            /**获得节点进程内存信息 */
            export interface GetProcessMemoryResult extends SystemApiRequestResult {
                result?: {
                    processMemory: ProcessMemory[];
                    count: number;
                };
            }

            /**受托人的相关收益信息，包括收益率，获得投票数量，锻造区块数量 */
            export interface DelegateInfo {
                /**投票收益率 */
                reward: string;
                /**当前轮次的投票数量 */
                voteCount: string;
                /**受托人锻造区块数量 */
                forgerBlocks: number;
            }
            export interface OsCpuInfo {
                /**CPU属于其系列中哪一代的代号 */
                model: string;
                /**CPU主频（时钟频率） */
                speed: number;
                /**耗时统计 */
                times: {
                    /**CPU在用户模式下花费的毫秒数 */
                    user: number;
                    /**CPU在良好模式下花费的毫秒数 */
                    nice: number;
                    /**CPU在系统模式下花费的毫秒数 */
                    sys: number;
                    /**CPU在空闲模式下花费的毫秒数 */
                    idle: number;
                    /**CPU在中断请求模式下花费的毫秒数 */
                    irq: number;
                };
            }
            /**矿机状态信息 */
            export interface SystemStatusModel {
                /**CPU 使用率，数组 */
                cpusStatus: OsCpuInfo[];
                /**内存使用状况 */
                memStatus: {
                    /**可用内存大小 */
                    freeMem: number;
                    /**总共内存大小 */
                    totalmem: number;
                };
                /**系统带宽 */
                bandwithStatus: {
                    /**总共带宽 */
                    total: number;
                    /**使用带宽 */
                    usage: number;
                };
                /**磁盘使用情况 */
                diskSpace: {
                    /**可用磁盘大小 */
                    free: number;
                    /**总共磁盘大小 */
                    size: number;
                };
                /**节点运行状态：0 离线，不可用 1 自由状态，有空闲资源可用 2 重建区块链 3 节点共识 4 重放区块 5 锻造区块 6 回滚区块*/
                machineStatus: number;
                /**受托人信息 */
                deletegateInfo: DelegateInfo;
                /**矿机版本名称 */
                miningMachineVersionName: string;
                /**CPU使用率 */
                cpuUsage: number;
                /**当前区块高度 */
                currentHeight: number;
                /**同步到节点列表中最高高度 */
                maxHeight: number;
            }
            /**定时发送节点状态 */
            export interface SystemStatusResult extends SystemApiRequestResult {
                systemStatus: SystemStatusModel;
            }

            /**CPU使用情况 */
            export interface UsageCPU {
                processCount: number; // 进程数
                speed: number; // 速度
                runtime: number; // 正常运行时间
                threadCount: number; // 线程数
                handleCount: number; // 句柄数
                CPUusage: number; // CPU使用率
            }
            /**内存使用情况 */
            export interface MemoryInfo {
                physcial: number; // 物理内存
                physcialUsed: number; // 物理内存使用
                physcialWait: number; // 物理内存空闲
                virtual: number; // 虚拟内存
                virtualUsed: number; // 虚拟内存使用
                virtualWait: number; // 虚拟内存空闲
            }
            /**网络使用情况 */
            export interface NetworkInfo {
                receive: number; // 接收网络流量
                send: number; // 发送网络流量
                sum: number; // 总网络流量
            }
            /**进程基本信息 */
            export interface ProcessInfo {
                /**CPU使用百分比 */
                CPUPercent: number;
                /**内存使用百分比 */
                memoryPercent: number;
                /**每秒发送 */
                send: number;
                /**每秒接收 */
                receive: number;
            }
            /**定时发送节点CPU，内存，网络信息 */
            export interface SystemProcessResult extends SystemApiRequestResult {
                result: {
                    systemProcess: {
                        usageCPU: UsageCPU;
                        usageMemory: MemoryInfo;
                        usageNetwork: NetworkInfo;
                        processData: ProcessInfo;
                    };
                };
            }

            /**获取所有的未处理交易数量 */
            export interface GetAllUntreatedTrsCountResult extends SystemApiRequestResult {
                result: false | number;
            }

            /**清除所有的未处理交易 */
            export interface ClearAllUntreatedTrsResult extends SystemApiRequestResult {
                result: true | "untreatedTrs is clearing";
            }

            /**恢复所有的未处理交易 */
            export interface RestoreAllUntreatedTrsResult extends SystemApiRequestResult {
                result: true | "untreatedTrs is in restore";
            }
            // #endregion

            export interface BasicApiSuccessReturnResult<T extends SystemApiRequestResult> extends ApiSuccessReturn<T> {
                result: T;
            }
            export interface SystemApiFailureReturn extends ApiFailureReturn {}

            export type SystemApiReturn<T extends SystemApiRequestResult> = BFMetaNodeSDK.Basic.BasicApiSuccessReturn<T> | SystemApiFailureReturn;

            export type SystemApi = import("./apis/_systemGetApi").SystemGetApi<any> | import("./apis/_systemPostApi").SystemPostApi<any>;
            export type SafetyCloseApi = import("./apis").SafetyCloseApi;

            export type SetSystemKeyApi = import("./apis").SetSystemKeyApi;
            export type VerifySystemKeyApi = import("./apis").VerifySystemKeyApi;
            export type AddSystemAdminApi = import("./apis").AddSystemAdminApi;
            export type GetSystemAdminApi = import("./apis").GetSystemAdminApi;
            export type VerifySystemAdminApi = import("./apis").VerifySystemAdminApi;
            export type DeleteSystemAdminApi = import("./apis").DeleteSystemAdminApi;
            export type ResetSystemAdminApi = import("./apis").ResetSystemAdminApi;

            export type BindingAccountApi = import("./apis").BindingAccountApi;
            export type GetSystemDelegateApi = import("./apis").GetSystemDelegateApi;

            export type SetSystemConfigApi = import("./apis").SetSystemConfigApi;
            export type GetSystemConfigInfoDetailApi = import("./apis").GetSystemConfigInfoDetailApi;

            export type GetRuntimeStateApi = import("./apis").GetRuntimeStateApi;
            export type MiningMachineInfoApi = import("./apis").MiningMachineInfoApi;

            export type GetSystemMonitorApi = import("./apis").GetSystemMonitorApi;
            export type GetSystemLoggerTypeApi = import("./apis").GetSystemLoggerTypeApi;
            export type GetSystemLoggerListApi = import("./apis").GetSystemLoggerListApi;
            export type GetSystemLoggerDetailApi = import("./apis").GetSystemLoggerDetailApi;
            export type DeleteSystemLoggerApi = import("./apis").DeleteSystemLoggerApi;

            export type GetEmailAddressApi = import("./apis").GetEmailAddressApi;
            export type SetEmailAddressApi = import("./apis").SetEmailAddressApi;

            export type VerifySystemSecretApi = import("./apis").VerifySystemSecretApi;
            export type SetSystemWhiteListApi = import("./apis").SetSystemWhiteListApi;
            export type GetSystemWhiteListApi = import("./apis").GetSystemWhiteListApi;
            export type DeleteSystemWhiteListApi = import("./apis").DeleteSystemWhiteListApi;

            export type GetProcessCPUApi = import("./apis").GetProcessCPUApi;
            export type GetProcessMemoryApi = import("./apis").GetProcessMemoryApi;
            export type GetProcessNetworkApi = import("./apis").GetProcessNetworkApi;

            export type SystemStatusApi = import("./apis").SystemStatusApi;
            export type SystemProcessApi = import("./apis").SystemProcessApi;

            export type GetAllUntreatedTrsCountApi = import("./apis").GetAllUntreatedTrsCountApi;
            export type ClearAllUntreatedTrsApi = import("./apis").ClearAllUntreatedTrsApi;
            export type RestoreAllUntreatedTrsApi = import("./apis").RestoreAllUntreatedTrsApi;
        }
    }
}
