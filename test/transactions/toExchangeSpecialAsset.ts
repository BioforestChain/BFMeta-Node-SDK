import { CHAIN_INFO, EXCHANGE_DIRECTION, SPECIAL_ASSET_TYPE } from "../helpers";
import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.ToExchangeSpecialAssetTransactionParams = {
            // secret: "boost scorpion peanut output undo useful trash burden custom party click offer leisure magnet obscure drop gather blind predict walk since strike thumb minimum",
            publicKey,
            fee: "1000",
            applyBlockHeight: 50,
            remark: { message: "create toExchangeSpecialAsset" },
            toExchangeSource: CHAIN_INFO.chainMagic,
            toExchangeChainName: CHAIN_INFO.chainName,
            toExchangeAsset: `hylq.${CHAIN_INFO.chainName}`,
            beExchangeSource: CHAIN_INFO.chainMagic,
            beExchangeChainName: CHAIN_INFO.chainName,
            beExchangeAsset: "BFT",
            exchangeNumber: "66666",
            exchangeAssetType: SPECIAL_ASSET_TYPE.LOCATION_NAME,
            exchangeDirection: EXCHANGE_DIRECTION.ASSET_FROM_SENDER,
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createToExchangeSpecialAsset(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastToExchangeSpecialAsset({
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
