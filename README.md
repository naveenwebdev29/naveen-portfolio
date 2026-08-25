# Portfolio

A dark-themed, single-page developer portfolio built with Angular — hero with an interactive
constellation canvas, About, Skills, Projects, Experience, and a Contact section.

## Before you deploy — personalize it

All editable content lives at the top of `src/app/app.ts`:

- `name`, `role`, `typedRoles`, `tagline`, `email`, `location`
- `socials` — GitHub / LinkedIn / email links
- `aboutParagraphs`, `stats`
- `skills` — add/remove entries, grouped by category
- `projects` — title, description, tech stack, live/repo links
- `experience` — your work history

Also update:
- `src/index.html` — page `<title>` and meta description
- `public/favicon.ico` — replace with your own icon
- Add your resume PDF to `public/resume.pdf` (see `resumeUrl` in `app.ts` if you rename it)

## Run locally

```bash
npm install
npm start
```

Opens at http://localhost:4200

## Build for production

```bash
npm run build
```

Output goes to `dist/portfolio/browser`.

## Deploy — GitHub + Vercel

See the deployment walkthrough shared alongside this project, or:

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → Import the repo.
3. Vercel auto-detects Angular; confirm build command `npm run build` and
   output directory `dist/portfolio/browser` (already set in `vercel.json`).
4. Deploy. Every push to `main` auto-redeploys.
