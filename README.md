# Élara Voss — Interior Design Portfolio (Vite + React)

A luxury interior design portfolio built with **Vite 5** + **React 18**.
Cream & mint green palette, real photography, smooth animations.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
interior-portfolio-vite/
├── index.html                  ← Vite entry point (root level)
├── vite.config.js              ← Vite config (React plugin, port 3000)
├── package.json
├── README.md
├── public/
│   └── favicon.svg             ← Custom mint-green favicon
└── src/
    ├── main.jsx                ← ReactDOM.createRoot entry
    ├── App.jsx                 ← Root — composes all sections + global hooks
    │
    ├── styles/
    │   ├── global.css          ← Imported in main.jsx (fonts, animations, responsive)
    │   └── tokens.js           ← Design tokens (all colour values)
    │
    ├── hooks/
    │   └── index.js            ← useCursor · useReveal · useScrolledNav · useSmoothScroll
    │
    ├── data/
    │   └── index.js            ← Projects · Services · Gallery · Testimonials · Process
    │
    └── components/
        ├── UI.jsx              ← SectionTag · SectionTitle · BtnPrimary
        ├── Nav.jsx             ← Sticky nav, blurs on scroll
        ├── Hero.jsx            ← Full-screen split with float stats card
        ├── Marquee.jsx         ← Infinite ticker
        ├── Featured.jsx        ← Asymmetric 4-card project grid
        ├── About.jsx           ← Studio story + stacked images
        ├── Services.jsx        ← 6-card dark mint grid
        ├── Gallery.jsx         ← 6-photo masonry grid
        ├── Process.jsx         ← 4-step timeline
        ├── Testimonials.jsx    ← Sliding carousel
        ├── Contact.jsx         ← Split form layout
        └── Footer.jsx
```

---

## 🎨 Colour Tokens (`src/styles/tokens.js`)

| Token       | Hex        | Used for                    |
|-------------|------------|-----------------------------|
| `cream`     | `#f8f4ee`  | Main page background        |
| `creamDark` | `#ede7da`  | Gallery section background  |
| `mintPale`  | `#e4f0eb`  | Testimonials, accent bar    |
| `mint`      | `#9dbfad`  | Cursor ring                 |
| `mintDeep`  | `#6b9e8a`  | Tags, links, form focus     |
| `mintDark`  | `#3d6b58`  | Buttons, nav, services bg   |
| `charcoal`  | `#1e2520`  | Body text, dark footer      |
| `warmGray`  | `#5a5650`  | Secondary copy              |
| `gold`      | `#c8a86b`  | Stars, marquee separators   |

---

## ✏️ Customising Content

All text/image content lives in **`src/data/index.js`** — just edit arrays there.

**Photos:** Replace Unsplash URLs in `src/data/index.js` and `src/components/Hero.jsx`.

**Designer name:** Search and replace `Élara Voss` across components.

**Colours:** Edit `src/styles/tokens.js` — all components import from this file.

---

## 📦 Dependencies

| Package              | Purpose                    |
|----------------------|----------------------------|
| `vite`               | Build tool & dev server    |
| `@vitejs/plugin-react` | JSX transform via Vite   |
| `react` + `react-dom`| UI framework               |
| `react-router-dom`   | Client-side routing (ready)|

No CSS framework, no UI library — pure React + inline styles + one global CSS file.
