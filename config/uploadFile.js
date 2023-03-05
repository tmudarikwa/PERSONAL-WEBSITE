const fs = require('fs');
const formidable = require('formidable');
const sendEmail = require('./emailer');

let saveUpload = (req,res) =>{
    let res_message;
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        let oldpath = files.fileupload.filepath;
        let newpath = 'config/file.' + files.fileupload.originalFilename.split('.').pop();
        // Read the file
        fs.readFile(oldpath, function (err, data) {
            if (err) throw err;
            console.log('File read!');
            // Write the file
            fs.writeFile(newpath, data, function (err) {
                if (err) throw err;
                res_message = 'File uploaded. Thank you Mr Wilson!';
                sendEmail.sendFile(req,res,newpath);
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

    return res_message;
}

module.exports.saveUpload = saveUpload;