// console.log(" Test! test! is it working?");

// /////   VARIABLES

// var first_name = prompt('Hello dear friend, could I have your first name ?');

// /////

// var nombreEnfants = 3,
// name = "Jane",
// country = "Belgium",
// job = "styliste";

// console.log("Vous serez " + job + " et habiterez en " + country + " et marié à " + name + " avec " + nombreEnfants + " enfants.");

// /////

// var currentYear = 2018,
// yearOfBirth = 1990;

// var age = currentYear - yearOfBirth;

// console.log(age);

// /////

// var name = "Lily",
// age = 28,
// maxAge = 94,
// food = " pâtes",
// timePerDay = 2;

// var totalFood = (maxAge - age) * 365 * timePerDay;

// console.log(totalFood);

// /////   LOGIQUE

// var langue = "fr";
// var message = "";

// if (langue == "fr") {
//     message = " Coucou toi!";
// } else if (langue == "es") {
//     message = " hola chica!";
// } else {
//     message = " hello you";
// };

// console.log(message);

// /////

// var score = 45,
// result = "";

// if ( score >= 90) {
//     result = "A";
// } else if (score > 50 && score < 90) {
//     result = "B";
// } else if (score <= 50) {
//     result = "C";
// };

// console.log(result);

// /////

// var word = "pomme",
// number = 5,
// result = "";

// if (number <= 1) {
//     console.log("j'ai " + number + " " + word);
// } else {
//     console.log("j'ai " + number + " " + word +"s");
// }

// /////  FONCTIONS

// var soustraction = function(a, b) {
//     return a - b;
// };

// var addition = function(a, b) {
//     return a + b;
// };

// var multiplication = function(a, b) {
//     return a * b;
// };
// var division = function(a, b) {
//     return a / b;
// };

// var pourcentage = function(a, b) {
//     console.log( a + "% de " + b + " = " + (a / 100) * b);
// };
// var speed = function(a, b) {
//     console.log( a / b + " km/h");
// };

// var result = pourcentage(50, 3);

// console.log(result);

// /////  BOUCLES

// var
//  i = 0;
// while ( i<=20 ) {
//     if (i % 2 == 0) {  //                    < i % 2 == 0    pour savoir si la var est pair !!!!!!!!!
//         console.log(i + " est un nombre pair.");  
//     } else {
//         console.log(i  + " est un nombre impair.");
//     };
//     i++;
// };

///////

// for ( var i = 0; i <= 10; i++) {
//     console.log(i + " * 9 = " + i * 9);
// };

///////

// var i = 0;

// while (i <= 100) {
//     var result = function(i) {
//         if (i > 90) {
//             console.log( i + " est dans le grade A.");
//         } else if (i > 80) {
//             console.log( i + " est dans le grade B.");
//         } else if (i > 70) {
//             console.log( i + " est dans le grade C.");
//         } else if (i > 65) {
//             console.log( i + " est dans le grade D.");
//         } else {
//             console.log( i + " est dans le grade F.");
//         };
//     };
//     result(i);
//     i++;
// }

///////

// function repeatStringTimes(string, time) {
//     var repeatString = "";
//     while (time <= 5) {
//         console.log(repeatString);
//         repeatString += string;
//         time++;
//     };
//     return repeatString;
// };
// repeatStringTimes("* ", 0);

///////    TABLEAUX

// let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let total = 0;

// for (let i = 0; i < tableau.length; i++) {
//     total += tableau[i];
// };

// console.log(total);

///////

let actors = ["Stalone", "Pitt", "DiCaprio", "Cruise"];

for (i = 0 ; i < actors.length; i++) {
    console.log("Le numéro " + (i+1) + " is " + actors[i])
}