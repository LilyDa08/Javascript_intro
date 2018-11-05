let imageBord = document.querySelector('#image1');
function bordure() {
    imageBord.style.border = "2px solid red";
}

function bordureOff() {
    imageBord.style.border = "none";
}
imageBord.addEventListener("mouseover", bordure);
imageBord.addEventListener("mouseout", bordureOff);
