import { themeToggle } from "./helperFunctions/themeToggle.js";
import { toggleHamburgerMenu } from "./helperFunctions/toggleHamburgerMenu.js";
import { generateFeatures } from "./helperFunctions/generateFeatures.js";
import { tabSwitching } from "./helperFunctions/tabSwitching.js";

document.addEventListener("DOMContentLoaded", () => {
  themeToggle();
  toggleHamburgerMenu();
  generateFeatures();
  tabSwitching();
});
