export function GenerateSlider() {
  const sliderContent = document.querySelector(".slider-content");

  fetch("assets/slider/infoSlider.json")
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
        imageContainer.classList.add("slider-slider-image");
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
