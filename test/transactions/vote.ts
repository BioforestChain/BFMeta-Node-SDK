import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "scan pass carpet coral pumpkin spell present decrease veteran text flower pioneer top speak jaguar wreck ask always hazard good know gift uncle frost";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.VoteTransactionParams = {
            publicKey,
            fee: "1000",
            applyBlockHeight: 5,
            remark: { message: "create vote" },
            recipientId: "cCET2Sxt2LPDhx44wxJ9uhkpviKNrSacvE",
            equity: "0",
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createVote(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastVote({
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
