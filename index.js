const { Music } = require('meta-music');
const { basename } = require('path');
const { getFileList } = require('./file-list');
const id3 = require('id3-writer');
const result = [];

const rename = (folder) => {
    getFileList(folder)
        .then((files) => {
            files.forEach(filepath => {
                const file = basename(filepath);
                console.log(`Renaming file ${file}`);

                //  Define the tags for your file using the ID (e.g. APIC) or the alias (see at bottom)
                const tags = {
                    title: `Глава ${file[3]}${file[4]} - ч.${file[6]}${file[7]}`,
                    artist: "Роберт Хайнлайн",
                    album: "Звездный десант",
                    genre: "Аудиокнига"
                }

                const writer = new id3.Writer();
                const fileToWrite = new id3.File(filepath);
                const meta = new id3.Meta(tags);

                result.push(new Promise((resolve, reject) => {
                    writer.setFile(fileToWrite).write(meta, function(err) {

                        if (err) {
                            reject(err)
                        }

                        resolve();
                    });
                }));
            });

            Promise.all(result)
                .then( e => console.log('Done'))
                .catch( err => console.error(err));
        })
}

module.exports = rename;
