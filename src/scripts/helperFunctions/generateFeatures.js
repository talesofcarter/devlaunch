import { features } from "../../data/features.js";

export function generateFeatures() {
  const featuresGrid = document.querySelector(
    ".features-content-grid"
  );
  let featuresGridRender = "";

  features.forEach((feature) => {
    const subFeaturesHTML = feature.bulletFeatures
      .map(
        (subFeature) => `
      <li class="flex items-start gap-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="mt-1 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fe9431"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path
                d="M22 11.08V12a10 10 0 1 1-5.93-8.65"
            />
            <path d="M22 4 12 14.01l-3-3" />
        </svg>
        <p class="text-gray-300 text-base">
            ${subFeature}
        </p>
        </li>
      `
      )
      .join("");

    featuresGridRender += `
  
    <div class="text-white">
        <div class="p-8 rounded-2xl border border-gray-900 backdrop-blur-sm mb-6 h-full flex flex-col">
            <div class="flex items-center gap-4 mb-4">
                <div class="p-3 rounded-full bg-[var(--theme-color)]">
                    <img
                        src="${feature.icon}"
                    />
                </div>
                <h2
                    class="text-xl sm:text-2xl font-bold"
                >
                    ${feature.feature}
                </h2>
                </div>
                  <p class="text-gray-300 text-base mb-6 flex-grow">
                    ${feature.description}
                  </p>

                  <hr
                    class="border-t border-gray-900 my-6"
                  />
                <ul class="space-y-4">
                ${subFeaturesHTML}
                </ul>
                </div>
              </div>
    `;
  });
  featuresGrid.innerHTML = featuresGridRender;
}
