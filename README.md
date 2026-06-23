# Nate Polishook — Personal Website

Professional portfolio site. Next.js (App Router) + TypeScript + Tailwind CSS v4, deployed on
Vercel. Robotics and mechatronics focused, with a clean CAD/spec-sheet aesthetic.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content (no code required)

All site content lives in plain data files under `content/`:

| File | What it controls |
| --- | --- |
| `content/site.ts` | Name, hero tagline, about text, contact links, resume/headshot toggles |
| `content/skills.ts` | Skill groups (robotics-first) |
| `content/projects.ts` | Projects (order, writeups, images, links, in-progress tag) |
| `content/publications.ts` | Research papers |
| `content/experience.ts` | Work experience |
| `content/education.ts` | School, degree, coursework |

### The content dropbox

To add photos, PDFs, your resume, or headshot, drop files into `_content-dropbox/` (see the
README inside it) and run the assistant on "process the dropbox". Raw originals stay local
(`_content-dropbox/` is gitignored); only optimized assets land in `public/`.

- Resume: drop a PDF in `_content-dropbox/resume/`, then set `hasResume: true` in `content/site.ts`.
- Headshot: drop a photo in `_content-dropbox/headshot/`, then set `hasHeadshot: true`.
- Project photos: drop into `_content-dropbox/projects/<slug>/`; the first image becomes the card image.

## Design rules

- Single electric-blue accent. Cool light-gray / white-and-black. Flat, no gradients or glassmorphism.
- No card or box containers on About, Skills, Publications, Education, or Contact (typographic only).
- No em dashes anywhere in copy.
- Light is default; a dark-mode toggle lives in the nav.

## Deploy

Deploys to Vercel. Connect the repo, or run `vercel`. Custom domain target: `natepolishook.com`.
