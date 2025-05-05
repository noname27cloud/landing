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
│ ├── 🎨 style.css # Main styles (production)
│ └── 🎨 style1.css # Alternative styles (dev)
│
├── 📂 js # JavaScript modules
│ ├── 📜 articles.js # Project articles logic
│ ├── 📜 articles2.js # Alternative articles logic
│ ├── 🍔 burger.js # Mobile menu functionality
│ ├── ❓ faq.js # Accordion implementation
│ ├── 🎠 generateSlider.js # Slider generator
│ ├── 📜 main.js # Core application logic
│ ├── 📜 main1.js # Alternative entry point
│ ├── ⏳ projectDays.js # Project duration calculator
│ ├── 🔄 swapSection.js # Section switcher
│ ├── 🔝 teenTop.js # "To top" button logic
│ └── 🌓 themeToogle.js # Theme switcher
│
├── 📄 index.html # Main production page
├── 📄 index1.html # Development/alt page
└── 📄 README.md # Project documentation
