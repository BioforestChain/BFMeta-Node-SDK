declare namespace BFMetaNodeSDK {
    namespace Upgrade {
        // #region request
        interface UpgradeApiRequestParams {}

        interface UpgradeVersionRequest {}

        interface UpgradeSelfRequest {}

        interface NodeCloseRequest {
            verifyKey: string;
            /**校验类型:001:节点所有者校验 002:管理员校验 */
            verifyType: string;
        }
        interface NodeRestartRequest extends NodeCloseRequest {}
        interface NodeRecoverRequest extends NodeCloseRequest {}
        interface NodeRestartRequest {}
        interface DownloadPackageRequest {}
        interface NodeUpgradeRequest {}
        interface TaskInfoRequest {}
        interface UpgradeInfoRequest {}
        interface UpgradeProcessRequest {}
        interface UpgradeStatusRequest {}
        // #endregion

        // #region response
        enum UpgradeStatus {
            /**空闲状态 */
            FREE,
            /**升级中 */
            UPGRADING,
        }

        enum UpgradeSelfStatus {
            /**最新版本 */
            LASTEST,
            /**升级中 */
            UPGRADING,
            /**升级错误 */
            ERROR,
        }
        interface UpgradeApiRequestResult {}
        interface UpgradeVersionResult {
            version: string;
            platform: string;
            needUpgrade: boolean;
            status: UpgradeStatus;
        }

        interface UpgradeSelfResult {
            status: UpgradeSelfStatus;
        }

        interface NodeCloseResult {}
        interface NodeRestartResult {}
        interface NodeRecoverResult {}
        interface DownloadPackageResult {}
        interface NodeUpgradeResult {}
        interface TaskInfoResult {}
        interface UpgradeInfoResult {}
        interface UpgradeProcessResult {}
        interface UpgradeStatusResult {}

        // #endregion

        interface UpgradeApiSuccessReturn<T extends UpgradeApiRequestResult> extends BFMetaNodeSDK.ApiSuccessReturn<T> {
            result: T;
        }
        interface UpgradeApiFailureReturn extends ApiFailureReturn {}

        type UpgradeApiReturn<T extends UpgradeApiRequestResult> = UpgradeApiSuccessReturn<T> | UpgradeApiFailureReturn;

        type UpgradeApi = import("./apis/_upgradePostApi").UpgradePostApi<any>;
        type UpgradeVersionApi = import("./apis").UpgradeVersionApi;
        type UpgradeSelfApi = import("./apis").UpgradeSelfApi;
        type NodeCloseApi = import("./apis").NodeCloseApi;
        type NodeRecoverApi = import("./apis").NodeRecoverApi;
        type NodeRestartApi = import("./apis").NodeRestartApi;
        type DownloadPackageApi = import("./apis").DownloadPackageApi;
        type NodeUpgradeApi = import("./apis").NodeUpgradeApi;
        type TaskInfoApi = import("./apis").TaskInfoApi;
        type UpgradeInfoApi = import("./apis").UpgradeInfoApi;
        type UpgradeProcessApi = import("./apis").UpgradeProcessApi;
        type UpgradeStatusApi = import("./apis").UpgradeStatusApi;
    }
}
