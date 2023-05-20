export const sleep = async (ms: number) => {
    return new Promise((cb) => setTimeout(cb, ms));
};
