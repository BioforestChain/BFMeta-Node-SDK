import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const secret =
            "nose install correct solar side latin focus churn mask nominee differ mosquito claw awake glass rare pond clump draw rent fiction muscle razor bacon";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.UsernameTransactionParams = {
            publicKey,
            fee: "1000",
            applyBlockHeight: 1,
            remark: { message: "create username" },
            alias: "a_long_lose_father",
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createUsername(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastUsername({
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
