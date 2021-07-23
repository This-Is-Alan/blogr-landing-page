const menuBtn = document.querySelector('.nav-mobile-btn__contiainer');
const dropDown = document.querySelector('.nav__dropdown-container');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    dropDown.classList.toggle('nav__dropdown-container--active');
    if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    }
});