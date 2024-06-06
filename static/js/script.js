
'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector("[data-preload]");

    if (preloader) {
        window.addEventListener("load", function() {
            preloader.classList.add("loaded");
            document.body.classList.add("loaded");
        });
    } else {
        console.error('Preloader element not found');
    }
});