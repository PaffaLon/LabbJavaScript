let getValue1;
let getValue2;
let result;

function NearestTo100(){

    GetUserValues();
    CompareValues(getValue1, getValue2);
    document.getElementById("GetClosests").innerHTML = "Given value: " + result + " is closest to a 100.";
}

function GetUserValues(){
    getValue1 = document.getElementById("Value1").value;
    getValue2 = document.getElementById("Value2").value; 

}

function CompareValues(value1, value2){
    const h = 100;
    let value1_diffranceOf100;
    let value2_diffranceOf100;
 
    if(value1 != 100 && value2 != 100){
        console.log("!= 100");
        if(value1 > 0 && value2 > 0){
            //Calculates the diffrance of the values and 100.
            value1_diffranceOf100 = h - value1;
            value2_diffranceOf100 = h - value2;
            console.log("X: " + value1_diffranceOf100);
            console.log("Y: " + value2_diffranceOf100);

            //value1 is closer to 100, then value2.
            if(value1_diffranceOf100 > value2_diffranceOf100){
                result = value2;
                console.log("x > y: " + result);
            }
            //value2 is closer to 100, then value1.
            else if(value2_diffranceOf100 > value1_diffranceOf100){
                result = value1;
            }
            //Both value1 and value2 are equally close to 100.
            else{

            }
        }    
    }
    else{
        console.log("One value == 100.")
    }
}