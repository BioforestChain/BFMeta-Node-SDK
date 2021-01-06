const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");
const exec = childProcess.exec;
const rootPath = path.resolve(__dirname, "../node_modules/@bfchain");

const compileAll = process.env.all === "true" ? true : false;

// #region removeUselessDir
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

function removeUselessDir(rootPath) {
    const files = fs.readdirSync(rootPath);
    for (const file of files) {
        const curPath = rootPath + "/" + file;
        if (file.includes("devkit") || file.includes("node_modules")) {
            continue;
        }

        if (fs.statSync(curPath).isDirectory()) {
            const condition = compileAll === true ? file === "esm" || file === "cjs-es5" || file === "test" : file === "esm" || file === "test";
            if (condition) {
                removeFiles(curPath);
            } else {
                removeUselessDir(curPath);
            }
        } else {
            if (file.includes(".tsbuildinfo")) {
                removeFiles(curPath);
            }
        }
    }
}

function deleteDependence(rootPath) {
    const files = fs.readdirSync(rootPath);
    for (const file of files) {
        const filePath = `${rootPath}/${file}/node_modules`;
        if (fs.existsSync(filePath)) {
            removeFiles(filePath);
            console.log(`remove node_modules ${filePath}`);
        }
    }
}
// #endregion

// #region compileNodeModules
const tsconfig = {
    compilerOptions: {
        incremental: false,
        target: "es5",
        module: "commonjs",
        lib: ["es6", "es2015.iterable", "esnext.asynciterable"],
        allowJs: true,
        declaration: false,
        declarationMap: false,
        sourceMap: false,
        composite: false,
        noEmitOnError: true,
        downlevelIteration: true,
        strict: true,
        strictBindCallApply: true,
        strictNullChecks: true,
        skipLibCheck: true,
        moduleResolution: "node",
        esModuleInterop: true,
        newLine: "lf",
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        rootDir: "./cjs",
        outDir: "./cjs-es5",
    },
};

function needCompile(rootPath, files) {
    let needCompile = false;
    outterLoop: for (const file of files) {
        if (file === "build") {
            const curPath = rootPath + "/" + file;
            const subfiles = fs.readdirSync(curPath);
            for (const subfile of subfiles) {
                if (subfile === "cjs-es5") {
                    return false;
                }
                if (subfile === "esm-es5") {
                    needCompile = true;
                    break outterLoop;
                }
            }
        }
    }
    if (!(rootPath.includes("core-") || rootPath.includes("duplex-") || rootPath.includes("util-"))) {
        needCompile = true;
    }
    return needCompile;
}

function getAllFile(targetPath) {
    if (!fs.existsSync(targetPath)) {
        return;
    }
    let allFileName = [];

    let files = fs.readdirSync(targetPath);

    files.forEach(function(file, index) {
        let curPath = targetPath + "/" + file;
        if (fs.statSync(curPath).isDirectory()) {
            // 递归获取文件夹
            allFileName = allFileName.concat(getAllFile(curPath));
        }
        if (file.endsWith(".js")) {
            allFileName[allFileName.length] = curPath;
        }
    });

    return allFileName;
}

function compile(sourcePath) {
    if (!fs.existsSync(sourcePath)) {
        throw new Error("Source file path not exist");
    }

    const cmdStr = `bdk-tsc --allowJs -p ${sourcePath}/tsconfig.json`;

    return new Promise((resolve, reject) => {
        exec(cmdStr, (err, stdout, stderr) => {
            if (err) {
                console.log(err);
                return reject();
            }
            console.log(stdout);
            resolve();
        });
    });
}

async function compileToES5(rootPath) {
    const files = fs.readdirSync(rootPath);
    for (const file of files) {
        const curPath = rootPath + "/" + file;
        if (file.includes("devkit") || file.includes("node_modules") || file.includes("subchaincenter")) {
            continue;
        }

        const subfiles = fs.readdirSync(curPath);
        if (!needCompile(curPath, subfiles)) {
            console.log(`compile already dir ${curPath}`);
            continue;
        }

        const buildPath = curPath + "/build";

        if (fs.existsSync(buildPath)) {
            try {
                const tsconfigPath = `${buildPath}/tsconfig.json`;

                const allFileName = getAllFile(buildPath + "/cjs");

                const index = allFileName[0].indexOf("build") + 6;

                tsconfig.files = allFileName.map(fileName => fileName.substr(index));

                fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 4));

                await compile(buildPath);

                console.log(`compile dir ${buildPath}`);

                removeFiles(tsconfigPath);
            } catch (e) {
                console.log(e);
                throw new Error(buildPath);
            }
        }
    }
}
// #endregion

// #region copyType
function copyTypeFile(rootPath) {
    const files = fs.readdirSync(rootPath);
    const targetRootPath = rootPath.replace("cjs", "cjs-es5");
    if (!fs.existsSync(targetRootPath)) {
        return;
    }
    for (const file of files) {
        const curPath = rootPath + "/" + file;
        if (file.includes("devkit") || file.includes("node_modules")) {
            continue;
        }
        if (fs.statSync(curPath).isDirectory()) {
            copyTypeFile(curPath);
        }
        if (curPath.includes("cjs") && !curPath.includes("cjs-es5") && file.includes(".ts")) {
            const targetPath = curPath.replace("cjs", "cjs-es5");
            fs.writeFileSync(targetPath, fs.readFileSync(curPath));
            console.log(`copy type file from ${curPath} to ${targetPath}`);
        }
    }
}
// #endregion

// #region overwriteNodeModules
const defaultMain = "build/cjs-es5/index.js";
const defaultType = "build/cjs-es5/index.d.ts";

function isNeedChangeReference(rootPath, files) {
    for (const file of files) {
        if (file === "build") {
            const curPath = rootPath + "/" + file;
            const subfiles = fs.readdirSync(curPath);
            for (const subfile of subfiles) {
                if (subfile === "cjs-es5") {
                    return true;
                }
            }
        }
    }
    return false;
}

function changeReference(rootPath) {
    const files = fs.readdirSync(rootPath);
    for (const file of files) {
        const curPath = rootPath + "/" + file;
        if (file.includes("devkit") || file.includes("node_modules")) {
            continue;
        }
        if (fs.statSync(curPath).isDirectory()) {
            changeReference(curPath);
        }
        if (file === "package.json") {
            let package = fs.readFileSync(curPath);
            package = JSON.parse(package);
            package.main = defaultMain;
            package.type = defaultType;
            fs.writeFileSync(curPath, JSON.stringify(package, null, 4));
            console.log(`change reference path ${curPath}`);
        }
        if (file.includes("tsbuildinfo")) {
            fs.unlinkSync(curPath);
        }
    }
}

function changeReferencePath(rootPath) {
    const files = fs.readdirSync(rootPath);
    for (const file of files) {
        const curPath = rootPath + "/" + file;
        if (file.includes("devkit")) {
            continue;
        }
        if (fs.statSync(curPath).isDirectory()) {
            const subfiles = fs.readdirSync(curPath);
            if (isNeedChangeReference(curPath, subfiles)) {
                changeReference(curPath);
            }
        }
    }
}

function copyGenesisInfos() {
    const rootPath = path.resolve(__dirname, "../node_modules/@bfchain/coretools-obtain-genesis-info/build");
    const sourcePath = `${rootPath}/cjs/genesisInfos`;
    const targetPath = `${rootPath}/cjs-es5/genesisInfos`;
    if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath);
    }
    const files = fs.readdirSync(sourcePath);
    for (const file of files) {
        fs.writeFileSync(`${targetPath}/${file}`, fs.readFileSync(`${sourcePath}/${file}`));
        console.log(`copy genesis info ${file}`);
    }
}

// #endregion

(async () => {
    // 移除 node_modules 里无用的文件 esm, test, tsbuildinfo...
    removeUselessDir(rootPath);

    // 移除 node_modules/node_modules
    deleteDependence(rootPath);

    // 编译 node_modules
    await compileToES5(rootPath);

    // 拷贝类型文件
    copyTypeFile(rootPath);

    // 改变引用路径
    changeReferencePath(rootPath);

    // 拷贝创世块
    // copyGenesisInfos();
})();
