# CLAUDE.md — Highstack Website (rebuild)

You are working on the rebuild of [highstack.ca](https://highstack.ca). The site is the public face of **Highstack** — a quiet parent company that creates, owns, and operates focused businesses across health, editorial, consulting, and personal finance.

Brand essence: **Focused companies. Carefully built.**

## Read first

1. `design-system/highstack-design-system/project/README.md` — brand foundations, voice, visual rules, asset manifest.
2. `design-system/highstack-design-system/project/EXTENSIONS.md` — dark mode, mobile, motion, responsive components, accessibility.
3. `design-system/highstack-design-system/project/CLAUDE.md` — the locked decisions (yellow-first, type, color, motion, wordmark, endorsement, etc).
4. `src/styles/tokens.css` — source of truth for every CSS variable.
5. `src/styles/site.css` — page-level component styles (header, hero, buttons, cards, reveal).

The `design-system/` folder is a **handoff reference**, not production code. It is gitignored. Treat it like a Figma file: read it, port from it, never link to it from production.

## Stack

- **Astro 5** with static export to `dist/` → GitHub Pages via Actions
- **React 19** islands only where interactivity is required (contact form via Formspree, mobile drawer, viewport reveal hook). Most pages ship zero JS.
- **MDX** for operator notes
- **TypeScript** strict mode
- **Biome** for lint + format
- **No Tailwind.** The design system is a complete vanilla-CSS framework. Use its tokens + class names. Do not invent new utility patterns.
- **No Framer Motion / GSAP / Lottie.** The design system covers all motion with CSS + IntersectionObserver.

## Locked decisions (mirror of the design system)

### Foundation
- **Yellow-first.** Default page background is `var(--bg)` which resolves to `#F9C219`. White is **inset only** (cards, inputs). Paper for editorial. Ink for footers + cinematic moments + dark mode.
- **Dark mode** follows `prefers-color-scheme` AND honors `[data-theme="ink"]`. Yellow stays a signature accent in dark mode, never a fill.
- **No emoji. No illustrations. No gradients.** The needle is the only stylized graphic.

### Type
- Geist (sans), Newsreader (serif), Geist Mono (mono). Display/Hero/Headline use serif. UI uses sans. Geist 200 (Thin) is reserved for the endorsement line.
- `text-wrap: balance` on headlines, `text-wrap: pretty` on body.

### Color tokens — always use semantic
- `var(--fg)` for primary text, `var(--fg-secondary)` / `--fg-tertiary` / `--fg-quaternary` for hierarchy.
- Never hardcode `var(--hs-ink-1000)` on text — those don't flip in dark mode.
- Default to omitting `color:` entirely so it inherits.

### Spacing & layout
- 8px grid via `--s-0` through `--s-15`. Squared corners by default; pill only for chips.
- Container max `1440px`, text measure `720px`, editorial `1080px`.
- Borders carry elevation, not shadows.

### Wordmark + needle (CRITICAL — never reconstruct)
- Wordmark: use the PNG at `/brand/highstack-wordmark-{black|white|yellow}.png`.
- Short needle (the "I"): `/brand/highstack-needle-short.svg` + PNGs.
- Full needle (horizontal + vertical): `/brand/highstack-needle-full{-vertical}.svg` + PNGs.
- Favicon: `/favicon.png` (built from the short-needle silhouette).

### Endorsement lockup (CRITICAL)
Format: `Subcompany name` (Newsreader 400, 56px, -0.024em) + `FROM` (Geist 200/Thin, 24px, 0.06em tracking, uppercase) + Highstack wordmark PNG (48px tall, `translateY(1px)` to align baseline). Never substitute the wordmark.

### Buttons
- Light/yellow: primary = ink fill + yellow text. Secondary = ink outline. Ghost = text-only with sliding arrow.
- Dark: primary = yellow fill + ink text. Secondary = yellow text + yellow outline.

### Cards
- White inset on yellow with 1px ink hairline.
- Active card inverts: ink fill + 2px yellow top accent. Only place yellow touches a card.

### Motion
- Durations `--dur-1` (120ms) → `--dur-7` (960ms). Easings `--ease-standard`, `--ease-emphasize`, `--ease-entrance`, `--ease-exit`.
- Hover: `translateY(-2px)` max on cards. No scale. Press: `translateY(1px)`.
- No bounces / springs / overshoots / parallax on portfolio cards.
- Reveals respect `prefers-reduced-motion`.

## Voice

Composed, direct, sharp, mature, economically literate, quietly confident. Sentence case. Em dashes for asides. Serial comma. No exclamation marks. Numerals over nine; spell out one through nine.

**Avoid:** empower, unlock, transformative, disrupt, exponential, bold founders, game-changing, innovation ecosystem, next-generation, revolutionary, leverage, synergy, journey, mission-critical, world-class.

**Prefer:** build, own, operate, focus, discipline, structure, compound, durable, careful, precise, long term, clear strategy, disciplined economics.

## Portfolio (canonical order)

| Order | Company | Sector | One-line |
|---|---|---|---|
| 01 | **Guteno** | Editorial | Editorial, writing, and book production services. |
| 02 | **Benesere** | Health | Health services and digital care experiences. |
| 03 | **Nicchia** | Consulting | Business consulting for independent professionals and small businesses. |
| 04 | **Granato** | Personal finance | Personal finance tools for budgeting and money clarity. |

Portfolio intro (use verbatim): _"Highstack is home to focused companies built with discipline, clarity, and long-term intent."_

## Project shape

```
src/
  pages/        Astro pages (file-based routing)
  layouts/      BaseLayout
  components/   Astro components (sections, primitives)
  components/islands/  React islands (interactive only)
  content/      Astro content collections (portfolio, notes)
  styles/       tokens.css + site.css (ported from design system)
public/
  brand/        Logos, wordmarks, needles
  favicon.png   /apple-touch-icon.png  /CNAME
```

## Branch model

- `dev` — legacy site (archived as `archive/dev-pre-rebuild`)
- `rebuild` — this rebuild, currently in progress
- `main` → `gh-pages` (production, via Actions, after cutover)

## Never do

- Reconstruct the wordmark inline. Always the PNG.
- Substitute the needle SVGs with hand-drawn glyphs.
- Use yellow as body-text color below 18px.
- Invent new patterns when an existing one fits.
- Reduce body type below 16px on mobile.
- Use emoji.
- Claim a typeface that hasn't been confirmed by the user.
