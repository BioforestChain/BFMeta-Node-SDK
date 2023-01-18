import { Sdk } from "../../src";
import { asymmetricUtil, CHAIN_INFO } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.SignForAssetTransactionParams = {
            publicKey,
            fee: "440000",
            applyBlockHeight: 50,
            remark: { message: "create signForAsset" },
            transactionSignature:
                "5fe2c1b8c9bb3e0cfc9966c0f261b17d32738a3c11cff571ec4a846c4724c56c6cbfa7d4eadd0424ec35b6c3219be17004e2e483f2c789a6f5fdd40ce0524d0f",
            trustAsset: {
                trustees: ["cKySkYVB4MhWhKczSUmY7WhF638hPx6U8N", "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1", "cNQzoCNDDYY2uqBEW6fb7B6HzFjyz6oCt8"],
                numberOfSignFor: 1,
                sourceChainName: CHAIN_INFO.chainName,
                sourceChainMagic: CHAIN_INFO.chainMagic,
                assetType: CHAIN_INFO.chainAssetType,
                amount: "1000",
            },
            trustId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
            recipientId: "cNQzoCNDDYY2uqBEW6fb7B6HzFjyz6oCt8",
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createSignForAsset(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastSignForAsset({
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
