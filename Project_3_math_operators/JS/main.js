var X = 60;
X++;//Using increment  operator ++
document.write(X, "\n");

var Y =60;
Y--;
document.write(Y);//decrement operator --

window.alert(Math.random() * 50);//showing a random number between 0 to 50

function addition_Function() {
    var Addition = 2+5;
    document.getElementById("Math").innerHTML = Addition;
}//Using addition operator to add 2 and 5

function multiplication() {
    var Multiplication = 68*58;
    document.getElementById("Math").innerHTML= Multiplication;
}//Using multiplication operator

function division() {
    var Division = 565 / 5 ;
    document.getElementById("Math").innerHTML=  Division;
}//Using division operator

function subtraction_Function() {
    var Subtraction = 154 -34;
    document.getElementById("Math").innerHTML =  Subtraction
//Using subtraction operator}
}
function more_Math() {
    var numbers = (4 + 43) * 20 /2-8;
    document.getElementById("Math").innerHTML= numbers
}//Using multiply subtract and divide all at once

function modulus_Operator(){
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML= simple_Math;
}//Using modulus operator or remainder operator to show the remainder after the dividend divided by the divisor

function negation_Operator(){
    var Z= 38;
    document.getElementById("Math").innerHTML = -Z;

}//Using unary or negation operator to return the oposite or negative form of x


function objectMethod() {
    document.getElementById("Math").innerHTML = Math.sin(10); //example of object method
}