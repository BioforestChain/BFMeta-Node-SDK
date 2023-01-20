import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const argv: BFMetaNodeSDK.Common.VerifyPublicKeyParams = {
            publicKey: "66147aafdeeb0f6f1fa6019fc8e9218b834a658712fbee756db9330b7ddc0d40",
        };

        const result = await bfmetaSDK.api.transaction.verifyPublicKey(argv);

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
