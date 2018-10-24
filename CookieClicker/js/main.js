let clicDoc = document.querySelector("#clic");
let priceZone = document.querySelector(".price");
let affichageDoc = document.querySelector("#affichage");
let multiZoneDoc = document.querySelector("#multiZone");
let multiPriceDoc = document.querySelector("#multiPrice");
let multipleDoc = document.querySelector('#multiplicateur');


let multiply = 1;
let scoreFinal = 0;
let price;
let interval;

function startGame() {

    document.querySelector('.cookie_zone').style.backgroundColor = '#815229';
    wait();
    affichageDoc.innerHTML = scoreFinal;
    scoreFinal += multiply;
    console.log("1 scoreFinal = " + scoreFinal);
    if (scoreFinal > ((multiply + 1) * 10)) {
        multiZoneDoc.innerHTML = (multiply + 1);
        multiPriceDoc.innerHTML = "Prix = " + ((multiply + 1) * 10) + " cookies";
        multipleDoc.style.visibility = "visible";
        multiPriceDoc.style.visibility = "visible";
    } else {
        multipleDoc.style.visibility = "hidden";
        multiPriceDoc.style.visibility = "hidden";
    }
}

function clickedMultiply() {
    multiply++;
    price = multiply * 10;
    scoreFinal -= price;
    affichageDoc.innerHTML = scoreFinal;
    console.log("2 scoreFinal = " + scoreFinal);
    if (scoreFinal < price) {
        multipleDoc.style.visibility = "hidden";
        multiPriceDoc.style.visibility = "hidden";
    }
    firstStep();
}

function firstStep() {
    clicDoc.addEventListener("click", startGame);
}

function wait() {
    interval = setTimeout(function () {
        document.querySelector('.cookie_zone').style.backgroundColor = '#a36731';
    }, 50);
}

multipleDoc.addEventListener('click', clickedMultiply);

firstStep();
