export function setupMobileMenuAutoClose() {
  const checkbox = document.querySelector("#mobile-menu-toggle");
  const menuLinks = document.querySelectorAll(".mobile-menu a");
  const themeToggle = document.querySelector("#theme-toggle");
  const mobileMenuContainer = document.querySelector(".mobile-menu-container");

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
