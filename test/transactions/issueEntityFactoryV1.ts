import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const secret =
            "scan pass carpet coral pumpkin spell present decrease veteran text flower pioneer top speak jaguar wreck ask always hazard good know gift uncle frost";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.IssueEntityFactoryTransactionV1Params = {
            publicKey,
            fee: "10000000",
            applyBlockHeight: 1,
            remark: { message: "create issueEntityFactory" },
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
            factoryId: "skyrim",
            entityPrealnum: "20",
            entityFrozenAssetPrealnum: "10000",
            purchaseAssetPrealnum: "10000",
            numberOfEffectiveBlocks: 100,
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createIssueEntityFactoryV1(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastIssueEntityFactoryV1({
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
