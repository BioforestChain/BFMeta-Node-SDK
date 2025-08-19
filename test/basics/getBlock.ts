import { bfmetaSDK } from "../helpers/index.js";

(async () => {
    try {
        const result = await bfmetaSDK.api.basic.getBlock({ height: 1 });

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
