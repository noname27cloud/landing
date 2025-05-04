export class SwapSection {
  static run() {
    const mediaQuery = window.matchMedia(
      "(max-width: 599px) and (min-width: 375px)"
    );
    const faqSection = document.getElementById("faq");
    const contactUsSection = document.getElementById("contacts");
    const parent = faqSection.parentNode;

    if (mediaQuery.matches) {
      if (contactUsSection.nextElementSibling !== faqSection) {
        parent.insertBefore(contactUsSection, faqSection);
      }
    } else {
      if (faqSection.nextElementSibling !== contactUsSection) {
        parent.insertBefore(faqSection, contactUsSection);
      }
    }
  }
}
