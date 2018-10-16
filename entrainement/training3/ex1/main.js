function survol() {
    document.querySelector('#image1').src="image1_2.jpg";
}

function imgDefault() {
    document.querySelector('#image1').src="image1.jpg";
}

document.querySelector('#image1').addEventListener("mouseover", survol);

document.querySelector('#image1').addEventListener("mouseout", imgDefault);