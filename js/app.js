function generateSlider() {
  const sliderContent = document.querySelector(".slider-content");

  fetch("assets/infoSlider.json")
    .then((response) => response.json())
    .then((data) => {
      const reviews = data.reviews;
      const allCards = [];
      const allDots = [];
      let activeIndex = 0;
      let autoSlideInterval;

      reviews.forEach((review, index) => {
        const sliderCard = document.createElement("div");
        sliderCard.classList.add("slider-card");
        if (index === 0) sliderCard.classList.add("active");
        allCards.push(sliderCard);

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

        const sliderDots = document.createElement("div");
        sliderDots.classList.add("slider-scroll");

        reviews.forEach((_, dotIndex) => {
          const dot = document.createElement("span");
          dot.classList.add("dot");
          if (dotIndex === index) dot.classList.add("active");

          dot.addEventListener("click", () => {
            changeSlide(dotIndex);
          });

          sliderDots.appendChild(dot);
        });

        allDots.push(Array.from(sliderDots.children));

        infoContainer.appendChild(rating);
        infoContainer.appendChild(reviewText);
        infoContainer.appendChild(info);
        infoContainer.appendChild(sliderDots);

        const imageContainer = document.createElement("div");
        const image = document.createElement("img");
        image.src = review.reviewImage;
        image.alt = "Review Image";
        image.classList.add("slider-image");
        imageContainer.appendChild(image);

        sliderCard.appendChild(infoContainer);
        sliderCard.appendChild(imageContainer);

        sliderContent.appendChild(sliderCard);
      });

      function changeSlide(index) {
        allCards.forEach((card) => card.classList.remove("active"));
        allDots.forEach((dotList) =>
          dotList.forEach((dot) => dot.classList.remove("active"))
        );

        allCards[index].classList.add("active");
        allDots.forEach((dotList) => dotList[index].classList.add("active"));
        activeIndex = index;
      }

      function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
          activeIndex = (activeIndex + 1) % reviews.length;
          changeSlide(activeIndex);
        }, 3000); // Change slide every 3 seconds
      }

      function stopAutoSlide() {
        clearInterval(autoSlideInterval);
      }

      // Start the auto-slide when the page loads
      startAutoSlide();

      // Pause the slider on hover or touch
      sliderContent.addEventListener("mouseenter", stopAutoSlide);
      sliderContent.addEventListener("mouseleave", startAutoSlide);

      // Handle touch events for mobile devices
      let touchStartTime = 0;
      sliderContent.addEventListener("touchstart", (e) => {
        touchStartTime = Date.now();
        stopAutoSlide();
      });
      sliderContent.addEventListener("touchend", () => {
        const touchEndTime = Date.now();
        if (touchEndTime - touchStartTime < 500) {
          startAutoSlide();
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching slider data:", error);
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

        articleDiv.innerHTML = `
        <div class="projects-article" data-delay="2000s">
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

      // function switchSlide () {

      // }
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
          if (faqElement.classList.contains("active")) {
            accord.src = faqItem.accordMinus;
          } else {
            accord.src = faqItem.accordPlus;
          }
        };

        quetionElement.addEventListener("click", toggleActive);
        accord.addEventListener("click", toggleActive);
      });
    });
}

faq();

generateArticles();

generateSlider();
