'use strict';

// This function will be called when the HTML Content is loaded in 
document.addEventListener("DOMContentLoaded", function() {
    // Selects the preloader element with the data preloaded //
    const preloader = document.querySelector("[data-preload]");
    // Checks the preloader element //
    if (preloader) {
        // Event listenr that waits for everything to load, if it loads then it addes the loaded //
        window.addEventListener("load", function() {
            preloader.classList.add("loaded");
            document.body.classList.add("loaded");
        });
    } else {
        console.error('Preloader element not found');
    }
});

window.onload = function() {
    const menu_btn = document.querySelector('.hamburger');
    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
    });
}
