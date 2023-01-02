const fs = require('fs');

let tableDetails = [];
fs.readFile('config/roundtable.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let rawTableDetails = null;
  if (data.search(';') != -1){
    rawTableDetails = data.split(";")
  }else{
    rawTableDetails = data.split(",");
  }
  
  rawTableDetails.forEach(aTableDetail => {
    tableDetails.push(aTableDetail.replace("\r\n",""));
  });

});

let getDetails = () => {
    
    let detailsEntriesArray = [];
    tableDetails.forEach(row =>{
        let rowArray = row.split("|");
        detailsEntriesArray.push({
            count : rowArray[0],
            month : rowArray[1],
            day : rowArray[2],
            name: rowArray[3],
            amount: rowArray[4]
        });
    })

    const details = {
                        detailsEntries: detailsEntriesArray
                    };
    return details;
};
module.exports.getDetails = getDetails;
