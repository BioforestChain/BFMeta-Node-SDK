import { bfmetaSDK, CHAIN_INFO } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.ToExchangeAssetTransactionParams = {
            publicKey,
            fee: "440000",
            applyBlockHeight: 50,
            remark: { message: "create toExchangeAsset" },
            toExchangeSource: CHAIN_INFO.chainMagic,
            toExchangeChainName: CHAIN_INFO.chainName,
            toExchangeAsset: CHAIN_INFO.chainAssetType,
            toExchangeNumber: "1000",
            beExchangeSource: CHAIN_INFO.chainMagic,
            beExchangeChainName: CHAIN_INFO.chainName,
            beExchangeAsset: CHAIN_INFO.chainAssetType,
            prevWeight: "1",
            nextWeight: "0",
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createToExchangeAsset(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastToExchangeAsset({
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
