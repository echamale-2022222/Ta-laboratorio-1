var sliderInner = document.querySelector(".slider--inner");

var images = sliderInner.querySelectorAll("img");

var index = 1;

setInterval(function() {
    var porcentage = index * -100;
    sliderInner.style.transform = "translateX(" +  porcentage + "%)";
    index ++;
    if (index > (images.length -1)) {
        index = 0;
    }
}, 3000);