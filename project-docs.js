const fs = require('fs');
const path = require('path');
const os = require('os');
const ncp = require('ncp');
const { exec } = require('child_process');
const projects = require('./projects.json');

for (let project of projects) {
    const dirPath = path.resolve('docs', project.name);

    clearDir(dirPath);
    ensureDir(dirPath);

    const tmpDir = path.resolve(os.tmpdir(), project.name);
    const outputDir = path.resolve('docs', project.name);

    exec(`git clone -b ${project.branch} ${project.git} ${tmpDir} --depth=1`, (err, stdout, stderr) => {
        if (err) {
            console.log('Error:', err);
            return;
        }

        const docsFolder = path.resolve(tmpDir, project.folder);

        ncp(docsFolder, outputDir, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Copied docs for', project.name);
            clearDir(tmpDir);
        });
    });
}

function ensureDir(dirPath) {
    if (fs.existsSync(dirPath)) return;
    fs.mkdirSync(dirPath);
}

function clearDir(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    const files = fs.readdirSync(dirPath);

    for (let file of files) {
        const filePath = path.resolve(dirPath, file);
        const stats = fs.lstatSync(filePath)
        if (stats.isFile()) {
            fs.unlinkSync(filePath);
        } else {
            clearDir(filePath);
            fs.rmdirSync(filePath);
        }
    }
}