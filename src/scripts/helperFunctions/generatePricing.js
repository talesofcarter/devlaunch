import { pricing } from "../../data/pricing.js";
export function generatePricing() {
  const pricingGrid =
    document.querySelector(".pricing-grid");
  let pricingGridRender = "";

  pricing.forEach((priceItem) => {
    const subPriceHTML = priceItem.features
      .map(
        (subPriceFeature) => `
      <li class="flex flex-row gap-3 items-center">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
          ${subPriceFeature}
        </li>
      `
      )
      .join("");

    pricingGridRender += `
        <div class="border border-gray-900 p-7 rounded-lg flex flex-col gap-4">
            <h1 class="text-2xl font-extrabold">
            ${priceItem.category}
            </h1>
            <p>
            ${priceItem.description}
            </p>

            <hr class="border-t-1 border-gray-900" />

            <div class="flex flex-row items-center">
            <span id="priceNum" class="text-5xl font-bold">$${priceItem.price}</span>
            <span>/month</span>
            </div>

            <ul class="flex flex-col gap-5">
            ${subPriceHTML}
            </ul>
            <button
            class="bg-[var(--theme-color)] py-4 rounded-lg font-bold flex flex-row items-center justify-center gap-3 mt-5 cursor-pointer hover:bg-[var(--theme-dark)] transition-all duration-300 ease-out"
            >
            Start Trial For 14 Days
            </button>
        </div>
    `;
  });
  pricingGrid.innerHTML = pricingGridRender;
}
