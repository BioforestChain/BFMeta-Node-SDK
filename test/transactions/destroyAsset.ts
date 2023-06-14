import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const secret = "22222";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.DestroyAssetTransactionParams = {
            publicKey,
            fee: "2000",
            applyBlockHeight: 156500,
            remark: { message: "create destroyAsset" },
            /**销毁的权益名，大写字母组成，3-5 个字符 */
            assetType: "FTC",
            /**销毁的权益数，0-9 组成并且不包含小数点，必须大于 0 */
            amount: "9720000000000000",
            recipientId: "c4PvHHmzpYCBEkaJ6hL8mJ5gVdMHwybJyu"
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createDestroyAsset(argv);
        console.log(createResult)
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastDestroyAsset({
                buffer,
                signature,
            });
            console.log(broadcastResult);
        } else {
            console.log(createResult);
        }
    } catch (e) {
        console.log(e);
    }
})();
