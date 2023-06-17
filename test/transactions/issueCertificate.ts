import { CERTIFICATE_TYPE, bfmetaSDK, getRandomCertificateId } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.IssueCertificateTransactionParams = {
            publicKey,
            fee: "10000",
            applyBlockHeight: 10,
            remark: { message: "create issueCertificate" },
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
            certificateId: getRandomCertificateId(12),
            type: CERTIFICATE_TYPE.DESTROY_BY_APPLICANT,
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createIssueCertificate(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastIssueCertificate({
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
