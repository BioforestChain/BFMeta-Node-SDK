import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const argv: BFMetaNodeSDK.Common.GenerateAccountParams = {
            secret: "qqq",
            secondSecret: "www",
        };

        const result = await bfmetaSDK.api.transaction.createAccount(argv);

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
