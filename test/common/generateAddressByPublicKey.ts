import { Sdk } from "../../src";

(async () => {
    try {
        const argv: BFMetaNodeSDK.Common.GenerateAddressByPublicKeyParams = {
            publicKey: "3dce30d2dfa426e3b749e2fc1915322cac7c95398e81e0e0dbfdc9ffd3bd7d0e",
        };

        const sdk = new Sdk();

        const result = await sdk.api.transaction.createAddressByPublicKey(argv);

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
