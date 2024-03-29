import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const secret =
            "22222";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.DestroyEntityTransactionParams = {
            publicKey,
            fee: "2000",
            applyBlockHeight: 156500,
            remark: { message: "create destroyEntity" },
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
            transactionSignature:
                "e14eed400924c188ffe2e9692e12f3c0d3c7f137f0227ef3fb1987165bfe6d676fcff9fa84c714d1f0c4239eb096549ebc68036066a515f8cc438348c515c906",
            entityId: "m_skyrim_dragonborn00",
            entityFactoryApplicant: "cCET2Sxt2LPDhx44wxJ9uhkpviKNrSacvE",
            entityFactoryPossessor: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
            entityPrealnum: "20",
            entityFrozenAssetPrealnum: "10000",
            purchaseAssetPrealnum: "10000",
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createDestroyEntity(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastDestroyEntity({
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
