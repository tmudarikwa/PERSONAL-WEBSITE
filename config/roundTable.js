const fs = require('fs');

let getDetails = () => {
    let tableDetails = [];
    let data = null;
    try {
        data = fs.readFileSync('config/roundtable.txt', 'utf8');
    } catch (err) {
        console.log(err);
    }

    let rawTableDetails = [];
    if (data.search(';') != -1){
        rawTableDetails = data.split(";")
    }else{
        rawTableDetails = data.split(",");
    }
    rawTableDetails.forEach(aTableDetail => {
        tableDetails.push(aTableDetail.replace("\r\n",""));
    });

    let detailsEntriesArray = [];
    tableDetails.forEach(row =>{
        let rowArray = row.split("|");
        if(rowArray[0].length > 0 && rowArray[1].length > 0 && rowArray[2].length > 0 && rowArray[3].length > 0 && rowArray[4].length > 0){
            detailsEntriesArray.push({
                count : rowArray[0],
                month : rowArray[1],
                day : rowArray[2],
                name: rowArray[3],
                amount: rowArray[4]
            });
        }
    });

    const details = {
                        detailsEntries: detailsEntriesArray
                    };
    return details;
};
module.exports.getDetails = getDetails;
