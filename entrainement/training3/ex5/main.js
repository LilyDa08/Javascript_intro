
let eachImg = document.querySelectorAll("img");

    for (let i = 0; i < eachImg.length; i++) {

        document.querySelector(`#image${i+1}`).addEventListener("mouseover", changeEl);
        
        function changeEl() {    
            eachImg[i].src = `images/image${i+1}_2.jpg`;
        } 

        document.querySelector(`#image${i+1}`).addEventListener("mouseout", imgDefault);

        function imgDefault() {    
            eachImg[i].src = `images/image${i+1}.jpg`;
        } 
    }