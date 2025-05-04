import { SwapSection } from "./swapSection.js";
import { GenerateSlider } from "./generateSlider.js";
import { GenerateArticles } from "./articles.js";
import { Faq } from "./faq.js";
import { TopFunction } from "./teenTop.js";
import { ThemeToggle } from "./themeToogle.js";
import { setupMobileMenuAutoClose } from "./burger.js";
import { GenerateArticles2 } from "./articles2.js";

SwapSection.run();
window.addEventListener("resize", SwapSection.run);
GenerateSlider();
GenerateArticles();
Faq();
TopFunction();
ThemeToggle();
document.addEventListener("DOMContentLoaded", setupMobileMenuAutoClose);
GenerateArticles2();
