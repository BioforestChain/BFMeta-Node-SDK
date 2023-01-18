declare namespace BFMetaNodeSDK {
    type AllPartial<T> = {
        [P in keyof T]?: AllPartial<T[P]>;
    };

    interface AutoVote {
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

    interface SchemaType {
        id?: string;
        type: string;
        properties?: { [k: string]: SchemaType };
        required?: string[];
        minimum?: number;
        maximum?: number;
        items?: SchemaType;
        format?: string;
    }
}
