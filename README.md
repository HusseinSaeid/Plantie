# Plantie 🌿 - Natural Skincare & Haircare Landing Page Template

A modern, fully responsive landing page **template** designed for natural skincare and haircare brands. Built with **React**, **Vite**, **Tailwind CSS**, and **Redux UI**, this template delivers an elegant, high-performance web experience across all devices.

---

## 📸 Previews & Performance

| Desktop Preview | Mobile Preview | Lighthouse Score |
| :---: | :---: | :---: |
| [![Desktop Preview](https://i.postimg.cc/MHrVFjhy/screencapture-localhost-4173-2026-09-12-17-40-50.png)] | [![Mobile Preview](https://i.postimg.cc/gcMVJfrf/screencapture-localhost-4173-2026-09-12-17-40-28.png)] | [![Lighthouse Score](https://i.postimg.cc/5NKWsNjc/download-(11).png)] |

---

## ✨ Key Features

* **Template-Ready & Customizable:** Designed as a flexible frontend template—easily swap out product data, branding colors, and imagery.
* **Smart Sticky Navigation (`NavBar.jsx`):** Features real-time active section tracking via `IntersectionObserver` and an animated mobile menu toggle using Lucide icons.
* **Hero Showcase (`Hero.jsx`):** High-impact banner featuring a 100% Certified Organic badge, custom dark gradient overlays, and dual call-to-action buttons.
* **Interactive Product Catalog (`Products.jsx`):**
  * Displays natural skincare and haircare items (Face Balm, Face Soap, Hair Shampoo, Facial Oil) in a responsive grid.
  * Lazy-loaded dialog popup (`React.lazy` + `Suspense`) built with **Redux UI** to display high-resolution product photos, descriptions, pricing, and an **Order Button** *(UI presentation only)*.
* **Dual-Direction Review Marquee (`Reviews.jsx`):** Infinite dual-scrolling customer testimonials powered by `react-fast-marquee`.
* **Footer & Newsletter (`Footer.jsx`):** Brand mission statement, quick links, and a newsletter subscription form with immediate feedback.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React** | UI Framework (`React.lazy`, `Suspense`, Hooks) |
| **Vite** | Fast Development Server & Build Tool |
| **Tailwind CSS** | Utility-First Styling & Responsive Design |
| **Redux UI** | Accessible Dialog Modal & UI State Management |
| **Lucide React** | Animated Menu Icons |
| **React Fast Marquee** | Continuous Review Carousel |
| **JavaScript (ES6+)** | Core Logic |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/plantie.git
cd plantie
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the application.

---

## ⚙️ How to Customize

1. **Products Data:** Modify the product array in `src/components/Products.jsx` to update items, photos, and descriptions.
2. **Theme & Branding:** Adjust primary/secondary accent colors and background variables in `tailwind.config.js` or root styles.
3. **Checkout Integration:** Attach your backend API, payment gateway, or WhatsApp order link to the **Order Button** inside `src/components/ui/ProductDialog.jsx`.

---

## 📁 Project Structure

```text
src/
├── assets/                  # Product photos, badges, and logo assets
├── components/
│   ├── NavBar.jsx           # Sticky navbar with mobile menu & scroll tracking
│   ├── Hero.jsx             # Hero section with CTA buttons
│   ├── Products.jsx         # Product grid triggering Redux UI dialog modal
│   ├── Reviews.jsx          # Infinite marquee customer feedback
│   ├── Footer.jsx           # Site footer & newsletter subscription form
│   └── ui/
│       ├── ProductDialog.jsx# Redux UI dialog modal for product details
│       └── ReviewCard.jsx   # Customer review card component
├── App.jsx                  # Main page layout assembly
└── main.jsx                 # App entry point
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
