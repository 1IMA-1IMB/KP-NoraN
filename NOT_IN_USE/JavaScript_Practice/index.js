//function bingle(el) {
//    addString(el,true);
//}

//bingle = "Bingle bongle dingle dangle, jickity do, jickity da, ping pong, lippy tappy too ta";
//console.log(bingle)

//console.log("All my homies hate global warfare")

    let quote1 = "Bingle bongle dingle dangle, jickity do, jickity da, ping pong, lippy tappy too ta";

    function bingle() {
        alert(quote1);
    }

    function tenny() {

        alert("And don't let me eat pears."+" When I'm John Smith he might do something stupid; like eat a pear."+" I don't want to wake up tasting that.");
    }


    let chris = 9;
    let david = 10;
    let matt = 11;

    function multiply() {

        alert(chris*david*matt);
    }


    function ifs() {
        if (5 > 2) {

            alert("Correct");

        } else {

            alert("No it's not");

        }
    }

    ifs()

// Oppg a)
let x = "Nora";
let y = "17";
let z = "Hei " + x + ", du er " + y + "år gammel";
console.log(z)


let erenelev = true;
 
if( !erenelev ) {
 
    console.log( "du er ikke en elev!" );
 
} else {
 
    console.log( "du er en elev!" );
 
}
 
// Oppg b)
// Det er fullt mulig å bruke variabel definisjonen 'var' for å lage nye variabler, 
// men det er mer praktisk å bruke 'let' metoden, siden den lar deg legge til verdien 
// til variablen med en gang.

let ans_1 = 11*1
let ans_2 = 11*2
let ans_3 = 11*3
let ans_4 = 11*4
let ans_5 = 11*5
let ans_6 = 11*6
let ans_7 = 11*7
let ans_8 = 11*8
let ans_9 = 11*9
let ans_10 = 11*10
let ans_11 = 11*11

console.log(ans_1,ans_2,ans_3,ans_4,ans_5,ans_6,ans_7,ans_8,ans_9,ans_10,ans_11)



let fh = 70;
let c = 21.11111111111111;

function celsius(){
    let cl = (fh -32)/1.8

    console.log(fh, " fahrenheit er ",cl, "i celsius");
}

celsius();

function fahrenheit(){
    let cl = (fh -32)/1.8
    let frh = 1.8*(32/c)

    console.log(c, "celsius er det samme som", frh, "fahrenheit");
}

fahrenheit();


function maketrue() {
    let = true;
}


let walk = document.getElementById(walk) && false;
let quack = document.getElementById(quack) && false;

function isduck(){

    if (walk == true && quack == true) {

        console.log ("Ducks!");

    } else {

        console.log ("What the fuck, who are you?");

    }
}

function ShearSheep(Sheepquant) {
 
    if(Sheepquant>0 && 10>=Sheepquant) {
 
        console.log("du fikk nok ull til et par sokker!");
 
    } else if(Sheepquant>10 && 30>=Sheepquant) {
 
        console.log("du fikk nok ull til en stor genser!");
 
    } else if(Sheepquant>30 && 50>=Sheepquant) {
 
        console.log("du fikk nok ull til kjeledress og sengetøy!");
 
    } else if(Sheepquant>50 && 80>=Sheepquant) {
 
        console.log("du fikk nok ull til å lage en saue-klone!");
 
    } else if(Sheepquant>80 && 100>Sheepquant) {
 
        console.log("du fikk nok ull til et ull-hoppselott!");
 
    } else if(Sheepquant>100) {
 
        console.log("zzz zzz zzz")
 
    }
 
}
 
ShearSheep(75);

