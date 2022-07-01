const hamburger = document.querySelector("#nav-btn");
const navMenu = document.querySelector("#menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    navMenu.classList.toggle("active");
}