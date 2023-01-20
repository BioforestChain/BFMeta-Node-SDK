import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const sdk = bfmetaSDK;

        const k1 = await sdk.api.transaction.createKeypair({ secret: "qqq" });
        const k2 = await sdk.api.transaction.createKeypair({ secret: "www" });

        if (!k1.success) {
            throw new Error("QAQ");
        }

        if (!k2.success) {
            throw new Error("QAQ");
        }

        const argv1: BFMetaNodeSDK.Common.AsymmetricEncryptParams = {
            msg: Buffer.from("QwreT").toString("hex"),
            encryptSK: k1.result.keypair.secretKey,
            decryptPK: k2.result.keypair.publicKey,
        };

        const result1 = await sdk.api.transaction.asymmetricEncrypt(argv1);

        if (!result1.success) {
            throw new Error("QAQ");
        }

        const argv2: BFMetaNodeSDK.Common.AsymmetricDecryptParams = {
            encryptedMessage: result1.result.encryptedMessage,
            encryptPK: k1.result.keypair.publicKey,
            decryptSK: k2.result.keypair.secretKey,
            nonce: result1.result.nonce,
        };

        const result2 = await sdk.api.transaction.asymmetricDecrypt(argv2);

        if (!result2.success) {
            throw new Error("QAQ");
        }
        if (typeof result2.result === "boolean") {
            throw new Error("QAQ");
        }

        console.log(Buffer.from(result2.result, "hex").toString());
    } catch (e) {
        console.log(e);
    }
})();
