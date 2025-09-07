export function toggleHamburgerMenu() {
  const hamburgerBtn = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("translate-x-full");
  });
}
