// Calculator Programming


var display = document.querySelector("#display");

function displayForInput(input){

    var lastChar = display.value[display.value.length - 1];

    
    if(input == "."){

        var lastNumber = "";

        for(var i = display.value.length - 1; i >= 0; i--){

            if(
                display.value[i] == "+" ||
                display.value[i] == "-" ||
                display.value[i] == "*" ||
                display.value[i] == "/"
            ){
                break;
            }

            lastNumber += display.value[i];
        }

        if(lastNumber.includes(".")){
            return;
        }
    }


    // Prevent multiple operators
    if(
        (input == "+" || input == "-" || input == "*" || input == "/")
        &&
        (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/")
    ){
        return;
    }


    display.value += input;
}

function clearDisplay(){
    display.value = "";
} 

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}