export function themeSwitcher() {
  const toggleBtn = document.querySelector(".theme-toggle");
  const body = document.body;
  const html = document.documentElement;

  function initTheme() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)")
          .matches)
    ) {
      html.classList.add("dark");
      body.classList.add("bg-black", "text-white");
      body.classList.remove("bg-gray-100", "text-black");
      toggleBtn.checked = true;
    } else {
      html.classList.remove("dark");
      body.classList.add("bg-gray-100", "text-black");
      body.classList.remove("bg-black", "text-white");
      toggleBtn.checked = false;
    }
  }

  function setTheme(isDark) {
    if (isDark) {
      localStorage.theme = "dark";
      html.classList.add("dark");
      body.classList.add("bg-black", "text-white");
      body.classList.remove("bg-gray-100", "text-black");
    } else {
      localStorage.theme = "light";
      html.classList.remove("dark");
      body.classList.add("bg-gray-100", "text-black");
      body.classList.remove("bg-black", "text-white");
    }
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (!("theme" in localStorage)) {
        if (event.matches) {
          html.classList.add("dark");
          body.classList.add("bg-black", "text-white");
          body.classList.remove(
            "bg-gray-100",
            "text-black"
          );
        } else {
          html.classList.remove("dark");
          body.classList.add("bg-gray-100", "text-black");
          body.classList.remove("bg-black", "text-white");
        }
      }
    });

  initTheme();

  // Handle toggle button click
  toggleBtn.addEventListener("click", () => {
    const isDarkMode = body.classList.contains("bg-black");
    setTheme(!isDarkMode);
  });
}
