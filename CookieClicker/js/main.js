let clicDoc = document.querySelector("#clic");
let priceZone = document.querySelector(".price");
let cookieZone = document.querySelector(".cookie_zone");
let affichageDoc = document.querySelector("#affichage");
let multiZoneDoc = document.querySelector("#multiZone");
let multiPriceDoc = document.querySelector("#multiPrice");
let multipleDoc = document.querySelector('#multiplicateur')
let flagMulti = true;

let minimum = 20;

let score = 1;
let multiButton = 1; // affiché sur le boutton
let multiScore = 1; // calculé pr le score
let totalScore = 0;

function startGame() {
    totalScore += score * multiScore;

        if (totalScore % minimum === 0) {
            multiButton++;
            multiZoneDoc.innerHTML = multiButton;
            multiPriceDoc.innerHTML = multiButton * 10;
            console.log("1 : " + multiButton);
            addCookie();
     
    }
    // do score + the extra score
    affichageDoc.innerHTML = totalScore;
}

function addCookie() {
    priceZone.style.visibility = "visible";
    multipleDoc.style.visibility = "visible";
    console.log("2 : " + multiButton);
    multipleDoc.addEventListener('click', increaseMultipler);
}

function increaseMultipler() {
    if (totalScore >= (multiButton * 10)) {
        totalScore -= (multiButton * 10);
        console.log("3 : " + multiButton);
        multiScore = multiButton;
        if (totalScore < (multiButton * 10)) {
            priceZone.style.visibility = "hidden";
            multipleDoc.style.visibility = "hidden";
            console.log("4 : " + multiButton);
        }
    }
    affichageDoc.innerHTML = totalScore;
    console.log("5 : " + multiButton);
    return multiScore;
}

//function refreshVisuals() {
//
//    affichageDoc.innerHTML = totalScore;
//}

clicDoc.addEventListener("click", startGame);
