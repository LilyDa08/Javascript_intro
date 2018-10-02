//// MOUSE EVENT
function pouf() {
    this.style.opacity = 0;
}
let allDiv = document.querySelectorAll('.hoverMe');

for (i = 0; i < allDiv.length; i++) {
    oneDiv = allDiv[i];
    oneDiv.addEventListener('mouseover', pouf);
}

///////////

let resetButton = document.querySelector('#reset');

function paf() {
    for (i = 0; i < allDiv.length; i++) {
        oneDiv = allDiv[i];
        oneDiv.style.opacity = 1;
    }
}
resetButton.addEventListener('click', paf);

////////

let axeX = document.querySelector('#axe-x');
let axeY = document.querySelector('#axe-y');

function gps() {

    axeX.innerHTML = event.clientX;
    axeY.innerHTML = event.clientY;
}

document.addEventListener('mouseover', gps);

////////////  KEYBOARD

let bgTouch = document.querySelector('#character');

function pressButton() {
    switch (event.keyCode) {
        case 48:
            bgTouch.style.backgroundColor = "blue";
            break;
        case 49:
            bgTouch.style.backgroundColor = "red";
            break;
        case 50:
            bgTouch.style.backgroundColor = "black";
            break;
        case 51:
            bgTouch.style.backgroundColor = "green";
            break;
        case 52:
            bgTouch.style.backgroundColor = "pink";
            break;
        case 53:
            bgTouch.style.backgroundColor = "gray";
            break;
        case 54:
            bgTouch.style.backgroundColor = "lightgray";
            break;
        case 55:
            bgTouch.style.backgroundColor = "yellow";
            break;
        case 56:
            bgTouch.style.backgroundColor = "purple";
            break;
        case 57:
            bgTouch.style.backgroundColor = "magenta";
            break;
    }
}

document.addEventListener("keydown", pressButton);

////////
let arrowUp = document.querySelector('#up');
let arrowDown = document.querySelector('#down');
let arrowLeft = document.querySelector('#left');
let arrowRight = document.querySelector('#right')

arrowLeft.classList.remove('highlight');
arrowRight.classList.remove('highlight');
arrowUp.classList.remove('highlight');
arrowDown.classList.remove('highlight');

function pressArrow() {
    switch (event.keyCode) {
        case 37:
            arrowLeft.classList.add('highlight');
            break;
        case 38:
            arrowUp.classList.add('highlight');
            break;
        case 39:
            arrowRight.classList.add('highlight');
            break;
        case 40:
            arrowDown.classList.add('highlight');
            break;
    }
};
function releaseArrow() {
    switch (event.keyCode) {
        case 37:
            arrowLeft.classList.remove('highlight');
            break;
        case 38:
            arrowUp.classList.remove('highlight');
            break;
        case 39:
            arrowRight.classList.remove('highlight');
            break;
        case 40:
            arrowDown.classList.remove('highlight');
            break;
    }
};
document.addEventListener("keydown", pressArrow);
document.addEventListener("keyup", releaseArrow);