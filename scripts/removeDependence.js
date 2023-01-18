// @ts-check

/**
 * 更新 coretools 后运行这个脚本
 *
 */

const fs = require("fs");
const rootPath = process.cwd() + "/node_modules/@bfchain";

function removeFiles(targetPath) {
    if (!fs.existsSync(targetPath)) {
        return;
    }
    if (fs.statSync(targetPath).isDirectory()) {
        const files = fs.readdirSync(targetPath);
        for (const file of files) {
            const curPath = targetPath + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                // 递归获取文件夹
                removeFiles(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        }
        fs.rmdirSync(targetPath);
    } else {
        fs.unlinkSync(targetPath);
    }
}

function deleteDependence(rootPath) {
    const files = fs.readdirSync(rootPath);
    for (const file of files) {
        const filePath = `${rootPath}/${file}/node_modules`;
        if (fs.existsSync(filePath) && !filePath.includes("@bfchain/devkit") && !filePath.includes("@bfchain/pkgm")) {
            removeFiles(filePath);
            console.log(`remove node_modules ${filePath}`);
        }
    }
}

deleteDependence(rootPath);
