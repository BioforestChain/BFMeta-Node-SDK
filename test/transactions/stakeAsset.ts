import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const secret =
            "boost scorpion peanut output undo useful trash burden custom party click offer leisure magnet obscure drop gather blind predict walk since strike thumb minimum";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.StakeAssetTransactionParams = {
            publicKey,
            fee: "1000",
            applyBlockHeight: 10,
            remark: { message: "create stakeAsset" },
            assetType: "HYLQ",
            assetPrealnum: "99999",
            beginUnstakeHeight: 10000000,
            stakeId: "99999",
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createStakeAsset(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastStakeAsset({
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
