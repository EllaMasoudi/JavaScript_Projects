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
}