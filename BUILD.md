# BUILD.md — Claude Code Handoff Brief

This file is the complete build spec for Mehak Mittal's portfolio. Read this alongside `DESIGN_TOKENS.md` (visual spec) and `REFERENCES.md` (inspiration) before writing any code.

## Key rules (from CLAUDE.md)

- All personal data lives in `src/config/` only — never hardcode it in components
- All TypeScript interfaces are in `src/lib/types.ts` — single source of truth
- No `next/image` — use plain `<img>` tags (static export constraint)
- No API routes, `headers()`, `cookies()`, or `redirect()` — fully static
- Run `npm run dev` to verify after each section

---

## Design references

- `DESIGN_TOKENS.md` — complete visual spec for every section (colors, typography, spacing, component styles)
- `REFERENCES.md` — layout inspiration and design decisions

---

## Color tokens (quick ref)

| Token | Value |
|---|---|
| Background | `#F7F0F5` |
| Surface | `#EFE4EC` |
| Accent | `#8B3A6E` |
| Accent hover | `#72305A` |
| Heading | `#1A0A15` |
| Body text | `#4A3545` |
| Muted | `#8A7080` |
| Border | `#D4A8C8` |

Font: **Inter** (900 for headings/name, 500 for nav/labels, 400 for body). Section headings use **Playfair Display** italic 900.

---

## Page structure & nav order

```
/ (single page, sections stacked)
  About          ← landing section, no separate Hero
  Academics
  Experience
  Projects
  Competitions
  Life
  Contact

/projects/[slug] ← MDX case study detail page
```

Nav: `About · Academics · Experience · Projects · Competitions · Life` + Resume link + Schedule a Chat CTA

---

## Build order (recommended)

Build in this order — each step is independently testable:

1. **Global CSS** — set CSS custom properties for all color tokens, Inter + Playfair Display fonts, base resets
2. **Navigation** — glassmorphism sticky bar per `DESIGN_TOKENS.md › Navigation`
3. **About** — landing/hero section per `DESIGN_TOKENS.md › Section: About`; imports from `src/config/index.ts` + `src/config/skills.ts`
4. **Academics** — timeline per `DESIGN_TOKENS.md › Section: Academics`; imports from `src/config/academics.ts`
5. **Experience** — center timeline per `DESIGN_TOKENS.md › Section: Experience`; imports from `src/config/experience.ts`
6. **Projects** — featured cards + filter grid per `DESIGN_TOKENS.md › Section: Projects`; imports from `src/config/projects.ts`
7. **Competitions** — unified grid per `DESIGN_TOKENS.md › Section: Competitions`; imports from `src/config/competitions.ts`
8. **Life** — CSS columns masonry per `DESIGN_TOKENS.md › Section: Life`; imports from `src/config/life.ts`
9. **Contact** — split layout per `DESIGN_TOKENS.md › Section: Contact`
10. **Footer** — single-row dark bar per `DESIGN_TOKENS.md › Footer`
11. **Project detail page** — `/projects/[slug]` per `DESIGN_TOKENS.md › Page: Project Detail`

---

## Section-by-section notes

### About (landing)
- This is the first section visitors see — no separate Hero
- Imports: `siteConfig` from `src/config/index.ts`, `skills` from `src/config/skills.ts`
- Name: Inter 900, 80px, letter-spacing -0.04em
- CTA row at bottom of left column: "View my work" (filled) + "Schedule a chat" (outline) + divider + social pills
- Right column: portrait photo (`/public/images/mehak.jpg` — placeholder until added) + 3 info cards

### Academics
- New section — no existing component scaffold
- Imports: `academics` from `src/config/academics.ts`
- Single-column left-offset timeline with gradient mauve line
- Current badge vs graduated badge

### Experience
- Center timeline (3-col grid: role | dot | company)
- Imports: `jobs` from `src/config/experience.ts`
- `award` field on Job renders a trophy pill above bullets

### Projects
- Two zones: featured (large cards) + "More work" (3-col small cards with filter)
- `featured: true` items → large card with mockup area + metrics row
- `featured: false` items → small card with category pill + metric + tags + CTA
- Filter buttons use `data-category` attribute; JS toggles visibility
- Imports: `projects` from `src/config/projects.ts`

### Competitions
- New section — no existing component scaffold
- Imports: `competitions` from `src/config/competitions.ts`
- Card layout is conditional: `image` present → 90px cover area at top; `image` absent → compact icon+badge row
- `result: 'winner'` → card gets 1.5px #8B3A6E border

### Life
- New section — no existing component scaffold
- Imports: `lifePhotos`, `lifeFacts`, `lifeHobbies` from `src/config/life.ts`
- CSS columns masonry (3 cols, no JS library)
- Photo placeholder: gradient div with caption overlay; swap for `<img>` when real photo added

### Contact
- Split layout: closing note + social links + CTA (left) | contact form (right)
- Form submits via mailto or a serverless endpoint — keep it simple for static export

### Footer
- Single row, dark (#1A0A15) background
- Left: "Mehak Mittal" — Inter 900 14px white
- Center: nav links
- Right: social icons + divider + copyright

---

## Project detail page (`/projects/[slug]`)

- MDX files live in `src/content/projects/[slug].mdx`
- `src/app/projects/[slug]/page.tsx` already exists — extend it to use the new design
- Frontmatter shape defined in `CaseStudyFrontmatter` in `src/lib/types.ts`
- Layout: back bar → hero (pill + title + meta + metrics bar + cover image) → content (Problem / Solution / Outcome) → skills → bottom nav (back + next project)
- No sidebar
- Document/prototype links come from `externalLinks` in frontmatter

---

## New config files created (Claude Code must import these)

| File | Exports | Used by |
|---|---|---|
| `src/config/index.ts` | `siteConfig` | About, Nav, Footer, Contact |
| `src/config/academics.ts` | `academics` | Academics section |
| `src/config/experience.ts` | `jobs` | Experience section |
| `src/config/projects.ts` | `projects` | Projects section |
| `src/config/competitions.ts` | `competitions` | Competitions section |
| `src/config/skills.ts` | `skills` | About section |
| `src/config/life.ts` | `lifePhotos`, `lifeFacts`, `lifeHobbies` | Life section |

---

## TODOs left for Mehak to fill in

These are marked `// TODO:` in the config files:

- `src/config/index.ts` — LinkedIn + GitHub URLs, confirm email
- `src/config/experience.ts` — fill in actual resume bullets, add remaining roles
- `src/config/academics.ts` — degree branch/field, club involvement, leadership roles at both schools
- `src/config/projects.ts` — add remaining projects, confirm metric values
- `src/config/competitions.ts` — full competition list with correct names/years/results
- `src/config/life.ts` — fun facts, real photo paths once photos are added
- `/public/resume.pdf` — add resume PDF
- `/public/images/mehak.jpg` — add portrait photo
