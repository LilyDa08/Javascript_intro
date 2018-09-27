
    console.log("is it working?");

/////

var first_name = prompt('Hello dear friend, could I have your first name ?');

/////

var nombreEnfants = 3,
name = "Jane",
country = "Belgium",
job = "styliste";

console.log("Vous serez " + job + " et habiterez en " + country + " et marié à " + name + " avec " + nombreEnfants + " enfants.");

/////

var currentYear = 2018,
yearOfBirth = 1990;

var age = currentYear - yearOfBirth;

console.log(age);

/////

var name = "Lily",
age = 28,
maxAge = 94,
food = " pâtes",
timePerDay = 2;

var totalFood = (maxAge - age) * 365 * timePerDay;

console.log(totalFood);

/////

var langue = "fr";
var message = "";

if (langue == "fr") {
    message = " Coucou toi!";
} else if (langue == "es") {
    message = " hola chica!";
} else {
    message = " hello you";
};

console.log(message);

/////

var score = 45,
result = "";

if ( score >= 90) {
    result = "A";
} else if (score > 50 && score < 90) {
    result = "B";
} else if (score <= 50) {
    result = "C";
};

console.log(result);

/////

var word = "pomme",
number = 5,
result = "";

if (number <= 1) {
    console.log("j'ai " + number + " " + word);
} else {
    console.log("j'ai " + number + " " + word +"s");
}

/////

var soustraction = function(a, b) {
    return a - b;
};

var addition = function(a, b) {
    return a + b;
};

var multiplication = function(a, b) {
    return a * b;
};
var division = function(a, b) {
    return a / b;
};

var pourcentage = function(a, b) {
    console.log( a + "% de " + b + " = " + (a / 100) * b);
};
var speed = function(a, b) {
    console.log( a / b + " km/h");
};

var result = pourcentage(50, 3);

console.log(result);

/////
