import { SwapSection } from "./swapSection.js";
import { GenerateSlider } from "./generateSlider.js";
import { GenerateArticles } from "./articles.js";
import { Faq } from "./faq.js";
import { TopFunction } from "./teenTop.js";
import { ThemeToggle } from "./themeToogle.js";
import { setupMobileMenuAutoClose } from "./burger.js";
import { GenerateArticles_2 } from "./articles2.js";

SwapSection.run();
window.addEventListener("resize", SwapSection.run);
GenerateSlider();
Faq();
TopFunction();
ThemeToggle();
document.addEventListener("DOMContentLoaded", setupMobileMenuAutoClose);
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".projects-articles")) {
    GenerateArticles();
  }
  if (document.querySelector(".projects-articles_2")) {
    GenerateArticles_2();
  }
  if (!document.querySelector("index.html")) {
    GenerateArticles_2();
    TopFunction();
    ThemeToggle();
    setupMobileMenuAutoClose();
  }
});
