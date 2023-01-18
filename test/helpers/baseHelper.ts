import { AsymmetricUtil } from "@bfchain/sign-util";
import { CryptoHelper } from "./cryptoHelper";

const cryptoHelper = new CryptoHelper();
export const asymmetricUtil = new AsymmetricUtil("c", Buffer as any, cryptoHelper);

export const CHAIN_INFO = {
    chainName: "bfmetatest",
    chainAssetType: "BFMTEST",
    chainMagic: "YC4CN",
};
