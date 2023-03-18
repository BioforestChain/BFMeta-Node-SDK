import {
    GetBlockApi,
    GetLastBlockApi,
    GetTransactionTypeApi,
    GetTransactionsApi,
    GetBfchainVersionApi,
    GetNodeVersionApi,
    GetBlockChainStatusApi,
    GenerateSecretApi,
    CreateAccountApi,
    GetAccountPublicKeyApi,
    GetAccountLastTransactionApi,
    GetAccountLastTypeTransactionApi,
    SetKVStorageTempApi,
    GetKVStorageApi,
} from "./apis";
import { BASIC_API_PATH } from "../../../constants";

export class BasicApi {
    private __BASIC_API_MAP = new Map<BFMetaNodeSDK.Basic.BASIC_API_PATH, BFMetaNodeSDK.Basic.BasicApi>();

    constructor(private __networkHelper: BFMetaNodeSDK.NetworkHelper) {
        this.__init();
    }

    private __init() {
        const { __networkHelper: networkHelper, __BASIC_API_MAP: BASIC_API_MAP } = this;

        const getBlockApi = new GetBlockApi(networkHelper);
        const getLastBlockApi = new GetLastBlockApi(networkHelper);
        const getTransactionTypeApi = new GetTransactionTypeApi(networkHelper);
        const getTransactionsApi = new GetTransactionsApi(networkHelper);
        const getBfchainVersionApi = new GetBfchainVersionApi(networkHelper);
        const getNodeVersionApi = new GetNodeVersionApi(networkHelper);
        const getBlockChainStatusApi = new GetBlockChainStatusApi(networkHelper);
        const generateSecretApi = new GenerateSecretApi(networkHelper);
        const createAccountApi = new CreateAccountApi(networkHelper);
        const getAccountPublicKeyApi = new GetAccountPublicKeyApi(networkHelper);
        const getAccountLastTransactionApi = new GetAccountLastTransactionApi(networkHelper);
        const getAccountLastTypeTransactionApi = new GetAccountLastTypeTransactionApi(networkHelper);
        const setKVStorageTempApi = new SetKVStorageTempApi(networkHelper);
        const getKVStorageApi = new GetKVStorageApi(networkHelper);

        BASIC_API_MAP.set(getBlockApi.REQUEST_API_PATH, getBlockApi);
        BASIC_API_MAP.set(getLastBlockApi.REQUEST_API_PATH, getLastBlockApi);
        BASIC_API_MAP.set(getTransactionTypeApi.REQUEST_API_PATH, getTransactionTypeApi);
        BASIC_API_MAP.set(getTransactionsApi.REQUEST_API_PATH, getTransactionsApi);
        BASIC_API_MAP.set(getBfchainVersionApi.REQUEST_API_PATH, getBfchainVersionApi);
        BASIC_API_MAP.set(getNodeVersionApi.REQUEST_API_PATH, getNodeVersionApi);
        BASIC_API_MAP.set(getBlockChainStatusApi.REQUEST_API_PATH, getBlockChainStatusApi);
        BASIC_API_MAP.set(generateSecretApi.REQUEST_API_PATH, generateSecretApi);
        BASIC_API_MAP.set(createAccountApi.REQUEST_API_PATH, createAccountApi);
        BASIC_API_MAP.set(getAccountPublicKeyApi.REQUEST_API_PATH, getAccountPublicKeyApi);
        BASIC_API_MAP.set(getAccountLastTransactionApi.REQUEST_API_PATH, getAccountLastTransactionApi);
        BASIC_API_MAP.set(getAccountLastTypeTransactionApi.REQUEST_API_PATH, getAccountLastTypeTransactionApi);
        BASIC_API_MAP.set(setKVStorageTempApi.REQUEST_API_PATH, setKVStorageTempApi);
        BASIC_API_MAP.set(getKVStorageApi.REQUEST_API_PATH, getKVStorageApi);

        Object.freeze(BASIC_API_MAP);
    }

    private __getBasicApi<T extends BFMetaNodeSDK.Basic.BasicApi>(apiPath: BFMetaNodeSDK.Basic.BASIC_API_PATH) {
        return this.__BASIC_API_MAP.get(apiPath) as T;
    }

    // #region basicApi
    /**获取指定区块 */
    async getBlock(argv: BFMetaNodeSDK.Basic.GetBlockParams) {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.GetBlockApi>(BASIC_API_PATH.BASIC_GET_BLOCK);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    /**获取本地节点当前最新区块 */
    async getLastBlock() {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.GetLastBlockApi>(BASIC_API_PATH.BASIC_GET_LAST_BLOCK);
        const result = await api.sendGetRequest();
        return result;
    }
    /**获取交易类型 */
    async getTransactionType(argv: BFMetaNodeSDK.Basic.GetTransactionTypeParams) {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.GetTransactionTypeApi>(BASIC_API_PATH.BASIC_GET_TRANSACTION_TYPE);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    /**获取指定事件 */
    async getTransactions(argv: BFMetaNodeSDK.Basic.GetTransactionsParams) {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.GetTransactionsApi>(BASIC_API_PATH.BASIC_GET_TRANSACTIONS);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    /**获取Bfchain版本号 */
    async getBfchainVersion() {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.GetBfchainVersionApi>(BASIC_API_PATH.BASIC_GET_BFCHAIN_VERSION);
        const result = await api.sendGetRequest();
        return result;
    }
    /**获取节点版本号 */
    async getNodeVersion() {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.GetNodeVersionApi>(BASIC_API_PATH.BASIC_GET_NODE_VERSION);
        const result = await api.sendGetRequest();
        return result;
    }
    /**获取节点状态 */
    async getBlockChainStatus() {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.GetBlockChainStatusApi>(BASIC_API_PATH.BASIC_GET_BLOCK_CHAIN_STATUS);
        const result = await api.sendGetRequest();
        return result;
    }
    /**生成账户私钥 */
    async generateSecret(argv: BFMetaNodeSDK.Basic.GenerateSecretParams) {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.GenerateSecretApi>(BASIC_API_PATH.BASIC_GENERATE_SECRET);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    /**创建账户 */
    async createAccount(argv: BFMetaNodeSDK.Basic.CreateAccountParams) {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.CreateAccountApi>(BASIC_API_PATH.BASIC_CREATE_ACCOUNT);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    /**获取账户公钥 */
    async getAccountPublicKey(argv: BFMetaNodeSDK.Basic.GetAccountPublicKeyParams) {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.GetAccountPublicKeyApi>(BASIC_API_PATH.BASIC_GET_ACCOUNT_PUBLICKEY);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    /**获取账户的最后一笔事件 */
    async getAccountLastTransaction(argv: BFMetaNodeSDK.Basic.GetAccountLastTransactionParams) {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.GetAccountLastTransactionApi>(BASIC_API_PATH.BASIC_GET_ACCOUNT_LAST_TRANSACTION);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    /**获取账户指定类型的最后一笔事件 */
    async getAccountLastTypeTransaction(argv: BFMetaNodeSDK.Basic.GetAccountLastTypeTransactionParams) {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.GetAccountLastTypeTransactionApi>(BASIC_API_PATH.BASIC_GET_ACCOUNT_LAST_TYPE_TRANSACTION);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    /**临时设置KV二进制数据 */
    async setKVStorageTemp(argv: BFMetaNodeSDK.Basic.SetKVStorageTempParams) {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.SetKVStorageTempApi>(BASIC_API_PATH.SET_KVSTORAGE_TEMP);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    /**获取KV二进制数据 */
    async getKVStorage(argv: BFMetaNodeSDK.Basic.GetKVStorageParams) {
        const api = this.__getBasicApi<BFMetaNodeSDK.Basic.GetKVStorageApi>(BASIC_API_PATH.GET_KVSTORAGE);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    // #endregion
}
