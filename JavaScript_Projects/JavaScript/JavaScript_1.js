function Food_Function(){
    var Food_Output;
    var AllFood = document.getElementById("Food_Input").value;
    var Food_String = " is a tasty food!";
    switch(AllFood) {
        case "Pasta" :
            Food_Output = "Pasta" + Food_String ;
        break;
        case "Grilled chicken" :
                Food_Output = "Grilled chicken" +Food_String;
        break;
        case "Hotdog" :
            Food_Output = "Hotdog" + Food_String;
        break;
        case "Pho" :
            Food_Output = "Pho" + Food_String;
            break;
        case "Grilled veggies":
            Food_Output = "Grilled veggies" + Food_String;
            break;
            default:
                Food_Output = "Please enter a food exactly as written on the above list.";

    }
    document.getElementById("Output").innerHTML = Food_Output;
}//an example of switch statement, there are cases that are different conditions. if there is no match cases then defult will run. 


function My_Cup(){
    var A =document.getElementsByClassName("click");
    A[1].innerHTML = "It is on the table! You found it!";
}

var C = document.getElementById("ID_Name");
var ctx = C.getContext("2d");

var grd =ctx.createLinearGradient(0, 0, 170,0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "yellow");
ctx.fillStyle = grd;
ctx.fillRect(0,0,500,250);
ctx.font = "50px Arial";
ctx.strokeText("Hello!" , 10,70);
