function generateSlider() {
  const sliderContent = document.querySelector(".slider-content");
  const sliderDots = document.querySelector(".slider-scroll");

  fetch("assets/infoSlider.json")
    .then((response) => response.json())
    .then((data) => {
      const reviews = data.reviews;

      reviews.forEach((review, index) => {
        const sliderCard = document.createElement("div");
        sliderCard.classList.add("slider-card");
        if (index === 0) sliderCard.classList.add("active");

        sliderCard.innerHTML = `
      <div class="slider-rating">
      <img src="${review.reviewStar}" alt="Rating stars" class="slider-stars"/>
      </div>
       <div class="slider-review">
            <h2 class="slider-h2">${review.reviewText}</h2>
        </div>
         <div class="slider-info">
              <p class="slider-name">${review.reviewName}</p>
              <p class="slider-work">${review.reviewJob}</p>
            </div>
      
          <img
            src="${review.reviewImage}" 
            alt="Review Image"
            class="slider-image" height="60" width="50"
          />
      `;
        sliderContent.appendChild(sliderCard);

        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        sliderDots.appendChild(dot);

        dot.addEventListener("click", () => {
          const allCards = document.querySelectorAll(".slider-card");
          const allDots = document.querySelectorAll(".dot");

          allCards.forEach((card) => card.classList.remove("active"));
          allDots.forEach((d) => d.classList.remove("active"));

          sliderCard.classList.add("active");
          dot.classList.add("active");
        });
      });
    });
}

function generateArticles() {
  const container = document.querySelector(".projects-articles");

  fetch("assets/articles.json")
    .then((response) => response.json())
    .then((data) => {
      const shuffled = data.sort(() => 0.5 - Math.random());
      const randomArticles = shuffled.slice(0, 3);

      randomArticles.forEach((article, index) => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("slider-article");
        if (index === 0) articleDiv.classList.add("active");

        const duration = article.meta.duration_days;
        const technologies = article.meta.technologies.join(", ");

        articleDiv.innerHTML = `
          <div class="article-image"> 
            <img src="${article.articleImage}" alt="Article Image" class="article-img"/>
          </div>
          <div class="article-info">
            <p class="article-tag">${article.tag}</p>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-description">${article.description}</p>
          </div>
          <div class="article-data">
            <p>${duration} days | ${technologies}</p>
            <p>${article.created_at}</p>
          </div>
        `;

        container.appendChild(articleDiv);
      });
    });
}

generateArticles();

generateSlider();
