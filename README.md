# Learn Japanese Grammar

A small site for beginner Japanese grammar: lessons, examples, and graded fill-in-the-blank exercises.

Built with **Vite + React** (plain JavaScript). Deploys to **Vercel** as a static site.

## Run locally

You need [Node.js](https://nodejs.org/) (includes `npm`).

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Vercel should auto-detect Vite. Defaults are fine:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**.

## Project layout

```text
src/
  data/lessons.js     ← edit grammar & exercises here
  lib/grader.js       ← checks answers
  pages/              ← Home, Lesson, Exercise screens
  components/         ← reusable UI pieces
  styles/global.css   ← colors & layout
```

## Add a new lesson

Open `src/data/lessons.js` and copy one of the lesson objects. Change `id`, `title`, `explanation`, `examples`, and `exercises`.
