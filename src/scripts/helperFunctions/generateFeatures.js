import { features } from "../../data/features.js";

export function generateFeatures() {
  const featureNav = document.getElementById("feature-nav");
  let featureNavRender = "";

  features.forEach((feature) => {
    featureNavRender += `
    <li class="flex-1 min-w-[120px] max-w-[200px] py-3 px-2 sm:py-4 sm:px-3 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out hover:bg-[var(--theme-color)] active:bg-[var(--theme-color)]">
      <a class="text-white text-lg sm:text-base md:text-lg hidden md:block" href="#">${feature.feature}</a>
      <a class="sm:px-3 text-white text-xs sm:text-sm md:hidden block" href="#">${feature.subTitle}</a>
    </li>
    `;
  });

  featureNav.innerHTML = featureNavRender;
}
