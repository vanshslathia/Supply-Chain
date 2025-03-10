'use strict';

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const viewDetailButtons = document.querySelectorAll(".view-detail");
  
  viewDetailButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the page from scrolling to the top
      
      const card = button.closest(".service-card");
      const cardText = card.querySelector(".card-text");

      // Toggle expanded content
      cardText.classList.toggle("expanded");

      // Optionally, you can update the button text
      if (cardText.classList.contains("expanded")) {
        button.querySelector(".span").textContent = "Show Less";
      } else {
        button.querySelector(".span").textContent = "View Detail";
      }
    });
  });
});