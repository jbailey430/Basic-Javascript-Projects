function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 21) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function string_Length() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("string").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        content += Instruments[Y] + "<br>" ;
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
    Dog_Picture[2] + ".";
}

function constant_function () {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = '$900';
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;



const X = 10 // this is showing that 10 is the constant //
X = 2;
document.write(X);

var B = 10;
B= 7;
document.write(B);
}
document.write("<br>");
document.write("<br>");

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

document.write("<br>");
document.write("<br>");

var X = 82;
document.write(X);
{
    var X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

document.write("<br>");
document.write("<br>");

function return_Function () {
    return Math.PI ;
}
document.getElementById("return").innerHTML =return_Function () ;

let car = {
    make: "Dodge ",
    module: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.module;
    }
};
document.getElementById("Car_Object").innerHTML = car.description() ;

var text = "";
var i ;
for ( i = 0; i < 10; i++) {
    if ( i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;