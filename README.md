# Aniket Mestry — Portfolio

A fast, editorial portfolio for a Full-Stack & Flutter developer. Built with
**Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and
**Framer Motion**. Designed to feel hand-crafted: serif display type, monospace
labels, hairline ledgers, film-grain, and restrained motion.

## Tech

- Next.js 14 · React 18 · TypeScript
- Tailwind CSS 3 (custom theme: `ink` / `bone` / `clay`)
- Framer Motion (reveal + micro-interactions, respects reduced-motion)
- `next/font` (Fraunces · Inter · JetBrains Mono — zero layout shift)
- Built-in SEO: metadata, Open Graph, JSON-LD, sitemap, robots

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm start          # serve the build
```

## Make it yours

- **All content** lives in [`app/lib/data.ts`](app/lib/data.ts) — name, links,
  skills, experience, projects. Edit there; every section updates.
- **Résumé**: drop your PDF in `public/` as `Aniket-Mestry-CV.pdf`.
- **Social links**: set real `github` / `linkedin` URLs in `data.ts`.
- **Domain**: replace `aniket-mestry.vercel.app` in `app/layout.tsx`,
  `app/page.tsx`, `app/robots.ts`, and `app/sitemap.ts`.
- **Accent color**: change `clay` in [`tailwind.config.ts`](tailwind.config.ts).

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com/new) → **Import** the repo.
3. Framework preset auto-detects **Next.js**. No env vars needed. **Deploy.**

Or from the CLI:

```bash
npm i -g vercel
vercel            # follow prompts
vercel --prod
```
