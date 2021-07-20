var Y= 150;
function Add_numbers_1(){
    document.write(26 + Y +"<br>");
}
function Add_numbers_2(){
    document.write( Y + 160 +"<br>");
}
Add_numbers_1();
Add_numbers_2();
//example of global variable

function Add_numbers_3(){
    var X=75;
    document.write( 45 +X +"<br>" );
}
function Add_numbers_4(){
    document.write( X +530);
}
Add_numbers_3();
Add_numbers_4();

//example of local variable
function Add_numbers_2(){
    var X=75;
    console.log(72+X);
}
function Add_Numbers_4(){//intentionally write numbers with capital N
    console.log(X+200);
}
Add_numbers_3();
Add_numbers_4();//the second X doesnt show because x is not defined 

function get_Date(){
    if (new Date().getHours() <12){
        document.getElementById("Greeting").innerHTML = "Good Morning!";
    }
}//if statement. It will show good morning if the time is before noon

function get_Date(){
    if(new Date().getHours() >18){
        document.getElementById("BedTime").innerHTML = "Good Night!";
    }
}//in this if statement shows good night if it is after 6pm

function Score_Function(){
    Score = document.getElementById("Score").value;
    if (Score >= 70){
        Exam= "You passed the exam!";
    }
    else{
        Exam= "You didn't pass the exam!";
    }
    document.getElementById("What_is_your_score?").innerHTML = Exam;
}// this if/else statement shows if you put numbers above 70 you will get the text "you passed" any number less than 70 will show you didnt pass 

function Time_function(){
    var Time= new Date().getHours();
    var Reply;
    if (Time <12 == Time>0){
        Reply = "It is morning time!";
    }
    else if(Time >= 12 == Time< 18){
        Reply = "It is afternoon!";
    }
    else {
        Reply= "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}//if/else if/else , there are 3 different conditions here to show a text