import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "very found ice guilt what inform arm relief reopen talent traffic drill flash inner donate salad vote scout ghost desk alter later cycle suffer";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.IssueAssetTransactionParams = {
            publicKey,
            fee: "1000",
            applyBlockHeight: 10,
            remark: { message: "create issueAsset" },
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
            assetType: "HYLQ",
            expectedIssuedAssets: "99999",
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createIssueAsset(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastIssueAsset({
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
