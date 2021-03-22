import { BFChainPC_SDK, WsEventType, ApiType } from "../src";
import * as crypto from "crypto";

const secrets = [
    "scan pass carpet coral pumpkin spell present decrease veteran text flower pioneer top speak jaguar wreck ask always hazard good know gift uncle frost",
    "upgrade jump sugar congress glare expect other firm morning donate motor pride minute frame amount chimney wood gallery twelve barely dose blame convince enhance",
    "boost scorpion peanut output undo useful trash burden custom party click offer leisure magnet obscure drop gather blind predict walk since strike thumb minimum",
    "trim demise duck obtain afford track forget shuffle stay draft pulp license update decrease proof move come detect annual worry umbrella type robust frozen",
    "labor shoe ripple inquiry loan embrace leg addict scheme tent that mixed mirror hockey credit swarm dizzy clap blast step silly ice thank devote",
    "shoe dinner doll copper merit layer chunk logic treat polar measure program bunker chef usage behave verb fiscal original digital soldier beef diet topic",
    "jeans cushion salute amount trouble aerobic cube cupboard comfort advance total aim acoustic blanket taste own hair rain sibling profit bunker enforce label three",
    "possible cube arrow force unaware kind industry law all more actress audit host derive dad deny claw leg until omit tragic kidney bunker horn",
];

const genesisSecret =
    "nose install correct solar side latin focus churn mask nominee differ mosquito claw awake glass rare pond clump draw rent fiction muscle razor bacon";
const myAssetType = "QWQ";
const address1 = "cCET2Sxt2LPDhx44wxJ9uhkpviKNrSacvE";
const secret1 = secrets[0];
const address2 = "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1";
const secret2 = secrets[1];
const transactionSignature = "b20db866b4994848f58ca1a170c8b2d9474c085d8812c886ba014de6a3f14b62c99e3e2a7f17520aab53d1db23dce6a30f522b333efe3fb4768b22a842420d03";
const address3 = "c9cLhcThVzbcWJMeBBpSG2LGsVtE3RghUM";
const secret3 = "666";
const address4 = "cKySkYVB4MhWhKczSUmY7WhF638hPx6U8N";
const secret4 = secrets[2];
const address5 = "cNQzoCNDDYY2uqBEW6fb7B6HzFjyz6oCt8";
const secret5 = secrets[3];
const newAppid = "CAPCOM12";
const systemSecret = "Bfchain2020";

export const SYSTEMVERIFYTYPE = {
    /**
     * SYSTEM_OWNER: 矿机拥有者
     */
    SYSTEM_OWNER: "001",
    /**
     * SYSTEM_ADMIN: 矿机管理员
     */
    SYSTEM_ADMIN: "002",
    /**
     * SYSTEM_OTHER: 矿机其他人员
     */
    SYSTEM_OTHER: "999",
};

export class SDKTest {
    private __sdk: BFChainPC_SDK;

    public verifyKey = this.cryptoSystemkey(SYSTEMVERIFYTYPE.SYSTEM_OWNER, systemSecret);
    constructor() {
        this.__sdk = new BFChainPC_SDK();
    }

    async test() {
        await this.__sdk.init({ ip: "192.168.110.51", port: 19003, timeout: 10000, apiType: ApiType.HTTP });
        this.__sdk.on(WsEventType.onNewBlock, (data: any) => {
            console.debug(`onNewBlock newHeight:${data[0]}`);
        });
        this.__sdk.on(WsEventType.onDeleteBlock, (data: any) => {
            console.debug(`onDeleteBlock deleteHeight:${data[0]}`);
        });
        for (let i = 0; i < 1; i++) {
            const result = await this.getAccountAsset();
            console.debug(JSON.stringify(result));
        }
    }

    async execute() {
        await this.__sdk.init({ ip: "192.168.110.51", port: 19003, timeout: 10000 });
        let promises: Promise<any>[] = [];
        let funcNames: string[] = [];

        const pushPromise = (funcName: string, promise: Promise<any>) => {
            promises.push(promise);
            funcNames.push(funcName);
        };

        // /**节点第一次运行时执行，后续不执行 */
        // const money = "500000000000000";
        // await this.trTransferAsset({ secret: genesisSecret, fee: "250", amount: money, recipientId: address1 });
        // await this.trTransferAsset({ secret: genesisSecret, fee: "250", amount: money, recipientId: address2 });
        // await this.trTransferAsset({ secret: genesisSecret, fee: "250", amount: money, recipientId: address3 });
        // await this.trTransferAsset({ secret: genesisSecret, fee: "250", amount: money, recipientId: address4 });
        // await this.trTransferAsset({ secret: genesisSecret, fee: "250", amount: money, recipientId: address5 });

        // /**一些接口的前置条件，临时执行 */
        // await this.trTransferAsset({ secret: secret2, fee: "250", amount: "200000000", recipientId: address3 });
        // await this.trTransferAsset({ secret: secret2, fee: "250", amount: "200000000", recipientId: address1, assetType: myAssetType });

        // basicApi
        pushPromise("getBfchainVersion", this.getBfchainVersion());
        pushPromise("getTransactionType", this.getTransactionType());
        pushPromise("getLastBlock", this.getLastBlock());
        pushPromise("getBlock", this.getBlock());
        pushPromise("getTransactions", this.getTransactions());
        pushPromise("getAccountPublicKey", this.getAccountPublicKey());
        pushPromise("getAccountAsset", this.getAccountAsset());
        pushPromise("createAccount", this.createAccount());
        pushPromise("getBlockChainStatus", this.getBlockChainStatus());
        pushPromise("generateSecret", this.generateSecret());
        // trsApi
        pushPromise("trTransferAsset", this.trTransferAsset());
        pushPromise("trSignature", this.trSignature());
        pushPromise("trUsername", this.trUsername());
        pushPromise("trDelegate", this.trDelegate());
        pushPromise("trAcceptVote", this.trAcceptVote());
        pushPromise("trRejectVote", this.trRejectVote());
        pushPromise("trVote", this.trVote());
        pushPromise("trDapp", this.trDapp());
        pushPromise("trDappPurchasing", this.trDappPurchasing());
        pushPromise("trMark", this.trMark());
        pushPromise("trIssueAsset", this.trIssueAsset());
        pushPromise("trDestroyAsset", this.trDestroyAsset());
        pushPromise("trToExchangeAsset", this.trToExchangeAsset());
        pushPromise("trBeExchangeAsset", this.trBeExchangeAsset());
        pushPromise("trToExchangeSpecAsset", this.trToExchangeSpecAsset());
        pushPromise("trBeExchangeSpecAsset", this.trBeExchangeSpecAsset());
        pushPromise("trGiftAsset", this.trGiftAsset());
        pushPromise("trGrabAsset", this.trGrabAsset());
        pushPromise("trTrustAsset", this.trTrustAsset());
        pushPromise("trSignForAsset", this.trSignForAsset());
        pushPromise("trLocationName", this.trLocationName());
        pushPromise("trSetLnsManager", this.trSetLnsManager());
        pushPromise("trSetLnsRecordValue", this.trSetLnsRecordValue());
        // // systemApi
        pushPromise("safetyClose", this.safetyClose());
        pushPromise("setSystemKey", this.setSystemKey());
        pushPromise("verifySystemKey", this.verifySystemKey());
        pushPromise("addSystemAdmin", this.addSystemAdmin());
        pushPromise("getSystemAdmin", this.getSystemAdmin());
        pushPromise("verifySystemAdmin", this.verifySystemAdmin());
        pushPromise("delSystemAdmin", this.delSystemAdmin());
        pushPromise("bindingAccount", this.bindingAccount());
        pushPromise("getSystemDelegate", this.getSystemDelegate());
        pushPromise("miningMachineInfo", this.miningMachineInfo());
        pushPromise("setSystemConfig", this.setSystemConfig());
        pushPromise("getSystemConfigInfoDetail", this.getSystemConfigInfoDetail());
        pushPromise("getRuntimeState", this.getRuntimeState());
        pushPromise("getSystemMonitor", this.getSystemMonitor());
        pushPromise("getSystemLoggerType", this.getSystemLoggerType());
        pushPromise("getSystemLoggerList", this.getSystemLoggerList());
        // pushPromise("getSystemLoggerDetail", this.getSystemLoggerDetail()); //如果日志数据过大，会报错
        pushPromise("getEmailAddress", this.getEmailAddress());
        pushPromise("setEmailAddress", this.setEmailAddress());
        pushPromise("verifySystemSecret", this.verifySystemSecret());
        pushPromise("setSystemWhiteList", this.setSystemWhiteList());
        pushPromise("getSystemWhiteList", this.getSystemWhiteList());
        pushPromise("delSystemWhiteList", this.delSystemWhiteList());
        pushPromise("getProcessNetwork", this.getProcessNetwork());
        pushPromise("getProcessCPU", this.getProcessCPU());
        pushPromise("getProcessMemory", this.getProcessMemory());
        pushPromise("systemStatus", this.systemStatus());
        pushPromise("systemProcess", this.systemProcess());

        const resp = await Promise.all(promises);
        for (let idx = 0; idx < resp.length; idx++) {
            const value = resp[idx];
            let data = `idx: ${idx} name: ${funcNames[idx]} --- ${JSON.stringify(value)}`;
            console.log(data);
        }
    }

    /**
     * 加密矿机相关信息，比如密码或者矿机地址
     */
    cryptoSystemkey(verifyType: string, verifyKey: string) {
        if (verifyType === SYSTEMVERIFYTYPE.SYSTEM_OWNER) {
            // 得到密码的签名
            const cryptoKey = crypto
                .createHash("sha256")
                .update(verifyKey, "utf8")
                .digest("hex");

            // 返回加密后的矿机密码
            return cryptoKey;
        } else if (verifyType === SYSTEMVERIFYTYPE.SYSTEM_ADMIN) {
            const cryptoAdminAddress = crypto
                .createHash("sha256")
                .update(verifyKey, "utf8")
                .digest("hex");
            // 返回加密后的矿机地址
            return cryptoAdminAddress;
        }

        return verifyKey;
    }

    /**
     * 私钥加密
     */
    encryptSecret(delegateSecret: string, systemSecret: string, version: number) {
        // 加密后的矿机密码
        const encryptSystemSecret = crypto
            .createHash("sha256")
            .update(systemSecret, "utf8")
            .digest("hex");
        return {
            encryptSystemSecret,
            encryptDelegateSecret: this.aes256Encrypt(delegateSecret, systemSecret, version),
        };
    }

    aes256Encrypt(data: string, key: string, version: number) {
        if (!data) return "";
        const dataBuffer = Buffer.from(data);
        switch (version) {
            case 1:
                const iv = crypto.randomBytes(16);
                const pwd_uint8 = new Uint8Array(
                    crypto
                        .createHash("sha256")
                        .update(key)
                        .digest().buffer
                );
                const encipher = crypto.createCipheriv("AES-256-CTR", pwd_uint8, iv);
                return Buffer.concat([new Uint8Array([1]), iv, encipher.update(dataBuffer)]).toString("base64");
            default:
                return "";
        }
    }

    async getBfchainVersion() {
        return this.__sdk.getBfchainVersion();
    }

    async getTransactionType() {
        return this.__sdk.getTransactionType({
            baseType: BFChainPcSdk.TRANSACTION_TYPES_BASE.ISSUE_ASSET,
        });
    }

    async getLastBlock() {
        return this.__sdk.getLastBlock();
    }

    async getBlock() {
        return this.__sdk.getBlock({
            height: 1,
        });
    }

    async getTransactions() {
        return this.__sdk.getTransactions({
            height: 2,
        });
    }

    async generateSecret() {
        return this.__sdk.generateSecret({
            lang: "en",
        });
    }

    async getAccountPublicKey() {
        return this.__sdk.getAccountPublicKey({
            address: address1,
        });
    }

    async getAccountAsset() {
        return this.__sdk.getAccountAsset({
            address: address1,
            assetType: "BFT",
        });
    }

    async createAccount() {
        return this.__sdk.createAccount({
            secret: secret1,
        });
    }

    async getBlockChainStatus() {
        return this.__sdk.getBlockChainStatus();
    }

    async trTransferAsset(request?: BFChainPcSdk.ApiRequest.TRANSACTION.TrTransferAsset) {
        return this.__sdk.trTransferAsset(
            request ?? {
                secret: secret2,
                fee: "50",
                amount: "50000",
                recipientId: address3,
                assetType: "BFT",
            }
        );
    }

    async trSignature() {
        return this.__sdk.trSignature({
            secret: secret4,
            fee: "50",
            newSecondSecret: "huangchao",
        });
    }

    async trUsername() {
        return this.__sdk.trUsername({
            secret: secret1,
            fee: "50",
            alias: "bbb",
        });
    }

    async trDelegate() {
        return this.__sdk.trDelegate({
            secret: secret1,
            fee: "50",
            username: "bbb",
        });
    }

    async trAcceptVote() {
        return this.__sdk.trAcceptVote({
            secret: secret1,
            fee: "50",
        });
    }

    async trRejectVote() {
        return this.__sdk.trRejectVote({
            secret: secret1,
            fee: "50",
        });
    }

    async trVote() {
        return this.__sdk.trVote({
            secret: secret1,
            fee: "50",
            recipientId: address2,
            equity: "0",
            rangeType: 0,
        });
    }

    async trDapp() {
        return this.__sdk.trDapp({
            secret: secret1,
            fee: "500",
            newDappid: newAppid,
            type: 0,
            amount: "50000",
            recipientId: address2,
        });
    }

    async trDappPurchasing() {
        return this.__sdk.trDappPurchasing({
            secret: secret2,
            fee: "500",
            transactionSignature,
            recipientId: address1,
        });
    }

    async trMark() {
        return this.__sdk.trMark({
            secret: secret1,
            fee: "500",
            markPossessor: address2,
            content: "mycontent",
            type: "case",
        });
    }

    async trIssueAsset() {
        return this.__sdk.trIssueAsset({
            secret: secret3,
            fee: "500",
            expectedIssuedAssets: "500000000000",
            assetType: myAssetType,
            recipientId: address2,
        });
    }

    async trDestroyAsset() {
        return this.__sdk.trDestroyAsset({
            secret: secret4,
            fee: "500",
            assetType: myAssetType,
            amount: "100000",
            recipientId: address2,
        });
    }

    async trToExchangeAsset() {
        return this.__sdk.trToExchangeAsset({
            secret: secret1,
            fee: "120",
            toExchangeSource: "5F720C81E82CFC99",
            beExchangeSource: "5F720C81E82CFC99",
            toExchangeChainName: "bfchain",
            beExchangeChainName: "bfchain",
            toExchangeAsset: "BFT",
            beExchangeAsset: "QWQ",
            toExchangeNumber: "1000",
            prevWeight: "2",
            nextWeight: "3",
        });
    }

    async trBeExchangeAsset() {
        return this.__sdk.trBeExchangeAsset({
            secret: secret2,
            fee: "120",
            recipientId: address1,
            transactionSignature:
                "e92482bfdec42330f3c44eed25c9931a85f995f74ce60e3a7a3510c9f39c100c4f501a57e2edc84f35046e51613f45315b9ca66b4bd8b6e139b91ee4df148e03",
            toExchangeNumber: "1000",
            beExchangeNumber: "1500",
        });
    }

    async trToExchangeSpecAsset() {
        return this.__sdk.trToExchangeSpecAsset({
            secret: secret1,
            fee: "120",
            toExchangeSource: "5F720C81E82CFC99",
            beExchangeSource: "5F720C81E82CFC99",
            toExchangeChainName: "bfchain",
            beExchangeChainName: "bfchain",
            toExchangeAsset: newAppid,
            beExchangeAsset: "BFT",
            exchangeNumber: "100000",
            exchangeAssetType: 0,
            exchangeDirection: 0,
        });
    }

    async trBeExchangeSpecAsset() {
        return this.__sdk.trBeExchangeSpecAsset({
            secret: secret2,
            fee: "120",
            recipientId: address1,
            transactionSignature:
                "d16cde23780ab153dd9f0ecc73159da0aa626598a3354afa652944bc95e730a2a3de1fa946e998f3cd7514fc804970def5227d64573a581d456991b36c09180a",
        });
    }

    async trGiftAsset() {
        return this.__sdk.trGiftAsset({
            secret: secret1,
            fee: "5000000",
            sourceChainMagic: "5F720C81E82CFC99",
            sourceChainName: "bfchain",
            amount: "1000000",
            totalGrabableTimes: 20,
            giftDistributionRule: 2,
            numberOfBeginUnfrozenBlocks: 1,
            rangeType: 1,
            range: [address1, address2, address3, address4, address5],
        });
    }

    async trGrabAsset() {
        return this.__sdk.trGrabAsset({
            secret: secret4,
            fee: "120",
            blockSignature: "185f507def0fa458a3b205234a01a19407caf4778e073f91cc371c16bda4caae8f3e1802c14d7e1262cd1e01c8928c59ed4b8f38a3bf96b1f87e8ffd070eb206",
            transactionSignature:
                "1d4f2944e554405a94c21cf030f0b0f11a9e889abdbb7011086e0e82a56cf138bb542a2e8e9e281ea679b808b8f44873fbf0cf4c49695ce6cc1356d6d257b006",
            amount: "18464",
        });
    }

    async trTrustAsset() {
        return this.__sdk.trTrustAsset({
            secret: secret1,
            fee: "120",
            recipientId: address2,
            trustees: [
                "cKqjHi8u4n5RJJa1CxHgZbwHXS9cKC5Ekw",
                "c81E6nEaLHJ25mFRTDSMar5YjmrYLsNr5v",
                "c4wQ1qXmKFBBGeHeiT5QsB9oKwsGYmK2eA",
                "c8Ke6FeamgemKfaAdppcUVoGfModE4CEyT",
                "cBpRE96Ff1RR3kVoN9Hky6pnAtTky8cP4s",
                "cHdATqSzszEe335hM8kaNM267SH98BCpbx",
            ],
            numberOfSignFor: 1,
            amount: "100",
        });
    }

    async trSignForAsset() {
        return this.__sdk.trSignForAsset({
            secret: secret1,
            fee: "150",
            transactionSignature:
                "7a95c203cfeabbc3b2bcc34e8b2d4dadf0403ca3c1c414ccc76bd6f78902c95bd7c2ae623272d11cecc33921c7d8d965cdffb1ad7a53a369d6c4fedb50a17804",
        });
    }

    async trLocationName() {
        return this.__sdk.trLocationName({
            secret: secret1,
            fee: "120",
            name: "hc.bfchain",
            operationType: 0,
            recipientId: address2,
        });
    }

    async trSetLnsManager() {
        return this.__sdk.trSetLnsManager({
            secret: secret1,
            fee: "120",
            name: "hc.bfchain",
            recipientId: address3,
        });
    }

    async trSetLnsRecordValue() {
        return this.__sdk.trSetLnsRecordValue({
            secret: secret1,
            fee: "150",
            name: "hc.bfchain",
            operationType: 2,
            addRecord: ["A", "127.0.0.123"],
            deleteRecord: ["A", "127.0.0.1"],
        });
    }

    async safetyClose() {
        return this.__sdk.safetyClose({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
            isShutdown: false,
        });
    }

    async setSystemKey() {
        return this.__sdk.setSystemKey({
            systemKeyOld: this.cryptoSystemkey(SYSTEMVERIFYTYPE.SYSTEM_OWNER, "fuckyou2020"),
            systemKeyNew: "Bfchain2020",
        });
    }

    async verifySystemKey() {
        return this.__sdk.verifySystemKey({
            systemKey: this.verifyKey,
        });
    }

    async addSystemAdmin() {
        return this.__sdk.addSystemAdmin({
            systemKey: this.verifyKey,
            systemAdminAddress: address1,
        });
    }

    async getSystemAdmin() {
        return this.__sdk.getSystemAdmin({
            systemKey: this.verifyKey,
            // systemAdminAddress: address3,
        });
    }

    async verifySystemAdmin() {
        return this.__sdk.verifySystemAdmin({
            cryptoAdminAddress: this.cryptoSystemkey(SYSTEMVERIFYTYPE.SYSTEM_ADMIN, address1),
        });
    }

    async delSystemAdmin() {
        return this.__sdk.delSystemAdmin({
            systemKey: this.verifyKey,
            systemAdminAddress: address1,
        });
    }

    async bindingAccount() {
        const { encryptSystemSecret: systemKey, encryptDelegateSecret: cryptoSecret } = this.encryptSecret(secret2, systemSecret, 1);
        // console.log(`systemKey:${systemKey} cryptoSecret:${cryptoSecret}`);
        return this.__sdk.bindingAccount({ systemKey, cryptoSecret });
    }

    async getSystemDelegate() {
        return this.__sdk.getSystemDelegate({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
        });
    }

    async miningMachineInfo() {
        return this.__sdk.miningMachineInfo({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
        });
    }

    async setSystemConfig() {
        return this.__sdk.setSystemConfig({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
            config: {
                startConfig: { generateBlockEnable: true },
                flowControlConfig: { requestLimit: { count: 300 } },
                logConfig: { consoleLogLevel: "info" },
                coreForProcess: { coreNumForUntreatedTrs: 1 },
            },
        });
    }

    async getSystemConfigInfoDetail() {
        return this.__sdk.getSystemConfigInfoDetail({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
        });
    }

    async getRuntimeState() {
        return this.__sdk.getRuntimeState({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
        });
    }

    async getSystemMonitor() {
        return this.__sdk.getSystemMonitor({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
            limit: 10,
        });
    }

    async getSystemLoggerType() {
        return this.__sdk.getSystemLoggerType({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
        });
    }

    async getSystemLoggerList() {
        return this.__sdk.getSystemLoggerList({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
            loggerType: "forger",
        });
    }

    async getSystemLoggerDetail() {
        return this.__sdk.getSystemLoggerDetail({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
            loggerName: "logs-forger-bfchain-testnet.log",
        });
    }

    async getEmailAddress() {
        return this.__sdk.getEmailAddress({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
        });
    }

    async setEmailAddress() {
        return this.__sdk.setEmailAddress({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
            emailToAddress: "332330633@qq.com",
            emailFromAddress: "332330633@qq.com",
            emailConfig: { type: "POP3" },
        });
    }

    async verifySystemSecret() {
        return this.__sdk.verifySystemSecret({
            cryptoSecret: this.aes256Encrypt(secret2, systemSecret, 1),
        });
    }

    async setSystemWhiteList() {
        return this.__sdk.setSystemWhiteList({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
            whiteList: ["2001:0DB8:0000:0000:0000:0000:1428:57ab", "2001:0DB8:0000:0000:0000:0000:1428:57ac", "2001:0DB8:0000:0000:0000:0000:1428:57ad"],
        });
    }

    async getSystemWhiteList() {
        return this.__sdk.getSystemWhiteList({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
        });
    }

    async delSystemWhiteList() {
        return this.__sdk.delSystemWhiteList({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
            whiteList: ["2001:0DB8:0000:0000:0000:0000:1428:57ab", "2001:0DB8:0000:0000:0000:0000:1428:57ac", "2001:0DB8:0000:0000:0000:0000:1428:57ad"],
        });
    }

    async getProcessNetwork() {
        return this.__sdk.getProcessNetwork({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
            processType: "001",
        });
    }

    async getProcessCPU() {
        return this.__sdk.getProcessCPU({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
            processType: "001",
        });
    }

    async getProcessMemory() {
        return this.__sdk.getProcessMemory({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
            processType: "001",
        });
    }

    async systemStatus() {
        return this.__sdk.systemStatus({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
        });
    }

    async systemProcess() {
        return this.__sdk.systemProcess({
            verifyType: SYSTEMVERIFYTYPE.SYSTEM_OWNER,
            verifyKey: this.verifyKey,
        });
    }
}

(async () => {
    const test = new SDKTest();
    // await test.execute();
    await test.test();
    // process.exit(0);
})().catch(err => {
    console.error(err);
    process.exit(0);
});
