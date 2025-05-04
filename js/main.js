import { SwapSection } from "./swapSection.js";
import { GenerateSlider } from "./generateSlider.js";
import { GenerateArticles } from "./articles.js";
import { Faq } from "./faq.js";
import { TopFunction } from "./teenTop.js";

SwapSection.run();
window.addEventListener("resize", SwapSection.run);
GenerateSlider();
GenerateArticles.run();
Faq();
TopFunction();
themeToggle();
