export function ThemeToggle() {
  const themeCheckbox = document.querySelector("#theme-toggle");
  const pageTheme = document.body;
  let currentTheme = localStorage.getItem("theme");

  if (!currentTheme) {
    currentTheme = "light";
    localStorage.setItem("theme", currentTheme);
  }

  if (currentTheme === "dark") {
    pageTheme.classList.add("dark-theme");
    themeCheckbox.checked = true;
  }

  themeCheckbox.addEventListener("change", () => {
    pageTheme.classList.toggle("dark-theme");
    const theme = pageTheme.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
}
