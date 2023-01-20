import { bfmetaSDK, CHAIN_INFO, RECORD_OPERATION_TYPE, RECORD_TYPE } from "../helpers";

(async () => {
    try {
        const secret =
            "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance";
        const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        const argv: BFMetaNodeSDK.Transaction.SetLnsRecordValueTransactionParams = {
            publicKey,
            fee: "10000",
            applyBlockHeight: 50,
            remark: { message: "create setLnsRecordValue" },
            name: `hylq.${CHAIN_INFO.chainName}`,
            addRecord: [RECORD_TYPE.IPV4.toString(), "192.168.111.119"],
            operationType: RECORD_OPERATION_TYPE.ADD,
        };

        const sdk = bfmetaSDK;

        const createResult = await sdk.api.transaction.createSetLnsRecordValue(argv);
        if (createResult.success) {
            const buffer = createResult.result.buffer;
            const signature = (await bfmetaSDK.bfchainSignUtil.detachedSign(Buffer.from(buffer, "base64"), keypair.secretKey)).toString("hex");
            const broadcastResult = await sdk.api.transaction.broadcastSetLnsRecordValue({
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
