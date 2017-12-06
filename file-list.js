const fs = require('fs');
const { join } = require('path')

const isDirectory = source => fs.lstatSync(source).isDirectory()

const getFileList = (dir, fileList = []) => {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(`Start reading directory '${dir}'`);

        files.forEach(file => {
            console.log(file);
            const fullpath = join(dir, file);
            if(isDirectory(fullpath)) {
                getFileList(fullpath, fileList);
            } else {
                fileList.push(file);
            }
        });
    });
}

module.exports = getFileList;
