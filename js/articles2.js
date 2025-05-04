import { FormatProjectDuration } from "./projectDays.js";

export function GenerateArticles2() {
  const container = document.querySelector(".projects-articles");

  function generateArticles(filter = "all") {
    container.style.opacity = 0;

    setTimeout(() => {
      container.innerHTML = "";

      fetch("assets/projects/articles.json")
        .then((response) => response.json())
        .then((data) => {
          const filteredArticles =
            filter === "all"
              ? data
              : data.filter((article) => article.tag.toLowerCase() === filter);

          filteredArticles.forEach((article) => {
            const articleDiv = document.createElement("div");
            articleDiv.classList.add("slider-article");

            const durationDays = article.meta.duration_days;
            const formattedDuration = FormatProjectDuration(durationDays);

            const techList = article.meta.technologies || [];
            const worksList = article.meta.works || [];
            const fullList = [...techList, ...worksList];
            const formattedMeta = fullList.join(" | ");

            articleDiv.innerHTML = `
              <div class="projects-article">
                <div class="article-image"> 
                  <img src="${article.articleImage}" alt="Article Image" class="article-img"/>
                </div>
                <div class="article-info">
                  <p class="article-tag">${article.tag}</p>
                  <h3 class="article-title">
                    <a href="#" class="article-link">
                      ${article.title}
                      <svg class="article-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </a>
                  </h3>
                  <p class="article-description">${article.description}</p>
                </div>
                <div class="article-data">
                  <p class="article-duration">${formattedDuration} | ${formattedMeta}</p>
                  <p class="article-created">${article.created_at}</p>
                </div>
              </div>
            `;

            container.appendChild(articleDiv);

            requestAnimationFrame(() => {
              articleDiv.classList.add("fade-in");
            });
          });

          setTimeout(() => {
            container.style.opacity = 1;
          }, 200);
        });
    }, 200);
  }

  // фильтрация через верхнее меню
  document.querySelectorAll("nav ul li").forEach((item) => {
    item.addEventListener("click", (e) => {
      const query = e.target.textContent.trim().toLowerCase();
      if (query === "all") {
        generateArticles("all");
      }
    });
  });

  // фильтрация через табы
  document.querySelectorAll(".filter-container .tab").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-container .tab")
        .forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");

      const filter = button.dataset.filter.toLowerCase();
      const tagFilter =
        filter === "all"
          ? "all"
          : filter === "websites"
          ? "website"
          : "application";

      generateArticles(tagFilter);
    });
  });

  // начальная загрузка
  generateArticles();
}
