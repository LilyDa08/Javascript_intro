
 let i = 1;
 let nombre;
 let total = 0;

let somme = function () {
   
    for (i = 1; i <= 3; i++) {
         nombre = prompt("entrez un chiffre");
         let nombreIn = parseInt(nombre);
         total = total + nombreIn;
    };
    alert("La somme totale est " + total);
    location.reload();
};

document.querySelector("#bouton").addEventListener("click", somme)