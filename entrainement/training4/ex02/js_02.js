
function disappear() {
    document.querySelector('#texte').style.visibility = "hidden";
}

function appear() {
    document.querySelector('#texte').style.visibility = "visible";
}

document.querySelector('#afficher').addEventListener('click', appear);
document.querySelector('#masquer').addEventListener('click', disappear);
