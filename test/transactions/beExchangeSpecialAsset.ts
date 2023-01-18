import { Sdk } from "../../src";
import { asymmetricUtil, CHAIN_INFO } from "../helpers";

(async () => {
    try {
        const secret =
            "boost scorpion peanut output undo useful trash burden custom party click offer leisure magnet obscure drop gather blind predict walk since strike thumb minimum";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.BeExchangeSpecialAssetTransactionParams = {
            // secret: "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance",
            publicKey,
            fee: "1000",
            applyBlockHeight: 50,
            remark: { message: "create beExchangeSpecialAsset" },
            transactionSignature:
                "76a1353627804f450035afb7c2bbf9713252bedd29f41b28ac99da10f1eb4bce5ecdadb7696493207caf0bd6ab3aa816fd05722563ee05597c0c76c8d4b9bd02",
            exchangeSpecialAsset: {
                cipherPublicKeys: [],
                toExchangeSource: CHAIN_INFO.chainMagic,
                beExchangeSource: CHAIN_INFO.chainMagic,
                toExchangeChainName: CHAIN_INFO.chainName,
                beExchangeChainName: CHAIN_INFO.chainName,
                toExchangeAsset: `hylq.${CHAIN_INFO.chainName}`,
                beExchangeAsset: CHAIN_INFO.chainAssetType,
                exchangeNumber: "66666",
                exchangeAssetType: 1,
                exchangeDirection: 0,
            },
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createBeExchangeSpecialAsset(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastBeExchangeSpecialAsset({
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
