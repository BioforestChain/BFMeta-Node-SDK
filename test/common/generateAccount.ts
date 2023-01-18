import { Sdk } from "../../src";

(async () => {
    try {
        const argv: BFMetaNodeSDK.Common.GenerateAccountParams = {
            secret: "qqq",
            secondSecret: "www",
        };

        const sdk = new Sdk();

        const result = await sdk.api.transaction.createAccount(argv);

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
