import { SwapSection } from "./swapSection.js";
import { GenerateSlider } from "./generateSlider.js";
import { GenerateArticles } from "./articles.js";
import { Faq } from "./faq.js";
import { TopFunction } from "./teenTop.js";
import { ThemeToggle } from "./themeToogle.js";
import { setupMobileMenuAutoClose } from "./burger.js";
import { GenerateArticles2 } from "./articles2.js";

const isIndex = window.location.pathname.endsWith("index.html");
const isIndex_2 = window.location.pathname.endsWith("index1.html");

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenuAutoClose();
  ThemeToggle();
  TopFunction();

  if (isIndex) {
    SwapSection.run();
    window.addEventListener("resize", SwapSection.run);
    GenerateSlider();
    Faq();
    GenerateArticles();
  }
  if (isIndex_2) {
    GenerateArticles2();
  }
});
