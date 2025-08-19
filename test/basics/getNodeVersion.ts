import { bfmetaSDK } from "../helpers/index.js";

(async () => {
    try {
        const result = await bfmetaSDK.api.basic.getNodeVersion();

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
