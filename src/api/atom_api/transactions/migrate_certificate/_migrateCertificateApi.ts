export abstract class MigrateCertificateApi {
    abstract readonly GENERATE_API_PATH: BFMetaNodeSDK.CrossChain.MIGRATE_CERTIFICATE_API_PATH;

    constructor(protected networkHelper: BFMetaNodeSDK.NetworkHelper) {}
}
