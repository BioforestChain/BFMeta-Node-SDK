import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const secret = "123";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.AcceptVoteTransactionParams = {
            publicKey,
            fee: "1000",
            applyBlockHeight: 10,
            remark: { message: "create acceptVote" },
        };

        const sdk = bfmetaSDK;
        const createResult = await sdk.api.transaction.createAcceptVote(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastAcceptVote({
                buffer,
                signature,
            });
            console.log(broadcastResult);
        } else {
            console.log(createResult);
        }
        const socket = bfmetaSDK.getSocketByNode({
            ip: "34.84.140.206",
            port: 19003,
        });
        if (socket) {
            socket.disconnect();
        }
    } catch (e) {
        console.log(e);
    }
})();
