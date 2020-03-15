function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_function () {
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    can_vote = (Age < 18) ? "You are not old enough to" : "You can";
    document.getElementById("Vote").innerHTML = can_vote + " vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Train Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Person(first, last, age, eye) {
    this.first_name = first;
    this.last_name = last;
    this.age = age;
    this.eye_Color = eye;
}
var Father = new Person("Ray", "Bailey", 64, "green");
var Sister = new Person("Kristen", "Bailey", 35, "brown");
var Mother = new Person("Karen", "Bailey", 57, "blue");
var Brother = new Person("Bobby", "Bailey", 38, "blue");
function Person_function() {
    document.getElementById("New_and_This").innerHTML =
    "My Father is " + Father.first_name + " and he is " + Father.age + " years old. ";
}

function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count ();
    function Count () {
        var Starting_point = 9;
        function Plus_one () {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}