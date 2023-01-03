const fs = require('fs');
qs = require('querystring');

let saveEdits = (req,res) =>{
    let dataRows = []
    const data = req.body;
    for(let i = 0; i < data.count.length; i++){
        if (i == 0 || i != data.count.length){
            row = data.count[i] + '|'+ data.month[i] +'|'+ data.day[i] +'|'+ data.name[i] +'|'+ data.amount[i];
        }else{
            row = '\r\n' + data.count[i] + '|'+ data.month[i] +'|'+ data.day[i] +'|'+ data.name[i] +'|'+ data.amount[i];
        }
        dataRows.push(row);
    }

    const roundData = dataRows.toString();

    fs.writeFile('config/roundtable.txt', roundData, err => {
    if (err) {
        console.error(err);
    }
    });

};

module.exports.saveEdits = saveEdits;