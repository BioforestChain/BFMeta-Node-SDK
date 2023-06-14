import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const result = await bfmetaSDK.api.basic.getLastBlock();
        if (result.success) {
            console.log(result.result);
        }
    } catch (e) {
        console.log(e);
    }
})();
