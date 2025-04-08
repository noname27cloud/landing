function generateSlider(data) {
  const sliderContent = document.querySelector(".slider-content");
  const sliderDots = document.querySelector(".slider-scroll");

  fetch("assets/infoSlider.json")
    .then((response) => response.json())
    .then((data) => {
      const reviews = data.reviews;

      reviews.forEach((review, index) => {
        const sliderCard = document.createElement("div");
        sliderCard.classList.add("slider-card");

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
            <div class="slider-scroll">
              <span class="dot active"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
          <img
            src="${review.reviewImage}"
            alt="Review Image"
            class="slider-image"
          />
      `;
      });
    });
}

generateSlider();
