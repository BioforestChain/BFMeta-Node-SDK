import { bfmetaSDK } from "../helpers/index.js";

(async () => {
    try {
        const argv: BFMetaNodeSDK.Common.GenerateAddressBySecretParams = {
            secret: "qqq",
        };

        const result = await bfmetaSDK.api.transaction.createAddressBySecret(argv);

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
