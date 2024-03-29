import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const secret =
            "nose install correct solar side latin focus churn mask nominee differ mosquito claw awake glass rare pond clump draw rent fiction muscle razor bacon";
        const secondSecret = "i am the future";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");
        const newSecondPublicKey = await bfmetaSDK.bfchainSignUtil.getSecondPublicKeyStringFromSecretAndSecondSecretV2(secret, secondSecret);

        const argv: BFMetaNodeSDK.Transaction.SignatureTransactionParams = {
            publicKey,
            fee: "1000",
            applyBlockHeight: 40,
            remark: { message: "create signature" },
            newSecondPublicKey,
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createSignature(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastSignature({
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
