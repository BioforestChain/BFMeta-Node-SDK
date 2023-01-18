import { CHAIN_INFO, PARENT_ASSET_TYPE } from "../helpers";
import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "boost scorpion peanut output undo useful trash burden custom party click offer leisure magnet obscure drop gather blind predict walk since strike thumb minimum";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.BeExchangeAnyTransactionParams = {
            publicKey,
            fee: "10000",
            applyBlockHeight: 50,
            remark: { message: "create beExchangeAny" },
            transactionSignature:
                "b3b4bcdf9a9743d0c467cfca43feaab00b7dc405dbf9ddd3af7a207d086553f118d52771fc917d0bb20e46d65003b8bf87bc819134f4ec96c29c3c8fc6d98306",
            toExchangeAssetPrealnum: "1",
            beExchangeAssetPrealnum: "100000",
            exchangeAny: {
                cipherPublicKeys: [],
                toExchangeSource: CHAIN_INFO.chainMagic,
                beExchangeSource: CHAIN_INFO.chainMagic,
                toExchangeChainName: CHAIN_INFO.chainName,
                beExchangeChainName: CHAIN_INFO.chainName,
                toExchangeParentAssetType: PARENT_ASSET_TYPE.ENTITY,
                beExchangeParentAssetType: PARENT_ASSET_TYPE.ASSETS,
                toExchangeAssetType: "skyrim_dragonborn",
                beExchangeAssetType: CHAIN_INFO.chainAssetType,
                toExchangeAssetPrealnum: "1",
                beExchangeAssetPrealnum: "100000",
                taxInformation: {
                    taxCollector: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
                    taxAssetPrealnum: "0",
                },
            },
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createBeExchangeAny(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastBeExchangeAny({
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
