import * as http from "http";
import { parsePostRequestParameter } from "../../src/helpers";
export class FecthDemo implements BFMetaNodeSDK.FetchInterface {
    get<T>(url: string): Promise<any> {
        return new Promise<T>((resolve, reject) => {
            const req = http.get(url, async (res) => {
                const body = await parsePostRequestParameter(res);
                return resolve(body as any);
            });
            req.setTimeout(10000, () => {
                return reject("timeout");
            });
            req.on("error", (e) => {
                return reject(e);
            });
        });
    }
    post<T>(url: string, data: any): Promise<any> {
        return new Promise<T>((resolve, reject) => {
            const req = http.request(url, { method: "POST", headers: { "content-type": "application/json" } }, async (res) => {
                const body = await parsePostRequestParameter(res);
                return resolve(body as any);
            });
            req.setTimeout(10000, () => {
                return reject("timeout");
            });
            req.on("error", (e) => {
                return reject(e);
            });
            req.write(JSON.stringify(data));
            req.end();
        });
    }
}
