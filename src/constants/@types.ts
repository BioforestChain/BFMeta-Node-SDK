export {};
declare global {
    export namespace BFMetaNodeSDK {
        export namespace Basic {
            export type BASIC_API_PATH = import("./apiPathConstant").BASIC_API_PATH;
        }
        export namespace Service {
            export type SERVICE_API_PATH = import("./apiPathConstant").SERVICE_API_PATH;
        }
        export namespace System {
            export type SYSTEM_API_PATH = import("./apiPathConstant").SYSTEM_API_PATH;
        }
        export namespace Transaction {
            export type GENERATE_TRANSACTION_API_PATH = import("./apiPathConstant").GENERATE_TRANSACTION_API_PATH;
        }

        export namespace Upgrade {
            export type UPGRADE_API_PATH = import("./apiPathConstant").UPGRADE_API_PATH;
        }
        export namespace CrossChain {
            export type MIGRATE_CERTIFICATE_API_PATH = import("./apiPathConstant").MIGRATE_CERTIFICATE_API_PATH;
        }

        export namespace Common {
            export type COMMON_API_PATH = import("./apiPathConstant").COMMON_API_PATH;
        }

        export type REQUEST_PROTOCOL = import("./commonConstants").REQUEST_PROTOCOL;
        export type REQUEST_TYPE = import("./commonConstants").REQUEST_TYPE;
        export type SECRET_LANGUAGE_TYPE = import("./commonConstants").SECRET_LANGUAGE_TYPE;
        export type BLOCK_CHAIN_NET_WORK_TYPE = import("./commonConstants").BLOCK_CHAIN_NET_WORK_TYPE;

        export type READ_FILE_TYPE = import("./commonConstants").READ_FILE_TYPE;

        export type MACRO_INPUT_TYPE = import("./commonConstants").MACRO_INPUT_TYPE;
        export type MACRO_NUMBER_FORMAT = import("./commonConstants").MACRO_NUMBER_FORMAT;
        export type CERTIFICATE_TYPE = import("./commonConstants").CERTIFICATE_TYPE;

        export interface FractionJSON<T extends number | bigint | string = number> {
            /**分子 */
            numerator: T;
            /**分母 */
            denominator: T;
        }

        export namespace Macro {
            export interface BaseInputJSON<T extends MACRO_INPUT_TYPE> {
                type: T;
                name: string;
                keyPath: string;
                /**regexp */
                pattern?: string;
                /**array */
                repeat?: boolean;
            }
            export interface TextInputJSON<T extends MACRO_INPUT_TYPE = import("./commonConstants").MACRO_INPUT_TYPE.TEXT> extends BaseInputJSON<T> {}
            export interface AddressInputJSON<T extends MACRO_INPUT_TYPE = import("./commonConstants").MACRO_INPUT_TYPE.ADDRESS> extends TextInputJSON<T> {}
            export interface PublicKeyInputJSON<T extends MACRO_INPUT_TYPE = import("./commonConstants").MACRO_INPUT_TYPE.PUBLICKEY> extends TextInputJSON<T> {}
            export interface SignatureInputJSON<T extends MACRO_INPUT_TYPE = import("./commonConstants").MACRO_INPUT_TYPE.SIGNATURE> extends TextInputJSON<T> {}
            export interface NumberInputJSON<T extends MACRO_INPUT_TYPE = import("./commonConstants").MACRO_INPUT_TYPE.NUMBER> extends BaseInputJSON<T> {
                base?: FractionJSON<string>;
                min?: FractionJSON<string>;
                max?: FractionJSON<string>;
                step?: FractionJSON<string>;
                format?: MACRO_NUMBER_FORMAT;
            }
            export interface CalcInputJSON extends NumberInputJSON<import("./commonConstants").MACRO_INPUT_TYPE.CALC> {
                calc: string;
            }

            export type InputJSON = TextInputJSON | AddressInputJSON | PublicKeyInputJSON | SignatureInputJSON | NumberInputJSON | CalcInputJSON;
        }
    }
}
