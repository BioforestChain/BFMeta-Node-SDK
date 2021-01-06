declare namespace BFChainPcSdk {
    //节点Api的通用请求类型
    type PcApiRequest = { [key: string]: any };

    //节点的ws和http返回类型
    type PcApiReturn = {
        success?: boolean;
        error?: {
            message: string; //失败的message
            code?: string; //失败的CODE
        };
        minFee?: number; //交易类接口最小手续费
    };

    //SDK调用接口的通用返回类型
    interface SDKReturn {
        success: boolean;
        result?: any; //成功时的返回结果
        message?: string; //失败的message
        code?: string; //失败的CODE
        minFee?: number; //交易类接口最小手续费
    }

    type ApiInfo = {
        //名称
        name: string;
        //请求方式
        method?: import("./apiConst").RequestMethod;
    };

    namespace ApiRequest {
        namespace BASIC {
            /**获取指定区块 */
            interface GetBlock {
                /**区块签名 */
                signature?: string;
                /**区块高度 */
                height?: number;
                /**查看第几页（一页20条记录） */
                page?: number;
            }

            /**获取指定事件 */
            interface GetTransactions {
                /**事件id */
                signature?: string;
                /**事件所属区块高度 */
                height?: number;
                /**事件发起方 */
                senderId?: string;
                /**事件接收方 */
                recipientId?: string;
                /**事件类型，如果不传入则不筛选事件类型，事件类型请参考<事件类型> */
                type?: string[];
                /**查看第几页（一页20条记录） */
                page?: number;
            }

            /**获取指定账户 */
            interface GetAccountInfoAndAssets {
                /**账户地址 */
                address: string;
            }

            /**创建账户 */
            interface CreateAccount {
                /**账户密钥 */
                secret: string;
            }
        }

        namespace TRANSACTION {
            /**交易通用参数 */
            interface TrCommonParam {
                /**发起账户的密钥 */
                secret: string;
                /**发起账户的二次密钥 */
                secondSecret?: string;
                /**事件的接收账户地址， base58 编码的 16 进制字符串 */
                recipientId?: string;
                /**事件的接收范围类型， 只能是 0， 1， 2， 4 中的某一个， 0 表示不限定操作范围， 1 表示只有指定的账户地址才能对这笔事件进行操作， 2 表示只有指定的 dappid 才能对这笔事件进行操作， 4 表示只有指定的位名系统才能对这笔事件进行操作， 默认为 0 */
                rangeType?: number;
                /**事件的接收范围， 当 rangeType 为 0 时， 不能填写任何数据， 当 rangeType 为 1 时， 只能填写账户地址， 当 rangeType 为 2 时， 只能填写 dappid， 当 rangeType 为 4 时， 只能填写位名系统， 默认为空 */
                range?: string[];
                /**事件的手续费 */
                fee: string;
                /**事件的发起高度， 0-9 组成并且不包含小点， 可选， 默认使用当前区块链的最新高度 */
                applyBlockHeight?: number;
                /**事件备注信息， 默认为空 */
                remark?: string;
                /**事件所属的 dappid， 大写字母或数字，17-32 个字符， 默认为空 */
                dappid?: string;
                /**事件所属的位名系统， 2-1024 个字符， 每级域名最大长度为 128 个字符， 一级域名只能时小写字母组成， 二级及以上开头及结尾只能由小写字母或数字组成， 中间可以包含下划线， 根域名必须时本链链名， 可选， 默认为空 */
                lns?: string;
                /**发送方IP */
                sourceIP?: string;
                /**事件的来源链网络标识符， 大写字母或数字组成， 5 个字符， 默认使用创世块的 magic */
                fromMagic?: string;
                /**事件的去往链网络标识符， 大写字母或数字组成， 5 个字符， 默认使用创世块的 magic */
                toMagic?: string;
                /**事件的过期区块间隔， 默认使用创世块最大过期时间参数， 0-9 组成并且不包含小数点 */
                numberOfEffectiveBlocks?: number;
                /**TPOW难度 */
                tpowDifficulty?: number;
            }

            /**发送转账事件 */
            interface TrTransferAsset extends TrCommonParam {
                /**转移的资产数量， 0-9 组成并且不包含小数点， 必须大于 0 */
                amount: string;
                /**转移的资产类型， 大写字母组成， 3-5 个字符 */
                assetType?: string;
                /**转移的资产所属链名， 小写字母组成， 3-8 位 */
                sourceChainName?: string;
                /**转移的资产所属链网络标识符， 大写字母或数字组成， 5 个字符 */
                sourceChainMagic?: string;
                /**事件的接收账户地址， base58 编码的 16 进制字符串 */
                recipientId: string;
            }

            /**发送设置二次密码事件 */
            interface TrSignature extends TrCommonParam {
                /**新的二次密码 */
                newSecondSecret: string;
            }

            /**发送设置用户名事件 */
            interface TrUsername extends TrCommonParam {
                /**用户名字符串， 大小写字母、数字、下划线组成， 1-20 个字符， 不能包含 主链名称 */
                alias: string;
            }

            /**发送注册受托人事件 */
            interface TrDelegate extends TrCommonParam {
                /**用户名字符串， 大小写字母、数字、下划线组成， 1-20 个字符， 不能包含当前链的名称 */
                username: string;
            }

            /**发送接收投票事件 */
            interface TrAcceptVote extends TrCommonParam {}

            /**发送拒绝投票事件 */
            interface TrRejectVote extends TrCommonParam {}

            /**发送投票事件 */
            interface TrVote extends TrCommonParam {
                /**投出的权益数， 0-9 组成并且不包含小数点， 允许为 0 */
                equity: string;
                /**事件的接收账户地址， base58 编码的 16 进制字符串 */
                recipientId: string;
            }

            /**发送dapp事件 */
            interface TrDapp extends TrCommonParam {
                /**dappid， 大写字母或数字组成， 8 个字符 */
                newDappid: string;
                /**dappid 的类型， 只能为 0 或 1， 0 表示这个 dappid 是付费使用的， 1 表示这个 dappid 是免费使用的 */
                type: number;
                /**购买 dappid 使用权需要的资产数量(如果 dappid 是付费应用则必须携带，如果是免费应用则无需携带)， 0-9 组成并且不包含小数点， 必须大于 0 */
                amount: string;
                /**购买 dappid 使用权的资产所属链网络标识符， 大写字母或数字组成， 5 个字符， 可选， 与 amount 配合使用， 默认为创世块网络标识符 */
                sourceChainName?: string;
                /**事件的来源链网络标识符， 大写字母或数字组成， 5 个字符， 可选， 默认使用创世块的 magic */
                sourceChainMagic?: string;
                /**购买 dappid 使用权的资产名， 大写字母组成， 3-5 个字符， 可选， 与 amount 配合使用， 默认为传世块资产名 */
                assetType?: string;
                /**事件的接收账户地址， base58 编码的 16 进制字符串 */
                recipientId: string;
            }

            /**发送dapp购买事件 */
            interface TrDappPurchasing extends TrCommonParam {
                /**购买的 dappid 的发行事件签名， 128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**事件的接收账户地址， base58 编码的 16 进制字符串 */
                recipientId: string;
            }

            /**发送存证事件 */
            interface TrMark extends TrCommonParam {
                /**购买的 dappid 的发行事件签名， 128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**存证的拥有者地址， base58 编码的 16 进制字符串 */
                markPossessor: string;
                /**存证内容，为任意字符串 */
                content: string;
                /**存证类型，为任意字符串，用于区别存证 */
                action: string;
            }

            /**发送资产发行事件 */
            interface TrIssueAsset extends TrCommonParam {
                /**发行的资产名， 大写字母组成， 3-5 个字符 */
                assetType: string;
                /**发行的新资产总数， 0-9 组成并且不包含小数点 */
                expectedIssuedAssets: string;
                /**事件的接收账户地址， base58 编码的 16 进制字符串 */
                recipientId: string;
            }

            /**发送销毁资产事件 */
            interface TrDestroyAsset extends TrCommonParam {
                /**销毁的资产数， 0-9 组成并且不包含小数点， 必须大于 0 */
                amount: string;
                /**销毁的资产名， 大写字母组成， 3-5 个字符 */
                assetType: string;
                /**事件的接收账户地址， base58 编码的 16 进制字符串 */
                recipientId: string;
            }

            /**发送数字资产交换事件 */
            interface TrToExchangeAsset extends TrCommonParam {
                /**用于交换的资产来源链网络标识符， 大写字母或数字组成， 5 个字符 */
                toExchangeSource: string;
                /**被交换的资产来源链网络标识符， 大写字母或数字组成， 5 个字符 */
                beExchangeSource: string;
                /**用于交换的资产来源链名， 小写字母组成， 3-8 位 */
                toExchangeChainName: string;
                /**被交换的资产来源链名， 小写字母组成， 3-8 位 */
                beExchangeChainName: string;
                /**用于交换的资产名， 大写字母组成， 3-5 个字符 */
                toExchangeAsset: string;
                /**被交换的资产名， 大写字母组成， 3-5 个字符 */
                beExchangeAsset: string;
                /**用于交换的资产数量， 0-9 组成并且不包含小数点， 必须大于 0 */
                toExchangeNumber: string;
                /**用作与资产的交换比例的分母，为正整数。被交换资产=交换资产*交换比例 */
                prevWeight: string;
                /**用作与资产的交换比例的分子，为正整数。被交换资产=交换资产*交换比例 */
                nextWeight: string;
                /**加密密钥组， 如果填写了密钥， 则接收资产交换的事件必须携带某个密钥生成的签名对 */
                ciphertexts?: string[];
            }

            /**发送接收数字资产交换事件 */
            interface TrBeExchangeAsset extends TrCommonParam {
                /**to 事件的签名， 128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**用于交换的资产数量， 0-9 组成并且不包含小数点 */
                beExchangeNumber: string;
                /**交换得到的资产数量， 0-9 组成并且不包含小数点 */
                toExchangeNumber: string;
                /**加密密钥， 如果资产交换事件填写了加密密钥， 则必须携带某个资产交换事件指定密钥以生成密钥签名对 */
                ciphertext?: string;
                /**事件的接收账户地址， base58 编码的 16 进制字符串 */
                recipientId: string;
            }

            /**发送特殊资产交换事件 */
            interface TrToExchangeSpecAsset extends TrCommonParam {
                /**用于交换的资产来源链网络标识符， 大写字母或数字组成， 5 个字符 */
                toExchangeSource: string;
                /**被交换的资产来源链网络标识符， 大写字母或数字组成， 5 个字符 */
                beExchangeSource: string;
                /**用于交换的资产来源链名， 小写字母组成， 3-8 位 */
                toExchangeChainName: string;
                /**被交换的资产来源链名， 小写字母组成， 3-8 位 */
                beExchangeChainName: string;
                /**用于交换的资产名， 可能为 dappid， 位名系统或数字资产名 */
                toExchangeAsset: string;
                /**交换得到的资产名， 可能为 dappid， 位名系统或数字资产名 */
                beExchangeAsset: string;
                /**用于交换或交换得到的资产数量， 0-9 组成并且不包含小数点 */
                exchangeNumber: string;
                /**特殊资产的类型， 只能为 0 或 1， 0 为 dappid， 1 为位名系统 */
                exchangeAssetType: number;
                /**特殊资产的来源， 只能为 0 或 1， 0 为出售， 1 为求购 */
                exchangeDirection: number;
                /**加密密钥组， 如果填写了密钥， 则接收资产交换的事件必须携带某个密钥生成的签名对 */
                ciphertexts?: string[];
            }

            /**发送接收特殊资产交换事件 */
            interface TrBeExchangeSpecAsset extends TrCommonParam {
                /**to 事件的签名， 128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**加密密钥， 如果资产交换事件填写了加密密钥， 则必须携带某个资产交换事件指定密钥以生成密钥签名对 */
                ciphertext?: string;
                /**事件的接收账户地址， base58 编码的 16 进制字符串 */
                recipientId: string;
            }

            /**发送资产赠与事件（红包事件） */
            interface TrGiftAsset extends TrCommonParam {
                /**赠送的资产所属链网络标识符 */
                sourceChainMagic?: string;
                /**赠送的资产所属链名 */
                sourceChainName?: string;
                /**赠送的资产类型 */
                assetType?: string;
                /**赠送的资产数量 */
                amount: string;
                /**可被接收的次数 */
                totalGrabableTimes: number;
                /**从资产赠送事件发起到开始被签收的区块间隔， 0-9 组成并且不包含小数点， 可选， 必须小于等于事件的有效期 */
                numberOfBeginUnfrozenBlocks?: number;
                /**接收规则, 只能为 0,1 或 2, 0 表示平均分配, 1 表示根据任意账户的地址的随机分配, 2 表示根据接收者列表中账户地址的随机分配 */
                giftDistributionRule: number;
                /**加密密钥组， 如果填写了密钥， 则接收资产交换的事件必须携带某个密钥生成的签名对 */
                ciphertexts?: string[];
            }

            /**发送接收资产赠与事件（抢红包事件） */
            interface TrGrabAsset extends TrCommonParam {
                /**接收的赠送资产数量， 0-9 组成并且不包含小数点 */
                amount: string;
                /**赠送事件所在的区块签名， 128 个字节的 16 进制字符串 */
                blockSignature: string;
                /**赠送事件的签名， 128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**加密密钥， 如果资产交换事件填写了加密密钥， 则必须携带某个资产交换事件指定密钥以生成密钥签名对 */
                ciphertext?: string;
            }

            /**发送委托数字资产事件 */
            interface TrTrustAsset extends TrCommonParam {
                /**指定的委托人地址 */
                trustees: string[];
                /**签收时需要的委托签名数量， 0-9 组成， 必须大于 0， 最大值为指定的受托人数量+2 */
                numberOfSignFor: number;
                /**委托资产所属链名 */
                sourceChainName?: string;
                /**委托资产所属链网络标识符 */
                sourceChainMagic?: string;
                /**委托资产类型 */
                assetType?: string;
                /**委托的资产数量， 0-9 组成并且不包含小数点， 必须大于 0 */
                amount: string;
                /**事件的接收账户地址， base58 编码的 16 进制字符串 */
                recipientId: string;
            }

            /**发送签收委托数字资产事件 */
            interface TrSignForAsset extends TrCommonParam {
                /**委托事件的签名， 128 个字节的 16 进制字符串 */
                transactionSignature: string;
            }

            /**发送资产迁出交易 */
            interface TrEmigrateAsset extends TrCommonParam {
                /**创世受托人的公钥和签名，[公钥，签名] */
                genesisDelegateSignature: string[];
                /**迁出的资产数量, 0-9 组成并且不包含小数点, 必须大于 0 */
                amount: string;
            }

            /**发送资产迁入交易 */
            interface TrImmigrateAsset extends TrCommonParam {
                /**资产迁出交易的签名, 128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**创世受托人的公钥和签名，[公钥，签名] */
                genesisDelegateSignature: string[];
            }

            /**发送注册、注销位名系统事件 */
            interface TrLocationName extends TrCommonParam {
                /**位名系统， 2-1024 个字符， 每级域名最大长度为 128 个字符， 一级域名只能是小写字母组成， 二级及以上开头及结尾只能由小写字母或数字组成， 中间可以包含下划线， 根域名必须时本链链名 */
                name: string;
                /**操作类型， 只能是 0 或 1， 0 表示注册位名系统， 1 表示注销位名系统 */
                operationType: number;
                /**事件的接收账户地址， base58 编码的 16 进制字符串 */
                recipientId: string;
            }

            /**发送设置位名系统管理员事件 */
            interface TrSetLnsManager extends TrCommonParam {
                /**位名系统， 2-1024 个字符， 每级域名最大长度为 128 个字符， 一级域名只能是小写字母组成， 二级及以上开头及结尾只能由小写字母或数字组成， 中间可以包含下划线， 根域名必须时本链链名 */
                name: string;
                /**事件的接收账户地址， base58 编码的 16 进制字符串 */
                recipientId: string;
            }

            /**发送设置位名系统解析值事件 */
            interface TrSetLnsRecordValue extends TrCommonParam {
                /**位名系统， 2-1024 个字符， 每级域名最大长度为 128 个字符， 一级域名只能是小写字母组成， 二级及以上开头及结尾只能由小写字母或数字组成， 中间可以包含下划线， 根域名必须时本链链名 */
                name: string;
                /**操作类型， 只能为 0 或 1 或 2， 0 表示添加， 1 表示删除， 2 表示更新 */
                operationType: number;
                /**增加的解析值， 解析值的类型只能为 A 或 AAAA 或 LNG_LAT 或 BLOCK_CHAIN_ACCOUNT_ADDRESS， A 表示 ipV4， AAAA 表示 ipV6， LNG_LAT 表示经纬度， BLOCK_CHAIN_ACCOUNT_ADDRESS 表示链上账户地址，[解析值类型，解析值]， 可选， 操作类型为 0 或 2 时必填 */
                addRecord?: string[];
                /**删除的解析值， 解析值的类型只能为 A 或 AAAA 或 LNG_LAT 或 BLOCK_CHAIN_ACCOUNT_ADDRESS， A 表示 ipV4， AAAA 表示 ipV6， LNG_LAT 表示经纬度， BLOCK_CHAIN_ACCOUNT_ADDRESS 表示链上账户地址，[解析值类型，解析值]， 可选， 操作类型为 1 或 2 时必填 */
                deleteRecord?: string[];
            }

            /**发送注册链事件 */
            interface TrRegisterChain extends TrCommonParam {
                /**创世块路径 */
                genesisBlockPath: string;
            }
        }

        namespace SYSTEM {
            /**admin通用参数 */
            interface AdminCommonParam {
                /**校验类型:001:节点所有者校验 002:管理员校验 */
                verifyType: string;
                /**校验值 */
                verifyKey: string;
            }

            /**安全关闭节点 */
            interface SafetyClose extends AdminCommonParam {
                /**是否要关机 */
                isShutdown?: boolean;
            }

            /**设置节点密码 */
            interface SetSystemKey {
                /**节点旧密码，另外节点初始密码由厂商提供 */
                systemKeyOld: string;
                /**节点新密码 */
                systemKeyNew: string;
                /**是否要用非对称方式对新密码进行解密(True:使用非对称方式进行解密，False:不使用非对称方式进行解密，明文传输) */
                newKeyDecryptEnable?: boolean;
            }

            /**验证节点密码 */
            interface VerifySystemKey {
                /**节点密码 */
                systemKey: string;
            }

            /**增加节点管理员 */
            interface AddSystemAdmin {
                /**节点密码 */
                systemKey: string;
                /**节点管理员地址，管理员说明请参考<节点管理员> */
                systemAdminAddress: string;
            }

            /**获得节点管理员 */
            interface GetSystemAdmin {
                /**节点密码 */
                systemKey: string;
                /**节点管理员地址，如果有传入地址，则返回该管理员地址的信息，如没有传入，则返回所有管理员的信息 */
                systemAdminAddress?: string;
            }

            /**验证节点管理员 */
            interface VerifySystemAdmin {
                /**加密后的管理员地址 */
                cryptoAdminAddress: string;
            }

            /**删除节点管理员 */
            interface DelSystemAdmin {
                /**节点密码 */
                systemKey: string;
                /**节点管理员地址，管理员说明请参考<节点管理员> */
                systemAdminAddress: string;
            }

            /**重置节点管理员 */
            interface ResetSystemAdmin {
                /**节点密码 */
                systemKey: string;
                /**节点管理员地址，管理员说明请参考<节点管理员> */
                systemAdminAddresses: string[];
            }

            /**绑定节点账户 */
            interface BindingAccount {
                /**节点密码 */
                systemKey: string;
                /**加密后的受托人私钥 */
                cryptoSecret: string;
                /**加密后的二次密钥 */
                secondSecret?: string;
            }

            /**批量绑定受托人 */
            interface SetSystemDelegateMutli {
                /**节点密码 */
                systemKey: string;
                /**加密后的受托人私钥 */
                cryptoSecret: string;
                /**加密后的二次密钥 */
                secondSecret?: string;
            }

            /**获得节点受托人 */
            interface GetSystemDelegate extends AdminCommonParam {}

            /**查询该矿机所有绑定受托人 */
            interface GetInjectGenerators extends AdminCommonParam {}

            /**查询该矿机绑定受托人详情信息（余额，收益，锻造区块数，地址） */
            interface GetSystemDelegateDetail extends AdminCommonParam {
                /**受托人地址 */
                address: string;
            }

            /**获得节点详情（累计收益，当前高度，当前版本） */
            interface GetSystemNodeInfo extends AdminCommonParam {}

            /**节点信息查询 */
            interface MiningMachineInfo extends AdminCommonParam {}

            /**设置节点配置信息 */
            interface SetSystemConfig extends AdminCommonParam {
                /**配置信息 */
                config: AllPartial<Config.ConfigModel>;
            }

            /**获得节点配置信息 */
            interface GetSystemConfigInfoDetail extends AdminCommonParam {}

            /**获得节点状态（实时信息） */
            interface GetRuntimeState extends AdminCommonParam {}

            /**获得节点访问统计信息 */
            interface GetSystemMonitor extends AdminCommonParam {
                /**指定访问类型，包括访问 IP 的流量，次数，访问接口的次数，区块数量，事件数据等 */
                monitorType?: string;
                /**查询数量，例limit=10，表示可以查询10条数据。 */
                limit?: number;
                /**查询开始位置，例offset =20，表示从第20行开始查询。 */
                offset?: number;
            }

            /**获得节点运行日志类型 */
            interface GetSystemLoggerType extends AdminCommonParam {}

            /**获得节点运行日志列表 */
            interface GetSystemLoggerList extends AdminCommonParam {
                /**日志类型 */
                loggerType: string;
            }

            /**获得节点运行日志内容 */
            interface GetSystemLoggerDetail extends AdminCommonParam {
                /**日志文件名 */
                loggerName: string;
                /**查询数量，例limit=10，表示可以查询10条数据。 */
                limit?: number;
                /**查询开始位置，例offset =20，表示从第20行开始查询。 */
                offset?: number;
                /**搜索的字符串 */
                searchString?: string;
                /**读取文件的方式 */
                readFileType?: SystemInfo.ReadFileType;
            }

            /**删除矿机运行日志 */
            interface DelSystemLogger extends AdminCommonParam {
                /**日志文件名 */
                loggerName: string;
            }

            /**获得节点邮箱地址 */
            interface GetEmailAddress extends AdminCommonParam {
                /**需要查询的邮箱地址 */
                emailAddress?: string;
            }

            /**设置节点邮箱地址 */
            interface SetEmailAddress extends AdminCommonParam {
                /**邮箱接收地址 */
                emailToAddress: string;
                /**邮箱发送地址 */
                emailFromAddress: string;
                /**邮箱配置 */
                emailConfig: SystemInfo.EmailConfig;
            }

            /**通过节点私钥验证节点受托人 */
            interface VerifySystemSecret {
                /**加密后的受托人私钥 */
                cryptoSecret: string;
            }

            /**设置节点访问白名单 */
            interface SetSystemWhiteList extends AdminCommonParam {
                /**白名单清单 */
                whiteList: string[];
            }

            /**获得节点访问白名单 */
            interface GetSystemWhiteList extends AdminCommonParam {}

            /**删除节点访问白名单 */
            interface DelSystemWhiteList extends AdminCommonParam {
                /**白名单清单 */
                whiteList: string[];
            }

            /**获得节点进程的网络相关信息 */
            interface GetProcessNetwork extends AdminCommonParam {
                /**查询数量，例limit=10，表示可以查询10条数据。 */
                limit?: number;
                /**查询开始位置，例offset =20，表示从第20行开始查询。 */
                offset?: number;
                /**进程类型 */
                processType?: string;
            }

            /**获得节点进程CPU信息 */
            interface GetProcessCPU extends AdminCommonParam {
                /**查询数量，例limit=10，表示可以查询10条数据。 */
                limit?: number;
                /**查询开始位置，例offset =20，表示从第20行开始查询。 */
                offset?: number;
                /**进程类型 */
                processType?: string;
            }

            /**获得节点进程内存信息 */
            interface GetProcessMemory extends AdminCommonParam {
                /**查询数量，例limit=10，表示可以查询10条数据。 */
                limit?: number;
                /**查询开始位置，例offset =20，表示从第20行开始查询。 */
                offset?: number;
                /**进程类型 */
                processType?: string;
            }

            /**定时发送节点状态 */
            interface SystemStatus extends AdminCommonParam {}

            /**定时发送节点CPU，内存，网络信息 */
            interface SystemProcess extends AdminCommonParam {}
        }
    }

    namespace ApiResp {
        /**返回值基础接口 */
        interface RespCommonParam {
            /**是否成功 */
            success: boolean;
            /**失败的message */
            message?: string;
            /**失败的CODE */
            code?: string;
        }

        namespace BASIC {
            /**获得Bfchain版本号 */
            interface GetBfchainVersion extends RespCommonParam {
                result: { version: string };
            }

            /**获取本地节点当前最新区块 */
            interface GetLastBlock extends RespCommonParam {
                result: BFChainCore.LastBlockInfo<any>;
            }

            /**获取指定区块 */
            interface GetBlock extends RespCommonParam {
                result: {
                    blocks: BFChainCore.BlockJSON[];
                    count: number;
                    cmdLimitPerQuery: number;
                };
            }

            /**获取指定事件 */
            interface GetTransactions extends RespCommonParam {
                result: {
                    trs: Mongodb.TransactionInBlockInsertModel[];
                    count: number;
                    cmdLimitPerQuery: number;
                };
            }

            /**获取指定账户 */
            interface GetAccountInfoAndAssets extends RespCommonParam {
                result: MemInfoModel.AccountInfoAndAsset;
            }

            /**创建账户 */
            interface CreateAccount extends RespCommonParam {
                result: {
                    address: string;
                    publicKey: string;
                    secretKey: string;
                };
            }

            /**获取节点状态 */
            interface GetBlockChainStatus extends RespCommonParam {
                result: InsideInterfaceGetBlockChainStatusReturn;
            }
        }

        namespace TRANSACTION {
            /**交易通用返回参数 */
            interface TrRespCommonParam extends RespCommonParam {
                /**最小手续费 */
                minFee: number;
            }

            /**发送转账事件 */
            interface TrTransferAsset extends TrRespCommonParam {
                result: BFChainCore.TransferAssetAssetJSON;
            }

            /**发送设置二次密码事件 */
            interface TrSignature extends TrRespCommonParam {
                result: BFChainCore.SignatureAssetJSON;
            }

            /**发送设置用户名事件 */
            interface TrUsername extends TrRespCommonParam {
                result: BFChainCore.UsernameAssetJSON;
            }

            /**发送注册受托人事件 */
            interface TrDelegate extends TrRespCommonParam {
                result: BFChainCore.DelegateAssetJSON;
            }

            /**发送接收投票事件 */
            interface TrAcceptVote extends TrRespCommonParam {
                result: BFChainCore.AcceptVoteAssetJSON;
            }

            /**发送拒绝投票事件 */
            interface TrRejectVote extends TrRespCommonParam {
                result: BFChainCore.RejectVoteAssetJSON;
            }

            /**发送投票事件 */
            interface TrVote extends TrRespCommonParam {
                result: BFChainCore.VoteAssetJSON;
            }

            /**发送dapp事件 */
            interface TrDapp extends TrRespCommonParam {
                result: BFChainCore.DAppAssetJSON;
            }

            /**发送dapp购买事件 */
            interface TrDappPurchasing extends TrRespCommonParam {
                result: BFChainCore.DAppPurchasingAssetJSON;
            }

            /**发送存证事件 */
            interface TrMark extends TrRespCommonParam {
                result: BFChainCore.MarkAssetJSON;
            }

            /**发送资产发行事件 */
            interface TrIssueAsset extends TrRespCommonParam {
                result: BFChainCore.IssueAssetAssetJSON;
            }

            /**发送销毁资产事件 */
            interface TrDestroyAsset extends TrRespCommonParam {
                result: BFChainCore.DestoryAssetAssetJSON;
            }

            /**发送数字资产交换事件 */
            interface TrToExchangeAsset extends TrRespCommonParam {
                result: BFChainCore.ToExchangeAssetAssetJSON;
            }

            /**发送接收数字资产交换事件 */
            interface TrBeExchangeAsset extends TrRespCommonParam {
                result: BFChainCore.BeExchangeAssetAssetJSON;
            }

            /**发送特殊资产交换事件 */
            interface TrToExchangeSpecAsset extends TrRespCommonParam {
                result: BFChainCore.ToExchangeSpecialAssetAssetJSON;
            }

            /**发送接收特殊资产交换事件 */
            interface TrBeExchangeSpecAsset extends TrRespCommonParam {
                result: BFChainCore.BeExchangeSpecialAssetAssetJSON;
            }

            /**发送资产赠与事件（红包事件） */
            interface TrGiftAsset extends TrRespCommonParam {
                result: BFChainCore.GiftAssetAssetJSON;
            }

            /**发送接收资产赠与事件（抢红包事件） */
            interface TrGrabAsset extends TrRespCommonParam {
                result: BFChainCore.GrabAssetAssetJSON;
            }

            /**发送委托数字资产事件 */
            interface TrTrustAsset extends TrRespCommonParam {
                result: BFChainCore.TrustAssetAssetJSON;
            }

            /**发送签收委托数字资产事件 */
            interface TrSignForAsset extends TrRespCommonParam {
                result: BFChainCore.SignForAssetAssetJSON;
            }

            /**发送资产迁出交易 */
            interface TrEmigrateAsset extends TrRespCommonParam {
                result: BFChainCore.EmigrateAssetAssetJSON;
            }

            /**发送资产迁入交易 */
            interface TrImmigrateAsset extends TrRespCommonParam {
                result: BFChainCore.ImmigrateAssetAssetJSON;
            }

            /**发送注册、注销位名系统事件 */
            interface TrLocationName extends TrRespCommonParam {
                result: BFChainCore.LocationNameAssetJSON;
            }

            /**发送设置位名系统管理员事件 */
            interface TrSetLnsManager extends TrRespCommonParam {
                result: BFChainCore.SetLnsManagerAssetJSON;
            }

            /**发送设置位名系统解析值事件 */
            interface TrSetLnsRecordValue extends TrRespCommonParam {
                result: BFChainCore.SetLnsRecordValueAssetJSON;
            }
        }

        namespace SYSTEM {
            /**安全关闭节点 */
            interface SafetyClose extends RespCommonParam {
                result: { machineStatus: number };
            }

            /**设置节点密码 */
            interface SetSystemKey extends RespCommonParam {}

            /**验证节点密码 */
            interface VerifySystemKey extends RespCommonParam {}

            /**增加节点管理员 */
            interface AddSystemAdmin extends RespCommonParam {
                result: { systemAdmin: SystemInfo.SystemAdminModel };
            }

            /**获得节点管理员 */
            interface GetSystemAdmin extends RespCommonParam {
                result: { systemAdmin: SystemInfo.SystemAdminModel[] };
            }

            /**验证节点管理员 */
            interface VerifySystemAdmin extends RespCommonParam {}

            /**删除节点管理员 */
            interface DelSystemAdmin extends RespCommonParam {}

            /**重置节点管理员 */
            interface ResetSystemAdmin extends RespCommonParam {
                result: { systemAdmins: SystemInfo.SystemAdminModel[] };
            }

            /**绑定节点账户 */
            interface BindingAccount extends RespCommonParam {
                result: { accountInfoAndAsset: MemInfoModel.AccountInfoAndAsset };
            }

            /**批量绑定受托人 */
            interface SetSystemDelegateMutli extends RespCommonParam {
                result: {
                    delegateAddress: string;
                    delegateAddTime: number;
                };
            }

            /**获得节点受托人 */
            interface GetSystemDelegate extends RespCommonParam {
                result?: SystemInfo.SystemDelegateModel;
            }

            /**查询该矿机所有绑定受托人 */
            interface GetInjectGenerators extends RespCommonParam {
                result: {
                    injectGenerators: {
                        address: string;
                        username?: string;
                    }[];
                };
            }

            /**查询该矿机绑定受托人详情信息（余额，收益，锻造区块数，地址） */
            interface GetSystemDelegateDetail extends RespCommonParam {
                result: SystemInfo.SystemDelegateDetailModel;
            }

            /**获得节点详情（累计收益，当前高度，当前版本） */
            interface GetSystemNodeInfo extends RespCommonParam {
                result: { nodeInfo: SystemInfo.SystemNodeInfoModel };
            }

            /**节点信息查询 */
            interface MiningMachineInfo extends RespCommonParam {
                result: { data: SystemInfo.MiningMachineModel };
            }

            /**设置节点配置信息 */
            interface SetSystemConfig extends RespCommonParam {}

            /**获得节点配置信息 */
            interface GetSystemConfigInfoDetail extends RespCommonParam {
                result: SystemInfo.SystemConfigInfoDetail;
            }

            /**获得节点状态（实时信息） */
            interface GetRuntimeState extends RespCommonParam {
                result: SystemInfo.RunTimeState;
            }

            /**获得节点访问统计信息 */
            interface GetSystemMonitor extends RespCommonParam {
                result: { systemMonitor: SystemInfo.SystemMonitor };
            }

            /**获得节点运行日志类型 */
            interface GetSystemLoggerType extends RespCommonParam {
                result: { loggerType: SystemInfo.LoggerType[] };
            }

            /**获得节点运行日志列表 */
            interface GetSystemLoggerList extends RespCommonParam {
                result: { loggerList: SystemInfo.LoggerList };
            }

            /**获得节点运行日志内容 */
            interface GetSystemLoggerDetail extends RespCommonParam {
                result: {
                    loggerDetail: string[];
                    linesTotal: number;
                };
            }

            /**删除矿机运行日志 */
            interface DelSystemLogger extends RespCommonParam {}

            /**获得节点邮箱地址 */
            interface GetEmailAddress extends RespCommonParam {
                result: {
                    emailToAddress: string;
                    emailFromAddress: string;
                    emailConfig: SystemInfo.EmailConfig;
                };
            }

            /**设置节点邮箱地址 */
            interface SetEmailAddress extends RespCommonParam {}

            /**通过节点私钥验证节点受托人 */
            interface VerifySystemSecret extends RespCommonParam {}

            /**设置节点访问白名单 */
            interface SetSystemWhiteList extends RespCommonParam {}

            /**获得节点访问白名单 */
            interface GetSystemWhiteList extends RespCommonParam {
                result: { whileList: string[] };
            }

            /**删除节点访问白名单 */
            interface DelSystemWhiteList extends RespCommonParam {}

            /**获得节点进程的网络相关信息 */
            interface GetProcessNetwork extends RespCommonParam {
                result?: {
                    processNetwork: SystemInfo.ProcessNetwork[];
                    count: number;
                };
            }

            /**获得节点进程CPU信息 */
            interface GetProcessCPU extends RespCommonParam {
                result?: {
                    processCPU: SystemInfo.ProcessCPU[];
                    count: number;
                };
            }

            /**获得节点进程内存信息 */
            interface GetProcessMemory extends RespCommonParam {
                result?: {
                    processMemory: SystemInfo.ProcessMemory[];
                    count: number;
                };
            }

            /**定时发送节点状态 */
            interface SystemStatus extends RespCommonParam {
                result: { systemStatus: SystemInfo.SystemStatusModel };
            }

            /**定时发送节点CPU，内存，网络信息 */
            interface SystemProcess extends RespCommonParam {
                result: {
                    systemProcess: {
                        usageCPU: SystemInfo.UsageCPU;
                        usageMemory: SystemInfo.MemoryInfo;
                        usageNetwork: SystemInfo.NetworkInfo;
                        processData: SystemInfo.ProcessInfo;
                    };
                };
            }
        }
    }
}
