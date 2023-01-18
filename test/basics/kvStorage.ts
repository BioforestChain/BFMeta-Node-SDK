import * as fs from "node:fs";
import * as path from "node:path";
import { Sdk } from "../../src";
import { asymmetricUtil } from "../helpers";

class ApiTest {
    private __sdk = new Sdk();
    constructor() {}

    async execute() {
        let funcNames: string[] = [];
        for (let index = 0; index < 1; index++) {
            funcNames.push("setBinary");
            funcNames.push("getKVStorage");
        }
        for (let idx = 0; idx < funcNames.length; idx++) {
            const apiName = funcNames[idx];
            const promise = (this as any)[apiName]();
            if (!promise) {
                continue;
            }
            try {
                const value = await promise;
                let data = `idx: ${idx} name: ${funcNames[idx]} --- ${JSON.stringify(value, null, 2)}`;
                console.debug(data);
            } catch (e) {
                console.error(e);
            }
        }
    }

    async setBinary() {
        const fileNames = ["bcf"];
        const ds = Date.now();
        const { result } = await this.setKVStorageTemp(fileNames);
        const de = Date.now();
        console.log(`setKVStorageTemp cost: ${de - ds} ms`);
        const binaryInfos = fileNames.map((fileName, idx) => {
            const stat = fs.statSync(path.join(process.cwd(), fileName));
            return {
                fileInfo: {
                    name: fileName,
                    size: stat.size,
                },
                key: result.keys[idx],
            };
        });
        return await this.trTransferAsset(binaryInfos);
    }

    async trTransferAsset(binaryInfos?: BFMetaNodeSDK.Transaction.KVStorageInfo[]) {
        const glbResult = await this.__sdk.api.basic.getLastBlock();
        if (!glbResult.success) {
            throw Error(glbResult.error.message);
        }

        const secret =
            "nose install correct solar side latin focus churn mask nominee differ mosquito claw awake glass rare pond clump draw rent fiction muscle razor bacon";
        const keypair = await asymmetricUtil.createKeypair(secret);
        const publicKey = keypair.publicKey.toString("hex");

        let argv: BFMetaNodeSDK.Transaction.TransferAssetTransactionParams = {
            publicKey,
            fee: "500",
            applyBlockHeight: glbResult.result.height,
            numberOfEffectiveBlocks: 20000,
            amount: "50000",
            assetType: "BFT",
            recipientId: "c9cLhcThVzbcWJMeBBpSG2LGsVtE3RghUM",
            remark: {
                aaafuck: "1",
                "999": "777",
            },
            binaryInfos,
        };
        const result = await this.__sdk.api.transaction.createTransferAsset(argv);
        if (!result.success) {
            throw Error(result.error.message);
        }
        return result;
    }

    async setKVStorageTemp(fileNames: string[]) {
        //websocket单个上传文件默认不能超过200M，要超过需要改socketio的maxHttpBufferSize
        const datas = fileNames.map((fileName) => fs.readFileSync(path.join(process.cwd(), fileName)));
        const result = await this.__sdk.api.basic.setKVStorageTemp({ datas });
        if (!result.success) {
            throw Error(result.error.message);
        }
        return result;
    }

    async getKVStorage() {
        //websocket单个下载文件默认不能超过200M，要超过需要改transportOptions.websocket的maxPayload
        const key = "2knDHnpTJhSagq6oxF4rkJF5kP7RrcNKX5ojCKfNe69nCeqA6Z";
        const result = await this.__sdk.api.basic.getKVStorage({ key });
        if (!result.success) {
            throw Error(result.error.message);
        }
        fs.writeFileSync(path.join(process.cwd(), key), result.result.data);
        return key;
    }
}

(async () => {
    const apiTest = new ApiTest();
    await apiTest.execute();
    process.exit(0);
})();
