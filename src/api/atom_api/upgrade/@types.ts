export {};
declare global {
    export namespace BFMetaNodeSDK {
        export namespace Upgrade {
            // #region request
            export interface UpgradeApiRequestParams {}

            export interface UpgradeVersionRequest {}

            export interface UpgradeSelfRequest {}

            export interface NodeCloseRequest {
                verifyKey: string;
                /**校验类型:001:节点所有者校验 002:管理员校验 */
                verifyType: string;
            }
            export interface NodeRestartRequest extends NodeCloseRequest {}
            export interface NodeRecoverRequest extends NodeCloseRequest {}
            export interface NodeRestartRequest {}
            export interface DownloadPackageRequest {}
            export interface NodeUpgradeRequest {}
            export interface TaskInfoRequest {}
            export interface UpgradeInfoRequest {}
            export interface UpgradeProcessRequest {}
            export interface UpgradeStatusRequest {}
            // #endregion

            // #region response
            export enum UpgradeStatus {
                /**空闲状态 */
                FREE,
                /**升级中 */
                UPGRADING,
            }

            export enum UpgradeSelfStatus {
                /**最新版本 */
                LASTEST,
                /**升级中 */
                UPGRADING,
                /**升级错误 */
                ERROR,
            }
            export interface UpgradeApiRequestResult {}
            export interface UpgradeVersionResult {
                version: string;
                platform: string;
                needUpgrade: boolean;
                status: UpgradeStatus;
            }

            export interface UpgradeSelfResult {
                status: UpgradeSelfStatus;
            }

            export interface NodeCloseResult {}
            export interface NodeRestartResult {}
            export interface NodeRecoverResult {}
            export interface DownloadPackageResult {}
            export interface NodeUpgradeResult {}
            export interface TaskInfoResult {}
            export interface UpgradeInfoResult {}
            export interface UpgradeProcessResult {}
            export interface UpgradeStatusResult {}

            // #endregion

            export interface UpgradeApiSuccessReturn<T extends UpgradeApiRequestResult> extends BFMetaNodeSDK.ApiSuccessReturn<T> {
                result: T;
            }
            export interface UpgradeApiFailureReturn extends ApiFailureReturn {}

            export type UpgradeApiReturn<T extends UpgradeApiRequestResult> = UpgradeApiSuccessReturn<T> | UpgradeApiFailureReturn;

            export type UpgradeApi = import("./apis/_upgradePostApi.js").UpgradePostApi<any>;
            export type UpgradeVersionApi = import("./apis/index.js").UpgradeVersionApi;
            export type UpgradeSelfApi = import("./apis/index.js").UpgradeSelfApi;
            export type NodeCloseApi = import("./apis/index.js").NodeCloseApi;
            export type NodeRecoverApi = import("./apis/index.js").NodeRecoverApi;
            export type NodeRestartApi = import("./apis/index.js").NodeRestartApi;
            export type DownloadPackageApi = import("./apis/index.js").DownloadPackageApi;
            export type NodeUpgradeApi = import("./apis/index.js").NodeUpgradeApi;
            export type TaskInfoApi = import("./apis/index.js").TaskInfoApi;
            export type UpgradeInfoApi = import("./apis/index.js").UpgradeInfoApi;
            export type UpgradeProcessApi = import("./apis/index.js").UpgradeProcessApi;
            export type UpgradeStatusApi = import("./apis/index.js").UpgradeStatusApi;
        }
    }
}
