// @ts-check
const fs = require("fs");
const path = require("path");
const rootPath = path.join(process.cwd(), "/build");

if (fs.existsSync(rootPath)) {
    fs.rmSync(rootPath, { recursive: true });
}
