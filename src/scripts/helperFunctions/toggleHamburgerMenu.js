export function toggleHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const header = document.getElementById("header");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    navMenu.classList.toggle("flex");
    navMenu.classList.toggle("-translate-x-full");
    navMenu.classList.toggle("-translate-x-0");
  });
}
