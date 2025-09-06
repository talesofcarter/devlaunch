import { themeToggle } from "./helperFunctions/themeToggle.js";
import { toggleHamburgerMenu } from "./helperFunctions/toggleHamburgerMenu.js";
import { generateFeatures } from "./helperFunctions/generateFeatures.js";
import { generateTestimonials } from "./helperFunctions/generateTestimonials.js";
import { generatePricing } from "./helperFunctions/generatePricing.js";
import { convertPriceAnnual } from "./helperFunctions/convertPriceAnnual.js";

document.addEventListener("DOMContentLoaded", () => {
  themeToggle();
  toggleHamburgerMenu();
  generateFeatures();
  generateTestimonials();
  generatePricing();
  convertPriceAnnual();
});
