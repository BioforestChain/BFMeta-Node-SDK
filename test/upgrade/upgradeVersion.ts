import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const result = await bfmetaSDK.api.upgrade.upgradeVersion({});

        if (result.success) {
            console.log(result.result);
        }

        const result2 = await bfmetaSDK.api.upgrade.upgradeSelf({});

        if (result2.success) {
            console.log(result2.result);
        }
    } catch (e) {
        console.log(e);
    }
})();
