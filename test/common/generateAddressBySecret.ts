import { Sdk } from "../../src";

(async () => {
    try {
        const argv: BFMetaNodeSDK.Common.GenerateAddressBySecretParams = {
            secret: "qqq",
        };

        const sdk = new Sdk();

        const result = await sdk.api.transaction.createAddressBySecret(argv);

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
