function Hide_and_Seek() {//this is a function with function name
    var str = "Bingo! I'm here!"; //defining a variable with string value
    var result = str.fontsize("15px");//defining text size for the result of the string in the statement
    document.getElementById("Find_her").innerHTML = result;//the method returns the element with the id of "find her"
}
function myFunction (){ //this is a function with function name
    var sentence ="I am here!";//defining a variable with string value
    sentence += " you found me again!"; //+=operator
    document.getElementById("Find_me").innerHTML= sentence;//the method returns the element with the id of "find me"
}