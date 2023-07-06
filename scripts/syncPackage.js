// @ts-check

// 预先安装 cnpm
// npm install -g cnpm --registry=https://registry.npmmirror.com

const fs = require("node:fs");
const path = require("node:path");
const childProcess = require("node:child_process");

function runCmd(cmd) {
    return new Promise((resolve, reject) => {
        childProcess.exec(cmd, (err, stdout, stderr) => {
            if (err) {
                return reject(err);
            }
            return resolve(stdout);
        });
    });
}

async function syncPackages(packages) {
    for (const package of packages) {
        console.log(`will sync package ${package}`);
        const resp = await runCmd(`cnpm sync ${package}`);
        console.log(resp);
    }
}

function readPackages() {
    const results = [];
    const packageRootPath = path.join(process.cwd(), "packages");
    if (fs.existsSync(packageRootPath)) {
        const packages = fs.readdirSync(packageRootPath);
        for (const package of packages) {
            const packageJson = JSON.parse(
                fs.readFileSync(path.join(packageRootPath, package, "package.json"), "utf-8"),
            );
            results.push(packageJson.name);
        }
    } else {
        const packageJson = JSON.parse(
            fs.readFileSync(path.join(process.cwd(), "package.json"), "utf-8"),
        );
        results.push(packageJson.name);
    }
    return results;
}

(async () => {
    try {
        const packages = readPackages();
        await syncPackages(packages);
    } catch (error) {
        console.log(error);
    }
})();
