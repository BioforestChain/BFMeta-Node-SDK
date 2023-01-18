import { Sdk } from "../../src";
import { asymmetricUtil, CHAIN_INFO } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.BeExchangeAssetTransactionParams = {
            publicKey,
            fee: "440000",
            applyBlockHeight: 50,
            remark: { message: "create beExchangeAsset" },
            transactionSignature:
                "a42409c8c69610d63d30cdc8e58e8daf423e97a5878af1b23e9ce1d059d96b6860b87b22ea8c8e7c92953a126e195f29337cfad506a7b0658e464d7511ac6308",
            toExchangeNumber: "50",
            exchangeAsset: {
                cipherPublicKeys: [],
                toExchangeSource: CHAIN_INFO.chainMagic,
                beExchangeSource: CHAIN_INFO.chainMagic,
                toExchangeChainName: CHAIN_INFO.chainName,
                beExchangeChainName: CHAIN_INFO.chainName,
                toExchangeAsset: CHAIN_INFO.chainAssetType,
                beExchangeAsset: CHAIN_INFO.chainAssetType,
                toExchangeNumber: "1000",
                exchangeRate: {
                    prevWeight: "1",
                    nextWeight: "0",
                },
            },
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createBeExchangeAsset(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastBeExchangeAsset({
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
