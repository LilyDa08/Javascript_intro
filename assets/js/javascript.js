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

// let actors = ["Stalone", "Pitt", "DiCaprio", "Cruise"];
// let podium = ["premier", "deuxième", "troisème", "quatrième"]
// for (i = 0 ; i < actors.length; i++) {
//     console.log("Le " + podium[i] + " is " + actors[i])
// }

/////// MATH

// let minNumbers = Math.min(7, 5, -12, 6, 32, 18, 14, -2);

// console.log(minNumbers);

// let maxNumbers = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);

// console.log(maxNumbers);

// let somme = minNumbers + maxNumbers;
// console.log(somme);

///////

// let floatBateau = 10.4;
// let couleBateau = Math.ceil(floatBateau);
// let voleBateau = Math.floor(floatBateau);

// console.log( couleBateau + " et " + voleBateau);

///////

// let randomNumber = Math.round(Math.random());
// console.log(randomNumber);


// Math.ceil(x)	//Returns the value of x rounded up to its nearest integer
// Math.floor(x)	//Returns the value of x rounded down to its nearest integer
// Math.max(x, y, z, ...)	//Returns the number with the highest value
// Math.min(x, y, z, ...)	//Returns the number with the lowest value
// Math.random()	//Returns a random number between 0 and 1
// Math.round(x)	//Returns the value of x rounded to its nearest integer

// let alea = function(min, max) {
//     console.log(Math.round(Math.random() * (max - min) + min));
// }

// alea(50, 100);

/////////

// let alea = Math.round(Math.random()*10);
// console.log(alea);

/////////

// let personnage = ["Goro", "Johnny Cago", "Kano", "Lily", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];

// let alea = Math.round(Math.random() * personnage.length);

// console.log(personnage[alea]);

/////// OBJECTS

// let character = {
//     name : "Gil",
//     age : 30,
//     items_to_give : ["phone", "DVD", "game"],
//     giveItem : function() {
//         let itemToGive = this.items_to_give[Math.floor(Math.random() * this.items_to_give.length)];
//         console.log(itemToGive);
//     }
// };

// for(let key in character) {

//  console.log(typeof key); 
// 	console.log( key );
// 	console.log( character[key] );
// };

// character.giveItem();

/////////

// let objects = [
// { title: "épée", physic : 17, magic: 9, minLevel: 11, available: true},
// { title: "hache", physic : 12, magic: 13, minLevel: 9, available: true},
// { title: "sceptre", physic : 13 , magic: 11 , minLevel: 5, available: false},
// ]

// let description = function() {
//     for (let i = 0; i < objects.length; i++) {
//         for (let key in objects[i]) {
//             console.log( key + ": " + objects[i][key]);
       
//         }
//     }
// }
// description();

// //
// let available = function() {
//     for ( let i = 0; i <objects.length; i++) {
//         if ( objects[i].available == true) {
//             console.log(objects[i]);
//         };
//     }
// }
// available();

// //
// let level = function() {
//     for ( let i = 0; i <objects.length; i++) {
//         if ( objects[i].minLevel >= 10) {
//             console.log(objects[i]);
//         };

//     }
// }
// level ();
//////////

// let mainCharacter = {
//     name: " Gil",
//     level: 18,
//     life: 95,
//     weapon: {
//         name: "riot-gun",
//         damage : 2
//         },
//     attack: function() {
//         console.log( mainCharacter.name + " attaque avec l'arme " + mainCharacter.weapon.name + ". Les déjâts sont de " + (mainCharacter.level * mainCharacter.weapon.damage));
//     }
// }

// mainCharacter.attack();

//////

let character = {
    nom: this.nom,
    level: this.level,
    life: this.life,
    weapon: {
        arme: this.arme,
        damage : this.damage
        },
    attack: function() {
            console.log( this.nom + " attaque " + opponentCharacter.nom);
            console.log("avec l'arme " + this.weapon.arme);
            console.log("et lui inflige " + this.weapon.damage + " de dégâts.");
            console.log(opponentCharacter.nom + " a maintenant " + (opponentCharacter.life - this.weapon.damage) + " points de vie");
        },
    receiveDamage: function() {
            console.log( this.nom + " est confronté à " + opponentCharacter.nom);
            console.log("qui a l'arme " + opponentCharacter.weapon.arme);
            console.log("il reçoit " + opponentCharacter.weapon.damage + " de dégâts.");
            console.log(this.nom + " s'affaiblit! il n'a plus que " + (mainCharacter.life - this.weapon.damage) + " points de vie !!");
        }
        
};

let mainCharacter = Object.create(character);

mainCharacter.nom = "Gil";
mainCharacter.level = 78;
mainCharacter.life = 95;
mainCharacter.weapon = {
    arme: "riot-gun", 
    damage: 12
}

let opponentCharacter = Object.create(character);

opponentCharacter.nom = "Korgs";
opponentCharacter.level = 72;
opponentCharacter.life = 92;
opponentCharacter.weapon = {
    arme: "m-16", 
    damage: 14
}
    
mainCharacter.attack();
mainCharacter.receiveDamage();








