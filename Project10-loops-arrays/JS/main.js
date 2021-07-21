function Call_Loop(){
    var Digit ="";
    var X = 1;
    while (X < 6){
        Digit +="<br>"+X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}//This is a loop to count to 5

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin"];
var Content = "";
var Y;
function for_Loop() {
    for (Y= 0; Y < Instruments.lenght; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content ;
}//this is an example of for loop to return a list of instruments


function array_Function(){
    var Dog_pic =[];
     Dog_pic[0] ="Barking";
     Dog_pic[1] ="Playing";
     Dog_pic[2] ="eating";
     document.getElementById ("Array").innerHTML ="In this picture , the dog is " + Dog_pic[2] +".";

}//an example of array and how to print one array in a sentence

function constant_function(){
    const property =  {type:"House", location:"Seattle", Price:"2.2M" };
    property.type = "Townhouse";
    property.age = "new ";
    document.getElementById("Constant").innerHTML ="There is a "+ property.age +property.type + " in "+ property.location+" that sold for "+
    property.Price+".";
}//this is an example of const and how to add and change one of the properties

var Y=7;
document.write(Y);
{
    let Y =10;
    document.write("<br>"+Y);
}
document.write("<br>"+Y+"<br>");//example of let declares variables that have block scope

var P = 8;
document.write(P);
{
    var P =34;
    document.write("<br>"+P);

}
document.write("<br>"+P);//an axample of how var does not have block scope

let food = {
    type: "Veggie",
    Cuisine: "Asian",
    Spice_level: "very hot",
    description: function() {
        return "This "+ this.Cuisine + this.type + " food is " + this.Spice_level;
    }
};
document.getElementById("Food_object").innerHTML = food.description();


