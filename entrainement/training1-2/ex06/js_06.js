
let tab = [-2, 1, 4];

let soustrait = function(x) {
    if (x >= 0) {
        return "le resultat est " + x + ". c'est un nombre positif";
    } else {
        return "le resultat est " + x + ". c'est un nombre négatif";
    }
}

let affiche = function() {
    for (let i = 0; i < tab.length; i++) {
        if (i !== 1) {
            alert(soustrait(tab[i]));
        }
    }
}

document.querySelector('#bouton').addEventListener("click", affiche);