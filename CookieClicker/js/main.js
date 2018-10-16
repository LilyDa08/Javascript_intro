let clicDoc = document.querySelector("#clic");
let affichageDoc = document.querySelector("#affichage");
let multiZoneDoc = document.querySelector("#multiZone");
let multipleDoc = document.querySelector('#multiplicateur');

let minimum = 50;

let score = 1;
let multiButton = 1; // affiché sur le boutton
let multiScore = 1; // calculé pr le score
let totalScore = 0;

function startGame() {

    totalScore += score * multiScore;

    if (totalScore%minimum === 0) {
        multiButton++;
        console.log(minimum);
        multiZoneDoc.innerHTML = multiButton;
        addCookie(); 
    }
    // do score + the extra score
    affichageDoc.innerHTML = totalScore;
}

function addCookie() {

    multipleDoc.style.visibility = "visible";
    multipleDoc.addEventListener('click', augmenterMultiple);

}

function augmenterMultiple() {
    totalScore -= 50;
    multiScore = multiButton;
   // minimum = Math.pow(minimum, multiScore);
    refreshVisuals();

}

function refreshVisuals() {
    affichageDoc.innerHTML = totalScore;
}

clicDoc.addEventListener("click", startGame);
