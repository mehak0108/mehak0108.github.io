# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Portfolio Project

## Commands

```bash
npm run dev       # start dev server (localhost:3000)
npm run build     # production build (also runs static export via output: 'export')
npm run export    # alias for next build
npm run deploy    # build + publish ./out to GitHub Pages via gh-pages
npm run lint      # ESLint
```

## Architecture rule

| Layer | Purpose | Rule |
|---|---|---|
| `src/config/` | All personal content | **Only edit these files for content changes** |
| `src/components/` | UI templates | **Never hardcode personal data here** |
| `src/lib/types.ts` | TypeScript interfaces | Single source of truth for all data shapes |
| `src/content/projects/` | MDX case studies | One `.mdx` file per internal project |

Content flows one way: `src/config/` → imported into `src/components/sections/` via props.

## Workflow

- Check `REFERENCES.md` for design direction before building any section.
- Check `DESIGN_TOKENS.md` for colors, typography, and spacing values.
- All personal info (name, bio, links, projects, experience) must be imported from `src/config/` only.
- Ask before adding any new dependencies.
- Run `npm run dev` to verify after each major change.

## Static export constraints

This project deploys to GitHub Pages as a fully static site (`output: 'export'`).

- **Do not** use `next/image` — use plain `<img>` tags (image optimization unavailable in static export).
- **Do not** use API routes or dynamic server features (`headers()`, `cookies()`, `redirect()`).
- All components are `'use client'` or statically rendered server components with no dynamic server APIs.
- Set `basePath` in `next.config.mjs` to `/your-repo-name` before deploying.

## Case study routing

- Project cards with `type: 'internal'` link to `/projects/[slug]` via Next.js `<Link>`.
- Project cards with any other type open `link` in a new tab via `<a target="_blank">`.
- MDX files live in `src/content/projects/[slug].mdx`.
- `src/app/projects/[slug]/page.tsx` renders them using `generateStaticParams` at build time.
