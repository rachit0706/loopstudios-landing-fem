const closeButton = document.querySelector('.close-button');
const navMenu = document.querySelector('.nav-menu');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function() {
    navMenu.style.transform = "translateX(0%)";
});

closeButton.addEventListener('click', function() {
    navMenu.style.transform = "translateX(100%)";
});