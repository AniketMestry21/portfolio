# Aniket Mestry — Portfolio

A personal portfolio built with **React + Vite** and plain **CSS** — no
TypeScript, no heavy frameworks. Simple to read, simple to edit.

## Tech

- React 18 (plain JavaScript / JSX)
- Vite (dev server + build)
- Plain CSS with a light/dark theme toggle

## Run it locally

```bash
npm install      # one time — installs React + Vite
npm run dev      # start dev server → http://localhost:5173
```

Build for production:

```bash
npm run build    # output goes to the dist/ folder
npm run preview  # preview the production build
```

## Edit your content

Almost everything (name, links, skills, experience, projects, contact)
lives in one file: **`src/data.js`**. Change it there and every section
updates.

- **Résumé:** put your PDF in the `public/` folder, e.g. `public/Aniket-Mestry-CV.pdf`.
- **Colors:** change the variables at the top of `src/styles.css`.

## Deploy on Vercel

1. Push this folder to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects **Vite** — just click **Deploy**.
   (Build command `npm run build`, output directory `dist`.)
