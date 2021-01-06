import * as fs from "fs";
import * as path from "path";

class Utils {
    buildFileLines(filePathArr: string[]) {
        let results: string[] = [];
        for (const filePath of filePathArr) {
            const lines = fs
                .readFileSync(path.join(process.cwd(), filePath))
                .toString()
                .split("\n");
            results = results.concat(lines);
        }
        return results;
    }

    getAllFile(allFileName: string[], targetPath: string, needDir?: string) {
        if (!fs.existsSync(targetPath)) {
            return;
        }
        let files = fs.readdirSync(targetPath);
        for (const file of files) {
            let curPath = path.join(targetPath, file);
            if (fs.statSync(curPath).isDirectory()) {
                // 递归获取文件夹
                this.getAllFile(allFileName, curPath, needDir);
                continue;
            }
            const canAccess = needDir ? targetPath.includes(needDir) : true;
            if (canAccess && file.endsWith(".d.ts")) {
                allFileName.push(curPath.replace(process.cwd(), ``));
            }
        }
    }
}

export const utils = new Utils();
