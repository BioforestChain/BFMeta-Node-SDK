import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const argv: BFMetaNodeSDK.Common.GenerateCiphertextSignatureParams = {
            secret: "qqq",
            transactionSignature:
                "40e59688d147b95d4e4ed378d7019b3709fb79ebaaabfe0bc2c1450c8d21474f5d9dcf527f7ea03b698ce4b955f4049580d38eb218d7a357573b1c03964dfd0c",
            senderId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
        };

        const result = await bfmetaSDK.api.transaction.createCiphertextSignature(argv);

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
