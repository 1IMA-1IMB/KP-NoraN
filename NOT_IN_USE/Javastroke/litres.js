
let number = document.getElementById('inputfield');
let gallon = 3.78541;
let ounces = 0.0295735;
let cups = 0.236588;
let tbs = 0.0147868;

function lconvertg() {
    let userinput = number.value
    //let  = document.getElementById().value ;
    
    //litre*gallon;
    console.log(userinput+"Litres in gallons is"+userinput*gallon+"gallons")

}

function lconverto() {
    let userinput = document.getElementById().value;
    
   //litre*ounces;
    console.log(userinput+"Litres in ounces is"+userinput*ounces+"ounces")
    
}

function lconvertc() {
    let userinput = document.getElementById().value;
    
    //litre*cups;
    console.log(userinpute+"Litres in cups is"+userinput*cups+"cups")
   
}

function lconvertt() {
    let userinput = document.getElementById().value;
    
   //litre*tbs;
    console.log(userinput+"Litres in tablespoons is"+userinput*tbs+"tablespoons")

}


