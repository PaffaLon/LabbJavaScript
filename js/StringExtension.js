let newString;
var UsrIpt;
let splitString;
const py = "Py";

function SearhString(){
    GetUserValue();
    SplitString(UsrIpt);
    AttachString();
    Result();
    console.log(newString);
}

function Result(){
    document.getElementById("GetNewString").innerHTML = newString;
}

function GetUserValue(){
    UsrIpt = document.getElementById("Sample").value;
    console.log("User enterd: " +UsrIpt);
}

function AttachString(){
    if(splitString[0] == "P" && splitString[1] == "y"){
        newString = UsrIpt;
    }
    else{
        newString = py + UsrIpt;
    }
    return newString;
}

function SplitString(string){

    splitString = string.split("");
    console.log(splitString);
    return(splitString);
}