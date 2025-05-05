# 🌐 Interactive Landing Page

## 📋 Project Description

A static landing page enhanced with interactive elements using:

### 🍔 Burger Menu

- Icon animation with CSS transforms
- Mobile-responsive media queries (<599px)

### 🔝 Back-to-Top Button

- Appears after 300px scroll
- Smooth scrolling with `window.scrollTo()`

### 🎠 Content Slider

- Navigation dots
- Auto-rotation with hover pause

### 🌓 Dark Theme

- Toggle via CSS variables
- localStorage persistence

## 🛠 Technology Stack

```javascript
const techStack = [
  "Vanilla JavaScript",
  "CSS3 Custom Properties",
  "HTML5 Semantic Tags",
  "localStorage API",
];
```

## 🌳 Project Structure Tree

```
📦 project-root
├── 📂 assets # All media assets
│ ├── 📂 about/ # About section images
│ ├── 📂 contactUs/ # Contact us visuals
│ ├── 📂 faq/ # FAQ related graphics
│ ├── 📂 hero/ # Hero section images
│ ├── 📂 icon/ # Icons and favicons
│ ├── 📂 projects/ # Project thumbnails
│ ├── 📂 slider/ # Slider content images
│ └── 📂 theme/ # Theme-related assets
│
├── 📂 css # Stylesheets
│ ├── 🎨 style.css # Main page styles (index.html)
│ └── 🎨 style1.css # Projects page styles (index1.html)
│
├── 📂 js # JavaScript modules
│ ├── 📜 articles.js # Articles logic for main page
│ ├── 📜 articles2.js  # Articles logic for projects page (index1.html)
│ ├── 🍔 burger.js # Mobile menu functionality
│ ├── ❓ faq.js # Accordion implementation
│ ├── 🎠 generateSlider.js # Slider generator
│ ├── 📜 main.js # Core script for index.html
│ ├── 📜 main1.js # Core script for index1.html
│ ├── ⏳ projectDays.js # Project duration calculator
│ ├── 🔄 swapSection.js # Section switcher
│ ├── 🔝 teenTop.js # "To top" button logic
│ └── 🌓 themeToogle.js # Theme switcher
│
├── 📄 index.html  # Main landing page
├── 📄 index1.html  # Projects page
└── 📄 README.md # Project documentation
```
