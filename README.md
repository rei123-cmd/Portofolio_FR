# Portfolio

Premium, animated portfolio site built with Next.js 14 (App Router), TypeScript, Tailwind CSS,
and Framer Motion, following the project's own `/mnt/project` specs (Design System, Engineering,
Animation, Content, and AI Rules docs).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build (verified passing)
- `npm run lint` — ESLint (verified passing, zero warnings)
- `npm run start` — serve the production build

## Before you ship

1. **Replace placeholder content.** Every placeholder is marked with a `PLACEHOLDER` comment:
   - `src/data/projects.ts` — real project titles, descriptions, tech, results
   - `src/data/skills.ts` — real statistics and work history
   - `src/data/navigation.ts` — real social URLs
   - `src/components/sections/HeroSection.tsx` — your real name
2. **Self-host Inter** via `next/font/google` (currently using a system-font fallback stack
   since this build environment can't reach Google Fonts — swap it in once you have network
   access; see `src/app/globals.css`).
3. **Wire the contact form** to a real backend (`src/components/sections/ContactSection.tsx`
   currently simulates a submit). `RESEND_API_KEY` is already anticipated in `.env.example`.
4. **Add a real OG image** at `public/og-image.png` (1200×630) referenced in `src/app/layout.tsx`.
5. Set `NEXT_PUBLIC_SITE_URL` for correct canonical/OG/sitemap URLs.

## What's built

Loading screen, sticky/glass navbar, scroll progress bar, Hero (staggered intro + cursor
spotlight background), Featured Projects, About with animated stats, Experience timeline,
Skills, Contact form (validated, unwired), Footer, SEO metadata + `robots.ts` + `sitemap.ts`.

## What's next

The interactive Three.js scene, Command Palette (⌘K), custom cursor, and dedicated case-study
pages described in the specs aren't built yet — the architecture (folders, motion tokens,
component patterns) is set up to make adding them straightforward.
