import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "scan pass carpet coral pumpkin spell present decrease veteran text flower pioneer top speak jaguar wreck ask always hazard good know gift uncle frost";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.IssueEntityFactoryTransactionParams = {
            publicKey,
            fee: "100000",
            applyBlockHeight: 10,
            remark: { message: "create issueEntityFactory" },
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
            factoryId: "biohazard",
            entityPrealnum: "20",
            entityFrozenAssetPrealnum: "10000",
            purchaseAssetPrealnum: "10000",
            numberOfEffectiveBlocks: 100,
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createIssueEntityFactory(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastIssueEntityFactory({
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
