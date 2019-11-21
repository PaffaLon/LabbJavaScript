var str = "Lexicon";

function ReverseString(str){
    var splitString = str.split("");
    // ["L", "e", "x", "i", "c", "o", "n"]

    var reverseArray = splitString.reverse();
    // ["n", "o", "c", "i", "x", "e", "L"]

    var joinArray = reverseArray.join("");
    return joinArray;
}

alert(ReverseString(str));