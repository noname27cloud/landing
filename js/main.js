import { SwapSection } from "./swapSection.js";
import { GenerateSlider } from "./generateSlider.js";
import { GenerateArticles } from "./articles.js";
import { Faq } from "./faq.js";
import { TopFunction } from "./teenTop.js";
import { ThemeToggle } from "./themeToogle.js";
import { setupMobileMenuAutoClose } from "./burger.js";
import { GenerateArticles2 } from "./articles2.js";

function initIndexPage() {
  const articles = document.querySelector(".projects-articles");
  const slider = document.querySelector(".slider-content");
  const faq = document.querySelector(".faq");

  if (articles) GenerateArticles();
  if (slider) GenerateSlider();
  if (faq) Faq();

  SwapSection.run();
  window.addEventListener("resize", SwapSection.run);
}

function initIndex1Page() {
  const articles2 = document.querySelector(".projects-articles_2");
  if (articles2) GenerateArticles2();
}

// Гарантированно запускается после полной загрузки DOM
window.addEventListener("DOMContentLoaded", () => {
  setupMobileMenuAutoClose();
  ThemeToggle();
  TopFunction();

  const pathname = window.location.pathname;
  if (
    pathname.endsWith("index.html") ||
    pathname === "/" ||
    pathname === "/index.html"
  ) {
    initIndexPage();
  } else if (pathname.endsWith("index1.html")) {
    initIndex1Page();
  }
});
