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