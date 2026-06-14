# Design Tokens

## Colors
- Primary accent: #8B3A6E (mauve/deep rose)
- Accent hover: #72305A
- Background light: #F7F0F5 (soft mauve tint)
- Background surface: #EFE4EC (slightly deeper tint for cards/nav)
- Heading text: #1A0A15 (near-black with warm undertone)
- Body text: #4A3545
- Muted text: #8A7080
- Border subtle: #D4A8C8
- Border strong: #C090B4

## Typography
- Heading font: Inter (weight 900, letter-spacing -0.03em)
- Body font: Inter (weight 400)
- Nav/label font: Inter (weight 500, letter-spacing 0.05em uppercase for labels)
- Name display size: 72–96px on desktop, 48px on mobile
- Body size: 15px, line-height 1.65

## Components
- Button primary: bg #8B3A6E, text #fff, border-radius 7px
- Button outline: border 1.5px #D4A8C8, text #1A0A15, border-radius 7px
- Social pills: border-radius 50px, border 1px #D4A8C8, bg rgba(255,255,255,0.5)
- Nav CTA: bg #8B3A6E, text #fff, border-radius 6px
- Card border-radius: 10px
- Photo placeholder: border-radius 10px

## Layout
- Hero: two-column grid — text left, photo right (140px wide on desktop)
- Max content width: 1200px
- Section padding: 120px vertical
- Hero padding: 60px top on desktop

## Section: About
- Layout: two-column grid — text left (1fr), photo right (210px fixed)
- Section label: 10px uppercase #8B3A6E, letter-spacing 0.1em
- Name: Inter 900, 80px, letter-spacing -0.04em, color #1A0A15, line-height 0.95
- Tagline: Playfair Display italic 900, 18px, color #8A7080 — "Curious builder, systems thinker."
- Bio: 14px #4A3545, line-height 1.75; strong tags use #1A0A15 700 weight
- Skills label: 9px uppercase #8A7080; groups have a 10px 500 group name above pill row
- Skill pills: 11px 500 #4A3545, border 0.5px #D4A8C8, bg rgba(255,255,255,0.7), radius 50px, padding 4px 12px
- CTA row: below skill groups — "View my work" (filled #8B3A6E, 12px 600, radius 7px) + "Schedule a chat" (outline 1.5px #D4A8C8, radius 7px) + 1px divider + social pills (LinkedIn, GitHub, Email)
- Right column: portrait photo (aspect-ratio 3/4, radius 12px) + 3 small info cards (Currently / Based in / Open to)
- Small info cards: bg rgba(255,255,255,0.65), border 0.5px #D4A8C8, radius 10px, padding 12px 14px; label 9px uppercase #8A7080, value 12px 500 #1A0A15
- This section serves as the landing/hero — no separate Hero section

## Section: Academics
- Single-column vertical timeline, left-offset (padding-left: 28px)
- Timeline line: 1.5px gradient #8B3A6E → #D4A8C8, left: 7px
- Dot active (current): filled #8B3A6E, 12px; Dot past: outlined #8B3A6E, 12px
- Card: bg rgba(255,255,255,0.65), border 0.5px #D4A8C8, border-radius 10px
- Card layout: logo (38px, bg #EFE4EC) + school/degree/location left, dates + badge right
- Location: 11px muted with ti-map-pin icon, below degree line
- Badge current: bg #8B3A6E white text; Badge past: bg #EFE4EC mauve text
- Bullets: 12px, mauve dot (5px, opacity 0.6), 14px left padding, gap 6px

## Section: Experience
- Center timeline — vertical line centered, 1.5px gradient #8B3A6E → #D4A8C8
- Three-column grid: [role+dates] [dot] [company+description]
- Left col: role bold 13px right-aligned, dates 11px #8B3A6E below
- Center col: large dot (32px filled #8B3A6E with white inner) for current; small dot (20px outlined) for past
- Right col: company bold 14px, description 12px #4A3545 line-height 1.65
- Award tag: bg #EFE4EC, border #D4A8C8, mauve text, 50px border-radius, trophy icon
- Section heading: italic serif, 28px, font-weight 900 — "Where I've been, what I've built."
- Section label: uppercase 10px #8B3A6E, letter-spacing 0.1em

## Section: Projects
- Section label: uppercase 10px #8B3A6E; heading: italic serif 30px 900 weight
- Featured cards: bg #EFE4EC, border 0.5px #D4A8C8, border-radius 14px, padding 24px
  - Two-column grid: text left, dark mockup screen right (#1A0A15 bg, browser chrome bar)
  - Company pill: rgba(255,255,255,0.6) bg, 0.5px #C090B4 border, 50px radius
  - Title: 18px 900 weight; desc: 12px #4A3545; CTA: 12px 600 #8B3A6E with arrow icon
  - Metrics row: 22px 900 #8B3A6E value + 9px uppercase #8A7080 label, separated by 0.5px #C090B4 divider
- Filter row: sits between "More work" label and small cards grid
  - Inactive: 1.5px solid #1A0A15 border, black text, transparent bg
  - Hover: #EFE4EC bg, #8B3A6E border+text
  - Active: #8B3A6E bg, white text
  - AI Agents tab: active state uses #1A0A15 bg with #D4A8C8 text; sparkles icon prefix
  - Filters: All · Product/PM · Process & Ops · ML/Data · Finance · AI Agents
- Small cards: 3-column grid, bg rgba(255,255,255,0.65), border 0.5px #D4A8C8, radius 10px, padding 16px
  - Company pill: 9px uppercase #8B3A6E on #EFE4EC; AI cards use dark pill (#1A0A15 bg, #D4A8C8 text)
  - Metric row: 13px 900 #8B3A6E value + 9px uppercase #8A7080 label
  - Tags at bottom left, CTA link at bottom right (11px 600 #8B3A6E + arrow icon)
  - data-category attribute drives JS filter: product | ops | ml | finance | ai

## Section: Contact
- Layout: two-column split — left: closing note + social links + CTA; right: contact form
- Heading: italic serif 28px 900 — "Let's build something great together."
- Closing note: 13px #4A3545, line-height 1.7
- Social pills: flex column, 50px border-radius, border 1px #D4A8C8, bg rgba(255,255,255,0.6), 12px 500 #1A0A15, icon in #8B3A6E; hover: #EFE4EC bg + #8B3A6E border
- Schedule a Chat CTA: bg #8B3A6E, white text, 8px radius, calendar icon, width fit-content
- Form card: bg rgba(255,255,255,0.65), border 0.5px #D4A8C8, border-radius 12px, padding 22px
- Inputs: border 1px #D4A8C8, bg #F7F0F5, radius 7px, 12px; focus: border #8B3A6E, bg white
- Textarea: same as input, height 90px, no resize
- Submit button: full width, bg #8B3A6E, white, 13px 600, radius 8px; hover: #72305A
- Form note: 10px #8A7080 centered below submit

## Section: Competitions
- Heading: italic serif 30px 900 — "Competing, winning, learning."
- Single unified 3-column grid, gap 12px
- Card: bg rgba(255,255,255,0.7), border 0.5px #D4A8C8, radius 12px, overflow hidden
- Winner cards: border 1.5px #8B3A6E
- Image is OPTIONAL per card:
  - With image: 90px cover area at top with gradient bg + icon; result badge floats bottom-left (absolute)
  - Without image: no cover area; card-body starts immediately with icon (32px, bg #EFE4EC, radius 8px) + result badge in a flex row
- Result badge — winner: bg #8B3A6E white text; non-winner: bg #EFE4EC #4A3545 text, 0.5px #D4A8C8 border
- Card body: type (9px uppercase #8A7080) → title (12px 700 #1A0A15) → org (11px #6A5065) → year (10px #8A7080, margin-top auto)
- Gradient bg presets per card (for image area): bg-gold, bg-mauve, bg-slate, bg-teal, bg-rose, bg-navy, bg-amber, bg-green

## Section: Life
- Heading: italic serif 30px 900 — "A little bit about me."
- Layout: CSS columns masonry, 3 columns, column-gap 10px, item margin-bottom 10px
- Photo cards: gradient placeholder bg, border-radius 10px, overflow hidden, position relative
  - Sizes: tall (200px), medium (150px), short (110px)
  - Caption: absolute bottom, gradient overlay rgba(0,0,0,0.55)→transparent, white text 11px 500 + sub 10px 65% opacity
  - When real photo added: object-fit cover fills the same container
- Fun fact cards: bg #EFE4EC, border 0.5px #D4A8C8, radius 10px, padding 14px; emoji 22px + text 12px 500 #1A0A15
- Hobby card: bg #1A0A15, radius 10px, padding 14px; title 11px uppercase #D4A8C8; pills: 10px #8A7080, rgba(255,255,255,0.07) bg, 0.5px rgba(255,255,255,0.1) border, 50px radius
- Gradient presets for photo placeholders: g1(mauve), g2(teal), g3(navy), g4(amber), g5(coral), g6(green)

## Navigation
- Full bleed: width 100vw, no max-width on the bar itself; inner content max-width 1200px centered with padding 0 40px
- Height: 56px; no border-radius
- Background: rgba(247,240,245,0.92) with backdrop-filter blur(10px)
- Border-bottom: 0.5px solid #E8D8E4
- On scroll: box-shadow 0 2px 12px rgba(139,58,110,0.06)
- Layout: "Mehak Mittal" full name left (16px 700 #1A0A15, letter-spacing -0.01em) | all links + social + CTA right (flex row, gap 4px)
- Nav links (right side): 13px 400 #4A3545, padding 6px 14px, radius 6px; hover: color #8B3A6E; active: color #1A0A15 weight 500
- Active link updates on scroll (intersection observer)
- LinkedIn icon: 34px circle, border 1px #D4A8C8, icon 15px #4A3545; hover: border #8B3A6E color #8B3A6E; margin-left 8px
- "Schedule a chat" CTA: bg #8B3A6E, white, 13px 500, border-radius 50px (pill), padding 8px 20px; hover: #72305A; margin-left 8px
- Nav items (right): About · Academics · Experience · Projects · Competitions · Life · Resume · [LinkedIn icon] · Schedule a chat
- Mobile (hamburger):
  - Collapsed: "Mehak Mittal" left, Schedule a chat pill + hamburger right
  - Hamburger: 32px square, bg #EFE4EC, radius 6px
  - Drawer: full-width, bg #F7F0F5, border-bottom 0.5px #D4A8C8
  - Drawer links: 13px 500 #4A3545, padding 9px 10px, radius 7px; active/hover: bg #EFE4EC + color #8B3A6E
  - Bottom of drawer: full-width Schedule a chat pill button

## Page: Project Detail (Case Study)
- Route: /projects/[slug] — rendered from MDX via generateStaticParams
- Layout: single-column, max-width 760px, left-aligned, no sidebar
- Back bar: full-width, padding 16px 48px, border-bottom 0.5px #D4A8C8; left: back arrow + "Back to Projects" (12px 500 #4A3545 → hover #8B3A6E); right: breadcrumb (11px #8A7080, active segment #8B3A6E)
- Hero: company pill (same as featured card pill) → title (Inter 900, 40px, -0.03em, line-height 1.05) → meta row (role · date · team size, 11px #8A7080, #8B3A6E icons) → metrics bar → cover image
- Metrics bar: flex row, border 0.5px #D4A8C8, radius 10px, bg rgba(255,255,255,0.65), overflow hidden; each metric: flex 1, border-right 0.5px #D4A8C8 (last: none), padding 16px 20px; value 24px 900 #8B3A6E; label 9px uppercase #8A7080
- Cover image: full-width (within 48px page padding), height 220px, radius 10px; dark gradient placeholder (#1A0A15 → #3D1A33 → #8B3A6E); real image: object-fit cover
- Content sections: Problem → Solution → Outcome; each has 9px uppercase #8B3A6E label + Playfair italic 900 22px heading + 14px #4A3545 prose (line-height 1.75); separated by 0.5px #D4A8C8 divider
- Document links: inline-flex, 12px 600 #8B3A6E, border 0.5px #C090B4, bg rgba(255,255,255,0.7), radius 7px, padding 7px 14px; file-text icon or external-link icon
- Skills used: pill row at bottom (same style as About section skill pills)
- Bottom nav strip: border-top 0.5px #D4A8C8, padding 24px 48px; left: "Back to Projects" (12px 600 #8B3A6E + arrow); right: next project title + right arrow

## Footer
- Single-row, full-width, dark background #1A0A15
- Height: 52px, padding: 0 28px
- Border: 0.5px solid rgba(255,255,255,0.08), border-radius 12px (if used as a contained bar) or none (if full-bleed)
- Layout: flex row, justify-content space-between, align-items center
- Left: "Mehak Mittal" — 14px 900 #fff, letter-spacing -0.02em
- Center: nav links — 11px #5A4A55; hover: #D4A8C8
- Right: social icons (LinkedIn, GitHub, Mail) — 14px #5A4A55, hover: #D4A8C8 + 1px divider (rgba white 0.08) + copyright "© 2026 Mehak Mittal" — 11px #3A2A35

## Animations
- Transition: 300ms ease-in-out
- Hover: button bg darkens to #72305A, subtle scale(1.01) on cards

## Vibe
- Creative and unique
- Bold typography (Inter 900 for name)
- Generous whitespace
- Warm mauve palette — feminine, distinctive, stands out from indigo-heavy PM portfolios
- Asymmetric layouts
- Subtle hover interactions
