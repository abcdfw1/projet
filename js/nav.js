const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.navbar_menu');

function toggleMenu() {
    navbarMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);
