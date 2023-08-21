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

    type MACRO_INPUT_TYPE = import("./commonConstants").MACRO_INPUT_TYPE;
    type MACRO_NUMBER_FORMAT = import("./commonConstants").MACRO_NUMBER_FORMAT;
    type CERTIFICATE_TYPE = import("./commonConstants").CERTIFICATE_TYPE;

    interface FractionJSON<T extends number | bigint | string = number> {
        /**分子 */
        numerator: T;
        /**分母 */
        denominator: T;
    }

    namespace Macro {
        interface BaseInputJSON<T extends MACRO_INPUT_TYPE> {
            type: T;
            name: string;
            keyPath: string;
            /**regexp */
            pattern?: string;
            /**array */
            repeat?: boolean;
        }
        interface TextInputJSON<T extends MACRO_INPUT_TYPE = import("./commonConstants").MACRO_INPUT_TYPE.TEXT> extends BaseInputJSON<T> {}
        interface AddressInputJSON<T extends MACRO_INPUT_TYPE = import("./commonConstants").MACRO_INPUT_TYPE.ADDRESS> extends TextInputJSON<T> {}
        interface PublicKeyInputJSON<T extends MACRO_INPUT_TYPE = import("./commonConstants").MACRO_INPUT_TYPE.PUBLICKEY> extends TextInputJSON<T> {}
        interface SignatureInputJSON<T extends MACRO_INPUT_TYPE = import("./commonConstants").MACRO_INPUT_TYPE.SIGNATURE> extends TextInputJSON<T> {}
        interface NumberInputJSON<T extends MACRO_INPUT_TYPE = import("./commonConstants").MACRO_INPUT_TYPE.NUMBER> extends BaseInputJSON<T> {
            base?: FractionJSON<string>;
            min?: FractionJSON<string>;
            max?: FractionJSON<string>;
            step?: FractionJSON<string>;
            format?: MACRO_NUMBER_FORMAT;
        }
        interface CalcInputJSON extends NumberInputJSON<import("./commonConstants").MACRO_INPUT_TYPE.CALC> {
            calc: string;
        }

        type InputJSON = TextInputJSON | AddressInputJSON | PublicKeyInputJSON | SignatureInputJSON | NumberInputJSON | CalcInputJSON;
    }
}
