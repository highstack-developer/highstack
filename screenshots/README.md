# Screenshots

Full-page renders of every route on the `dev` branch, captured against the
Next.js dev server with Playwright + Chromium.

| Setting | Value |
|---------|-------|
| Date | 2026-05-14 |
| Desktop viewport | 1440 × 900, 2× device pixel ratio |
| Mobile viewport | 390 × 844 (iPhone 14), 2× device pixel ratio |
| Source | `git checkout dev && npm run dev` |

## Pages

| Route | Desktop | Mobile |
|-------|---------|--------|
| `/` | [home.png](desktop/home.png) | [home.png](mobile/home.png) |
| `/about` | [about.png](desktop/about.png) | [about.png](mobile/about.png) |
| `/services` | [services.png](desktop/services.png) | [services.png](mobile/services.png) |
| `/team` | [team.png](desktop/team.png) | [team.png](mobile/team.png) |
| `/case-studies` | [case-studies.png](desktop/case-studies.png) | [case-studies.png](mobile/case-studies.png) |
| `/case-studies/northwind-logistics-platform` | [case-study.png](desktop/case-study.png) | [case-study.png](mobile/case-study.png) |
| `/blog` | [blog.png](desktop/blog.png) | [blog.png](mobile/blog.png) |
| `/blog/the-cost-of-the-rebuild-myth` | [blog-post.png](desktop/blog-post.png) | [blog-post.png](mobile/blog-post.png) |
| `/contact` | [contact.png](desktop/contact.png) | [contact.png](mobile/contact.png) |
| `/privacy-policy` | [privacy.png](desktop/privacy.png) | [privacy.png](mobile/privacy.png) |

To regenerate: see `scripts/screenshot.mjs` (if committed) or the `/tmp/screenshot.mjs` reference in conversation history.
