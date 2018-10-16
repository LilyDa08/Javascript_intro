let weight;
let height;
let convertedTemp;
let nombreIn;
let valueIMC;

let calculIMC = function () {
    weight = prompt("quel poids faites-vous? (en kg)");
    height = prompt("quelle taille faites-vous? (en cm)");
    let weightNb = parseFloat(weight);
    let heightNb = parseFloat(height);
    valueIMC = (weightNb / ((heightNb/100)* (heightNb/100)));
    var result = parseFloat(valueIMC.toFixed(2))
    if(result < 16.5) {
        alert("votre IMC = " + result + " vous êtes sous-nutritionné"); 
    }else if(result >= 16.5 && result < 18.5) {
        alert("votre IMC = " + result + " vous êtes maigre"); 
    } else if(result >= 18.5 && result < 25) {
        alert("votre IMC = " + result + " vous avez un poids idéal"); 
    } else if(result >= 25 && result < 30) {
        alert("votre IMC = " + result + " vous êtes en léger surpoids"); 
    } else if(result >= 30 && result < 35) {
        alert("votre IMC = " + result + " vous êtes en surpoids"); 
    } else if(result >= 35 && result < 40) {
        alert("votre IMC = " + result + " vous êtes dangereusement en surpoids"); 
    } else {
        alert("votre IMC = " + result + " vous avez une obésité morbide. régime indispensable !"); 
    }
}
document.querySelector("#bouton").addEventListener("click", calculIMC);