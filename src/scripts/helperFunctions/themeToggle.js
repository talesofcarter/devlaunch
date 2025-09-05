export function themeToggle() {
  const button = document.getElementById("themeToggle");
  const buttonText = document.getElementById("btnText");
  const icon = document.getElementById("icon");
  let isLight = true;

  button.addEventListener("click", () => {
    if (isLight) {
      buttonText.textContent = "Light";
      icon.innerHTML = ` <img
              src="src/assets/icons/sun.svg"
              alt="light"
            />`;
    } else {
      buttonText.textContent = "Dark";
      icon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
    isLight = !isLight;
  });
}
