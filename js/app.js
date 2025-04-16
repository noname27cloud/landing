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

      randomArticles.forEach((article) => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("slider-article");

        const duration = article.meta.duration_days;
        const techList = article.meta.technologies || [];
        const worksList = article.meta.works || [];
        const fullList = [...techList, ...worksList];
        const formattedMeta = fullList.join(" | ");

        // setTimeout(randomArticles, 3000);

        articleDiv.innerHTML = `
        <div class="projects-article">
          <div class="article-image"> 
            <img src="${article.articleImage}" alt="Article Image" class="article-img"/>
          </div>
          <div class="article-info">
            <p class="article-tag">${article.tag}</p>
            <h3 class="article-title">
  <a href="#" class="article-link" >
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
            <p class="article-duration">${duration} days | ${formattedMeta}</p>
            <p class="article-created">${article.created_at}</p>
          </div>
          </div>
        `;

        container.appendChild(articleDiv);
      });

      function switchSlide () {
        
      }
    });
}

function faq() {
  const container = document.querySelector(".faq-info");

  fetch("assets/faq.json")
    .then((response) => response.json())
    .then((data) => {
      data.faq.forEach((faqItem) => {
        const faqElement = document.createElement("div");
        faqElement.classList.add("faq-item");

        const quetionElement = document.createElement("div");
        quetionElement.classList.add("faqQuestion");
        quetionElement.textContent = faqItem.question;

        const accord = document.createElement("img");
        accord.classList.add("accord");
        accord.src = faqItem.accordPlus;

        const answerElement = document.createElement("div");
        answerElement.classList.add("faqAnswer");
        answerElement.textContent = faqItem.answer;

        faqElement.appendChild(quetionElement);
        faqElement.appendChild(accord);
        faqElement.appendChild(answerElement);
        container.appendChild(faqElement);

        const toggleActive = () => {
          faqElement.classList.toggle("active");
        };

        quetionElement.addEventListener("click", toggleActive);
        accord.addEventListener("click", toggleActive);
      });
    });
}

faq();

generateArticles();

generateSlider();
