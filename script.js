const HeaderMenu = document.getElementById('menu');
HeaderMenu.addEventListener('click', (e) =>  {
  HeaderMenu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  e.target.classList.add('active');
});
let slideI = 1;
showSlides(slideI);
function pSlides(n) {
  showSlides(slideI += n)
}
function cSlides(n) {
  showSlides(n)
}
function showSlides(n) {
  let slides = document.getElementsByClassName('sl');

  if ( n > slides.length) {
    slideI = 1
  }
  if ( n < 1) {
    slideIndex = slides.length;
  }

  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideI - 1].style.display = "block"
}
const portImg = document.getElementById('block-images');
portImg.addEventListener('click', (e) => {
  portImg.querySelectorAll('img').forEach(el => el.classList.remove('active'));
  e.target.classList.add('active');
});