import { testimonials } from "../../data/testimonials.js";
export function generateTestimonials() {
  const testimonialsGrid = document.querySelector(
    ".testimonials-grid"
  );
  let testimonialsRender = "";

  testimonials.forEach((testimony) => {
    testimonialsRender += `
    <div class="relative bg-transparent p-8 rounded-2xl border border-gray-700 backdrop-blur-sm">
        <div class="flex items-center gap-4 mb-4">
            <img
            class="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
            src=${testimony.portrait}
            alt="Sarah Chen"
            />
            <div>
            <h5
                class="text-xl font-semibold text-white"
            >
                ${testimony.name}
            </h5>
            <p class="text-gray-400 text-base">
                ${testimony.occupation}
            </p>
            </div>
        </div>
        <div
            class="text-lg text-gray-300 mb-4"
        >
            ${testimony.review}
        </div>
        <div class="absolute top-10 right-10 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#fe9431" stroke="#black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote-icon lucide-quote"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>
        </div>
    </div>
    `;
  });
  testimonialsGrid.innerHTML = testimonialsRender;
}
