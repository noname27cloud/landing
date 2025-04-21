function themeToggle() {
  const themeCheckbox = document.querySelector("#theme-toggle");
  const pageTheme = document.body;
  let currentTheme = localStorage.getItem("theme");

  if (!currentTheme) {
    currentTheme = "light";
    localStorage.setItem("theme", currentTheme);
  }

  if (currentTheme === "dark") {
    pageTheme.classList.add("dark-theme");
    themeCheckbox.checked = true;
  }

  themeCheckbox.addEventListener("change", () => {
    pageTheme.classList.toggle("dark-theme");
    const theme = pageTheme.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
}

function topFunction() {
  // Get the button:
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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
  container.innerHTML = ""; // очищаем старые статьи

  fetch("assets/articles.json")
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
        const formattedDuration = formatProjectDuration(durationDays);

        const techList = article.meta.technologies || [];
        const worksList = article.meta.works || [];
        const fullList = [...techList, ...worksList];
        const formattedMeta = fullList.join(" | ");

        articleDiv.innerHTML = `
          <div class="projects-article" data-delay="2000s">
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

document.querySelectorAll("nav ul li").forEach((item) => {
  item.addEventListener("click", (e) => {
    const query = e.target.textContent.trim().toLowerCase();
    if (query === "all") {
      fetchData().then((data) => generateArticles(data.results));
    } else {
      Search(query);
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

themeToggle();
topFunction();
generateArticles();
