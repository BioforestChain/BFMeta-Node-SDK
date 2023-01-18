import { GIFT_DISTRIBUTION_RULE, PARENT_ASSET_TYPE } from "../helpers";

import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.GiftAnyTransactionParams = {
            publicKey,
            fee: "44000000",
            applyBlockHeight: 30,
            remark: { message: "create giftAny" },
            parentAssetType: PARENT_ASSET_TYPE.ENTITY,
            assetType: "biohazard_dragonborn",
            amount: "1",
            totalGrabableTimes: 1,
            // giftDistributionRule: GIFT_DISTRIBUTION_RULE.AVERAGE,
            taxInformation: {
                taxCollector: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
                taxAssetPrealnum: "0",
            },
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createGiftAny(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastGiftAny({
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
