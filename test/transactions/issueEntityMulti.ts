import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.IssueEntityMultiTransactionParams = {
            publicKey,
            fee: "1000000",
            applyBlockHeight: 10,
            remark: { message: "create issueEntity" },
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
            entityStructList: [
                {
                    entityId: "dragonborn00",
                },
                {
                    entityId: "dragonborn88",
                    taxAssetPrealnum: "88",
                },
            ],
            factoryId: "skyrim",
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createIssueEntityMulti(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastIssueEntityMulti({
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
