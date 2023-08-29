const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".nav-hamburger-icon");
const darkOverlay = document.querySelector(".dark-overlay");

let isClicked = false;

hamburger.addEventListener("click", () => {
  navList.classList.toggle("nav-list-active");
  darkOverlay.classList.toggle("dark-overlay-active");
  document.body.classList.toggle("no-scroll");
  if (!isClicked) {
    hamburger.src = "images/icon-menu-close.svg";
    isClicked = true;
  } else {
    hamburger.src = "images/icon-menu.svg";
    isClicked = false;
  }
});
