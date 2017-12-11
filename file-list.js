const fs = require('fs');
const { join } = require('path')

const isDirectory = source => fs.lstatSync(source).isDirectory()

const getFileList = (dir, fileList = [], promises = []) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }

            console.log(`Start reading directory '${dir}'`);

            files.forEach(file => {
                const fullpath = join(dir, file);
                if(isDirectory(fullpath)) {
                    const result = getFileList(fullpath, fileList);
                    promises.push(result);
                } else {
                    fileList.push(fullpath);
                }
            });

            Promise.all(promises).then((res) => {
                resolve(fileList);
            });
        });
    });
}

module.exports = { getFileList, isDirectory };
