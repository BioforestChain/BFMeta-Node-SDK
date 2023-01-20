import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const result = await bfmetaSDK.api.basic.getNodeVersion();

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
