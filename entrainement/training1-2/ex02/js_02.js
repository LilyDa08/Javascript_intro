
function calculSurface() {
    let rayon = prompt("donnez-moi le rayon du cercle");
    let surface = Math.round((Math.PI * rayon * rayon));
    document.querySelector(".reponse").innerHTML = "La surface approximative est " + surface + " cm2.";
};

document.querySelector("#bouton").addEventListener("click", calculSurface);

