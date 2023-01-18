import { Sdk } from "../../src";

(async () => {
    try {
        const sdk = new Sdk();

        const result = await sdk.api.basic.getBlock({ height: 1 });

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
