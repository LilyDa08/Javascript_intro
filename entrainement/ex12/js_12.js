
let menu;
let temperature;
let convertedTemp;
let nombreIn;

let conversionChoice = function() {
    menu = prompt("choisissez votre type de conversion:\n" +
        "0. Fin du programme\n" +
        "1.De Celsius vers Fahrenheit\n" +
        "2.De Celsius vers Kelvin\n" +
        "3.De Fahrenheit vers Celsius\n" +
        "4.De Fahrenheit vers Kelvin\n" +
        "5.De Kelvin vers Celsius\n" +
        "6.De Kelvin vers Fahrenheit");

    menuChosen = parseInt(menu);

    if (menuChosen !== 0) {
        temperature = prompt("merci, maintenant, entrez une température");
        nombreIn = parseFloat(temperature);
        conversionTemperature();
    } else {
        alert("merci! @+");
    };
};

let conversionTemperature = function() {
    switch (menuChosen) {
        case 1:
            convertedTemp = (nombreIn * 9 / 5) + 32;
            alert(nombreIn + "°C = " + convertedTemp + "°F");
            break;
        case 2:
            convertedTemp = nombreIn + 273, 15;
            alert(nombreIn + "°C = " + convertedTemp + "K");
            break;
        case 3:
            convertedTemp = (nombreIn - 32) / (9 / 5);
            alert(nombreIn + "°F = " + convertedTemp + "°C");
            break;
        case 4:
            convertedTemp = ((nombreIn - 32) * (5 / 9)) + 273, 15;
            alert(nombreIn + "°F = " + convertedTemp + "K");
            break;
        case 5:
            convertedTemp = nombreIn - 273, 15;
            alert(nombreIn + "K = " + convertedTemp + "°C");
            break;
        case 6:
            convertedTemp = (nombreIn * 9 / 5) - 459, 67;
            alert(nombreIn + "K = " + convertedTemp + "°F");
    }
};

document.querySelector("#bouton").addEventListener("click", conversionChoice);