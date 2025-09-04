import { themeToggle } from "./themeToggle.js";

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("flex");
});

document.addEventListener("DOMContentLoaded", () => {
  themeToggle();
});
