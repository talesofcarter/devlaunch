import { themeToggle } from "./helperFunctions/themeToggle.js";
import { toggleHamburgerMenu } from "./helperFunctions/toggleHamburgerMenu.js";
import { generateFeatures } from "./helperFunctions/generateFeatures.js";
import { generateTestimonials } from "./helperFunctions/generateTestimonials.js";
import { generatePricing } from "./helperFunctions/generatePricing.js";

const billingToggle = document.getElementById(
  "billing-toggle"
);

document.addEventListener("DOMContentLoaded", () => {
  themeToggle();
  toggleHamburgerMenu();
  generateFeatures();
  generateTestimonials();
  generatePricing(false);
});

if (billingToggle) {
  billingToggle.addEventListener("change", (event) => {
    generatePricing(event.target.checked);
  });
}
