'use strict';

/*
navbar toggle 
 */

const navbar = document.querySelector('[data-navbar]');
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');

navToggleBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    this.classList.toggle('active');
})

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener('click', function() {
        navbar.classList.toggle('active');
        navToggleBtn.classList.toggle('active');
    })
}

/* 
header
*/
/* 
back to top
*/
const backTop = document.querySelector('[data-back-to-top-btn]')
const header = document.querySelector('[data-header]');
window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
        header.classList.add('active')
        backTop.classList.add('active')
    } else {
        header.classList.remove('active')
        backTop.classList.remove('active')
    }
})