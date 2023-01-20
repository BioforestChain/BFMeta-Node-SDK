//
// import { Sdk } from "../../src";
// import { asymmetricUtil } from "../helpers";

// async function generateMigrateCertificate(recipientId: string, toChainInfo: BFChainCore.CrossChain.ChainBaseInfo) {
//     const sdk2 = bfmetaSDK;

//     let result1 = await sdk2.api.transaction.createMigrateCertificate({
//         senderSecret: "qqq",
//         recipientId,
//         toChainInfo,
//         assetPrealnum: "10000",
//     });

//     if (!result1.success) {
//         throw result1;
//     }

//     const result2 = await sdk2.api.transaction.fromAuthSignatureMigrateCertificate({
//         authSecret: "www",
//         migrateCertificate: result1.result,
//     });

//     if (!result2.success) {
//         throw result2;
//     }

//     return result2.result;
// }

// (async () => {
//     try {
//         const coreHelper = new CoreHelper({
//             isGenesisBlockProvidedExternally: false,
//             chainName: "bfmetatest",
//             chainAssetType: "bfmtest",
//             networkType: "testnet",
//             blockPerRound: 10,
//             forgeInterval: 10,
//         });

//         const core = coreHelper.getBfchainCore();
//         const secret =
//             "scan pass carpet coral pumpkin spell present decrease veteran text flower pioneer top speak jaguar wreck ask always hazard good know gift uncle frost";
//         const keypair = await bfmetaSDK.bfchainSignUtil.createKeypair(secret);
//         const publicKey = keypair.publicKey.toString("hex");

//         const argv: BFChainPcSdk.Transaction.EmigrateAssetTransactionParams = {
//             publicKey,
//             fee: "1000",
//             applyBlockHeight: 50,
//             remark: { message: "create immigrateAsset" },
//             recipientId: "cLrUCNAWPyPH96bqqC3JQXZ3CtsvvXmNj1",
//             migrateCertificate: {} as any,
//         };

//         const genesisSecret =
//             "nose install correct solar side latin focus churn mask nominee differ mosquito claw awake glass rare pond clump draw rent fiction muscle razor bacon";

//         const fromMagic = "6N6TI";

//         const migrateCertificate = await generateMigrateCertificate(argv.recipientId, {
//             magic: fromMagic,
//             chainName: "bfmmeta",
//             genesisBlockSignature:
//                 "1d0fa1a66fafbf02b29662d95deb0bd7ec5a801e92c6bbdb50d5bbfac14e7bfec761ce5d9293789f08649e064e1ec687a0712c84b9e298ba4ef032513a3a2f08",
//         });

//         const sdk = bfmetaSDK;

//         const result2 = await sdk.api.transaction.toAuthSignatureMigrateCertificate({
//             authSecret: genesisSecret,
//             migrateCertificate,
//         });

//         if (!result2.success) {
//             throw result2;
//         }

//         console.log(result2.result);

//         argv.migrateCertificate = result2.result;
//         argv.fromMagic = "PSSS5";

//         const result = await sdk.api.transaction.generateImmigrateAsset(argv);

//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
// })();
