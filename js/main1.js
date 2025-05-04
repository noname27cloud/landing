import { TopFunction } from "./teenTop.js";
import { ThemeToggle } from "./themeToogle.js";
import { setupMobileMenuAutoClose } from "./burger.js";
import { GenerateArticles2 } from "./articles2.js";

TopFunction();
ThemeToggle();
document.addEventListener("DOMContentLoaded", setupMobileMenuAutoClose);
GenerateArticles2();
