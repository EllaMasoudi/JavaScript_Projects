function recipe() {
    var part_1 = "My favorite food is";
    var part_2 = " a pate of roasted indigenous legumes";
    var part_3 = " paired with a compote of seasonal berries";
    var part_4 = " served on hearty sprouted wheat bread.";
    var whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("Food").innerHTML=whole_sentence;
}// this shows how to connect different parts into a one sentence

function cutout_color(){
    var Sentence ="I have a red car.";
    var Section = Sentence.slice(9,12);
    document.getElementById("car").innerHTML = Section;
}//example of slice method, cut out and display "red"

function upper_case(){
    var str = "I have a cute dog";
    document.write(str.toUpperCase());
}//example of how to write on uppercase letters

var str ="Javascript is a scripting language";
document.write(str.search("is"));//an example of search method

function string_Method(){
    var X = 45;
    document.getElementById("Numbers").innerHTML = X.toString();
}//This is an example of make a number as string

function precision_Method(){
    var Y =13345.28608345;
    document.getElementById("Precision").innerHTML = Y.toPrecision(5);
}//shows only first 5 digits

var num = 5.235;
var n = num.toFixed(2);
document.write("\n",n);//rounding the number and type only 2 decimals