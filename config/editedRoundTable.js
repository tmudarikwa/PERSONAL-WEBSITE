const fs = require('fs');
qs = require('querystring');

let saveEdits = (req,res) =>{
    let dataRows = []
    const data = req.body;
    for(let i = 0; i < data.count.length; i++){
        if (i == 0 || i != data.count.length){
            if(data.count[i].length > 0 && data.month[i].length > 0 && data.day[i].length > 0 && data.name[i].length > 0 && data.amount[i].length > 0 ){
                row = data.count[i] + '|'+ data.month[i] +'|'+ data.day[i] +'|'+ data.name[i] +'|'+ data.amount[i];
            }
        }else{
            if(data.count[i].length > 0 && data.month[i].length > 0 && data.day[i].length > 0 && data.name[i].length > 0 && data.amount[i].length > 0 ){
                row = '\r\n' + data.count[i] + '|'+ data.month[i] +'|'+ data.day[i] +'|'+ data.name[i] +'|'+ data.amount[i];
            }
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