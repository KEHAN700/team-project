// JavaScript to open and close the mobile header menu

document.addEventListener("DOMContentLoaded", function () {
    const menuOpenBtn = document.querySelector('.menu-open-btn');
    const mobMenu = document.querySelector('.mob-menu');
    const menuExitBtn = document.querySelector('.menu-exit-btn');

    // Open mobile menu when menu button is clicked
    menuOpenBtn.addEventListener('click', function () {
        mobMenu.classList.add('is-open');
    });

    // Close mobile menu when exit button is clicked
    menuExitBtn.addEventListener('click', function () {
        mobMenu.classList.remove('is-open');
    });

    // Optional: close menu when clicking outside of it
    mobMenu.addEventListener('click', function (e) {
        if (e.target === mobMenu) {
            mobMenu.classList.remove('is-open');
        }
    });
});