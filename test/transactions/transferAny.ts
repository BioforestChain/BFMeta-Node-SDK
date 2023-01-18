import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "nose install correct solar side latin focus churn mask nominee differ mosquito claw awake glass rare pond clump draw rent fiction muscle razor bacon";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.TransferAnyTransactionParams = {
            publicKey,
            fee: "1000",
            applyBlockHeight: 1,
            remark: { message: "create transferAsset" },
            recipientId: "cCET2Sxt2LPDhx44wxJ9uhkpviKNrSacvE",
            taxInformation: {
                taxCollector: "cCET2Sxt2LPDhx44wxJ9uhkpviKNrSacvE",
                taxAssetPrealnum: "1000",
            },
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createTransferAny(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastTransferAny({
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
