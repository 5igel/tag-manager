const { join } = require('path')

class File {
    constructor(filename, context) {
        const fileNameAndExt = filename.split('.');

        this.filename = filename;
        this.path = join(context, filename);
        this.ext = fileNameAndExt[1];
    }
}

module.exports = File;
