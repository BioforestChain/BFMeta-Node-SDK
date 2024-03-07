import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const secret =
            "boost scorpion peanut output undo useful trash burden custom party click offer leisure magnet obscure drop gather blind predict walk since strike thumb minimum";
        const recipientSecret =
            "very found ice guilt what inform arm relief reopen talent traffic drill flash inner donate salad vote scout ghost desk alter later cycle suffer";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");
        const recipientId = await bfmetaSDK.bfchainSignUtil.getAddressFromSecret(recipientSecret);

        const argv: BFMetaNodeSDK.Transaction.IncreaseAssetTransactionParams = {
            publicKey,
            fee: "1000",
            applyBlockHeight: 10,
            remark: { message: "create increaseAsset" },
            recipientId,
            assetType: "HYLQ",
            increasedAssetPrealnum: "99999",
            frozenMainAssetPrealnum: "99999",
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createIncreaseAsset(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastIncreaseAsset({
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
