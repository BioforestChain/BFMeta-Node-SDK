import { CHAIN_INFO, PARENT_ASSET_TYPE } from "../helpers";

import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.GrabAnyTransactionParams = {
            publicKey,
            fee: "440000",
            applyBlockHeight: 35,
            remark: { message: "create grabAsset" },
            blockSignature: "d551afb4fa46041fe1d361241fb8a2ecb98f467dcbf0d126830f1b952be37d22e43d4a195aca63aae24be4c5d7ff1c5a971529ceb1edf71f59360fc538102a03",
            transactionSignature:
                "5eeaa532d1478509f7b7e8b326e09ba26b14f7be7a9870f7b73e9a42c62412c074a666b1361af7965477c3bb588df93bb87532628c92f9980bce2a1160134607",
            giftAny: {
                cipherPublicKeys: [],
                sourceChainMagic: CHAIN_INFO.chainMagic,
                sourceChainName: CHAIN_INFO.chainName,
                parentAssetType: PARENT_ASSET_TYPE.ENTITY,
                assetType: "skyrim_dragonborn",
                amount: "1",
                totalGrabableTimes: 1,
                taxInformation: {
                    taxCollector: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
                    taxAssetPrealnum: "0",
                },
                beginUnfrozenBlockHeight: 161,
            },
            recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
        };

        const sdk = new Sdk();

        const createResult = await sdk.api.transaction.createGrabAny(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await asymmetricUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastGrabAny({
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
