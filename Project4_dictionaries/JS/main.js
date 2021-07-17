function my_Dictionary(){//defining function named my-dictionary
    var Weather = {
        Seattle:"Rainy",// these are keys and values
        Houston:"Sunny",
        Burlington:"Snow",
        WashingtonDC:"Cloudy"

    };
    delete Weather.Houston;//delete one othe keys and the value is undefined
    document.getElementById("Dictionary").innerHTML= Weather.Houston;//return the value of houston
}