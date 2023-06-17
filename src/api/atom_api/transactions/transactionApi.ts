import {
    CommonTransactionApi,
    UsernameApi,
    SignatureApi,
    DelegateApi,
    AcceptVoteApi,
    RejectVoteApi,
    VoteApi,
    IssueAssetApi,
    TransferAssetApi,
    DestroyAssetApi,
    GiftAssetApi,
    GrabAssetApi,
    TrustAssetApi,
    SignForAssetApi,
    ToExchangeAssetApi,
    BeExchangeAssetApi,
    DAppApi,
    DAppPurchasingApi,
    MarkApi,
    LocationNameApi,
    SetLnsManagerApi,
    SetLnsRecordValueApi,
    ToExchangeSpecialAssetApi,
    BeExchangeSpecialAssetApi,
    IssueEntityFactoryApi,
    IssueEntityFactoryV1Api,
    IssueEntityApi,
    DestroyEntityApi,
    TransferAnyApi,
    GiftAnyApi,
    GrabAnyApi,
    ToExchangeAnyApi,
    BeExchangeAnyApi,
    IssueEntityMultiApi,
    ToExchangeAnyMultiApi,
    BeExchangeAnyMultiApi,
    RegisterChainApi,
    EmigrateAssetApi,
    ImmigrateAssetApi,
    IssueCertificateApi,
    DestroyCertificateApi,
} from "./atom_transaction";
import { GenerateMigrateCertificateApi, FromAuthSignatureMigrateCertificateApi, ToAuthSignatureMigrateCertificateApi } from "./migrate_certificate";
import {
    VerifyAddressApi,
    VerifyPublicKeyApi,
    GenerateKeypairApi,
    GenerateAccountApi,
    GenerateAddressBySecretApi,
    GenerateAddressByPublicKeyApi,
    AsymmetricEncryptApi,
    AsymmetricDecryptApi,
    CalcTransactionMinFeeApi,
    GenerateCiphertextSignatureApi,
} from "./atom_common";
import { COMMON_API_PATH, GENERATE_TRANSACTION_API_PATH, MIGRATE_CERTIFICATE_API_PATH } from "../../../constants";

export class TransactionApi {
    private __TRANSACTION_API_MAP = new Map<BFMetaNodeSDK.Transaction.GENERATE_TRANSACTION_API_PATH, BFMetaNodeSDK.Transaction.TransactionApi>();
    private __MIGRATE_CERTIFICATE_API_MAP = new Map<BFMetaNodeSDK.CrossChain.MIGRATE_CERTIFICATE_API_PATH, BFMetaNodeSDK.CrossChain.MigrateCertificateApi>();
    private __COMMON_API_MAP = new Map<BFMetaNodeSDK.Common.COMMON_API_PATH, BFMetaNodeSDK.Common.CommonApi>();

    constructor(private __networkHelper: BFMetaNodeSDK.NetworkHelper) {
        this.__init();
    }

    private __init() {
        const {
            __networkHelper: networkHelper,
            __TRANSACTION_API_MAP: TRANSACTION_API_MAP,
            __MIGRATE_CERTIFICATE_API_MAP: MIGRATE_CERTIFICATE_API_MAP,
            __COMMON_API_MAP: COMMON_API_MAP,
        } = this;

        const commonTransactionApi = new CommonTransactionApi(networkHelper);
        const usernameApi = new UsernameApi(networkHelper);
        const signatureApi = new SignatureApi(networkHelper);
        const delegateApi = new DelegateApi(networkHelper);
        const acceptVoteApi = new AcceptVoteApi(networkHelper);
        const rejectVoteApi = new RejectVoteApi(networkHelper);
        const voteApi = new VoteApi(networkHelper);
        const issueAssetApi = new IssueAssetApi(networkHelper);
        const transferAssetApi = new TransferAssetApi(networkHelper);
        const destroyAssetApi = new DestroyAssetApi(networkHelper);
        const giftAssetApi = new GiftAssetApi(networkHelper);
        const grabAssetApi = new GrabAssetApi(networkHelper);
        const trustAssetApi = new TrustAssetApi(networkHelper);
        const signForAssetApi = new SignForAssetApi(networkHelper);
        const toExchangeAssetApi = new ToExchangeAssetApi(networkHelper);
        const beExchangeAssetApi = new BeExchangeAssetApi(networkHelper);
        const dAppApi = new DAppApi(networkHelper);
        const dAppPurchasingApi = new DAppPurchasingApi(networkHelper);
        const markApi = new MarkApi(networkHelper);
        const locationNameApi = new LocationNameApi(networkHelper);
        const setLnsManagerApi = new SetLnsManagerApi(networkHelper);
        const setLnsRecordValueApi = new SetLnsRecordValueApi(networkHelper);
        const toExchangeSpecialAssetApi = new ToExchangeSpecialAssetApi(networkHelper);
        const beExchangeSpecialAssetApi = new BeExchangeSpecialAssetApi(networkHelper);
        const issueEntityFactoryApi = new IssueEntityFactoryApi(networkHelper);
        const issueEntityFactoryV1Api = new IssueEntityFactoryV1Api(networkHelper);
        const issueEntityApi = new IssueEntityApi(networkHelper);
        const destroyEntityApi = new DestroyEntityApi(networkHelper);
        const transferAnyApi = new TransferAnyApi(networkHelper);
        const giftAnyApi = new GiftAnyApi(networkHelper);
        const grabAnyApi = new GrabAnyApi(networkHelper);
        const toExchangeAnyApi = new ToExchangeAnyApi(networkHelper);
        const beExchangeAnyApi = new BeExchangeAnyApi(networkHelper);
        const issueEntityMultiApi = new IssueEntityMultiApi(networkHelper);
        const toExchangeAnyMultiApi = new ToExchangeAnyMultiApi(networkHelper);
        const beExchangeAnyMultiApi = new BeExchangeAnyMultiApi(networkHelper);
        const registerChainApi = new RegisterChainApi(networkHelper);
        const emigrateAssetApi = new EmigrateAssetApi(networkHelper);
        const immigrateAssetApi = new ImmigrateAssetApi(networkHelper);
        const issueCertificateApi = new IssueCertificateApi(networkHelper);
        const destroyCertificateApi = new DestroyCertificateApi(networkHelper);

        TRANSACTION_API_MAP.set(commonTransactionApi.GENERATE_API_PATH, commonTransactionApi);
        TRANSACTION_API_MAP.set(usernameApi.GENERATE_API_PATH, usernameApi);
        TRANSACTION_API_MAP.set(signatureApi.GENERATE_API_PATH, signatureApi);
        TRANSACTION_API_MAP.set(delegateApi.GENERATE_API_PATH, delegateApi);
        TRANSACTION_API_MAP.set(acceptVoteApi.GENERATE_API_PATH, acceptVoteApi);
        TRANSACTION_API_MAP.set(rejectVoteApi.GENERATE_API_PATH, rejectVoteApi);
        TRANSACTION_API_MAP.set(voteApi.GENERATE_API_PATH, voteApi);
        TRANSACTION_API_MAP.set(issueAssetApi.GENERATE_API_PATH, issueAssetApi);
        TRANSACTION_API_MAP.set(transferAssetApi.GENERATE_API_PATH, transferAssetApi);
        TRANSACTION_API_MAP.set(destroyAssetApi.GENERATE_API_PATH, destroyAssetApi);
        TRANSACTION_API_MAP.set(giftAssetApi.GENERATE_API_PATH, giftAssetApi);
        TRANSACTION_API_MAP.set(grabAssetApi.GENERATE_API_PATH, grabAssetApi);
        TRANSACTION_API_MAP.set(trustAssetApi.GENERATE_API_PATH, trustAssetApi);
        TRANSACTION_API_MAP.set(signForAssetApi.GENERATE_API_PATH, signForAssetApi);
        TRANSACTION_API_MAP.set(toExchangeAssetApi.GENERATE_API_PATH, toExchangeAssetApi);
        TRANSACTION_API_MAP.set(beExchangeAssetApi.GENERATE_API_PATH, beExchangeAssetApi);
        TRANSACTION_API_MAP.set(dAppApi.GENERATE_API_PATH, dAppApi);
        TRANSACTION_API_MAP.set(dAppPurchasingApi.GENERATE_API_PATH, dAppPurchasingApi);
        TRANSACTION_API_MAP.set(markApi.GENERATE_API_PATH, markApi);
        TRANSACTION_API_MAP.set(locationNameApi.GENERATE_API_PATH, locationNameApi);
        TRANSACTION_API_MAP.set(setLnsManagerApi.GENERATE_API_PATH, setLnsManagerApi);
        TRANSACTION_API_MAP.set(setLnsRecordValueApi.GENERATE_API_PATH, setLnsRecordValueApi);
        TRANSACTION_API_MAP.set(toExchangeSpecialAssetApi.GENERATE_API_PATH, toExchangeSpecialAssetApi);
        TRANSACTION_API_MAP.set(beExchangeSpecialAssetApi.GENERATE_API_PATH, beExchangeSpecialAssetApi);
        TRANSACTION_API_MAP.set(issueEntityFactoryApi.GENERATE_API_PATH, issueEntityFactoryApi);
        TRANSACTION_API_MAP.set(issueEntityFactoryV1Api.GENERATE_API_PATH, issueEntityFactoryV1Api);
        TRANSACTION_API_MAP.set(issueEntityApi.GENERATE_API_PATH, issueEntityApi);
        TRANSACTION_API_MAP.set(destroyEntityApi.GENERATE_API_PATH, destroyEntityApi);
        TRANSACTION_API_MAP.set(toExchangeAnyApi.GENERATE_API_PATH, toExchangeAnyApi);
        TRANSACTION_API_MAP.set(beExchangeAnyApi.GENERATE_API_PATH, beExchangeAnyApi);
        TRANSACTION_API_MAP.set(transferAnyApi.GENERATE_API_PATH, transferAnyApi);
        TRANSACTION_API_MAP.set(giftAnyApi.GENERATE_API_PATH, giftAnyApi);
        TRANSACTION_API_MAP.set(grabAnyApi.GENERATE_API_PATH, grabAnyApi);
        TRANSACTION_API_MAP.set(issueEntityMultiApi.GENERATE_API_PATH, issueEntityMultiApi);
        TRANSACTION_API_MAP.set(toExchangeAnyMultiApi.GENERATE_API_PATH, toExchangeAnyMultiApi);
        TRANSACTION_API_MAP.set(beExchangeAnyMultiApi.GENERATE_API_PATH, beExchangeAnyMultiApi);
        TRANSACTION_API_MAP.set(registerChainApi.GENERATE_API_PATH, registerChainApi);
        TRANSACTION_API_MAP.set(emigrateAssetApi.GENERATE_API_PATH, emigrateAssetApi);
        TRANSACTION_API_MAP.set(immigrateAssetApi.GENERATE_API_PATH, immigrateAssetApi);
        TRANSACTION_API_MAP.set(issueCertificateApi.GENERATE_API_PATH, issueCertificateApi);
        TRANSACTION_API_MAP.set(destroyCertificateApi.GENERATE_API_PATH, destroyCertificateApi);

        Object.freeze(TRANSACTION_API_MAP);

        const createMigrateCertificateApi = new GenerateMigrateCertificateApi(networkHelper);
        const fromAuthSignatureMigrateCertificateApi = new FromAuthSignatureMigrateCertificateApi(networkHelper);
        const toAuthSignatureMigrateCertificateApi = new ToAuthSignatureMigrateCertificateApi(networkHelper);

        MIGRATE_CERTIFICATE_API_MAP.set(createMigrateCertificateApi.GENERATE_API_PATH, createMigrateCertificateApi);
        MIGRATE_CERTIFICATE_API_MAP.set(fromAuthSignatureMigrateCertificateApi.GENERATE_API_PATH, fromAuthSignatureMigrateCertificateApi);
        MIGRATE_CERTIFICATE_API_MAP.set(toAuthSignatureMigrateCertificateApi.GENERATE_API_PATH, toAuthSignatureMigrateCertificateApi);

        Object.freeze(MIGRATE_CERTIFICATE_API_MAP);

        const verifyAddressApi = new VerifyAddressApi(networkHelper);
        const verifyPublicKeyApi = new VerifyPublicKeyApi(networkHelper);
        const createKeypairApi = new GenerateKeypairApi(networkHelper);
        const createAccountApi = new GenerateAccountApi(networkHelper);
        const createAddressBySecretApi = new GenerateAddressBySecretApi(networkHelper);
        const createAddressByPublicKeyApi = new GenerateAddressByPublicKeyApi(networkHelper);
        const asymmetricEncryptApi = new AsymmetricEncryptApi(networkHelper);
        const asymmetricDecryptApi = new AsymmetricDecryptApi(networkHelper);
        const calcTransactionMinFeeApi = new CalcTransactionMinFeeApi(networkHelper);
        const createCiphertextSignatureApi = new GenerateCiphertextSignatureApi(networkHelper);

        COMMON_API_MAP.set(verifyAddressApi.EXEC_API_PATH, verifyAddressApi);
        COMMON_API_MAP.set(verifyPublicKeyApi.EXEC_API_PATH, verifyPublicKeyApi);
        COMMON_API_MAP.set(createKeypairApi.EXEC_API_PATH, createKeypairApi);
        COMMON_API_MAP.set(createAccountApi.EXEC_API_PATH, createAccountApi);
        COMMON_API_MAP.set(createAddressBySecretApi.EXEC_API_PATH, createAddressBySecretApi);
        COMMON_API_MAP.set(createAddressByPublicKeyApi.EXEC_API_PATH, createAddressByPublicKeyApi);
        COMMON_API_MAP.set(asymmetricEncryptApi.EXEC_API_PATH, asymmetricEncryptApi);
        COMMON_API_MAP.set(asymmetricDecryptApi.EXEC_API_PATH, asymmetricDecryptApi);
        COMMON_API_MAP.set(calcTransactionMinFeeApi.EXEC_API_PATH, calcTransactionMinFeeApi);
        COMMON_API_MAP.set(createCiphertextSignatureApi.EXEC_API_PATH, createCiphertextSignatureApi);

        Object.freeze(COMMON_API_MAP);
    }

    // #region transaction
    private __getTransactionApi<T extends BFMetaNodeSDK.Transaction.TransactionApi>(apiPath: BFMetaNodeSDK.Transaction.GENERATE_TRANSACTION_API_PATH) {
        return this.__TRANSACTION_API_MAP.get(apiPath) as T;
    }

    async broadcastCompleteTransaction<T>(argv: { [key: string]: any }) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.CommonTransactionApi>(GENERATE_TRANSACTION_API_PATH.TR_COMMON);
        const result = await api.broadcastCompleteTransaction<T>(argv);
        return result;
    }

    /**创建设置用户名事件 */
    async createUsername(argv: BFMetaNodeSDK.Transaction.UsernameTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.UsernameApi>(GENERATE_TRANSACTION_API_PATH.TR_USERNAME);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送设置用户名事件 */
    async packageUsername(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.UsernameApi>(GENERATE_TRANSACTION_API_PATH.TR_USERNAME);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送设置用户名事件 */
    async broadcastUsername<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.UsernameApi>(GENERATE_TRANSACTION_API_PATH.TR_USERNAME);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建设置安全密码事件 */
    async createSignature(argv: BFMetaNodeSDK.Transaction.SignatureTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.SignatureApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGNATURE);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送设置安全密码事件 */
    async packageSignature(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.SignatureApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGNATURE);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送设置安全密码事件 */
    async broadcastSignature<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.SignatureApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGNATURE);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建注册受托人事件 */
    async createDelegate(argv: BFMetaNodeSDK.Transaction.DelegateTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DelegateApi>(GENERATE_TRANSACTION_API_PATH.TR_DELEGATE);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送注册受托人事件 */
    async packageDelegate(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DelegateApi>(GENERATE_TRANSACTION_API_PATH.TR_DELEGATE);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送注册受托人事件 */
    async broadcastDelegate<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DelegateApi>(GENERATE_TRANSACTION_API_PATH.TR_DELEGATE);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建开启收票事件 */
    async createAcceptVote(argv: BFMetaNodeSDK.Transaction.AcceptVoteTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.AcceptVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_ACCEPT_VOTE);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送开启收票事件 */
    async packageAcceptVote(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.AcceptVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_ACCEPT_VOTE);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送开启收票事件 */
    async broadcastAcceptVote<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.AcceptVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_ACCEPT_VOTE);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建关闭收票事件 */
    async createRejectVote(argv: BFMetaNodeSDK.Transaction.RejectVoteTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.RejectVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_REJECT_VOTE);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送关闭收票事件 */
    async packageRejectVote(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.RejectVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_REJECT_VOTE);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送关闭收票事件 */
    async broadcastRejectVote<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.RejectVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_REJECT_VOTE);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建治理投票事件 */
    async createVote(argv: BFMetaNodeSDK.Transaction.VoteTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.VoteApi>(GENERATE_TRANSACTION_API_PATH.TR_VOTE);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送治理投票事件 */
    async packageVote(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.VoteApi>(GENERATE_TRANSACTION_API_PATH.TR_VOTE);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送治理投票事件 */
    async broadcastVote<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.VoteApi>(GENERATE_TRANSACTION_API_PATH.TR_VOTE);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建权益发行事件 */
    async createIssueAsset(argv: BFMetaNodeSDK.Transaction.IssueAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送权益发行事件 */
    async packageIssueAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送权益发行事件 */
    async broadcastIssueAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建权益转移事件 */
    async createTransferAsset(argv: BFMetaNodeSDK.Transaction.TransferAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.TransferAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送权益转移事件 */
    async packageTransferAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.TransferAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送权益转移事件 */
    async broadcastTransferAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.TransferAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建权益销毁事件 */
    async createDestroyAsset(argv: BFMetaNodeSDK.Transaction.DestroyAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DestroyAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送权益销毁事件 */
    async packageDestroyAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DestroyAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送权益销毁事件 */
    async broadcastDestroyAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DestroyAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建权益赠送事件 */
    async createGiftAsset(argv: BFMetaNodeSDK.Transaction.GiftAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.GiftAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送权益赠送事件 */
    async packageGiftAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.GiftAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送权益赠送事件 */
    async broadcastGiftAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.GiftAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建接受权益赠送事件 */
    async createGrabAsset(argv: BFMetaNodeSDK.Transaction.GrabAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.GrabAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送接受权益赠送事件 */
    async packageGrabAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.GrabAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送接受权益赠送事件 */
    async broadcastGrabAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.GrabAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建权益委托事件 */
    async createTrustAsset(argv: BFMetaNodeSDK.Transaction.TrustAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.TrustAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRUST_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送权益委托事件 */
    async packageTrustAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.TrustAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRUST_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送权益委托事件 */
    async broadcastTrustAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.TrustAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRUST_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建签收权益委托事件 */
    async createSignForAsset(argv: BFMetaNodeSDK.Transaction.SignForAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.SignForAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGN_FOR_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送签收权益委托事件 */
    async packageSignForAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.SignForAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGN_FOR_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送签收权益委托事件 */
    async broadcastSignForAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.SignForAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGN_FOR_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建权益交换事件 */
    async createToExchangeAsset(argv: BFMetaNodeSDK.Transaction.ToExchangeAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ToExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送权益交换事件 */
    async packageToExchangeAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ToExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送权益交换事件 */
    async broadcastToExchangeAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ToExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建接受权益交换事件 */
    async createBeExchangeAsset(argv: BFMetaNodeSDK.Transaction.BeExchangeAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.BeExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送接受权益交换事件 */
    async packageBeExchangeAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.BeExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送接受权益交换事件 */
    async broadcastBeExchangeAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.BeExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建 dapp 发行事件 */
    async createDApp(argv: BFMetaNodeSDK.Transaction.DAppTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DAppApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送 dapp 发行事件 */
    async packageDApp(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DAppApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送 dapp 发行事件 */
    async broadcastDApp<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DAppApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建 dapp 购买事件 */
    async createDAppPurchasing(argv: BFMetaNodeSDK.Transaction.DAppPurchasingTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DAppPurchasingApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP_PURCHASING);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送 dapp 购买事件 */
    async packageDAppPurchasing(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DAppPurchasingApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP_PURCHASING);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送 dapp 购买事件 */
    async broadcastDAppPurchasing<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DAppPurchasingApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP_PURCHASING);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建存证事件 */
    async createMark(argv: BFMetaNodeSDK.Transaction.MarkTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.MarkApi>(GENERATE_TRANSACTION_API_PATH.TR_MARK);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送存证事件 */
    async packageMark(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.MarkApi>(GENERATE_TRANSACTION_API_PATH.TR_MARK);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送存证事件 */
    async broadcastMark<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.MarkApi>(GENERATE_TRANSACTION_API_PATH.TR_MARK);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建注册/注销链域名事件 */
    async createLocationName(argv: BFMetaNodeSDK.Transaction.LocationNameTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.LocationNameApi>(GENERATE_TRANSACTION_API_PATH.TR_LOCATION_NAME);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送注册/注销链域名事件 */
    async packageLocationName(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.LocationNameApi>(GENERATE_TRANSACTION_API_PATH.TR_LOCATION_NAME);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送注册/注销链域名事件 */
    async broadcastLocationName<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.LocationNameApi>(GENERATE_TRANSACTION_API_PATH.TR_LOCATION_NAME);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建设置链域名管理员事件 */
    async createSetLnsManager(argv: BFMetaNodeSDK.Transaction.SetLnsManagerTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.SetLnsManagerApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_MANAGER);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送设置链域名管理员事件 */
    async packageSetLnsManager(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.SetLnsManagerApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_MANAGER);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送设置链域名管理员事件 */
    async broadcastSetLnsManager<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.SetLnsManagerApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_MANAGER);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建设置链域名解析值事件 */
    async createSetLnsRecordValue(argv: BFMetaNodeSDK.Transaction.SetLnsRecordValueTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.SetLnsRecordValueApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_RECORD_VALUE);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送设置链域名解析值事件 */
    async packageSetLnsRecordValue(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.SetLnsRecordValueApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_RECORD_VALUE);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送设置链域名解析值事件 */
    async broadcastSetLnsRecordValue<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.SetLnsRecordValueApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_RECORD_VALUE);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建资产交换事件 */
    async createToExchangeSpecialAsset(argv: BFMetaNodeSDK.Transaction.ToExchangeSpecialAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ToExchangeSpecialAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_SPECIAL_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送资产交换事件 */
    async packageToExchangeSpecialAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ToExchangeSpecialAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_SPECIAL_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送资产交换事件 */
    async broadcastToExchangeSpecialAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ToExchangeSpecialAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_SPECIAL_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建接受资产交换事件 */
    async createBeExchangeSpecialAsset(argv: BFMetaNodeSDK.Transaction.BeExchangeSpecialAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.BeExchangeSpecialAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_SPECIAL_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送接受资产交换事件 */
    async packageBeExchangeSpecialAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.BeExchangeSpecialAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_SPECIAL_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送接受资产交换事件 */
    async broadcastBeExchangeSpecialAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.BeExchangeSpecialAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_SPECIAL_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建发行非同质权益模板事件 */
    async createIssueEntityFactory(argv: BFMetaNodeSDK.Transaction.IssueEntityFactoryTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueEntityFactoryApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送发行非同质权益模板事件 */
    async packageIssueEntityFactory(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueEntityFactoryApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送发行非同质权益模板事件 */
    async broadcastIssueEntityFactory<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueEntityFactoryApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建发行非同质权益模板事件 */
    async createIssueEntityFactoryV1(argv: BFMetaNodeSDK.Transaction.IssueEntityFactoryTransactionV1Params) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueEntityFactoryV1Api>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY_V1);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送发行非同质权益模板事件 */
    async packageIssueEntityFactoryV1(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueEntityFactoryV1Api>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY_V1);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送发行非同质权益模板事件 */
    async broadcastIssueEntityFactoryV1<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueEntityFactoryV1Api>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY_V1);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建发行非同质权益事件 */
    async createIssueEntity(argv: BFMetaNodeSDK.Transaction.IssueEntityTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送发行非同质权益事件 */
    async packageIssueEntity(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送发行非同质权益事件 */
    async broadcastIssueEntity<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建销毁非同质权益事件 */
    async createDestroyEntity(argv: BFMetaNodeSDK.Transaction.DestroyEntityTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DestroyEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_ENTITY);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送销毁非同质权益事件 */
    async packageDestroyEntity(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DestroyEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_ENTITY);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送销毁非同质权益事件 */
    async broadcastDestroyEntity<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DestroyEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_ENTITY);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建任意资产交换事件 */
    async createToExchangeAny(argv: BFMetaNodeSDK.Transaction.ToExchangeAnyTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ToExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送任意资产交换事件 */
    async packageToExchangeAny(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ToExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送任意资产交换事件 */
    async broadcastToExchangeAny<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ToExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建接受任意资产交换事件 */
    async createBeExchangeAny(argv: BFMetaNodeSDK.Transaction.BeExchangeAnyTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.BeExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送接受任意资产交换事件 */
    async packageBeExchangeAny(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.BeExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送接受任意资产交换事件 */
    async broadcastBeExchangeAny<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.BeExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建任意资产转移事件 */
    async createTransferAny(argv: BFMetaNodeSDK.Transaction.TransferAnyTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.TransferAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ANY);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送任意资产转移事件 */
    async packageTransferAny(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.TransferAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ANY);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送任意资产转移事件 */
    async broadcastTransferAny<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.TransferAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ANY);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建任意资产赠送事件 */
    async createGiftAny(argv: BFMetaNodeSDK.Transaction.GiftAnyTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.GiftAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ANY);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送任意资产赠送事件 */
    async packageGiftAny(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.GiftAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ANY);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送任意资产赠送事件 */
    async broadcastGiftAny<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.GiftAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ANY);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建接受任意资产赠送事件 */
    async createGrabAny(argv: BFMetaNodeSDK.Transaction.GrabAnyTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.GrabAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ANY);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送接受任意资产赠送事件 */
    async packageGrabAny(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.GrabAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ANY);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送接受任意资产赠送事件 */
    async broadcastGrabAny<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.GrabAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ANY);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建批量发行非同质权益模板事件 */
    async createIssueEntityMulti(argv: BFMetaNodeSDK.Transaction.IssueEntityMultiTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueEntityMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_MULTI);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送批量发行非同质权益模板事件 */
    async packageIssueEntityMulti(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueEntityMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_MULTI);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送批量发行非同质权益模板事件 */
    async broadcastIssueEntityMulti<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueEntityMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_MULTI);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建批量任意资产交换事件 */
    async createToExchangeAnyMulti(argv: BFMetaNodeSDK.Transaction.ToExchangeAnyMultiTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ToExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY_MULTI);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送批量任意资产交换事件 */
    async packageToExchangeAnyMulti(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ToExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY_MULTI);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送批量任意资产交换事件 */
    async broadcastToExchangeAnyMulti<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ToExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY_MULTI);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建接受批量任意资产交换事件 */
    async createBeExchangeAnyMulti(argv: BFMetaNodeSDK.Transaction.BeExchangeAnyMultiTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.BeExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY_MULTI);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送接受批量任意资产交换事件 */
    async packageBeExchangeAnyMulti(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.BeExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY_MULTI);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送接受批量任意资产交换事件 */
    async broadcastBeExchangeAnyMulti<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.BeExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY_MULTI);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建注册链事件 */
    async createRegisterChain(argv: BFMetaNodeSDK.Transaction.RegisterChainTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.RegisterChainApi>(GENERATE_TRANSACTION_API_PATH.TR_REGISTER_CHAIN);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送注册链事件 */
    async packageRegisterChain(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.RegisterChainApi>(GENERATE_TRANSACTION_API_PATH.TR_REGISTER_CHAIN);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送注册链事件 */
    async broadcastRegisterChain<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.RegisterChainApi>(GENERATE_TRANSACTION_API_PATH.TR_REGISTER_CHAIN);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建权益迁出事件 */
    async createEmigrateAsset(argv: BFMetaNodeSDK.Transaction.EmigrateAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.EmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_EMIGRATE_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送权益迁出事件 */
    async packageEmigrateAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.EmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_EMIGRATE_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送权益迁出事件 */
    async broadcastEmigrateAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.EmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_EMIGRATE_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建权益迁入事件 */
    async createImmigrateAsset(argv: BFMetaNodeSDK.Transaction.ImmigrateAssetTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ImmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_IMMIGRATE_ASSET);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送权益迁入事件 */
    async packageImmigrateAsset(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ImmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_IMMIGRATE_ASSET);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送权益迁入事件 */
    async broadcastImmigrateAsset<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.ImmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_IMMIGRATE_ASSET);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建发行凭证事件 */
    async createIssueCertificate(argv: BFMetaNodeSDK.Transaction.IssueCertificateTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueCertificateApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_CERTIFICATE);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送发行凭证事件 */
    async packageIssueCertificate(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueCertificateApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_CERTIFICATE);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送发行凭证事件 */
    async broadcastIssueCertificate<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.IssueCertificateApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_CERTIFICATE);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }

    /**创建销毁凭证事件 */
    async createDestroyCertificate(argv: BFMetaNodeSDK.Transaction.DestroyCertificateTransactionParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DestroyCertificateApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_CERTIFICATE);
        const result = await api.createTransaction(argv);
        return result;
    }
    /**创建并发送销毁凭证事件 */
    async packageDestroyCertificate(argv: BFMetaNodeSDK.Transaction.PackageTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DestroyCertificateApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_CERTIFICATE);
        const result = await api.packageTransaction(argv);
        return result;
    }
    /**发送销毁凭证事件 */
    async broadcastDestroyCertificate<T>(argv: BFMetaNodeSDK.Transaction.BroadcastTransacationParams) {
        const api = this.__getTransactionApi<BFMetaNodeSDK.Transaction.DestroyCertificateApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_CERTIFICATE);
        const result = await api.broadcastTransaction<T>(argv);
        return result;
    }
    // #endregion

    // #region migrateCertificate
    private __getMigrateCertificateApi<T extends BFMetaNodeSDK.CrossChain.MigrateCertificateApi>(
        apiPath: BFMetaNodeSDK.CrossChain.MIGRATE_CERTIFICATE_API_PATH
    ) {
        return this.__MIGRATE_CERTIFICATE_API_MAP.get(apiPath) as T;
    }

    /**创建权益迁移凭证 */
    async createMigrateCertificate(argv: BFMetaNodeSDK.CrossChain.GenerateMigrateCertificateParams) {
        const api = this.__getMigrateCertificateApi<BFMetaNodeSDK.CrossChain.GenerateMigrateCertificateApi>(
            MIGRATE_CERTIFICATE_API_PATH.MIGRATE_CERTIFICATE_GENERATE
        );
        const result = await api.sendPostRequest(argv);
        return result;
    }
    /**创建权益迁移凭证的迁出授权签名 */
    async fromAuthSignatureMigrateCertificate(argv: BFMetaNodeSDK.CrossChain.AuthSignMigrateCertificateArgs) {
        const api = this.__getMigrateCertificateApi<BFMetaNodeSDK.CrossChain.FromAuthSignatureMigrateCertificateApi>(
            MIGRATE_CERTIFICATE_API_PATH.MIGRATE_CERTIFICATE_FROM_AUTH_SIGNATURE
        );
        const result = await api.sendPostRequest(argv);
        return result;
    }
    /**创建权益迁移凭证的迁入授权签名 */
    async toAuthSignatureMigrateCertificate(argv: BFMetaNodeSDK.CrossChain.AuthSignMigrateCertificateArgs) {
        const api = this.__getMigrateCertificateApi<BFMetaNodeSDK.CrossChain.ToAuthSignatureMigrateCertificateApi>(
            MIGRATE_CERTIFICATE_API_PATH.MIGRATE_CERTIFICATE_TO_AUTH_SIGNATURE
        );
        const result = await api.sendPostRequest(argv);
        return result;
    }
    // #endregion

    // #region common
    private __getCommonApi<T extends BFMetaNodeSDK.Common.CommonApi>(apiPath: BFMetaNodeSDK.Common.COMMON_API_PATH) {
        return this.__COMMON_API_MAP.get(apiPath) as T;
    }

    /**是否是一个地址 */
    async verifyAddress(argv: BFMetaNodeSDK.Common.VerifyAddressParams) {
        const api = this.__getCommonApi<BFMetaNodeSDK.Common.VerifyAddressApi>(COMMON_API_PATH.VERIFY_ADDRESS);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**是否是一个公钥 */
    async verifyPublicKey(argv: BFMetaNodeSDK.Common.VerifyPublicKeyParams) {
        const api = this.__getCommonApi<BFMetaNodeSDK.Common.VerifyPublicKeyApi>(COMMON_API_PATH.VERIFY_PUBLICKEY);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**创建账户 */
    async createAccount(argv: BFMetaNodeSDK.Common.GenerateAccountParams) {
        const api = this.__getCommonApi<BFMetaNodeSDK.Common.GenerateAccountApi>(COMMON_API_PATH.GENERATE_ACCOUNT);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**根据密钥获取账户 */
    async createAddressBySecret(argv: BFMetaNodeSDK.Common.GenerateAddressBySecretParams) {
        const api = this.__getCommonApi<BFMetaNodeSDK.Common.GenerateAddressBySecretApi>(COMMON_API_PATH.GENERATE_ADDRESS_BY_SECRET);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**根据公钥获取账户 */
    async createAddressByPublicKey(argv: BFMetaNodeSDK.Common.GenerateAddressByPublicKeyParams) {
        const api = this.__getCommonApi<BFMetaNodeSDK.Common.GenerateAddressByPublicKeyApi>(COMMON_API_PATH.GENERATE_ADDRESS_BY_PUBLICKEY);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**创建公私钥对 */
    async createKeypair(argv: BFMetaNodeSDK.Common.GenerateKeypairParams) {
        const api = this.__getCommonApi<BFMetaNodeSDK.Common.GenerateKeypairApi>(COMMON_API_PATH.GENERATE_KEYPAIR);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**非对称加密 */
    async asymmetricEncrypt(argv: BFMetaNodeSDK.Common.AsymmetricEncryptParams) {
        const api = this.__getCommonApi<BFMetaNodeSDK.Common.AsymmetricEncryptApi>(COMMON_API_PATH.ASYMMETRIC_ENCRYPT);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**非对称解密 */
    async asymmetricDecrypt(argv: BFMetaNodeSDK.Common.AsymmetricDecryptParams) {
        const api = this.__getCommonApi<BFMetaNodeSDK.Common.AsymmetricDecryptApi>(COMMON_API_PATH.ASYMMETRIC_DECRYPT);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**计算最低手续费 */
    async calcTransactionMinFee(argv: BFMetaNodeSDK.Common.CalcTransactionMinFeeParams) {
        const api = this.__getCommonApi<BFMetaNodeSDK.Common.CalcTransactionMinFeeApi>(COMMON_API_PATH.CALC_TRANSACTION_MIN_FEE);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**创建加密签名 */
    async createCiphertextSignature(argv: BFMetaNodeSDK.Common.GenerateCiphertextSignatureParams) {
        const api = this.__getCommonApi<BFMetaNodeSDK.Common.GenerateCiphertextSignatureApi>(COMMON_API_PATH.GENERATE_CIPHERTEXT_SIGNATURE);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    // #endregion
}
