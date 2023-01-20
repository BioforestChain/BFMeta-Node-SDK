import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.TrustAssetTransactionParams = {
            publicKey,
            fee: "44000000",
            applyBlockHeight: 50,
            remark: { message: "create trustAsset" },
            assetType: "BFMTEST",
            amount: "1000",
            numberOfSignFor: 1,
            trustees: ["cKySkYVB4MhWhKczSUmY7WhF638hPx6U8N"],
            recipientId: "cNQzoCNDDYY2uqBEW6fb7B6HzFjyz6oCt8",
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createTrustAsset(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastTrustAsset({
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
