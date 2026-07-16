# MXT Productions

The mxt.productions website — a Next.js site for a four-division studio:
**Dev**, **mCloud**, **Apex**, and **Legal**, plus About and Contact.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Editing content (start here)

Almost everything you'll want to change lives in **one file**:

```
content/site.ts
```

That's where the copy, projects, pricing, team, and routing live — no design
code. A few examples:

| Want to change…                    | Edit in `content/site.ts`         |
| ---------------------------------- | --------------------------------- |
| A division's name / blurb / accent | `divisions`                       |
| Dev portfolio projects             | `projects`                        |
| mCloud services                    | `mcloudServices`                  |
| mCloud pricing / setup fee         | `mcloudTiers`, `mcloudSetup`      |
| Why-mCloud points                  | `mcloudWhy`                       |
| Apex production / team / releases  | `apexProduction`, `apexTeam`, `apexReleased` |
| Legal areas                        | `legalAreas`                      |
| Founder bio, mission, timeline     | `founder`, `mission`, `timeline`  |
| Contact routing options            | `contactRoutes`                   |

When Apex releases a short or trailer, add it to `apexReleased` and the empty
"screening room" turns into a grid of frames automatically.

## Structure

```
app/
  layout.tsx          fonts, nav, footer, global metadata
  globals.css         design system (colors, type, shared components)
  page.tsx            home
  dev/  mcloud/  apex/  legal/  about/  contact/
                      one folder per page: page.tsx + page.module.css
  api/contact/route.ts   contact form handler
components/
  Nav.tsx  Footer.tsx  Reveal.tsx  ContactForm.tsx
content/site.ts        ← all editable content
```

Each page keeps its own `page.module.css`, so restyling one division never
touches the others. Division accent colors are set with a `data-division`
attribute and CSS variables (see `globals.css`).

## Contact form

`POST /api/contact` verifies a honeypot, optionally checks reCAPTCHA, then
forwards to Formspree. Configure with environment variables:

- `FORMSPREE_ENDPOINT` — your Formspree form URL (falls back to the existing one)
- `RECAPTCHA_SECRET` — optional; reCAPTCHA is only enforced when this is set

## Design notes

One brand, four channels. The studio reads as a broadcast signal source; each
division is a "channel" with its own call sign, status light, and accent color
(cyan / indigo / amber / steel) while sharing the same ink, type, and grain.
Fully responsive, keyboard-accessible, and respects `prefers-reduced-motion`.
