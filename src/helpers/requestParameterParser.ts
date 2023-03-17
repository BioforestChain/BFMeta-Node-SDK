export function parsePostRequestParameter(imcomingMessage: any) {
    return new Promise<{ [key: string]: any }>((resolve, reject) => {
        const buffers: Uint8Array[] = [];
        imcomingMessage.on("error", (error: any) => {
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
