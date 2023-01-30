import {
    UpgradeVersionApi,
    UpgradeSelfApi,
    NodeCloseApi,
    NodeRecoverApi,
    NodeRestartApi,
    DownloadPackageApi,
    NodeUpgradeApi,
    TaskInfoApi,
    UpgradeInfoApi,
    UpgradeProcessApi,
    UpgradeStatusApi,
} from "./apis";
import { UPGRADE_API_PATH } from "../../../constants";

export class UpgradeApi {
    private __UPGRADE_API_MAP = new Map<BFMetaNodeSDK.Upgrade.UPGRADE_API_PATH, BFMetaNodeSDK.Upgrade.UpgradeApi>();

    constructor(private __networkHelper: BFMetaNodeSDK.WebsocketHelper) {
        this.__init();
    }

    private __init() {
        const { __networkHelper: networkHelper, __UPGRADE_API_MAP: UPGRADE_API_MAP } = this;

        const upgradeVersionApi = new UpgradeVersionApi(networkHelper);
        const upgradeSelfApi = new UpgradeSelfApi(networkHelper);
        const nodeCloseApi = new NodeCloseApi(networkHelper);
        const nodeRecoverApi = new NodeRecoverApi(networkHelper);
        const nodeRestartApi = new NodeRestartApi(networkHelper);
        const downloadPackageApi = new DownloadPackageApi(networkHelper);
        const nodeUpgradeApi = new NodeUpgradeApi(networkHelper);
        const taskInfoApi = new TaskInfoApi(networkHelper);
        const upgradeInfoApi = new UpgradeInfoApi(networkHelper);
        const upgradeProcessApi = new UpgradeProcessApi(networkHelper);
        const upgradeStatusApi = new UpgradeStatusApi(networkHelper);

        UPGRADE_API_MAP.set(upgradeVersionApi.REQUEST_API_PATH, upgradeVersionApi);
        UPGRADE_API_MAP.set(upgradeSelfApi.REQUEST_API_PATH, upgradeSelfApi);
        UPGRADE_API_MAP.set(nodeCloseApi.REQUEST_API_PATH, nodeCloseApi);
        UPGRADE_API_MAP.set(nodeRecoverApi.REQUEST_API_PATH, nodeRecoverApi);
        UPGRADE_API_MAP.set(nodeRestartApi.REQUEST_API_PATH, nodeRestartApi);
        UPGRADE_API_MAP.set(downloadPackageApi.REQUEST_API_PATH, downloadPackageApi);
        UPGRADE_API_MAP.set(nodeUpgradeApi.REQUEST_API_PATH, nodeUpgradeApi);
        UPGRADE_API_MAP.set(taskInfoApi.REQUEST_API_PATH, taskInfoApi);
        UPGRADE_API_MAP.set(upgradeInfoApi.REQUEST_API_PATH, upgradeInfoApi);
        UPGRADE_API_MAP.set(upgradeProcessApi.REQUEST_API_PATH, upgradeProcessApi);
        UPGRADE_API_MAP.set(upgradeStatusApi.REQUEST_API_PATH, upgradeStatusApi);

        Object.freeze(UPGRADE_API_MAP);
    }

    private __getUpgradeApi<T extends BFMetaNodeSDK.Upgrade.UpgradeApi>(apiPath: BFMetaNodeSDK.Upgrade.UPGRADE_API_PATH) {
        return this.__UPGRADE_API_MAP.get(apiPath) as T;
    }

    /**查看升级服务版本号 */
    async upgradeVersion(argv: BFMetaNodeSDK.Upgrade.UpgradeVersionRequest) {
        const api = this.__getUpgradeApi<BFMetaNodeSDK.Upgrade.UpgradeVersionApi>(UPGRADE_API_PATH.UPGRADE_VERSION);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**更新升级服务 */
    async upgradeSelf(argv: BFMetaNodeSDK.Upgrade.UpgradeSelfRequest) {
        const api = this.__getUpgradeApi<BFMetaNodeSDK.Upgrade.UpgradeSelfApi>(UPGRADE_API_PATH.UPGRADE_SELF);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**关闭节点 */
    async nodeClose(argv: BFMetaNodeSDK.Upgrade.NodeCloseRequest) {
        const api = this.__getUpgradeApi<BFMetaNodeSDK.Upgrade.NodeCloseApi>(UPGRADE_API_PATH.NODE_CLOSE);
        const result = await api.sendPostRequest(argv);
        return result;
    }
    /**恢复节点 */
    async nodeRecover(argv: BFMetaNodeSDK.Upgrade.NodeRecoverRequest) {
        const api = this.__getUpgradeApi<BFMetaNodeSDK.Upgrade.NodeRecoverApi>(UPGRADE_API_PATH.NODE_RECOVER);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**重启节点 */
    async nodeRestart(argv: BFMetaNodeSDK.Upgrade.NodeRestartRequest) {
        const api = this.__getUpgradeApi<BFMetaNodeSDK.Upgrade.NodeRestartApi>(UPGRADE_API_PATH.NODE_RESTART);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**更新节点 */
    async nodeUpgrade(argv: BFMetaNodeSDK.Upgrade.NodeUpgradeRequest) {
        const api = this.__getUpgradeApi<BFMetaNodeSDK.Upgrade.NodeUpgradeApi>(UPGRADE_API_PATH.NODE_UPGRADE);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**下载更新包 */
    async downloadPackage(argv: BFMetaNodeSDK.Upgrade.DownloadPackageRequest) {
        const api = this.__getUpgradeApi<BFMetaNodeSDK.Upgrade.DownloadPackageApi>(UPGRADE_API_PATH.DOWNLOAD_PACKAGE);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获取升级进度 */
    async upgradeProcess(argv: BFMetaNodeSDK.Upgrade.UpgradeProcessRequest) {
        const api = this.__getUpgradeApi<BFMetaNodeSDK.Upgrade.UpgradeProcessApi>(UPGRADE_API_PATH.UPGRADE_PROCESS);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获取升级任务信息 */
    async taskInfo(argv: BFMetaNodeSDK.Upgrade.TaskInfoRequest) {
        const api = this.__getUpgradeApi<BFMetaNodeSDK.Upgrade.TaskInfoApi>(UPGRADE_API_PATH.TASK_INFO);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获取版本信息 */
    async upgradeInfo(argv: BFMetaNodeSDK.Upgrade.UpgradeInfoRequest) {
        const api = this.__getUpgradeApi<BFMetaNodeSDK.Upgrade.UpgradeInfoApi>(UPGRADE_API_PATH.UPGRADE_INFO);
        const result = await api.sendPostRequest(argv);
        return result;
    }

    /**获取升级服务状态 */
    async upgradeStatus(argv: BFMetaNodeSDK.Upgrade.UpgradeStatusRequest) {
        const api = this.__getUpgradeApi<BFMetaNodeSDK.Upgrade.UpgradeStatusApi>(UPGRADE_API_PATH.UPGRADE_STATUS);
        const result = await api.sendPostRequest(argv);
        return result;
    }
}
