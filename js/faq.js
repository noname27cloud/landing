export function Faq() {
  const container = document.querySelector(".faq-info");

  fetch("assets/faq/faq.json")
    .then((response) => response.json())
    .then((data) => {
      data.faq.forEach((faqItem) => {
        const faqElement = document.createElement("div");
        faqElement.classList.add("faq-item");

        const quetionElement = document.createElement("div");
        quetionElement.classList.add("faqQuestion");
        quetionElement.textContent = faqItem.question;

        let accord;

        if (window.innerWidth <= 599 && window.innerWidth >= 375) {
          const accordContainer = document.createElement("div");
          accord = document.createElement("img");
          accord.classList.add("accord");
          accord.src = faqItem.accordPlus;
          accordContainer.appendChild(accord);
          faqElement.appendChild(accordContainer);
        } else {
          accord = document.createElement("img");
          accord.classList.add("accord");
          accord.src = faqItem.accordPlus;
          faqElement.appendChild(accord);
        }

        const answerElement = document.createElement("div");
        answerElement.classList.add("faqAnswer");
        answerElement.textContent = faqItem.answer;

        faqElement.appendChild(quetionElement);
        faqElement.appendChild(answerElement);
        container.appendChild(faqElement);

        const toggleActive = () => {
          const allFaqItems = document.querySelectorAll(".faq-item");

          allFaqItems.forEach((item) => {
            if (item !== faqElement) {
              item.classList.remove("active");
              const icon = item.querySelector(".accord");
              if (icon) icon.src = faqItem.accordPlus;
            }
          });

          const isActive = faqElement.classList.toggle("active");
          accord.src = isActive ? faqItem.accordMinus : faqItem.accordPlus;
        };

        quetionElement.addEventListener("click", toggleActive);
        accord.addEventListener("click", toggleActive);
      });
    });
}
