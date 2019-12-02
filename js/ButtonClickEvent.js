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

