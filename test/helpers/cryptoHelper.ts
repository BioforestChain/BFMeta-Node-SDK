import * as crypto from "node:crypto";

export class CryptoHelper implements BFChainSignUtil.CryptoHelperInterface {
    async sha256(msg: string | Uint8Array) {
        if (msg instanceof Uint8Array) {
            return crypto.createHash("sha256").update(msg).digest();
        }
        return crypto
            .createHash("sha256")
            .update(new Uint8Array(Buffer.from(msg)))
            .digest();
    }

    async md5(data?: BFChainSignUtil.Buffer.BinaryLike): Promise<any> {
        const hash = crypto.createHash("md5");
        if (data) {
            return hash.update(data).digest();
        }
        return hash;
    }

    async ripemd160(data?: BFChainSignUtil.Buffer.BinaryLike): Promise<any> {
        const hash = crypto.createHash("ripemd160");
        if (data) {
            return hash.update(data).digest();
        }
        return hash;
    }
}
