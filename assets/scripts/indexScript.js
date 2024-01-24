const slider = document.getElementById('slider');

var contador = 0;

function siguiente() {
    contador ++;
    if (contador >= slider.children.length) {
        contador = 0;
    }

    actualizarSlider();
}

function anterior() {
    contador --;
    if (contador < 0) {
        contador = slider.children.length -1;
    }

    actualizarSlider();
}

function actualizarSlider() {
    const slideWidth = slider.children[0].offsetWidth;
    slider.style.transform = 'translateX(${-contador * slideWidth}px)';
}

setInterval(siguiente, 3000);