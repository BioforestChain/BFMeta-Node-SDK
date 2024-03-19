export {};
declare global {
    export namespace BFMetaNodeSDK {
        export type AllPartial<T> = {
            [P in keyof T]?: AllPartial<T[P]>;
        };

        export interface AutoVote {
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

        export interface SchemaType {
            id?: string;
            type: string;
            properties?: { [k: string]: SchemaType };
            required?: string[];
            minimum?: number;
            maximum?: number;
            items?: SchemaType;
            format?: string;
        }

        export interface FetchInterface {
            get(url: string): Promise<any>;
            post(url: string, data: any): Promise<any>;
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
    }
}
