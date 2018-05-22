const fs = require('fs');
const path = require('path');
const os = require('os');
const util = require('util');
const ncp = util.promisify(require('ncp'));
const exec = util.promisify(require('child_process').exec);
const spawn = require('child_process').spawnSync;
const projects = require('./projects.json');

const command = process.argv[2];

if (!command) {
    pullDocs().then(() => buildDocs());
}

if (command === '--build') {
    buildDocs();
}

if (command === '--pull') {
    pullDocs();
}

function buildDocs() {
    for (let project of projects) {
        spawn('./node_modules/.bin/vuepress', ['build', `docs/${project.name}`], { stdio: 'inherit'});
    }
}

function pullDocs() {
    const promises = [];

    for (let project of projects) {
        const dirPath = path.resolve('docs', project.name);

        clearDir(dirPath);
        ensureDir(dirPath);

        const tmpDir = path.resolve(os.tmpdir(), project.name);
        const outputDir = path.resolve('docs', project.name);

        let command = `git clone -b ${project.branch} ${project.git} ${tmpDir} --depth=1`;
        if (fs.existsSync(tmpDir)) {
            command = `cd ${tmpDir} && git pull`;
        }

        const promise =
            // git clone / git pull
            exec(command)
            // copy from tmp folder to docs/
            .then(() => {
                const docsFolder = path.resolve(tmpDir, project.folder);
                return ncp(docsFolder, outputDir);
            })
            .then(() => {
                console.log('Copied docs for', project.name);
            })
            .catch(console.log);

        promises.push(promise);
    }

    return Promise.all(promises);
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