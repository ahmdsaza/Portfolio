"use strict";

/* Add event listener on multiple elements */

const addEventOnElements = function (elements, evenType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(evenType, callback);
  }
};

/* Nanbar toggle for mobile */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navTogglers.classList.toggle("active");
  overlay.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

/* Active header when window scroll down to 100px */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
