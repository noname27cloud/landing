function formatProjectDuration(days) {
  if (days < 1) return "1 day";
  if (days < 7) return `${days} day${days > 1 ? "s" : ""}`;
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""}`;
  } else {
    const months = Math.floor(days / 30);
    return `${months} month${months > 1 ? "s" : ""}`;
  }
}

function generateArticles(filter = "all") {
  const container = document.querySelector(".projects-articles");

  // Плавное исчезновение перед заменой контента
  container.style.opacity = 0;

  setTimeout(() => {
    container.innerHTML = ""; // очищаем старые статьи

    fetch("assets/projects/articles.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredArticles =
          filter === "all"
            ? data
            : data.filter((article) => article.tag.toLowerCase() === filter);

        filteredArticles.forEach((article, index) => {
          const articleDiv = document.createElement("div");
          articleDiv.classList.add("slider-article");

          const durationDays = article.meta.duration_days;
          const formattedDuration = formatProjectDuration(durationDays);

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

          // ⚡ Добавляем анимацию с небольшой задержкой, чтобы успел отрисоваться DOM
          requestAnimationFrame(() => {
            articleDiv.classList.add("fade-in");
          });
        });

        // Плавное появление всей секции
        setTimeout(() => {
          container.style.opacity = 1;
        }, 200);
      });
  }, 200); // немного времени на плавное исчезновение
}

document.querySelectorAll("nav ul li").forEach((item) => {
  item.addEventListener("click", (e) => {
    const query = e.target.textContent.trim().toLowerCase();
    if (query === "all") {
      fetchData().then((data) => generateArticles(data.results));
    }
  });
});

document.querySelectorAll(".filter-container .tab").forEach((button) => {
  button.addEventListener("click", () => {
    // Удалить активный класс у всех
    document
      .querySelectorAll(".filter-container .tab")
      .forEach((btn) => btn.classList.remove("active"));
    // Добавить активный класс текущей
    button.classList.add("active");

    // Получить фильтр из data-filter
    const filter = button.dataset.filter.toLowerCase(); // "all", "websites", "applications"
    const tagFilter =
      filter === "all"
        ? "all"
        : filter === "websites"
        ? "website"
        : "application";

    generateArticles(tagFilter);
  });
});

// Инициализация после загрузки DOM
document.addEventListener("DOMContentLoaded", setupMobileMenuAutoClose);

generateArticles();
