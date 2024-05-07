export {};
declare global {
    export namespace BFMetaNodeSDK {
        export namespace Transaction {
            export interface SuccessCreateResult {
                success: true;
                result: {
                    buffer: string;
                };
            }

            export interface FailureCreateResult {
                success: false;
                error: {
                    code: string;
                    message: string;
                };
                minFee: string;
            }

            export type CreateResult = SuccessCreateResult | FailureCreateResult;

            export interface SuccessPackageResult {
                success: true;
                result: {
                    buffer: string;
                };
            }

            export interface FailurePackageResult {
                success: false;
                error: {
                    code: string;
                    message: string;
                };
            }

            export type PackageResult = SuccessPackageResult | FailurePackageResult;

            export interface SuccessBroadcastResult<T> {
                success: true;
                result: T;
                minFee: number;
            }

            export interface FailureBroadcastResult {
                success: false;
                message: string;
                minFee: number;
            }

            export type BroadcastResult<T> = SuccessBroadcastResult<T> | FailureBroadcastResult;

            export interface TransactionApiSuccessReturn<T> extends ApiSuccessReturn<T> {
                result: T;
                minFee: string;
            }
            export interface TransactionApiFailureReturn extends ApiFailureReturn {
                minFee: string;
            }
            export type TransactionApiReturn<T> = TransactionApiSuccessReturn<T> | TransactionApiFailureReturn;

            //交易体中的kvStorage信息
            export type KVStorageInfo = {
                key: string;
                fileInfo: {
                    name: string;
                    size: number;
                };
            };

            /**交易通用参数 */
            export interface TransactionCommonParams {
                /**发起账户的公钥 */
                publicKey: string;
                /**发起账户的二次公钥 */
                secondPublicKey?: string;
                /**事件的接收账户地址，base58 编码的 16 进制字符串 */
                recipientId?: string;
                /**事件的接收范围类型，只能是 0，1，2，4 中的某一个，0 表示不限定操作范围，1 表示只有指定的账户地址才能对这笔事件进行操作，2 表示只有指定的 dappid 才能对这笔事件进行操作，4 表示只有指定的位名才能对这笔事件进行操作，默认为 0 */
                rangeType?: number;
                /**事件的接收范围，当 rangeType 为 0 时，不能填写任何数据，当 rangeType 为 1 时，只能填写账户地址，当 rangeType 为 2 时，只能填写 dappid，当 rangeType 为 4 时，只能填写位名，默认为空 */
                range?: string[];
                /**事件的手续费 */
                fee: string;
                /**事件的发起高度，0-9 组成并且不包含小点，可选，默认使用当前区块链的最新高度 */
                applyBlockHeight: number;
                /**事件备注信息，默认为空 */
                remark?: { [key: string]: string };
                /**事件所属的 dappid，大写字母或数字，8 个字符，默认为空 */
                dappid?: string;
                /**事件所属的位名，2-1024 个字符，每级位名最大长度为 128 个字符，一级位名只能时小写字母组成，二级及以上开头及结尾只能由小写字母或数字组成，中间可以包含下划线，根位名必须时本链链名，可选，默认为空 */
                lns?: string;
                /**事件的来源IP，IPv4或者IPv6，不包含头尾(例如: 127.0.0.1)，默认为空 */
                sourceIP?: string;
                /**事件的来源链网络标识符，大写字母或数字组成，5 个字符，默认使用创世块的 magic */
                fromMagic?: string;
                /**事件的去往链网络标识符，大写字母或数字组成，5 个字符，默认使用创世块的 magic */
                toMagic?: string;
                /**事件的过期区块间隔，默认使用创世块最大过期时间参数，0-9 组成并且不包含小数点 */
                numberOfEffectiveBlocks?: number;
                /**事件的pow难度值，由自然数组成，默认使用链上难度 */
                // tpowDifficulty?: number;
                /**事件的附加二进制数据 */
                binaryInfos?: KVStorageInfo[];
                /**事件的时间戳 */
                timestamp?: number;
            }

            export type TransactionCommonParamsWithRecipientId = TransactionCommonParams & {
                /**事件的接收账户地址，base58 编码的 16 进制字符串 */
                recipientId: string;
            };
            export type TransactionCommonParamsWithoutRecipientId = Omit<TransactionCommonParams, "recipientId">;

            export interface UsernameTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**用户名字符串，大小写字母、数字、下划线组成，1-20 个字符，不能包含当前链的名称 */
                alias: string;
            }
            export interface SignatureTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**新的安全密码公钥 */
                newSecondPublicKey: string;
            }
            export interface DelegateTransactionParams extends TransactionCommonParamsWithoutRecipientId {}
            export interface AcceptVoteTransactionParams extends TransactionCommonParamsWithoutRecipientId {}
            export interface RejectVoteTransactionParams extends TransactionCommonParamsWithoutRecipientId {}
            export interface VoteTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**投出的权益数，0-9 组成并且不包含小数点，允许为 0 */
                equity: string;
            }

            export interface IssueAssetTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**发行的权益名，大写字母组成，3-10 个字符 */
                assetType: string;
                /**发行的新权益总数，权益数量由0-9共十个数字组成，权益数量不包含小数点且必须大于0 */
                expectedIssuedAssets: string;
            }
            export interface TransferAssetTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**转移的权益所属链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                sourceChainMagic?: string;
                /**转移的权益所属链名，小写字母组成，5-20 位 */
                sourceChainName?: string;
                /**转移的权益类型，大写字母组成，3-10 个字符 */
                assetType?: string;
                /**转移的权益数量，0-9 组成并且不包含小数点，必须大于 0 */
                amount: string;
            }
            export interface DestroyAssetTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**销毁的权益名，大写字母组成，3-10 个字符 */
                assetType: string;
                /**销毁的权益数，0-9 组成并且不包含小数点，必须大于 0 */
                amount: string;
            }
            export interface AccountSignatureJSON {
                /**账户密钥生成的公钥 */
                publicKey: string;
                /**账户公钥生成的签名 */
                signature: string;
                /**账户安全密钥生成的公钥 */
                secondPublicKey?: string;
                /**账户安全公钥生成的签名 */
                signSignature?: string;
            }
            export interface GiftAssetTransactionParams extends TransactionCommonParams {
                /**赠送的权益所属链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                sourceChainMagic?: string;
                /**赠送的权益所属链名，小写字母组成，5-20 位 */
                sourceChainName?: string;
                /**赠送的权益类型，大写字母组成，3-10 个字符 */
                assetType?: string;
                /**赠送的权益数量，0-9 组成并且不包含小数点，必须大于 0 */
                amount: string;
                /**可被接收的次数，0-9 组成并且不包含小数点，必须大于 0 */
                totalGrabableTimes: number;
                /**从权益赠送事件发起到开始被签收的区块间隔，0-9 组成并且不包含小数点，可选，必须小于等于事件的有效期 */
                numberOfBeginUnfrozenBlocks?: number;
                /**接收规则, 只能为 0，1 或 2，0 表示平均分配，1 表示根据任意账户的地址的随机分配，2 表示根据接收者列表中账户地址的随机分配 */
                giftDistributionRule: number;
                /**加密公钥组，如果填写了公钥，则接收权益交换的事件必须携带某个密钥生成的签名对 */
                cipherPublicKeys?: string[];
            }
            export interface GrabAssetTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**接收的赠送权益数量，0-9 组成并且不包含小数点 */
                amount?: string;
                /**赠送事件所在的区块签名，128 个字节的 16 进制字符串 */
                blockSignature: string;
                /**赠送事件的签名，128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**加密密钥生成的密钥签名对 */
                ciphertextSignature?: AccountSignatureJSON;
                /**to 事件的发起账户地址，base58 编码的 16 进制字符串 */
                recipientId: string;
                /**赠送信息 */
                giftAsset: {
                    /**加密密钥生成的公钥数组 */
                    cipherPublicKeys: string[];
                    /**赠送的权益所属链名，小写字母组成，5-10 位 */
                    sourceChainName: string;
                    /**赠送的权益所属链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    sourceChainMagic: string;
                    /**赠送的权益名称，大写字母组成，5-20 个字符 */
                    assetType: string;
                    /**赠送的权益数量，0-9 组成并且不包含小数点，必须大于0 */
                    amount: string;
                    /**可被接收的次数，0-9 组成并且不包含小数点，必须大于 0 */
                    totalGrabableTimes: number;
                    /**开始被签收的区块高度，0-9 组成并且不包含小数点 */
                    beginUnfrozenBlockHeight?: number;
                    /**接收规则，只能为 0，1 或 2，0 表示平均分配，1 表示根据任意账户的地址的随机分配，2 表示根据接收者列表中账户地址的随机分配 */
                    giftDistributionRule: number;
                };
            }
            export interface TrustAssetTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**委托权益所属链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                sourceChainMagic?: string;
                /**委托权益所属链名，小写字母组成，5-20 位 */
                sourceChainName?: string;
                /**委托权益类型，大写字母组成，3-10 个字符 */
                assetType?: string;
                /**委托的权益数量，0-9 组成并且不包含小数点，必须大于 0 */
                amount: string;
                /**签收时需要的委托人签名数量，0-9 组成，必须大于 0，最大值为指定的受托人数量 +2 */
                numberOfSignFor: number;
                /**指定的委托人地址数组，base58 编码的 16 进制字符串 */
                trustees: string[];
            }
            export interface SignForAssetTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**委托事件的签名，128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**委托账户地址 */
                trustId: string;
                /**委托信息 */
                trustAsset: {
                    /**见证账户地址数组，base58 编码的 16 进制字符串数组 */
                    trustees: string[];
                    /**签收时需要的见证人签名数量，0-9 组成，必须大于 0，最大值为指定的受托人数量+2 */
                    numberOfSignFor: number;
                    /**见证的权益所属链名，小写字母组成，5-10 位 */
                    sourceChainName: string;
                    /**见证的权益所属链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    sourceChainMagic: string;
                    /**见证的权益名称，大写字母组成，5-20 个字符 */
                    assetType: string;
                    /**见证的权益数量，0-9 组成并且不包含小数点，必须大于0 */
                    amount: string;
                };
            }
            export interface ToExchangeAssetTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**用于交换的权益来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                toExchangeSource: string;
                /**被交换的权益来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                beExchangeSource: string;
                /**用于交换的权益来源链名，小写字母组成，5-10 位 */
                toExchangeChainName: string;
                /**被交换的权益来源链名，小写字母组成，5-10 位 */
                beExchangeChainName: string;
                /**用于交换的权益名，大写字母组成，5-20 个字符 */
                toExchangeAsset: string;
                /**被交换的权益名，大写字母组成，5-20 个字符 */
                beExchangeAsset: string;
                /**用于交换的权益数量，0-9 组成并且不包含小数点，必须大于 0 */
                toExchangeNumber: string;
                /**用作与权益的交换比例的分母，为正整数。被交换权益=交换权益*交换比例 */
                prevWeight: string;
                /**用作与权益的交换比例的分子，为正整数。被交换权益=交换权益*交换比例 */
                nextWeight: string;
                /**加密公钥组，如果填写了公钥，则接收权益交换的事件必须携带某个密钥生成的签名对 */
                cipherPublicKeys?: string[];
            }
            export interface RateJSON<T extends number | bigint | string = number> {
                /**前部权重 */
                prevWeight: T;
                /**后部权重 */
                nextWeight: T;
            }
            export interface BeExchangeAssetTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**to 事件的签名，128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**用于交换的权益数量，权益数量由0-9共十个数字组成，权益数量不包含小数点且必须大于0 */
                toExchangeNumber: string;
                /**交换得到的权益数量，权益数量由0-9共十个数字组成，权益数量不包含小数点且必须大于0 */
                beExchangeNumber?: string;
                /**加密密钥生成的密钥签名对 */
                ciphertextSignature?: AccountSignatureJSON;
                /**to 事件的发起账户地址，base58 编码的 16 进制字符串 */
                recipientId: string;
                /**交换信息 */
                exchangeAsset: {
                    /**加密密钥生成的公钥数组 */
                    cipherPublicKeys: string[];
                    /**用于交换的权益来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    toExchangeSource: string;
                    /**被交换的权益来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    beExchangeSource: string;
                    /**用于交换的权益来源链名，小写字母组成，5-10 位 */
                    toExchangeChainName: string;
                    /**被交换的权益来源链名，小写字母组成，5-10 位 */
                    beExchangeChainName: string;
                    /**用于交换的权益名，大写字母组成，5-20 个字符 */
                    toExchangeAsset: string;
                    /**被交换的权益名，大写字母组成，5-20 个字符 */
                    beExchangeAsset: string;
                    /**用于交换的权益数量，0-9 组成并且不包含小数点，必须大于 0 */
                    toExchangeNumber: string;
                    /**权益的交换比例 */
                    exchangeRate: RateJSON<string>;
                };
            }
            export interface DAppTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**不包含校验位的 dappid，大写字母或数字组成，7 个字符 */
                newDappid: string;
                /**dappid 的类型，只能为 0 或 1，0 表示这个 dappid 是付费使用的，1 表示这个 dappid 是免费使用的 */
                type: number;
                /**购买 dappid 使用权需要的权益数量(如果 dappid 是付费应用则必须携带，如果是免费应用则无需携带)，0-9 组成并且不包含小数点，必须大于 0 */
                amount?: string;
            }
            export interface DAppPurchasingTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**dappid 的类型，只能为 0 或 1，0 表示这个 dappid 是付费使用的，1 表示这个 dappid 是免费使用的 */
                type: number;
                /**购买 dappid 使用权需要的权益数量(如果 dappid 是付费应用则必须携带，如果是免费应用则无需携带)，0-9 组成并且不包含小数点，必须大于 0 */
                purchaseAsset: string;
                /**购买的 dappid，大写字母或数字组成，8 个字符 */
                purchaseDappid: string;
            }
            export interface MarkTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**存证内容，为任意字符串 */
                content: string;
                /**存证类型，为任意字符串，用于区别存证 */
                action: string;
                /**含校验位的 dappid，大写字母或数字组成，8 个字符，最后一位是校验位 */
                dappid: string;
                /**dappid 的类型，只能为 0 或 1，0 表示这个 dappid 是付费使用的，1 表示这个 dappid 是免费使用的 */
                type: number;
                /**购买 dappid 使用权需要的权益数量(如果 dappid 是付费应用则必须携带，如果是免费应用则无需携带)，0-9 组成并且不包含小数点，必须大于 0 */
                purchaseAsset?: string;
            }
            export interface LocationNameTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**位名，2-1024 个字符，每级位名最大长度为 128 个字符，一级位名只能是小写字母组成，二级及以上开头及结尾只能由小写字母或数字组成，中间可以包含下划线，根位名必须时本链链名 */
                name: string;
                /**操作类型，只能是 0 或 1，0 表示注册位名，1 表示注销位名 */
                operationType: number;
            }
            export interface SetLnsManagerTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**位名，2-1024 个字符，每级位名最大长度为 128 个字符，一级位名只能是小写字母组成，二级及以上开头及结尾只能由小写字母或数字组成，中间可以包含下划线，根位名必须时本链链名 */
                name: string;
            }
            export interface SetLnsRecordValueTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**位名，2-1024 个字符，每级位名最大长度为 128 个字符，一级位名只能是小写字母组成，二级及以上开头及结尾只能由小写字母或数字组成，中间可以包含下划线，根位名必须时本链链名 */
                name: string;
                /**操作类型，只能为 0 或 1 或 2，0 表示添加，1 表示删除，2 表示更新 */
                operationType: number;
                /**增加的解析值，解析值的类型只能为 1 或 2 或 3 或 4 或 0，1 表示 ipV4，2 表示 ipV6，3 表示经纬度，4 表示链上账户地址，0 表示自定义的任意类型，可选，操作类型为 0 或 2 时必填 */
                addRecord?: string[];
                /**删除的解析值，解析值的类型只能为 1 或 2 或 3 或 4 或 0，1 表示 ipV4，2 表示 ipV6，3 表示经纬度，4 表示链上账户地址，0 表示自定义的任意类型，可选，操作类型为 1 或 2 时必填 */
                deleteRecord?: string[];
            }
            export interface ToExchangeSpecialAssetTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**用于交换的资产/权益来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                toExchangeSource: string;
                /**被交换的资产/权益来源链网络标识符，大写字母或数字组成，5个字符，最后一位是校验位 */
                beExchangeSource: string;
                /**用于交换的资产/权益来源链名，小写字母组成，5-10 位 */
                toExchangeChainName: string;
                /**被交换的资产/权益来源链名，小写字母组成，5-10 位 */
                beExchangeChainName: string;
                /**用于交换的权益名，可能为 dappid，位名或者权益名 */
                toExchangeAsset: string;
                /**被交换的资产/权益名，可能为 dappid，位名或者权益名 */
                beExchangeAsset: string;
                /**用于交换或交换得到的权益数量，0-9 组成并且不包含小数点 */
                exchangeNumber: string;
                /**资产的类型，只能为 0 或 1，0 为 dappid，1 为位名 */
                exchangeAssetType: number;
                /**资产的来源，只能为 0 或 1，0 为出售，1 为求购 */
                exchangeDirection: number;
                /**加密公钥组，如果填写了公钥，则接收资产交换的事件必须携带某个密钥生成的签名对 */
                cipherPublicKeys?: string[];
            }
            export interface BeExchangeSpecialAssetTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**to 事件的签名，128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**加密密钥生成的密钥签名对 */
                ciphertextSignature?: AccountSignatureJSON;
                /**to 事件的发起账户地址，base58 编码的 16 进制字符串 */
                recipientId: string;
                /**交换信息 */
                exchangeSpecialAsset: {
                    /**加密密钥生成的公钥数组 */
                    cipherPublicKeys: string[];
                    /**用于交换的权益/资产来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    toExchangeSource: string;
                    /**被交换的资产/权益来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    beExchangeSource: string;
                    /**用于交换的权益/资产来源链名，小写字母组成，5-10 位 */
                    toExchangeChainName: string;
                    /**被交换的资产/权益来源链名，小写字母组成，5-10 位 */
                    beExchangeChainName: string;
                    /**用于交换的权益/资产名，大写字母组成，5-20 个字符 */
                    toExchangeAsset: string;
                    /**被交换的资产/权益名，大写字母组成，5-20 个字符 */
                    beExchangeAsset: string;
                    /**用于交换或交换得到的权益数量，权益数量由0-9共十个数字组成，权益数量不包含小数点且必须大于0 */
                    exchangeNumber: string;
                    /**资产的类型，只能为 0 或 1，0 为 dappid，1 为位名 */
                    exchangeAssetType: number;
                    /**资产的来源，只能为 0 或 1，0 为出售，1 为求购 */
                    exchangeDirection: number;
                };
            }

            export interface IssueEntityFactoryTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**非同质资产模板 */
                factoryId: string;
                /**允许发行的非同质资产数量 */
                entityPrealnum: string;
                /**发行非同质资产时冻结的主权益数量，销毁时解冻 */
                entityFrozenAssetPrealnum: string;
                /**购买模板使用全的主权益数量 */
                purchaseAssetPrealnum: string;
            }
            export type IssueEntityFactoryTransactionV1Params = IssueEntityFactoryTransactionParams;
            export interface IssueEntityTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**非同质权益模板，3-15 个字符，小写字母或数字组成 */
                factoryId: string;
                /**不包含非同质权益模板的非同质权益，3-30 个字符，小写字母或数字组成 */
                entityId: string;
                /**非同质资产流通需要缴纳的版税 */
                taxAssetPrealnum?: string;
                /**非同质资产版税的接收账户 */
                taxAssetRecipientId?: string;
            }
            export interface DestroyEntityTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**要销毁的非同质权益发行事件的唯一标识符 */
                transactionSignature: string;
                /**要销毁的非同质权益 */
                entityId: string;
                /**非同质权益模板的申请者 */
                entityFactoryApplicant: string;
                /**非同质权益模板的拥有者 */
                entityFactoryPossessor: string;
                /**允许发行的非同质权益数量，正整数 */
                entityPrealnum: string;
                /**发行非同质权益时冻结的主权益数量，销毁时解冻，自然数 */
                entityFrozenAssetPrealnum: string;
                /**购买模板使用的主权益数量，自然数 */
                purchaseAssetPrealnum: string;
            }
            export interface AssetExchangeWeightRatioJSON {
                /**用于交换的权益权重 */
                toExchangeAssetWeight: string;
                /**被交换的权益权重 */
                beExchangeAssetWeight: string;
            }
            export interface TaxInformationJson {
                /**收税人 */
                taxCollector: string;
                /**缴纳数量 */
                taxAssetPrealnum: string;
            }
            export interface ToExchangeAnyTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**用于交换的资产/权益来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                toExchangeSource?: string;
                /**用于交换的资产/权益来源链名，小写字母组成，5-20 位 */
                toExchangeChainName?: string;
                /**用于交换的资产所属类型，1 dappid，2 位名，3 entityId，5 权益 */
                toExchangeParentAssetType: number;
                /**用于交换的权益名，可能为 entityId, dappid，位名或者权益名 */
                toExchangeAssetType: string;
                /**用于交换的资产数量，0-9 组成并且不包含小数点 */
                toExchangeAssetPrealnum: string;
                /**被交换的资产/权益来源链网络标识符，大写字母或数字组成，5个字符，最后一位是校验位 */
                beExchangeSource?: string;
                /**被交换的资产/权益来源链名，小写字母组成，5-20 位 */
                beExchangeChainName?: string;
                /**被交换的资产所属类型，1 dappid，2 位名，3 entityId，5 权益 */
                beExchangeParentAssetType: number;
                /**被交换的资产/权益名，可能为 entityId, dappid，位名或者权益名 */
                beExchangeAssetType: string;
                /**被交换的权益数量，0-9 组成并且不包含小数点，非同质权益交换时必填 */
                beExchangeAssetPrealnum?: string;
                /**交换比例，同质权益交换时必填 */
                assetExchangeWeightRatio?: AssetExchangeWeightRatioJSON;
                /**非同质资产的收税信息 */
                taxInformation?: TaxInformationJson;
                /**加密公钥组，如果填写了公钥，则接收权益交换的事件必须携带某个密钥生成的签名对 */
                cipherPublicKeys?: string[];
            }
            export interface BeExchangeAnyTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**资产交换事件的签名，128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**加密密钥生成的密钥签名对 */
                ciphertextSignature?: AccountSignatureJSON;
                /**用于交换的权益数量，权益数量由0-9共十个数字组成，权益数量不包含小数点 */
                toExchangeAssetPrealnum: string;
                /**交换得到的权益数量，权益数量由0-9共十个数字组成，权益数量不包含小数点 */
                beExchangeAssetPrealnum: string;
                /**资产交换信息 */
                exchangeAny: {
                    /**加密密钥生成的公钥数组 */
                    cipherPublicKeys: string[];
                    /**用于交换的资产来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    toExchangeSource?: string;
                    /**被交换的资产来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    beExchangeSource?: string;
                    /**用于交换的资产来源链名，小写字母组成，5-20 位 */
                    toExchangeChainName?: string;
                    /**被交换的资产来源链名，小写字母组成，5-20 位 */
                    beExchangeChainName?: string;
                    /**用于交换的资产所属大类 */
                    toExchangeParentAssetType: number;
                    /**被交换的资产所属大类 */
                    beExchangeParentAssetType: number;
                    /**用于交换的资产名 */
                    toExchangeAssetType: string;
                    /**被交换的资产名 */
                    beExchangeAssetType: string;
                    /**用于交换的资产数量，0-9 组成并且不包含小数点 */
                    toExchangeAssetPrealnum: string;
                    /**被交换的权益数量，0-9 组成并且不包含小数点，非同质权益交换时必填 */
                    beExchangeAssetPrealnum?: string;
                    /**同质资产的兑换比例 */
                    assetExchangeWeightRatio?: AssetExchangeWeightRatioJSON;
                    /**非同质资产的收税信息 */
                    taxInformation?: TaxInformationJson;
                };
                /**非同质资产的收税信息 */
                taxInformation?: TaxInformationJson;
            }

            export interface TransferAnyTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**转移的资产所属链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                sourceChainMagic?: string;
                /**转移的资产所属链名，小写字母组成，5-20 位 */
                sourceChainName?: string;
                /**转移的资产所属类型 */
                parentAssetType: number;
                /**转移的资产类型，大写字母组成，3-10 个字符 */
                assetType: string;
                /**转移的资产数量，0-9 组成并且不包含小数点，必须大于 0 */
                amount: string;
                /**纳税信息 */
                taxInformation?: TaxInformationJson;
            }

            export interface GiftAnyTransactionParams extends TransactionCommonParams {
                /**赠送的资产所属链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                sourceChainMagic?: string;
                /**赠送的资产所属链名，小写字母组成，5-20 位 */
                sourceChainName?: string;
                /**赠送的资产所属类型 */
                parentAssetType: number;
                /**赠送的资产类型，大写字母组成，3-10 个字符 */
                assetType: string;
                /**赠送的资产数量，0-9 组成并且不包含小数点，必须大于 0 */
                amount: string;
                /**可被接收的次数，0-9 组成并且不包含小数点，必须大于 0 */
                totalGrabableTimes?: number;
                /**接收规则, 只能为 0，1 或 2，0 表示平均分配，1 表示根据任意账户的地址的随机分配，2 表示根据接收者列表中账户地址的随机分配 */
                giftDistributionRule?: number;
                /**从权益赠送事件发起到开始被签收的区块间隔，0-9 组成并且不包含小数点，可选，必须小于等于事件的有效期 */
                numberOfBeginUnfrozenBlocks?: number;
                /**加密公钥组，如果填写了公钥，则接收权益交换的事件必须携带某个密钥生成的签名对 */
                cipherPublicKeys?: string[];
                /**纳税信息 */
                taxInformation?: TaxInformationJson;
            }
            export interface GrabAnyTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**接收的赠送权益数量，0-9 组成并且不包含小数点 */
                amount?: string;
                /**赠送事件所在的区块签名，128 个字节的 16 进制字符串 */
                blockSignature: string;
                /**赠送事件的签名，128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**加密密钥生成的密钥签名对 */
                ciphertextSignature?: AccountSignatureJSON;
                /**to 事件的发起账户地址，base58 编码的 16 进制字符串 */
                recipientId: string;
                /**赠送信息 */
                giftAny: {
                    /**加密密钥生成的公钥数组 */
                    cipherPublicKeys: string[];
                    /**赠送的权益所属链名，小写字母组成，5-10 位 */
                    sourceChainName: string;
                    /**赠送的权益所属链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    sourceChainMagic: string;
                    /**转移的资产所属类型，1 dappid，2 位名，3 entityId，5 权益 */
                    parentAssetType: number;
                    /**赠送的权益名称，大写字母组成，5-20 个字符 */
                    assetType: string;
                    /**赠送的权益数量，0-9 组成并且不包含小数点，必须大于0 */
                    amount: string;
                    /**可被接收的次数，0-9 组成并且不包含小数点，必须大于 0 */
                    totalGrabableTimes: number;
                    /**开始被签收的区块高度，0-9 组成并且不包含小数点 */
                    beginUnfrozenBlockHeight?: number;
                    /**接收规则，只能为 0，1 或 2，0 表示平均分配，1 表示根据任意账户的地址的随机分配，2 表示根据接收者列表中账户地址的随机分配 */
                    giftDistributionRule?: number;
                    /**版税信息 */
                    taxInformation?: TaxInformationJson;
                };
            }

            export interface IssueEntityMultiTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**非同质权益模板，3-15 个字符，小写字母或数字组成 */
                factoryId: string;
                /**要发行的非同质资产列表 */
                entityStructList: {
                    /**非同质资产名称 */
                    entityId: string;
                    /**非同质资产流通需要缴纳的版税 */
                    taxAssetPrealnum?: string;
                    /**非同质资产版税的接收账户 */
                    taxAssetRecipientId?: string;
                }[];
            }

            export interface ToExchangeAnyMultiTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**加密密钥生成的公钥数组 */
                cipherPublicKeys?: string[];
                /**用于交换的资产信息 */
                toExchangeAssets: {
                    /**用于交换的资产/权益来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    toExchangeSource?: string;
                    /**用于交换的资产/权益来源链名，小写字母组成，5-20 位 */
                    toExchangeChainName?: string;
                    /**用于交换的资产所属类型，1 dappid，2 位名，3 entityId，5 权益 */
                    toExchangeParentAssetType: number;
                    /**用于交换的权益名，可能为 entityId, dappid，位名或者权益名 */
                    toExchangeAssetType: string;
                    /**用于交换的资产数量，0-9 组成并且不包含小数点 */
                    toExchangeAssetPrealnum: string;
                    /**交换比例，同质权益交换时必填 */
                    assetExchangeWeightRatio?: AssetExchangeWeightRatioJSON;
                    /**纳税信息 */
                    taxInformation?: TaxInformationJson;
                }[];
                /**被交换的资产信息 */
                beExchangeAsset: {
                    /**被交换的资产/权益来源链网络标识符，大写字母或数字组成，5个字符，最后一位是校验位 */
                    beExchangeSource?: string;
                    /**被交换的资产/权益来源链名，小写字母组成，5-20 位 */
                    beExchangeChainName?: string;
                    /**被交换的资产所属类型，1 dappid，2 位名，3 entityId，5 权益 */
                    beExchangeParentAssetType: number;
                    /**被交换的资产/权益名，可能为 entityId, dappid，位名或者权益名 */
                    beExchangeAssetType: string;
                    /**被交换的权益数量，0-9 组成并且不包含小数点，非同质权益交换时必填 */
                    beExchangeAssetPrealnum?: string;
                    /**收税信息 */
                    taxInformation?: TaxInformationJson;
                };
            }
            export interface BeExchangeAnyMultiTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**批量任意资产交换的事件签名，128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**加密密钥生成的签名数组 */
                ciphertextSignature?: AccountSignatureJSON;
                /**用于交换的资产信息 */
                toExchangeAssets: {
                    /**用于交换的资产来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    toExchangeSource: string;
                    /**用于交换的资产来源链名，小写字母组成，5-10 位 */
                    toExchangeChainName: string;
                    /**用于交换的资产资产所属大类 */
                    toExchangeParentAssetType: number;
                    /**用于交换的资产名 */
                    toExchangeAssetType: string;
                    /**用于交换的资产数量，0-9 组成并且不包含小数点 */
                    toExchangeAssetPrealnum: string;
                    /**交换比例，同质权益交换时必填 */
                    assetExchangeWeightRatio?: AssetExchangeWeightRatioJSON;
                    /**收税信息 */
                    taxInformation?: TaxInformationJson;
                }[];
                /**被交换的资产信息 */
                beExchangeAsset: {
                    /**被交换的资产来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    beExchangeSource: string;
                    /**被交换的资产来源链名，小写字母组成，5-10 位 */
                    beExchangeChainName: string;
                    /**被交换的资产所属大类 */
                    beExchangeParentAssetType: number;
                    /**被交换的资产名 */
                    beExchangeAssetType: string;
                    /**被交换的资产数量，0-9 组成并且不包含小数点，非同质资产交换时必填 */
                    beExchangeAssetPrealnum?: string;
                    /**收税信息 */
                    taxInformation?: TaxInformationJson;
                };
            }

            export interface ToExchangeAnyMultiAllTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**加密密钥生成的公钥数组 */
                cipherPublicKeys?: string[];
                /**用于交换的资产信息 */
                toExchangeAssets: {
                    /**用于交换的资产/权益来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    toExchangeSource?: string;
                    /**用于交换的资产/权益来源链名，小写字母组成，5-20 位 */
                    toExchangeChainName?: string;
                    /**用于交换的资产所属类型，1 dappid，2 位名，3 entityId，5 权益 */
                    toExchangeParentAssetType: number;
                    /**用于交换的权益名，可能为 entityId, dappid，位名或者权益名 */
                    toExchangeAssetType: string;
                    /**用于交换的资产数量，0-9 组成并且不包含小数点 */
                    toExchangeAssetPrealnum: string;
                    /**纳税信息 */
                    taxInformation?: TaxInformationJson;
                }[];
                /**被交换的资产信息 */
                beExchangeAssets: {
                    /**被交换的资产/权益来源链网络标识符，大写字母或数字组成，5个字符，最后一位是校验位 */
                    beExchangeSource?: string;
                    /**被交换的资产/权益来源链名，小写字母组成，5-20 位 */
                    beExchangeChainName?: string;
                    /**被交换的资产所属类型，1 dappid，2 位名，3 entityId，5 权益 */
                    beExchangeParentAssetType: number;
                    /**被交换的资产/权益名，可能为 entityId, dappid，位名或者权益名 */
                    beExchangeAssetType: string;
                    /**被交换的权益数量，0-9 组成并且不包含小数点，非同质权益交换时必填 */
                    beExchangeAssetPrealnum?: string;
                    /**收税信息 */
                    taxInformation?: TaxInformationJson;
                }[];
            }
            export interface BeExchangeAnyMultiAllTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**批量任意资产交换的事件签名，128 个字节的 16 进制字符串 */
                transactionSignature: string;
                /**加密密钥生成的签名数组 */
                ciphertextSignature?: AccountSignatureJSON;
                /**用于交换的资产信息 */
                toExchangeAssets: {
                    /**用于交换的资产来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    toExchangeSource: string;
                    /**用于交换的资产来源链名，小写字母组成，5-10 位 */
                    toExchangeChainName: string;
                    /**用于交换的资产资产所属大类 */
                    toExchangeParentAssetType: number;
                    /**用于交换的资产名 */
                    toExchangeAssetType: string;
                    /**用于交换的资产数量，0-9 组成并且不包含小数点 */
                    toExchangeAssetPrealnum: string;
                    /**收税信息 */
                    taxInformation?: TaxInformationJson;
                }[];
                /**被交换的资产信息 */
                beExchangeAssets: {
                    /**被交换的资产来源链网络标识符，大写字母或数字组成，5 个字符，最后一位是校验位 */
                    beExchangeSource: string;
                    /**被交换的资产来源链名，小写字母组成，5-10 位 */
                    beExchangeChainName: string;
                    /**被交换的资产所属大类 */
                    beExchangeParentAssetType: number;
                    /**被交换的资产名 */
                    beExchangeAssetType: string;
                    /**被交换的资产数量，0-9 组成并且不包含小数点，非同质资产交换时必填 */
                    beExchangeAssetPrealnum?: string;
                    /**收税信息 */
                    taxInformation?: TaxInformationJson;
                }[];
            }

            export interface RegisterChainTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**创世块 */
                genesisBlock: string;
            }
            export interface MigrateCertificateBodyJSON {
                /**凭证版本 */
                version: string;
                /**发起人的唯一标识 version/address */
                fromId: string;
                /**接收人的唯一标识 version/address */
                toId: string;
                /**迁出凭证生成时间 Date.now().getTimes() */
                timestamp: number;
                /**迁出链的唯一标识 version+自定义格式，目前是 version/magic/chainName/genesisBlockSignature */
                fromChainId: string;
                /**迁入链的唯一标识 version+自定义格式，目前是 version/magic/chainName/genesisBlockSignature */
                toChainId: string;
                /**迁出的权益：version/parentAssetType/assetType */
                assetId: string;
                /**迁出的权益数量，0-9 组成并且不包含小数点，必须大于0 */
                assetPrealnum: string;
            }
            export interface MigrateCertificateJSON {
                /**凭证信息 */
                body: MigrateCertificateBodyJSON;
                /**发起账户签名 version/publicKey-signature/secondPublicKey-signSignature */
                signature: string;
                /**迁出链的授权签名 version/publicKey-signature/secondPublicKey-signSignature */
                fromAuthSignature: string;
                /**迁入链的授权签名 version/publicKey-signature/secondPublicKey-signSignature */
                toAuthSignature: string;
            }

            export interface EmigrateAssetTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**携带迁出授权签名的凭证 */
                migrateCertificate: MigrateCertificateJSON;
            }

            export interface ImmigrateAssetTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**携带迁出、迁入授权签名的凭证 */
                migrateCertificate: MigrateCertificateJSON;
            }

            export interface IssueCertificateTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**凭证，1-100 个字符，大小写字母，数字，-，_ 组成，（上链高度:凭证 id，例如 88888888:88888888） */
                certificateId: string;
                /**凭证类型：0 不允许销毁，1 只能在发行者持有时销毁，2 持有者销毁 */
                type: number;
            }

            export interface DestroyCertificateTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**凭证，1-100 个字符，大小写字母，数字，-，_ 组成，（上链高度:凭证 id，例如 88888888:88888888） */
                certificateId: string;
                /**凭证类型：0 不允许销毁，1 只能在发行者持有时销毁，2 持有者销毁 */
                type: number;
            }

            export interface PromiseTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**承诺未来上链的完整事件 */
                transaction: TransactionJSON;
            }

            export interface PromiseResolveTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**承诺 id */
                promiseId: string;
                /**承诺未来上链的完整事件 */
                transaction: TransactionJSON;
            }

            export interface PromiseTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**承诺未来上链的完整事件 */
                transaction: TransactionJSON;
            }

            export interface PromiseResolveTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**承诺 id */
                promiseId: string;
                /**承诺 */
                transaction: TransactionJSON;
            }
            export interface MacroTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**输入 */
                inputs: Macro.InputJSON[];
                /**宏模板 */
                template: TransactionJSON;
            }

            export interface MacroCallTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**宏 id */
                macroId: string;
                /**输入 */
                inputs: { [name: string]: string };
                /**生成的完整事件 */
                transaction: TransactionJSON;
            }

            export interface MultipleTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**事件列表 */
                transactions: TransactionJSON[];
            }

            export interface IncreaseAssetTransactionParams extends TransactionCommonParamsWithRecipientId {
                /**权益的发行账户 */
                applyAddress: string;
                /**增发的权益名称 */
                assetType: string;
                /**增发的权益数量 */
                increasedAssetPrealnum: string;
                /**冻结的主权益数量 */
                frozenMainAssetPrealnum: string;
            }

            export interface StakeAssetTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**质押的唯一索引：1-30 个小写字母+数字 */
                stakeId: string;
                /**质押的权益所属链名 */
                sourceChainName?: string;
                /**质押的权益所属链网络标识 */
                sourceChainMagic?: string;
                /**质押的权益名称 */
                assetType: string;
                /**质押的权益数量 */
                assetPrealnum: string;
                /**开始解除质押的区块高度 */
                beginUnstakeHeight: number;
            }

            export interface UnstakeAssetTransactionParams extends TransactionCommonParamsWithoutRecipientId {
                /**质押的唯一索引：1-30 个小写字母+数字 */
                stakeId: string;
                /**质押的权益所属链名 */
                sourceChainName?: string;
                /**质押的权益所属链网络标识 */
                sourceChainMagic?: string;
                /**质押的权益名称 */
                assetType: string;
                /**解除质押的权益数量 */
                assetPrealnum: string;
            }

            export type PackageTransacationParams = {
                /**签名 */
                signature: string;
                /**事件的二进制数据 */
                buffer: string;
            };

            export type BroadcastTransacationParams = {
                /**签名 */
                signature: string;
                /**安全签名 */
                signSignature?: string;
                /**事件的二进制数据 */
                buffer: string;
                /**事件是否上链，true 组合成完整的事件并且广播到节点；false | undefined 组合成完整的事件但是不广播到节点 */
                isOnChain?: boolean;
            };

            export type TransactionApi = import("./atom_transaction/_transactionApi").TransactionApi;
            export type CommonTransactionApi = import("./atom_transaction").CommonTransactionApi;
            export type UsernameApi = import("./atom_transaction").UsernameApi;
            export type SignatureApi = import("./atom_transaction").SignatureApi;
            export type DelegateApi = import("./atom_transaction").DelegateApi;
            export type AcceptVoteApi = import("./atom_transaction").AcceptVoteApi;
            export type RejectVoteApi = import("./atom_transaction").RejectVoteApi;
            export type VoteApi = import("./atom_transaction").VoteApi;

            export type IssueAssetApi = import("./atom_transaction").IssueAssetApi;
            export type TransferAssetApi = import("./atom_transaction").TransferAssetApi;
            export type DestroyAssetApi = import("./atom_transaction").DestroyAssetApi;
            export type GiftAssetApi = import("./atom_transaction").GiftAssetApi;
            export type GrabAssetApi = import("./atom_transaction").GrabAssetApi;
            export type TrustAssetApi = import("./atom_transaction").TrustAssetApi;
            export type SignForAssetApi = import("./atom_transaction").SignForAssetApi;
            export type ToExchangeAssetApi = import("./atom_transaction").ToExchangeAssetApi;
            export type BeExchangeAssetApi = import("./atom_transaction").BeExchangeAssetApi;

            export type DAppApi = import("./atom_transaction").DAppApi;
            export type DAppPurchasingApi = import("./atom_transaction").DAppPurchasingApi;
            export type MarkApi = import("./atom_transaction").MarkApi;
            export type LocationNameApi = import("./atom_transaction").LocationNameApi;
            export type SetLnsManagerApi = import("./atom_transaction").SetLnsManagerApi;
            export type SetLnsRecordValueApi = import("./atom_transaction").SetLnsRecordValueApi;
            export type ToExchangeSpecialAssetApi = import("./atom_transaction").ToExchangeSpecialAssetApi;
            export type BeExchangeSpecialAssetApi = import("./atom_transaction").BeExchangeSpecialAssetApi;

            export type IssueEntityFactoryApi = import("./atom_transaction").IssueEntityFactoryApi;
            export type IssueEntityFactoryV1Api = import("./atom_transaction").IssueEntityFactoryV1Api;
            export type IssueEntityApi = import("./atom_transaction").IssueEntityApi;
            export type DestroyEntityApi = import("./atom_transaction").DestroyEntityApi;

            export type ToExchangeAnyApi = import("./atom_transaction").ToExchangeAnyApi;
            export type BeExchangeAnyApi = import("./atom_transaction").BeExchangeAnyApi;
            export type TransferAnyApi = import("./atom_transaction").TransferAnyApi;
            export type GiftAnyApi = import("./atom_transaction").GiftAnyApi;
            export type GrabAnyApi = import("./atom_transaction").GrabAnyApi;

            export type IssueEntityMultiApi = import("./atom_transaction").IssueEntityMultiApi;

            export type ToExchangeAnyMultiApi = import("./atom_transaction").ToExchangeAnyMultiApi;
            export type BeExchangeAnyMultiApi = import("./atom_transaction").BeExchangeAnyMultiApi;

            export type ToExchangeAnyMultiAllApi = import("./atom_transaction").ToExchangeAnyMultiAllApi;
            export type BeExchangeAnyMultiAllApi = import("./atom_transaction").BeExchangeAnyMultiAllApi;

            export type RegisterChainApi = import("./atom_transaction").RegisterChainApi;
            export type EmigrateAssetApi = import("./atom_transaction").EmigrateAssetApi;
            export type ImmigrateAssetApi = import("./atom_transaction").ImmigrateAssetApi;

            export type IssueCertificateApi = import("./atom_transaction").IssueCertificateApi;
            export type DestroyCertificateApi = import("./atom_transaction").DestroyCertificateApi;

            export type MacroApi = import("./atom_transaction").MacroApi;
            export type MacroCallApi = import("./atom_transaction").MacroCallApi;
            export type PromiseApi = import("./atom_transaction").PromiseApi;
            export type PromiseResolveApi = import("./atom_transaction").PromiseResolveApi;
            export type MultipleApi = import("./atom_transaction").MultipleApi;
            export type IncreaseAssetApi = import("./atom_transaction").IncreaseAssetApi;
            export type StakeAssetApi = import("./atom_transaction").StakeAssetApi;
            export type UnstakeAssetApi = import("./atom_transaction").UnstakeAssetApi;
        }

        export interface ChainBaseInfo {
            /**链名 */
            chainName: string;
            /**链网络标识符 */
            magic: string;
            /**链创世块签名 */
            genesisBlockSignature: string;
        }
        export interface AssetBaseInfo {
            /**资产所属类型 */
            parentAssetType: number;
            /**资产名 */
            assetType: string;
        }

        export namespace CrossChain {
            export interface GenerateMigrateCertificateArgs {
                /**申请账户密钥 */
                senderSecret: string;
                /**申请账户安全密钥 */
                senderSecondSecret?: string;
                /**接收账户 */
                recipientId: string;
                /**去往链信息 */
                toChainInfo: ChainBaseInfo;
                /**资产信息 */
                assetInfo: AssetBaseInfo;
                /**迁移的数量 */
                assetPrealnum: string;
            }

            export interface GenerateMigrateCertificateParams extends Omit<CrossChain.GenerateMigrateCertificateArgs, "assetInfo"> {
                assetInfo?: {
                    /**资产所属大类 */
                    parentAssetType: number;
                    /**资产名 */
                    assetType: string;
                };
            }

            export interface AuthSignMigrateCertificateArgs {
                /**授权账户密钥 */
                authSecret: string;
                /**授权账户安全密钥 */
                authSecondSecret?: string;
                /**签名版本号 */
                version?: string;
                /**迁移凭证 */
                migrateCertificate: BFMetaNodeSDK.Transaction.MigrateCertificateJSON;
            }

            export type MigrateCertificateApi = import("./migrate_certificate/_migrateCertificateApi").MigrateCertificateApi;
            export type GenerateMigrateCertificateApi = import("./migrate_certificate").GenerateMigrateCertificateApi;
            export type FromAuthSignatureMigrateCertificateApi = import("./migrate_certificate").FromAuthSignatureMigrateCertificateApi;
            export type ToAuthSignatureMigrateCertificateApi = import("./migrate_certificate").ToAuthSignatureMigrateCertificateApi;
        }

        export namespace Common {
            export interface CommonParams {}

            export interface VerifyAddressParams extends CommonParams {
                /**账户地址 */
                address: string;
            }

            export interface VerifyPublicKeyParams extends CommonParams {
                /**账户公钥 */
                publicKey: string;
            }

            export interface GenerateAccountParams extends CommonParams {
                /**密钥 */
                secret: string;
                /**安全密钥 */
                secondSecret?: string;
            }

            export interface GenerateAddressBySecretParams extends CommonParams {
                /**密钥 */
                secret: string;
            }

            export interface GenerateAddressByPublicKeyParams extends CommonParams {
                /**账户公钥 */
                publicKey: string;
            }

            export interface AccountInfo {
                /**账户地址 */
                address: string;
                /**账户公钥 */
                publicKey: string;
                /**账户安全公钥 */
                secondPublicKey?: string;
            }

            export interface AsymmetricEncryptParams extends CommonParams {
                /**要加密的信息 */
                msg: string;
                /**用于加密的公钥 */
                decryptPK: string;
                /**用于加密的私钥 */
                encryptSK: string;
            }

            export interface AsymmetricDecryptParams extends CommonParams {
                /**要解密的信息 */
                encryptedMessage: string;
                /**用于解密的公钥 */
                encryptPK: string;
                /**用于解密的私钥 */
                decryptSK: string;
                nonce?: string;
            }

            export interface AsymmetricEncrypt {
                nonce: string;
                encryptedMessage: string;
            }

            export type AsymmetricDecrypt = false | string;

            export interface GenerateKeypairParams extends CommonParams {
                /**密钥 */
                secret: string;
                /**安全密钥 */
                secondSecret?: string;
            }

            export interface Keypairs {
                keypair: {
                    publicKey: string;
                    secretKey: string;
                };
                secondKeypair?: {
                    publicKey: string;
                    secretKey: string;
                };
            }
            export interface TransactionStorageJSON {
                /**事件的索引键，提供额外查询使用的字段名 */
                key: string;
                /**事件的索引值，提供额外查询使用的字段值 */
                value: string;
            }
            export interface TransactionJSON<AssetJSON extends object = object> {
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
                remark: {
                    [key: string]: string;
                };
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
            export interface FractionJSON<T extends number | bigint | string = number> {
                /**分子 */
                numerator: T;
                /**分母 */
                denominator: T;
            }
            export interface CalcTransactionMinFeeParams extends CommonParams {
                /**完整的事件 */
                transaction: TransactionJSON;
                /**自定义的最低手续费 */
                customMinFeePerByte?: FractionJSON;
            }

            export interface TransactionMinFee {
                minFee: string;
            }

            export interface GenerateCiphertextSignatureParams extends CommonParams {
                /**加密密钥 */
                secret: string;
                /**关联交易的签名 */
                transactionSignature: string;
                /**交易的发起账户地址 */
                senderId: string;
            }

            export type CommonApi = import("./atom_common/_commonApi").CommonApi<any>;
            export type VerifyAddressApi = import("./atom_common/verifyAddressApi").VerifyAddressApi;
            export type VerifyPublicKeyApi = import("./atom_common/verifyPublicKeyApi").VerifyPublicKeyApi;
            export type GenerateKeypairApi = import("./atom_common/generateKeypairApi").GenerateKeypairApi;
            export type GenerateAccountApi = import("./atom_common/generateAccountApi").GenerateAccountApi;
            export type GenerateAddressBySecretApi = import("./atom_common/generateAddressBySecretApi").GenerateAddressBySecretApi;
            export type GenerateAddressByPublicKeyApi = import("./atom_common/generateAddressByPublicKeyApi").GenerateAddressByPublicKeyApi;
            export type AsymmetricEncryptApi = import("./atom_common/asymmetricEncryptApi").AsymmetricEncryptApi;
            export type AsymmetricDecryptApi = import("./atom_common/asymmetricDecryptApi").AsymmetricDecryptApi;
            export type CalcTransactionMinFeeApi = import("./atom_common/calcTransactionMinFee").CalcTransactionMinFeeApi;
            export type GenerateCiphertextSignatureApi = import("./atom_common/generateCiphertextSignatureApi").GenerateCiphertextSignatureApi;
        }
    }
}
