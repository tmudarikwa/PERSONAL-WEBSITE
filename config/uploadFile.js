const fs = require('fs');
const formidable = require('formidable');

let saveUpload = (req,res) =>{
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.fileupload.filepath;
      var newpath = 'config/' + files.fileupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
}

module.exports.saveUpload = saveUpload;