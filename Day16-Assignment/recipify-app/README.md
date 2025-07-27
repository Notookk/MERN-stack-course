# Recipify

A modern recipe discovery app built with React and Vite. Search, browse trending meals, and view details with a beautiful, responsive UI.

## Features
- Search for recipes using TheMealDB API
- Trending recipes grid with pop-up details
- Responsive design for mobile and desktop
- Modern header and footer with animated icons
- Contact page with form
- Routing for Home, Search, Trending, Contact
- Beautiful CSS with gradients, shadows, and transitions

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd recipify-app
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
```
recipify-app/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   │   ├── Header.jsx, Header.css
  │   │   ├── Footer.jsx, Footer.css
  │   │   ├── Home.jsx, Home.css
  │   │   ├── Search.jsx, Search.css
  │   │   ├── Trending.jsx, Trending.css
  │   │   ├── Contact.jsx, Contact.css
  │   ├── App.jsx
  │   ├── main.jsx
  ├── index.html
  ├── package.json
  └── README.md
```

## API
- Uses [TheMealDB](https://www.themealdb.com/api.php) for recipe data.

## Customization
- Update colors, gradients, and icons in CSS files for your own style.
- Add more pages or features as needed (favorites, user profiles, etc).

## License
MIT

---
Made with ❤️ by Aritra Pradhan
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
