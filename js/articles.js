import { FormatProjectDuration } from "./projectDays.js";

export function GenerateArticles() {
  const container = document.querySelector(".projects-articles");

  fetch("assets/projects/articles.json")
    .then((response) => response.json())
    .then((data) => {
      const shuffled = data.sort(() => 0.5 - Math.random());
      const randomArticles = shuffled.slice(0, 3);

      randomArticles.forEach((article) => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("slider-article");

        const durationDays = article.meta.duration_days;
        const formattedDuration = FormatProjectDuration(durationDays);

        const techList = article.meta.technologies || [];
        const worksList = article.meta.works || [];
        const fullList = [...techList, ...worksList];
        const formattedMeta = fullList.join(" | ");

        articleDiv.innerHTML = `
          <div class="projects-article" >
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
      });
    });
}
