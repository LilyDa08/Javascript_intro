let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let text = "";
let textWin1 = "";
let textWin2 = "";

class AllPlayers {
    constructor() {
        this.win = 0;
        this.cardLeft = 5;
        this.card = [];
    }
};

let playerOne = new AllPlayers();
let playerTwo = new AllPlayers();
let interval;

let zoneText = document.querySelector('.startGame');
let winZone = document.querySelector('.winner');
let cardLeft = document.querySelector('#leftCard');
let cardRight = document.querySelector('#rightCard');
let theWinnerIs = document.querySelector('section');
let imgzone1 = document.querySelector('.image1');
let imgzone2 = document.querySelector('.image2');

//let imgCreate = document.createElement("img");
//document.querySelector('.image').appendChild(imgCreate);

///// MELANGE DES CARTES //////

function aleatoireMix() {

    zoneText.innerHTML = "Mélange des cartes ...";
    let counter = cards.length;

    // While there are elements in the array
    while (counter > 0) {

        let index = Math.round(Math.random() * counter);

        counter--;

        let temp = cards[counter];
        cards[counter] = cards[index];
        cards[index] = temp;
    }
    let cleanArray = cards.filter(function (delUndef) {
        return (delUndef !== undefined);
    });
    cards = cleanArray;

    document.querySelector('#bouton').style.display = "none";
    wait();
    return cards;
}

//////  DISTRIBUTION ///////

function distribution(player, otherPlayer) {

    zoneText.innerHTML = "Distribution des cartes :<br/>chaque joueur reçoit 5 cartes.";
    player.card.push(cards[0], cards[1], cards[2], cards[3], cards[4]);
    otherPlayer.card.push(cards[5], cards[6], cards[7], cards[8], cards[9]);
    console.log("player1 cards : " + playerOne.card);
    console.log("player2 cards : " + playerTwo.card);

    waitTour();
}

let plaidCard = []; // CARTES POSEES

function gameTour(player, otherPlayer) {

    if (player.cardLeft >= 0 || otherPlayer.cardLeft >= 0) {
//        let img = cards[0];
//        imgzone1.src =`../img/${img}.png`;
        /////// PLAYER 1 plays ///////
        plaidCard.push(player.card[0]);
        let img1 = plaidCard[0];
        imgzone1.src =`../img/${img1}.png`;
        player.card.shift();

        let firstCard = plaidCard[0];
        //alert('Le joueur 1 à posé un ' + plaidCard[0] + ".");
        text = `Le joueur 1 à posé un ${firstCard}.<br/>`;


        ////// PLAYER 2 plays /////// 3
        plaidCard.push(otherPlayer.card[0]);
        let img2 = plaidCard[1];
        imgzone2.src =`../img/${img2}.png`;
        otherPlayer.card.shift();
        let secondCard = plaidCard[1];
        text += `Le joueur 2 a mis un ${secondCard}.<br/>`;
    }
    zoneText.innerHTML = text;
    waitCompare();
}

//// COMPARE CARDS /////

function comparaison(player, otherPlayer) {

    player.cardLeft--;
    otherPlayer.cardLeft--;

    if (plaidCard[0] > plaidCard[1]) {
        // player1 wins
        player.win++;
        textWin1 = `player1 gagne! X${player.win}<br/>`;

    } else if (plaidCard[0] < plaidCard[1]) {
        // player2 wins
        otherPlayer.win++;
        textWin2 = `player2 gagne! X${otherPlayer.win}<br/>`;
    }
    plaidCard = []; // table de jeu vide
    winZone.innerHTML = textWin1 + textWin2;
    waitWin();
}

function winningPlayer(player, otherPlayer) {

    if ((player.cardLeft === 0) && (otherPlayer.cardLeft === 0)) {

        if (player.win > otherPlayer.win) {

            text = "Player 1 is the winner!";
            theWinnerIs.innerHTML = text;
            replayAgain();
        } else if (player.win < otherPlayer.win) {
            text = "Player 2 is the winner!";
            theWinnerIs.innerHTML = text;
            replayAgain();
        }

    } else {
        gameTour(playerOne, playerTwo);
        zoneText.innerHTML = text;
    }
}

function replayGame(player, otherPlayer) {
    let rejouer = confirm('rejouez?');
    if (rejouer === true) {
        location.reload();
    } else {
        alert('Merci au revoir');
    }
}

function wait() {
    interval = setTimeout(function () {
        distribution(playerOne, playerTwo)
    }, 2000);
};

function waitTour() {
    interval = setTimeout(function () {
        gameTour(playerOne, playerTwo)
    }, 2000);
};

function waitCompare() {
    interval = setTimeout(function () {
        comparaison(playerOne, playerTwo)
    }, 1500);
};

function waitWin() {
    interval = setTimeout(function () {
        winningPlayer(playerOne, playerTwo)
    }, 1000);
};

function replayAgain() {
    interval = setTimeout(function () {
        replayGame(playerOne, playerTwo)
    }, 2000);
};
/// GO GAME 

document.querySelector('#bouton').addEventListener('click', function () {
    aleatoireMix(playerOne, playerTwo);
});
