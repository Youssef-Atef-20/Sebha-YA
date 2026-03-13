# Sebha | سبحة

> An elegant digital Islamic prayer beads web app for Tasbeeh counting and daily supplications.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-sebha--ya.vercel.app-6d28d9?style=for-the-badge&logo=vercel)](https://sebha-ya.vercel.app/)

---

## 📖 Description

**Sebha** (سبحة) is a beautifully designed, browser-based Islamic web application that digitally recreates the experience of using prayer beads. It provides a distraction-free space for Tasbeeh counting and reading a curated collection of daily Islamic supplications (Duas) and Adhkar — all within a single, lightweight page that works seamlessly on any device.

---

## ✨ Features

- **📿 Tasbeeh Counter** — Tap anywhere on the screen to increment the counter. A smooth animation and ripple effect provide satisfying tactile feedback with every tap.
- **🔄 Reset Button** — Instantly reset the counter back to zero with a single click.
- **📖 Ayat Al-Kursi** — Full text of the Throne Verse (Al-Baqarah 2:255) displayed with beautiful Arabic typography.
- **🤲 Dua Sayyid Al-Istighfar** — The master supplication for seeking forgiveness, rendered in full.
- **🌅 Morning & Evening Adhkar** — A curated selection of daily remembrances for morning and evening.
- **🕊️ Dua for the Deceased** — A supplication for the departed souls of Muslims.
- **🌙 Daily Duas (Part 1)** — A set of everyday supplications for protection and guidance.
- **✨ Daily Duas (Part 2)** — Additional daily supplications including Salawat and Istighfar.
- **🗂️ Slide-in Sidebar Navigation** — A smooth right-to-left sliding sidebar menu for switching between sections without leaving the page.
- **📱 Fully Responsive** — Optimized for all screen sizes, from small mobile phones to large desktop screens.
- **🎨 Premium Dark UI** — A deep purple/indigo dark theme with animated background orbs, glassmorphism effects, and gold accent colors.

---

## ⚙️ How It Works

1. **On page load**, the user sees a welcome screen with a pulsing prayer beads icon and a hint to tap anywhere to start counting.
2. **Tapping** anywhere on the main content area (excluding the sidebar, header, and counter bar) increments the Tasbeeh counter. Each tap triggers a number bump animation and a purple ripple effect at the tap position.
3. **The hamburger menu** (top-left) slides open a navigation sidebar from the right side of the screen. A blurred dark overlay covers the rest of the page.
4. **Selecting a section** from the sidebar closes the menu and smoothly fades in the chosen content (e.g., Ayat Al-Kursi, Istighfar, Adhkar) in the center of the screen.
5. **The counter bar** is always visible at the bottom of the screen, regardless of which section is active, so the user can count Tasbeeh while reading any supplication.
6. **The Reset button** resets the counter to zero with an animation.
7. The sidebar can also be closed by clicking the overlay or pressing the **Escape key**.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure, semantic markup, and accessibility |
| **CSS3** | Styling, animations, responsive layout, glassmorphism, and CSS custom properties |
| **Vanilla JavaScript** | Counter logic, sidebar toggle, section switching, ripple effects, and animations |
| **Google Fonts** | Arabic typography — [Amiri](https://fonts.google.com/specimen/Amiri) (serif) and [Cairo](https://fonts.google.com/specimen/Cairo) (sans-serif) |
| **SVG** | Scalable vector favicon |
| **Vercel** | Hosting and deployment |

> No frameworks, no build tools, no dependencies — just clean, fast, native web technologies.

---

## 🚀 Live Demo

🔗 **[https://sebha-ya.vercel.app/](https://sebha-ya.vercel.app/)**

---

## 💻 Running Locally

No installation or build step is required. Simply clone the repository and open the HTML file.

```bash
# 1. Clone the repository
git clone https://github.com/your-username/Sebha-YA.git

# 2. Navigate into the project folder
cd Sebha-YA

# 3. Open index.html in your browser
#    On Windows:
start index.html

#    On macOS:
open index.html

#    On Linux:
xdg-open index.html
```

Alternatively, you can use a local development server for a better experience:

```bash
# Using the VS Code Live Server extension, or:
npx serve .
```

---

## 📁 Project Structure

```
Sebha-YA/
│
├── index.html                        # Main HTML file — full page structure, content, and SEO metadata
├── style.css                         # All styles — design system, layout, animations, responsiveness
├── script.js                         # All JavaScript — counter logic, sidebar, section switching
│
├── favicon.svg                       # SVG favicon (prayer beads icon)
├── og-preview.webp                   # Open Graph preview image (1200×630) for social sharing
├── YA.webp                           # Author logo displayed in the header
│
├── robots.txt                        # Search engine crawling instructions
├── sitemap.xml                       # XML sitemap for search engine indexing
│
└── google995908b54b470397.html       # Google Search Console site verification file
```

---

## 🔍 SEO & Metadata Features

The project implements a comprehensive set of SEO and discoverability best practices:

### Primary SEO
- Descriptive `<title>` tag in both Arabic and English
- `<meta name="description">` with bilingual content
- `<meta name="keywords">` with relevant Arabic and English terms
- `<meta name="robots" content="index, follow">` to guide crawlers
- `<link rel="canonical">` to prevent duplicate content issues
- Visually hidden `<h1>` tag (`.sr-only` class) that is readable by search engines without affecting the visual design

### Open Graph (Social Sharing)
Full Open Graph tags for rich previews when sharing links on **WhatsApp**, **Facebook**, and **LinkedIn**:
- `og:title`, `og:description`, `og:image` (1200×630 WebP)
- `og:type`, `og:url`, `og:locale` (`ar_AR`), `og:site_name`

### Twitter Card
- `twitter:card` set to `summary_large_image` for a large preview image on Twitter/X
- Full title, description, image, and alt text tags

### Structured Data (JSON-LD)
A `WebApplication` schema is embedded using JSON-LD, providing rich context to Google and other search engines:
- App name, URL, description, category (`LifestyleApplication`)
- Operating system (`Any`), language (`ar`, `en`), author, and pricing (`Free`)

### PWA & Mobile Meta
- `theme-color` for browser chrome tinting on Android
- `mobile-web-app-capable` and `apple-mobile-web-app-capable` for Add to Home Screen support
- `apple-mobile-web-app-status-bar-style` for iOS status bar styling

### Sitemap & Robots
- `sitemap.xml` — Declares the canonical URL with monthly change frequency and priority 1.0
- `robots.txt` — Allows all crawlers and points them to the sitemap

---

## 👤 Author

**Youssef Atef**

---

## 📄 License

This project is open source. Feel free to use it, share it, and build upon it.
