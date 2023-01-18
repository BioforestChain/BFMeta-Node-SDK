import { Sdk } from "../../src";
import { asymmetricUtil, CHAIN_INFO } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.SetLnsManagerTransactionParams = {
            publicKey,
            fee: "10000",
            applyBlockHeight: 50,
            remark: { message: "create setLnsManager" },
            recipientId: "cKySkYVB4MhWhKczSUmY7WhF638hPx6U8N",
            name: `hylq.${CHAIN_INFO.chainName}`,
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createSetLnsManager(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastSetLnsManager({
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
