const fs = require('fs');
const formidable = require('formidable');

let saveUpload = (req,res) =>{
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        let oldpath = files.fileupload.filepath;
        let newpath = 'config/' + files.fileupload.originalFilename;
        // Read the file
        fs.readFile(oldpath, function (err, data) {
            if (err) throw err;
            console.log('File read!');
            console.log(data);
            // Write the file
            fs.writeFile(newpath, data, function (err) {
                if (err) throw err;
                res.write('File uploaded. Thank you Mr Wilson!');
                res.end();
                console.log('File written!');
            });
            console.log(newpath);
            // Delete the file
            fs.unlink(oldpath, function (err) {
                if (err) throw err;
                console.log('File deleted!');
            });
        });
    });
}

module.exports.saveUpload = saveUpload;