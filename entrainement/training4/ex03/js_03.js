document.querySelector(".green").addEventListener('click', addGreen);
document.querySelector(".red").addEventListener('click', addRed);
document.querySelector(".blue").addEventListener('click', addBlue);

function addGreen() {
    document.querySelector('p').style.color = "green";
}
function addRed() {
    document.querySelector('p').style.color = "red";
}
function addBlue() {
    document.querySelector('p').style.color = "blue";
}