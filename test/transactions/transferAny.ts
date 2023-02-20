import { bfmetaSDK, PARENT_ASSET_TYPE, CHAIN_INFO } from "../helpers";

(async () => {
    try {
        const secret =
            "nose install correct solar side latin focus churn mask nominee differ mosquito claw awake glass rare pond clump draw rent fiction muscle razor bacon";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.TransferAnyTransactionParams = {
            publicKey,
            parentAssetType: PARENT_ASSET_TYPE.ASSETS,
            assetType: CHAIN_INFO.chainAssetType,
            amount: "1000",
            fee: "1000",
            applyBlockHeight: 1,
            remark: { message: "create transferAsset" },
            recipientId: "cCET2Sxt2LPDhx44wxJ9uhkpviKNrSacvE",
            taxInformation: {
                taxCollector: "cCET2Sxt2LPDhx44wxJ9uhkpviKNrSacvE",
                taxAssetPrealnum: "1000",
            },
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createTransferAny(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
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
