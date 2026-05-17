# M & J Masonry — Website

Family-owned masonry and hardscape company in Rockland, MA. Built with Astro + Tailwind, deployed to GitHub Pages.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321/mjmasonry-site/
npm run build    # outputs to dist/
npm run preview
```

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

## Configuration

| Env var | Where | Purpose |
|---|---|---|
| `PUBLIC_FORMSPREE_FORM_ID` | GitHub Actions secret + local `.env` | Contact form backend (see `.env.example`) |
| `SITE_URL` | Build env | Override deployed site URL — set when moving to custom domain |
| `BASE_PATH` | Build env | Override URL prefix — set to `/` when moving to custom domain |

Contact details live in `src/data/contact.ts` — change there, applies site-wide.
