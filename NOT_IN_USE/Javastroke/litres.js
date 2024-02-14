

function lconvertg() {

    let userinput = document.getElementById('inputfield').value;
    let gallon = 3.78541;
    let ounces = 0.0295735;
    let cups = 0.236588;
    let tbs = 0.0147868;

    //let  = document.getElementById().value ;
    
    console.log(userinput+" Litres in gallons is "+userinput*gallon+" gallons")

    console.log(userinput+" Litres in ounces is "+userinput*ounces+" ounces")
    
    console.log(userinput+" Litres in cups is "+userinput*cups+" cups")
   
    console.log(userinput+" Litres in tablespoons is "+userinput*tbs+" tablespoons")

    document.getElementById('ans').innerHTML = JSON.stringify(userinput+ "Litres in tablespoons is "+userinput*tbs+" tablespoons")


}
 function ooglyboogly(){

    if (document.getElementById('ms').value == "gigidi") {
        
        let userinput = document.getElementById('inputfield').value;
        let gallon = 3.78541;
        let ounces = 0.0295735;
        let cups = 0.236588;
        let tbs = 0.0147868;

        document.getElementById('ans').innerHTML = JSON.stringify(userinput+" Litres in gallons is "+userinput*gallon+" gallons")

    } else if (document.getElementById('ms').value == "oogabooga") {
        
        let userinput = document.getElementById('inputfield').value;
        let gallon = 3.78541;
        let ounces = 0.0295735;
        let cups = 0.236588;
        let tbs = 0.0147868;

        document.getElementById('ans').innerHTML = JSON.stringify(userinput+" Litres in ounces is "+userinput*ounces+" ounces")

    } else if (document.getElementById('ms').value == "cutlery") {
        
        let userinput = document.getElementById('inputfield').value;
        let gallon = 3.78541;
        let ounces = 0.0295735;
        let cups = 0.236588;
        let tbs = 0.0147868;

        document.getElementById('ans').innerHTML = JSON.stringify(userinput+" Litres in cups is "+userinput*cups+" cups")

    } else if (document.getElementById('ms').value == "talisker") {
        
        let userinput = document.getElementById('inputfield').value;
        let gallon = 3.78541;
        let ounces = 0.0295735;
        let cups = 0.236588;
        let tbs = 0.0147868;

        document.getElementById('ans').innerHTML = JSON.stringify(userinput+ " Litres in tablespoons is "+userinput*tbs+" tablespoons")

    }
}



function printg() {
    let userinput = document.getElementById('inputfield').value;
    let gallon = 3.78541;
    let ounces = 0.0295735;
    let cups = 0.236588;
    let tbs = 0.0147868;

    document.getElementById('ans').innerHTML = JSON.stringify(userinput+" Litres in gallons is "+userinput*gallon+" gallons")
}

function printt() {
    let userinput = document.getElementById('inputfield').value;
    let gallon = 3.78541;
    let ounces = 0.0295735;
    let cups = 0.236588;
    let tbs = 0.0147868;

    document.getElementById('ans').innerHTML = JSON.stringify(userinput+ " Litres in tablespoons is "+userinput*tbs+" tablespoons")
}

function printo() {
    let userinput = document.getElementById('inputfield').value;
    let gallon = 3.78541;
    let ounces = 0.0295735;
    let cups = 0.236588;
    let tbs = 0.0147868;

    document.getElementById('ans').innerHTML = JSON.stringify(userinput+" Litres in ounces is "+userinput*ounces+" ounces")
}

function printc() {
    let userinput = document.getElementById('inputfield').value;
    let gallon = 3.78541;
    let ounces = 0.0295735;
    let cups = 0.236588;
    let tbs = 0.0147868;

    document.getElementById('ans').innerHTML = JSON.stringify(userinput+" Litres in cups is "+userinput*cups+" cups")
}



