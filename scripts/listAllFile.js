// @ts-check

const fs = require("fs");
const path = require("path");

const js = process.env.js === "true" ? true : false;

function getAllFile(targetPath, allFileName) {
    if (!fs.existsSync(targetPath)) {
        return;
    }
    let files = fs.readdirSync(targetPath);

    files.forEach(function(file, index) {
        let curPath = targetPath + "/" + file;
        if (fs.statSync(curPath).isDirectory()) {
            // 递归获取文件夹
            return getAllFile(curPath, allFileName);
        }

        const condition = js ? file.endsWith(".ts") || file.endsWith(".js") : file.endsWith(".ts");

        if (condition) {
            allFileName[allFileName.length] = curPath;
        }
    });
}

function listAllFile(dirPaths) {
    for (const dirPath of dirPaths) {
        const rootPath = path.resolve(__dirname, `../${dirPath}`);

        const allFileName = [];

        getAllFile(rootPath, allFileName);

        const index = allFileName[0].indexOf("/") + 1;

        const result = allFileName.map(fileName => fileName.substr(index));

        const tsconfigPath = `${rootPath}/tsconfig.json`;

        const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath).toString());

        tsconfig.files = result;

        fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 4));
    }
}

listAllFile(["src", "test"]);
