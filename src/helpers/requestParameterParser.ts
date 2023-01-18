import type { IncomingMessage } from "http";
import * as url from "url";

export function parseGetRequestParameter(imcomingMessage: IncomingMessage) {
    return new Promise<{ [key: string]: any }>((resolve, reject) => {
        if (!imcomingMessage.url) {
            return reject(`request url lose`);
        }
        imcomingMessage.on("error", (error) => {
            return reject(error.message);
        });
        try {
            const req = url.parse(imcomingMessage.url, true);
            return resolve(req.query);
        } catch (e) {
            return reject(`parse parameter error`);
        }
    });
}

export function parsePostRequestParameter(imcomingMessage: IncomingMessage) {
    return new Promise<{ [key: string]: any }>((resolve, reject) => {
        const buffers: Uint8Array[] = [];
        imcomingMessage.on("error", (error) => {
            return reject(error.message);
        });
        imcomingMessage.on("data", (chunk: Uint8Array) => buffers.push(chunk));
        imcomingMessage.on("end", () => {
            const requestString = Buffer.concat(buffers).toString();
            try {
                return resolve(JSON.parse(requestString));
            } catch (e) {
                return reject(`parse parameter error`);
            }
        });
    });
}
