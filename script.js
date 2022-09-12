const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    target.forEach(function(elemento) {
        if((windowTop) > elemento.offsetTop){
            elemento.classList.add(animationClass);
        }

        console.log(elemento.offsetTop);
    })
};

window.addEventListener('scroll', function(){
    animeScroll();
});