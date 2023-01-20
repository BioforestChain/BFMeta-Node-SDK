import { CryptoHelper } from "./cryptoHelper";
import { BFMetaSDK } from "../../src";

export const cryptoHelper = new CryptoHelper();

export const bfmetaSDK = new BFMetaSDK("testnet", cryptoHelper);
export const CHAIN_INFO = {
    chainName: "bfmetatest",
    chainAssetType: "BFMTEST",
    chainMagic: "YC4CN",
};
