# MXT Productions

The mxt.productions site — a single-page, dark-by-default studio site for
MXT's three divisions (**mCloud**, **Apex** — media, incl. MXT Records — and **Dev**) and its
products (GateKey, Grraphic, Rootweave, Pi Live, Drifthost).

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion
(framer-motion). Deploys to Vercel as-is.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content — start here

Everything you'd want to change lives in **`content/mxt.ts`**: the one-liner,
divisions, products (description, stack badges, links, stats), artist
streaming links, socials and contact-form options. No design code in there.

## Structure

```
app/
  layout.tsx            fonts, metadata/OG, theme bootstrap, header/footer
  page.tsx              home — composes the sections + JSON-LD
  globals.css           Tailwind + design tokens (dark default, .light overrides)
  opengraph-image.tsx   generated 1200×630 OG card
  robots.ts sitemap.ts icon.svg not-found.tsx
  api/contact/route.ts  contact form → Formspree (honeypot + optional reCAPTCHA)
components/
  Hero  Marquee  Divisions  Products  Music  Contact  WorkForm  Footer
  Header  ThemeToggle  Reveal (scroll-in)  SectionHead  Wordmark  MotionProvider
content/mxt.ts          ← all editable content
```

## Theming

Colors are CSS variables in `globals.css`, exposed to Tailwind as `bg`, `fg`,
`muted`, `line`, `signal`, and one per division (`mcloud`, `apex`, `records`,
`dev`). Dark is the default; the toggle adds `html.light` and remembers the
choice in `localStorage` (applied before paint, so no flash).

## Contact form

`POST /api/contact` — env vars:

- `FORMSPREE_ENDPOINT` — Formspree form URL (falls back to the existing one)
- `RECAPTCHA_SECRET` — optional; only enforced when set

## Performance

Hero intro animations are CSS (play at first paint); everything below the fold
uses Motion's `LazyMotion` with `whileInView`. All motion respects
`prefers-reduced-motion`. Local Lighthouse: desktop 100 / mobile 93 performance,
100 accessibility, best practices and SEO.

## Legacy pages

`app/{about,apex,contact,dev,legal,mcloud}` are from the previous multi-page
site. They're redirected to the new sections in `next.config.mjs` and can be
deleted (along with `content/site.ts` and `components/ContactForm.tsx`).
