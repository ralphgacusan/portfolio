# Software Engineer Portfolio

React + Vite portfolio site. Single-page scrolling home (`/`) plus `/projects` and `/projects/:projectId`.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Editing content

Everything is data-driven — no need to touch components for content changes:

- `src/data/portfolio.js` — name, headline, bio, resume path, FormsFree endpoint
- `src/data/projects.js` — add/edit projects (each shows on `/projects/:id` automatically)
- `src/data/skills.js` — skills/technologies grid
- `src/data/experience.js` — work + education timeline

## Replacing placeholders

- **Resume:** replace `public/resume.pdf` with your real PDF (same filename, or update `resumeUrl` in `src/data/portfolio.js`)
- **Project images:** replace files in `public/projects/<project-id>/` with real screenshots (same filenames, or update the `images`/`thumbnail` paths in `src/data/projects.js`)
- **Contact form:** replace `contactFormEndpoint` in `src/data/portfolio.js` with your real FormsFree/Formspree endpoint

## Structure

```
src/
├── components/   reusable UI (Navbar, Hero, ProjectCard, ContactForm, etc.)
├── pages/        Home, Projects, ProjectDetails
├── data/         all editable content
├── layouts/      shared page layout (navbar + footer)
├── hooks/        scroll-reveal + active-section hooks
└── styles/       global design tokens + base styles
```
