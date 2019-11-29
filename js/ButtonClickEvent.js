const str = "Lexicon";
let ReversedString;
let getStringSample;


function Reverse(getStringSample){

    if(getStringSample != str){
        getStringSample = str;
    }
    if(getStringSample == "nocixeL"){
        getStringSample = ReversedString;
    }
    let splitString = getStringSample.split("");
    // ["L", "e", "x", "i", "c", "o", "n"]
    let reverseArray = splitString.reverse();
    // ["n", "o", "c", "i", "x", "e", "L"]
    let joinArray = reverseArray.join("");
    ReversedString = joinArray;
}


function ReverseString(){
    Reverse();
    document.getElementById("GetReversedString").innerHTML = ReversedString; 
}

function GetDaysToChristmas(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    CountDaysToNextChristmas();
}

function CountDaysToNextChristmas(){
    // One day Time in ms (milliseconds) 
    var one_day = 1000 * 60 * 60 * 24 
    
    // To set present_dates to two variables 
    var present_date = new Date(); 
    
    // 0-11, Months of they year is 0 indexed.
    var christmas_day = new Date(present_date.getFullYear(), 11, 24) 
    
    // To Calculate next year's Christmas if passed already. 
    if (present_date.getMonth() == 11 && present_date.getdate() > 24) 
        christmas_day.setFullYear(christmas_day.getFullYear() + 1) 
    
    // To Calculate the result in milliseconds and then converting into days 
    var Result = Math.round(christmas_day.getTime() - present_date.getTime()) / (one_day); 
    
    // To remove the decimals from the (Result) resulting days value 
    var Final_Result = Result.toFixed(0); 
    
    //To display the final_result value 
    //alert("Number of days remaining till christmas <br>" 
    //            + present_date + "<br> and <br>" 
    //            + christmas_day + " is: <br> " 
    //            + Final_Result); 

    //document.getElementById("GetDaysToChristams").innerHTML = present_date + christmas_day + Final_Result;
    document.getElementById("GetDaysToChristams").innerHTML = Final_Result;
}




function GuessNumber(){
    const matchTrue = "Good Work!";
    const matchFalse = "No Match!";
    let matchMessage;
    let UsrIpt;
    
    var rand = (Math.floor(Math.random() * 10));
    UsrIpt = document.getElementById("text").value;

    console.log(rand = Math.round(Math.random() * 10))
    if(UsrIpt == rand){
        matchMessage = matchTrue;
    }
    else{
        matchMessage = matchFalse;
    }

    document.getElementById("GetRandomNumber").innerHTML = "You gussed: " + UsrIpt + "  " + matchMessage;
}


function Button5_ClickEvent(){

}

