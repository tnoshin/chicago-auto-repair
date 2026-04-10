let currentSlide = 0;
const slides = document.querySelectorAll('.items');
setInterval(function() {
    currentSlide = currentSlide + 1;

    if (currentSlide >= slides.length){
        currentSlide = 0;
}
slides.forEach(function(slide, index){
    slide.style.display = `none`;
});
slides[currentSlide].style.display = `block`;
}, 5000);

const hamburger = document.querySelector('.fa-bars');
const dropdown = document.querySelector('.dropdown')
hamburger.addEventListener('click', () =>{
    dropdown.classList.toggle('open');

})
const navLinks = document.querySelectorAll('.dropdown a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdown.classList.remove('open');
    });
});