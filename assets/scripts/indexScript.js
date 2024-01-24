const slider = document.querySelectorAll('.slider_content');
const anterior = document.querySelector('.anterior');
const siguiente = document.querySelector('.siguiente');
var index = 0;

const mount = () => slider[index].classList.add('active');

siguiente.addEventListener('click', () =>{
    slider[index].classList.remove('.active')
    index ++;
    mount();
});



mount();
