import * as fs from "fs";
import * as path from "path";
import { bfmetaSDK } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const certificate = fs.readFileSync(path.join(process.cwd(), "genesisInfos/ccc-genesisBlock-testnet-hex.txt")).toString();

        const argv: BFMetaNodeSDK.Transaction.RegisterChainTransactionParams = {
            publicKey,
            fee: "1000",
            applyBlockHeight: 15,
            remark: { message: "create registerChain" },
            certificate,
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createRegisterChain(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastRegisterChain({
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
