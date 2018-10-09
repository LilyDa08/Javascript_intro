// let pointure = prompt("quelle est ta pointure?");
// let yearOfBirth = prompt("quelle est ton année de naissance?");

// let calcul = function () {
//    let resultat= ((((pointure * 2) + 5) * 50) - yearOfBirth) + 1766;
//     return resultat;
// }

// alert(calcul());

/////


let bouton = document.querySelector("#valider");

function statut() {
    let age = document.getElementById("age").value;
    if (age >= 18) {
        alert("vous êtes majeur");
    } else {
        alert("vous êtes mineur");
    }
}

bouton.addEventListener("click", statut);