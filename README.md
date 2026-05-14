# Highstack Website

Static site hosted on GitHub Pages at [www.highstack.ca](https://www.highstack.ca).

## Branch model

| Branch | Purpose |
|--------|---------|
| `main` | Production — GitHub Pages deploys from here. Do not push directly. |
| `dev`  | Active development. Merge into `main` only when ready to go live. |

## Structure

```
/               Production pages (index.html, privacy-policy.html, terms-of-use.html)
css/            Stylesheets
assets/         Images and logos
archive/        Work-in-progress pages not yet in production
```

## Pages

- `index.html` — Home / About Us
- `privacy-policy.html` — Privacy Policy
- `terms-of-use.html` — Terms of Use
- `archive/` — Service pages (booking, care, chiro, physio, rmt, weight-loss) saved for the redesign

## GitHub Pages setup

Settings → Pages → **Deploy from a branch** → Branch: `main` / root.
