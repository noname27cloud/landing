function generateSlider(data) {
  const sliderContent = document.querySelector(".slider-content");
  fetch("assets/infoSlider.json")
    .then((response) => response.json())
    .then((data) => {
      data.reviews.forEach((review, index) => {
        const sliderCard = document.createElement("div");
        sliderCard.classList.add("slider-card");

        sliderCard.innerHTML = `
      <div class="slider-rating">
      <img src="${review.reviewStar}" alt="Rating stars" class="slider-stars"/>
      </div>
       <div class="slider-review">
            <h2 class="slider-h2">${reviewText}</h2>
        </div>
         <div class="slider-info">
              <p class="slider-name">${reviewName}</p>
              <p class="slider-work">${reviewJob}</p>
            </div>
            <div class="slider-scroll">
              <span class="dot active"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
          <img
            src="${reviewImage}"
            alt="Review Image"
            class="slider-image"
          />
      `;
      });
    });
}
