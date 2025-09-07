import { pricing } from "../../data/pricing.js";
export function generatePricing(isAnnually) {
  const pricingGrid =
    document.querySelector(".pricing-grid");
  const duration = isAnnually ? "year" : "month";

  let pricingGridRender = "";

  pricing.forEach((priceItem) => {
    const price = isAnnually
      ? priceItem.annualPrice
      : priceItem.monthlyPrice;

    const isPro = priceItem.category === "Pro";
    const cardClasses = isPro
      ? "bg-[#fc7e08] text-white relative z-10 transition-all duration-300 transform scale-105"
      : "bg-transparent text-white border border-gray-700";

    const buttonClasses = isPro
      ? "bg-white text-[var(--theme-color)] hover:bg-gray-200"
      : "bg-[var(--theme-color)] hover:bg-[var(--theme-dark)]";

    const subPriceHTML = priceItem.features
      .map(
        (subPriceFeature) => `
      <li class="flex items-start gap-2">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        class="mt-1 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="${isPro ? "#ffffff" : "#fe9431"}"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        >
        <path
            d="M22 11.08V12a10 10 0 1 1-5.93-8.65"
        />
        <path d="M22 4 12 14.01l-3-3" />
        </svg>
          <span class="text-base">${subPriceFeature}</span>
        </li>
      `
      )
      .join("");

    pricingGridRender += `
        <div class="p-7 rounded-lg flex flex-col gap-4 ${cardClasses} h-full">
            <h1 class="text-2xl font-extrabold">
            ${priceItem.category}
            </h1>
            <p class="flex-grow">
            ${priceItem.description}
            </p>

            <hr class="border-t-1 ${
              isPro ? "border-white" : "border-gray-900"
            }" />

            <div class="flex flex-row items-center">
            <span id="priceNum" class="text-5xl font-bold">$${price}</span>
            <span>/${duration}</span>
            </div>

            <ul class="flex flex-col gap-5">
            ${subPriceHTML}
            </ul>
            <button
            class="${buttonClasses} py-4 rounded-lg font-bold flex flex-row items-center justify-center gap-3 mt-auto cursor-pointer transition-all duration-300 ease-out"
            >
            Start Trial For 14 Days
            </button>
        </div>
    `;
  });
  pricingGrid.innerHTML = pricingGridRender;
}
