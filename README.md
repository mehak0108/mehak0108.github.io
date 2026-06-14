# Mehak Mittal — Portfolio

Personal portfolio site built with Next.js 14, statically exported to GitHub Pages.

---

## Running locally

```bash
nvm use 20          # make sure you're on Node 20
npm run dev         # starts at localhost:3000
```

---

## How to update content

All personal content lives in `src/config/`. Never hardcode data in components.

| File | What it controls |
|---|---|
| `src/config/index.ts` | Name, bio, email, socials, resume link |
| `src/config/academics.ts` | Education timeline |
| `src/config/experience.ts` | Work experience timeline |
| `src/config/projects.ts` | Projects (AI Agents + Projects sections) |
| `src/config/competitions.ts` | Competitions & awards |
| `src/config/clients.ts` | Client/stakeholder logos in Experience section |
| `src/config/life.ts` | Life section photos, facts, hobbies |

---

## Page sections & nav order

About → Academics → Experience → AI Agents → Projects → Competitions → Life → Contact

| Section | id | Description |
|---|---|---|
| About | `about` | Intro, bio, photo, "What I do" card |
| Academics | `academics` | Education timeline |
| Experience | `experience` | Work timeline + client logo strip |
| AI Agents | `ai-agents` | Projects with `category: 'ai'` |
| Projects | `projects` | All other projects, filterable by category |
| Competitions | `competitions` | Hackathons, case comps, awards |
| Life | `life` | Photos, fun facts, hobbies |
| Contact | `contact` | Contact form + social links |

---

## Adding a project

Open `src/config/projects.ts` and add an entry to the `projects` array.

### External link project (Notion doc, deck, GitHub, etc.)

```ts
{
  title: 'My Project',
  company: 'Company Name',
  description: 'One or two sentences about what you built.',
  tags: ['Tag1', 'Tag2'],
  category: 'product',       // 'product' | 'ops' | 'ml' | 'finance' | 'ai'
  type: 'external',          // opens link in a new tab — shows "View ↗"
  link: 'https://notion.so/your-doc',
  featured: false,
  metrics: [
    { value: '2×', label: 'Faster turnaround' },
  ],
},
```

### Internal case study (full page with MDX write-up)

```ts
{
  title: 'My Project',
  company: 'Company Name',
  description: 'One or two sentences about what you built.',
  tags: ['Tag1', 'Tag2'],
  category: 'ai',
  type: 'internal',          // links to /projects/[slug] — shows "View →"
  link: '/projects/my-project-slug',
  featured: true,            // true = large featured card in AI Agents section
  metrics: [
    { value: '40%', label: 'Faster reviews' },
  ],
},
```

Then create the MDX file at `src/content/projects/my-project-slug.mdx`:

```mdx
---
title: My Project
company: Company Name
role: Product Manager
startDate: Jan 2024
endDate: Jun 2024
teamSize: "5"
summary: One paragraph summary shown at the top of the case study.
tags: [AI/ML, Product Strategy]
metrics:
  - value: "40%"
    label: Faster reviews
externalLinks:
  - label: View deck
    url: https://notion.so/...
---

## The problem

Write your case study here in markdown...

## What I did

...
```

### Category reference

| Value | Shows in |
|---|---|
| `'ai'` | AI Agents section |
| `'product'` | Projects → Product / PM filter |
| `'ops'` | Projects → Process & Ops filter |
| `'ml'` | Projects → ML / Data filter |
| `'finance'` | Projects → Finance filter |

Projects show 6 cards by default. A **"Show more"** button appears automatically when there are more than 6 in the current filter.

---

## Adding a competition

Open `src/config/competitions.ts`:

```ts
{
  title: 'Competition Name',
  organization: 'Organizer',
  type: 'hackathon',         // 'hackathon' | 'startup' | 'case' | 'award'
  result: 'winner',          // 'winner' | 'finalist' | 'participant'
  resultLabel: '1st Place',  // shown on the merged icon+badge pill
  year: '2024',
  description: 'Optional short blurb shown below the org name.',
  gradientPreset: 'gold',    // 'gold' | 'mauve' | 'slate' | 'teal' | 'rose' | 'navy' | 'amber' | 'green'
},
```

---

## Adding client logos

Client logos appear as a strip at the bottom of the Experience section.

Open `src/config/clients.ts`:

```ts
// Option 1: local file (recommended — reliable)
// Drop the image into public/logos/ first
{ name: 'Company', src: '/logos/company.png', width: 90 },

// Option 2: external URL (quick but can break if source goes down)
{ name: 'Company', src: 'https://...', width: 90 },
```

- Use **PNG with transparent background** for clean display
- `width` is optional (defaults to 80px)
- The strip only renders if the `clients` array has at least one entry

---

## Deploying to GitHub Pages

```bash
# 1. Set basePath in next.config.mjs to match your repo name
#    e.g. basePath: '/Portfolio'

npm run deploy     # builds + publishes ./out to gh-pages branch
```

---

## Commands

```bash
npm run dev        # dev server
npm run build      # production build (static export → ./out)
npm run deploy     # build + push to GitHub Pages
npm run lint       # ESLint
```

---

## Architecture

```
src/
  app/
    page.tsx                    # main page — section order defined here
    projects/[slug]/page.tsx    # case study page (server component)
    globals.css                 # CSS variables (colors, fonts, spacing)
  components/
    sections/                   # one file per section
      About.tsx
      Academics.tsx
      Experience.tsx
      AIAgents.tsx
      Projects.tsx
      Competitions.tsx
      Life.tsx
      Contact.tsx
    ui/                         # Navbar.tsx, Footer.tsx
  config/                       # ALL personal content goes here
  content/projects/             # MDX case studies (one per internal project)
  lib/types.ts                  # TypeScript interfaces — single source of truth
public/
  logos/                        # client logo images
```

Colors are CSS variables in `globals.css` — change them once and they update everywhere.
