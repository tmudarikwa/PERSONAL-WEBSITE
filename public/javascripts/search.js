
$(".select-pure__options input").attr("placeholder","search by tech skill");
let search_portfolio = (vals,portfolio) => { 
    let filteredElements = [];
    for (i = 0; i < portfolio.length; i++) {  
        //checking if vals has text in it
        //else we bring back all the portfolio projects
        if(vals.length > 0){
            let valsStatus = "";
            //checking if a single project has any of the tech skills entered by the user
            for(let q = 0; q < vals.length;q++){
                if (portfolio[i].innerHTML.toLowerCase().includes(vals[q].toLowerCase()) == false) { 
                    valsStatus = valsStatus + " false";
                } 
                else { 
                    valsStatus = valsStatus + " true";
                } 
            }
            //if any of the entered tech skills matched the projects tech skill then we display it for the user
            if (valsStatus.includes("true")){
                filteredElements.push({
                    value: portfolio[i],
                    display: "grid"
                });  
            }
            else{
                filteredElements.push({
                    value: portfolio[i],
                    display: "none"
                });  
            }
            //hiding placeholder text because the user has started searching
            $('.select-pure__placeholder').hide();
        }else{
            filteredElements.push({
                value: portfolio[i],
                display: "grid"
            });     
             //showing placeholder text because nothing has been searched
             $('.select-pure__placeholder').show();
        }
    } 

    //displaying the portfoilio projects based on the display value
    for(let i = 0; i < filteredElements.length; i++){
        filteredElements[i].value.style.display = filteredElements[i].display;
    }

} 