import { ASSET_INFO, bfmetaSDK, CHAIN_INFO, PARENT_ASSET_TYPE } from "../helpers";

(async () => {
    try {
        const secret =
            "boost scorpion peanut output undo useful trash burden custom party click offer leisure magnet obscure drop gather blind predict walk since strike thumb minimum";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.BeExchangeAnyMultiAllTransactionParams = {
            publicKey,
            fee: "20000",
            applyBlockHeight: 50,
            remark: { message: "create beExchangeAnyMulti" },
            transactionSignature:
                "b0517406378d6900208a278b70f0c0159bc814512771d3bf1db76a09a7181f63987ad38b290378f5f064e2be19f92527f269e32516c28b2907888e6edf9eee07",

            toExchangeAssets: [
                {
                    toExchangeSource: CHAIN_INFO.chainMagic,
                    toExchangeChainName: CHAIN_INFO.chainName,
                    toExchangeParentAssetType: PARENT_ASSET_TYPE.ENTITY,
                    toExchangeAssetType: "m_skyrim_dragonborn00",
                    toExchangeAssetPrealnum: "1",
                    taxInformation: {
                        taxCollector: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
                        taxAssetPrealnum: "0",
                    },
                },
                {
                    toExchangeSource: CHAIN_INFO.chainMagic,
                    toExchangeChainName: CHAIN_INFO.chainName,
                    toExchangeParentAssetType: PARENT_ASSET_TYPE.ASSETS,
                    toExchangeAssetType: CHAIN_INFO.chainAssetType,
                    toExchangeAssetPrealnum: "100000",
                },
            ],
            beExchangeAssets: [
                {
                    beExchangeSource: CHAIN_INFO.chainMagic,
                    beExchangeChainName: CHAIN_INFO.chainName,
                    beExchangeParentAssetType: PARENT_ASSET_TYPE.ASSETS,
                    beExchangeAssetType: ASSET_INFO.assetType,
                    beExchangeAssetPrealnum: "100000",
                },
            ],
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createBeExchangeAnyMultiAll(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastBeExchangeAnyMulti({
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
