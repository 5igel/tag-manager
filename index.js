const NodeID3 = require('node-id3');
const getFileList = require('./file-list');
const testFolder = '/home/ixidor/Desktop/t';
const result = [];

getFileList(testFolder);
//
// fs.readdir(testFolder, (err, files) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//
//     console.log('Start reading directory');
//
//     files.forEach(file => {
//         console.log(`Renaming file ${file}`);
//
//         //  Define the tags for your file using the ID (e.g. APIC) or the alias (see at bottom)
//         const tags = {
//           title: `Глава ${file[3]}${file[4]} - ч.${file[6]}${file[7]}`,
//           artist: "Роберт Хайнлайн",
//           album: "Звездный десант",
//           genre: "Аудиокнига"
//         }
//
//         const filepath = `${testFolder}/${file}`;
//         const prom = new Promise((resolve, reject) => {
//             //  Update existing ID3-Frame with new/edited tags
//             NodeID3.update(tags, filepath, function(err) {
//                 if(err) {
//                     reject(err);
//                 } else {
//                     resolve();
//                 }
//             })
//         });
//
//         result.push(prom);
//     });
//
//     Promise.all(result)
//         .then( e => console.log('Done'))
//         .catch( err => console.error(err));
// })
