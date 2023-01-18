import { GIFT_DISTRIBUTION_RULE } from "../helpers";

import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.GiftAssetTransactionParams = {
            publicKey,
            fee: "440000",
            applyBlockHeight: 30,
            remark: { message: "create giftAsset" },
            assetType: "HYLQ",
            amount: "9",
            totalGrabableTimes: 10,
            giftDistributionRule: GIFT_DISTRIBUTION_RULE.AVERAGE,
        };

        const sdk = new Sdk();
        const createResult = await sdk.api.transaction.createGiftAsset(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastGiftAsset({
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
