import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const secret =
            "scan pass carpet coral pumpkin spell present decrease veteran text flower pioneer top speak jaguar wreck ask always hazard good know gift uncle frost";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.MarkTransactionParams = {
            publicKey,
            fee: "10000",
            applyBlockHeight: 20,
            remark: { message: "create mark" },
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
            type: 0,
            dappid: "BFCHAINN",
            purchaseAsset: "1000",
            action: "qaq",
            content: "qwq",
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createMark(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastMark({
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
