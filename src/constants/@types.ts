declare namespace BFMetaNodeSDK {
    namespace Basic {
        type BASIC_API_PATH = import("./apiPathConstant").BASIC_API_PATH;
    }
    namespace Service {
        type SERVICE_API_PATH = import("./apiPathConstant").SERVICE_API_PATH;
    }
    namespace System {
        type SYSTEM_API_PATH = import("./apiPathConstant").SYSTEM_API_PATH;
    }
    namespace Transaction {
        type GENERATE_TRANSACTION_API_PATH = import("./apiPathConstant").GENERATE_TRANSACTION_API_PATH;
    }

    namespace Upgrade {
        type UPGRADE_API_PATH = import("./apiPathConstant").UPGRADE_API_PATH;
    }
    namespace CrossChain {
        type MIGRATE_CERTIFICATE_API_PATH = import("./apiPathConstant").MIGRATE_CERTIFICATE_API_PATH;
    }

    namespace Common {
        type COMMON_API_PATH = import("./apiPathConstant").COMMON_API_PATH;
    }

    type REQUEST_PROTOCOL = import("./commonConstants").REQUEST_PROTOCOL;
    type REQUEST_TYPE = import("./commonConstants").REQUEST_TYPE;
    type SECRET_LANGUAGE_TYPE = import("./commonConstants").SECRET_LANGUAGE_TYPE;
    type BLOCK_CHAIN_NET_WORK_TYPE = import("./commonConstants").BLOCK_CHAIN_NET_WORK_TYPE;

    type READ_FILE_TYPE = import("./commonConstants").READ_FILE_TYPE;
}
