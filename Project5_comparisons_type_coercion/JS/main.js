document.write(typeof " Great","\n");//Typeof operator, string 
document.write("10" + 5,"\n");//string and number, type coercion
function my_function(){
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}//to check if this is a string or a number
document.write(-3E310,"\n","\n");//-infinity, negative number that is lower 
document.write(2E540 ,"\n");//infinity, higher than our max floating number
document.write(10<2 ,"\n");//boolean logic
document.write(10>2,"\n");//boolean
console.log(567+86,"\n");//console.log method
console.log(567<86,"\n");
document.write(33==33,"\n");//double equal sign,to check if the data on the left side of the symbol is equal to the right side
document.write(33==35,"\n");

A = "Great";//Triple equal signs, to check if data is equal in both sides and if their type of data is equal
B = 8;
document.write( A===B,"\n");

X = 6;
Y = 6;
document.write(X===Y,"\n");

C= "8";
D= 8; 
document.write(C===D,"\n");

T = "good";
R = "Better";
document.write(T === R,"\n");

document.write(6<8 && 72>50,"\n" );//logical operators, to check if the logic between values are true then return true, both should be true to return true
document.write(8<6 && 72>50,"\n" );

document.write(8<6 || 72>50,"\n" );//to ckeckif one of the values are true then will return true
document.write(6<4 || 40>50,"\n" );


function not_Function(){
    document.getElementById("Not").innerHTML= !(50>20);
}//Not operator, to check whether or not sth is true
function another_Function(){
    document.getElementById("number").innerHTML= !(10>20);
}