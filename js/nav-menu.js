const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.navbar nav');

menuBtn.addEventListener('click', toggleMenu);

let isMenuOpen = false;

function toggleMenu() {
    if (!isMenuOpen) {
        menuBtn.classList.add('close');
        navMenu.classList.add('show');

        isMenuOpen = true;
    } else {
        menuBtn.classList.remove('close');
        navMenu.classList.remove('show');

        isMenuOpen = false;
    }
}