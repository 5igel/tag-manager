const rename = require('./index.js')
document.ondragover = document.ondrop = (ev) => {
  ev.preventDefault()
}

document.body.ondrop = (e) => {
    e.preventDefault();
    [].forEach.call(e.dataTransfer.files, (file) => {
        console.log(file.path)
        rename(file.path);
    });
}
