let mdpIn = document.querySelector("#mdp");
let confirmIn = document.querySelector("#confirm");

function verifie() {
    if (mdpIn.value == confirmIn.value) {
        mdpIn.style.border="2px solid green";
        confirmIn.style.border="2px solid green";
    } else {
        mdpIn.style.border="2px solid red";
        confirmIn.style.border="2px solid red";
    }
}

document.querySelector("button").addEventListener('click', verifie);