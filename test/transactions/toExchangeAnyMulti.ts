import { CHAIN_INFO, PARENT_ASSET_TYPE } from "../helpers";

import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.ToExchangeAnyMultiTransactionParams = {
            publicKey,
            fee: "20000",
            applyBlockHeight: 40,
            remark: { message: "create toExchangeAnyMulti" },
            toExchangeAssets: [
                {
                    toExchangeParentAssetType: PARENT_ASSET_TYPE.ENTITY,
                    toExchangeAssetType: "m_skyrim_dragonborn00",
                    toExchangeAssetPrealnum: "1",
                    taxInformation: {
                        taxCollector: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
                        taxAssetPrealnum: "0",
                    },
                },
                {
                    toExchangeParentAssetType: PARENT_ASSET_TYPE.ASSETS,
                    toExchangeAssetType: CHAIN_INFO.chainAssetType,
                    toExchangeAssetPrealnum: "100000",
                    assetExchangeWeightRatio: {
                        toExchangeAssetWeight: "1000",
                        beExchangeAssetWeight: "1",
                    },
                },
            ],
            beExchangeAsset: {
                beExchangeParentAssetType: PARENT_ASSET_TYPE.ASSETS,
                beExchangeAssetType: CHAIN_INFO.chainAssetType,
                beExchangeAssetPrealnum: "100000",
            },
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createToExchangeAnyMulti(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastToExchangeAnyMulti({
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
