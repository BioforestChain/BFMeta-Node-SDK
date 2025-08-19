import { bfmetaSDK } from "../helpers/index.js";

(async () => {
    try {
        const argv: BFMetaNodeSDK.Common.VerifyAddressParams = {
            address: "cEAXDkaEJgWKMM61KYz2dYU1RfuxbB8Ma",
        };

        const result = await bfmetaSDK.api.transaction.verifyAddress(argv);

        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
