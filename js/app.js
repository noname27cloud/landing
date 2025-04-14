function generateSlider() {
  const sliderContent = document.querySelector(".slider-content");

  fetch("assets/infoSlider.json")
    .then((response) => response.json())
    .then((data) => {
      const reviews = data.reviews;
      const allCards = [];
      const allDots = [];

      reviews.forEach((review, index) => {
        const sliderCard = document.createElement("div");
        sliderCard.classList.add("slider-card");
        if (index === 0) sliderCard.classList.add("active");
        allCards.push(sliderCard);

        // Левая часть: инфо + dots
        const infoContainer = document.createElement("div");
        infoContainer.classList.add("slider-info-container");

        const rating = document.createElement("div");
        rating.classList.add("slider-rating");
        rating.innerHTML = `<img src="${review.reviewStar}" alt="Rating stars" class="slider-stars"/>`;

        const reviewText = document.createElement("div");
        reviewText.classList.add("slider-review");
        reviewText.innerHTML = `<h2 class="slider-h2">${review.reviewText}</h2>`;

        const info = document.createElement("div");
        info.classList.add("slider-info");
        info.innerHTML = `
          <p class="slider-name">${review.reviewName}</p>
          <p class="slider-work">${review.reviewJob}</p>
        `;

        // dots (внутри каждой карточки)
        const sliderDots = document.createElement("div");
        sliderDots.classList.add("slider-scroll");

        reviews.forEach((_, dotIndex) => {
          const dot = document.createElement("span");
          dot.classList.add("dot");
          if (dotIndex === index) dot.classList.add("active");

          dot.addEventListener("click", () => {
            allCards.forEach((card) => card.classList.remove("active"));
            allDots.forEach((dotList) =>
              dotList.forEach((d) => d.classList.remove("active"))
            );

            allCards[dotIndex].classList.add("active");
            allDots.forEach((dotList) =>
              dotList[dotIndex].classList.add("active")
            );
          });

          sliderDots.appendChild(dot);
        });

        // сохраняем все dots этого блока для управления
        allDots.push(Array.from(sliderDots.children));

        // собираем левую часть
        infoContainer.appendChild(rating);
        infoContainer.appendChild(reviewText);
        infoContainer.appendChild(info);
        infoContainer.appendChild(sliderDots);

        // Правая часть: изображение
        const imageContainer = document.createElement("div");
        const image = document.createElement("img");
        image.src = review.reviewImage;
        image.alt = "Review Image";
        image.classList.add("slider-image");
        imageContainer.appendChild(image);

        // Добавляем в карточку
        sliderCard.appendChild(infoContainer);
        sliderCard.appendChild(imageContainer);

        // Добавляем в слайдер
        sliderContent.appendChild(sliderCard);
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
