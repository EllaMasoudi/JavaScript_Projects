function Vote_Function(){
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote= (Age < 18)? "You are not old enough":"You are eligible";
    document.getElementById("participation").innerHTML=Can_vote+ " to vote.";
}//ternary operators, operates three values. the ternary operator is ?

function Dog(Breed, Behavior, Color, Lifespan ){
    this.Dog_Breed =Breed;
    this.Dog_Behavior = Behavior;
    this.Dog_Color = Color;
    this.Dog_Lifespan =Lifespan;

}
var Coco = new Dog("Poodle", "Friendly", "Brown", "18Years");
var Luna = new Dog("German sheperd", "Watchful", "Black", "13Years");
function myFunction(){
    document.getElementById("New_and_This").innerHTML= "Luna is a "+ Luna.Dog_Color+ Luna.Dog_Breed  +
     " ,he is a "+Luna.Dog_Behavior +" dog"+" and his lifespan is "+ Luna.Dog_Lifespan;

}//Using 'this' and 'new'. example of keywords.

function count_Function(){
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        var Starting_point = 9;
        function Plus_one() {
            Starting_point += 4; 
        }
        Plus_one();
        return Starting_point;
    }
}//Nested function, a function nested under another function

