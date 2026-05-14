# Launch Checklist — highstack.ca

The rebuild lives on `dev`. The legacy static site lives on `main` (currently serving production). Below is everything that needs to happen between today and cutover. **Do not merge `dev` into `main` until the items in section 1 are green.**

---

## 1. Content swaps (must do before cutover)

| Item | Where | What to replace |
|------|-------|-----------------|
| Team bios + photos | `data/team.ts` | 6 synthetic team members. Replace `name`, `title`, `bio`, `initials`, `linkedin` with real data. Photos are not used today (initials avatar) — add `photoUrl?: string` to the type and a `<picture>` to `TeamGrid` if you want to swap them in. |
| Case studies | `data/caseStudies.ts` | 3 fictional clients (Northwind / Aurora / Cedar). Replace with real engagements or delete and remove the home/preview/index references. |
| Testimonials | `data/testimonials.ts` | 5 fictional quotes. The first 3 are linked to the 3 case studies via `testimonialId`. Replace or remove. |
| Blog posts | `content/blog/*.mdx` | 2 sample posts. Replace or remove (delete files; `getAllPosts` will reflect that automatically). |
| Stats | `components/sections/Stats.tsx` | Hard-coded values for years in business, engagements delivered, senior consultants, repeat rate. Update to real numbers. |
| LinkedIn URL | `components/Footer.tsx`, `components/contact/ContactInfo.tsx`, `app/page.tsx` (Organization JSON-LD `sameAs`) | Currently `linkedin.com/company/highstack` — confirm or update. |
| Contact email | `components/contact/ContactInfo.tsx`, `components/Footer.tsx`, JSON-LD | `info@highstack.ca` — confirm. |
| Privacy + Terms last-updated date | `app/privacy-policy/page.tsx`, `app/terms-of-use/page.tsx` | Currently 2024-10-15 (preserved from legacy site). Update if the content needs a refresh. |

## 2. Wire up Formspree

1. Create an account at https://formspree.io and add a form.
2. Copy the **form ID** (the 8-char code at the end of the endpoint URL).
3. On your local machine:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID=xyzabc12`.
4. **Crucially**, also add it as a GitHub Actions secret so the production build sees it:
   - Repo **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `NEXT_PUBLIC_FORMSPREE_ID`, value: the form ID
   - Then update `.github/workflows/deploy.yml` to expose it at build time. Add this `env` block to the build step:
     ```yaml
     - name: Build static site
       run: npm run build
       env:
         NEXT_PUBLIC_FORMSPREE_ID: ${{ secrets.NEXT_PUBLIC_FORMSPREE_ID }}
     ```
5. Submit a test message from `/contact` to confirm submissions land in Formspree.

## 3. Decide on apex vs. www

`public/CNAME` is currently set to `highstack.ca` (apex). The deploy workflow also writes `cname: highstack.ca`. The legacy site on `main` uses `www.highstack.ca`. Pick one as primary; configure the other to redirect at the DNS / Cloudflare level.

If you want `www` as primary instead:
1. Edit `public/CNAME` → `www.highstack.ca`
2. Edit `.github/workflows/deploy.yml` → `cname: www.highstack.ca`
3. Update all metadata URLs (`app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/page.tsx` JSON-LD) from `https://highstack.ca` to `https://www.highstack.ca`

## 4. DNS at the registrar

For **apex** `highstack.ca` pointing at GitHub Pages:

| Type | Host | Value |
|------|------|-------|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| AAAA | @ | `2606:50c0:8000::153` |
| AAAA | @ | `2606:50c0:8001::153` |
| AAAA | @ | `2606:50c0:8002::153` |
| AAAA | @ | `2606:50c0:8003::153` |
| CNAME | www | `highstack-developer.github.io.` |

DNS propagation can take up to 48 hours. **Do this in week 3, not on launch day.**

## 5. Pages source switchover (the actual cutover)

1. Merge `dev` → `main`. CI will run `.github/workflows/deploy.yml` and push `out/` to a new `gh-pages` branch.
2. Wait for the workflow to complete (Actions tab, green check).
3. Repo **Settings → Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` / root
   - Save
4. Confirm **Custom domain** field shows `highstack.ca` (or `www.highstack.ca`).
5. Wait a minute, then check **Enforce HTTPS**.
6. Hit https://highstack.ca and walk through every page (see section 6).

## 6. Final smoke test

| Page | URL | Check |
|------|-----|-------|
| Home | `/` | Hero, services teaser, testimonials, case studies preview, final CTA all render; mobile nav opens; nav links work |
| About | `/about` | Mission/Vision, timeline animates on scroll, values, stats count up |
| Services | `/services` | All 6 service cards, 4-step process |
| Team | `/team` | All team members, LinkedIn icon links work |
| Case Studies | `/case-studies` | Filter pills work; each detail page loads with breadcrumb back, results, sidebar testimonial, related |
| Blog | `/blog` | Tag filter works; each post renders MDX, byline visible, share buttons present |
| Contact | `/contact` | Form submits successfully to Formspree (test message arrives in inbox) |
| Privacy / Terms | `/privacy-policy`, `/terms-of-use` | Renders, sections numbered, links in body work |
| Sitemap | `/sitemap.xml` | Every route appears with correct lastmod |
| Robots | `/robots.txt` | Allow `/`, points to sitemap |
| Favicon | (any page) | Browser tab shows the needle mark |

## 7. Post-launch (within 24h)

- Submit `https://highstack.ca/sitemap.xml` to Google Search Console
- Verify Open Graph previews on LinkedIn (paste any URL into a post draft)
- Verify the Organization JSON-LD with Google Rich Results Test: https://search.google.com/test/rich-results
- Run Lighthouse on `/` from PageSpeed Insights: https://pagespeed.web.dev/
- Set up Cloudflare or a similar CDN if not already in front of DNS

## 8. Out-of-scope for v1 (post-launch backlog)

- Real team photographs in `TeamGrid` (currently initials avatars)
- Cover images on case studies and blog posts (currently brand-color cards)
- Per-author blog pages (`/blog/author/[name]`)
- RSS feed
- Newsletter signup
- Search

---

**Owner:** Solo developer
**Target launch:** End of Week 4
**Rollback plan:** Switch Pages source back to `main` / root. The legacy site is preserved on `main` indefinitely.
