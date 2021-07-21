function Call_Loop(){
    var Digit ="";
    var X = 1;
    while (X < 6){
        Digit +="<br>"+X;
        X++;
    }
    document.getElementsById("Loop").innerHTML = Digit;
}