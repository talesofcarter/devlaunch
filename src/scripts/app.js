import { themeToggle } from "./helperFunctions/themeToggle.js";
import { toggleHamburgerMenu } from "./helperFunctions/toggleHamburgerMenu.js";
import { generateFeatures } from "./helperFunctions/generateFeatures.js";
import { generateTestimonials } from "./helperFunctions/generateTestimonials.js";

document.addEventListener("DOMContentLoaded", () => {
  themeToggle();
  toggleHamburgerMenu();
  generateFeatures();
  generateTestimonials();
});
