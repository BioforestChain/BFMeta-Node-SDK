import { Sdk } from "../../src";

(async () => {
    try {
        const sdk = new Sdk();

        const result = await sdk.api.basic.getLastBlock();

        if (result.success) {
            console.log(result.result);
        }
    } catch (e) {
        console.log(e);
    }
})();
