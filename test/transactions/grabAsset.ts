import { CHAIN_INFO, GIFT_DISTRIBUTION_RULE } from "../helpers";

import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.GrabAssetTransactionParams = {
            publicKey,
            fee: "440000",
            applyBlockHeight: 35,
            remark: { message: "create grabAsset" },
            blockSignature: "fabe22d68730d7e0b71b5eb06beb398e5190719d3da2cc0fd39d9adf509554ff18bd99eb4d9cf6cbf8a7ed11be30680bae5d5b2729298246aaebc7bf2011b806",
            transactionSignature:
                "1fa67277c19aaaa3317bbac44167d3671167e92d19b2d1a7ca2b2d364ccb75ad26cf5adbf3e33cc4c9ab58cf21dabc6e266c7a036cd94881164e883554c8520b",
            giftAsset: {
                cipherPublicKeys: [],
                sourceChainMagic: CHAIN_INFO.chainMagic,
                sourceChainName: CHAIN_INFO.chainName,
                assetType: CHAIN_INFO.chainAssetType,
                amount: "9",
                totalGrabableTimes: 10,
                giftDistributionRule: 0,
            },
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createGrabAsset(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastGrabAsset({
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
