var str = "Lexicon";
var newString;




function ReverseString(){
    var splitString = str.split("");
    // ["L", "e", "x", "i", "c", "o", "n"]
    var reverseArray = splitString.reverse();
    // ["n", "o", "c", "i", "x", "e", "L"]
    var joinArray = reverseArray.join("");

    document.getElementById("GetReversedString").innerHTML = joinArray;
}

function GetDaysToChristmas(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    alert(today);
}

function Button3_ClickEvent(){

}

function Button4_ClickEvent(){

}

function Button5_ClickEvent(){

}

