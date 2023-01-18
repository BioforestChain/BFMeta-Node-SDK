import { CHAIN_INFO, PARENT_ASSET_TYPE } from "../helpers";

import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.ToExchangeAnyTransactionParams = {
            publicKey,
            fee: "10000",
            applyBlockHeight: 40,
            remark: { message: "create toExchangeAny" },
            toExchangeSource: CHAIN_INFO.chainMagic,
            toExchangeChainName: CHAIN_INFO.chainName,
            toExchangeParentAssetType: PARENT_ASSET_TYPE.ENTITY,
            toExchangeAssetType: "skyrim_dragonborn",
            toExchangeAssetPrealnum: "1",
            beExchangeSource: CHAIN_INFO.chainMagic,
            beExchangeChainName: CHAIN_INFO.chainName,
            beExchangeParentAssetType: PARENT_ASSET_TYPE.ASSETS,
            beExchangeAssetType: CHAIN_INFO.chainAssetType,
            beExchangeAssetPrealnum: "100000",
            taxInformation: {
                taxCollector: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
                taxAssetPrealnum: "0",
            },
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createToExchangeAny(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastToExchangeAny({
                buffer,
                signature,
            });
            console.log(broadcastResult);
        } else {
            console.log(createResult);
        }
    } catch (e) {
        console.log(e);
    }
})();
