function themeToggle() {
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

function setupMobileMenuAutoClose() {
  const checkbox = document.querySelector("#mobile-menu-toggle");
  const menuLinks = document.querySelectorAll(".mobile-menu a");
  const themeToggle = document.querySelector("#theme-toggle"); // Замените на свой селектор, если другой
  const mobileMenuContainer = document.querySelector(".mobile-menu-container");

  // Закрытие меню
  function closeMenu() {
    if (checkbox && checkbox.checked) {
      checkbox.checked = false;
    }
  }

  // Клик по ссылке в меню
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Клик по кнопке смены темы
  if (themeToggle) {
    themeToggle.addEventListener("click", closeMenu);
  }

  // Изменение размеров окна
  window.addEventListener("resize", closeMenu);
}

// Инициализация после загрузки DOM

themeToggle();
document.addEventListener("DOMContentLoaded", setupMobileMenuAutoClose);
