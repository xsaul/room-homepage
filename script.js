const burger = document.getElementById("burger");
const menu = document.querySelector(".mobile-menu");
const close = document.getElementById("close");

burger.addEventListener("click", () => {
  menu.style.display = "flex";
  close.style.display = "flex";
});

close.addEventListener("click", () => {
  menu.style.display = "none";
  burger.style.display = "flex";
  close.style.display = "none";
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slides[slideIndex - 1].style.opacity = "1";
}
