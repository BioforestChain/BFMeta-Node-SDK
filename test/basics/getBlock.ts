import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const result = await bfmetaSDK.api.basic.getBlock({ height: 1 });

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
