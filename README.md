# martinjanus.dev

Personal portfolio site. Static Astro + Tailwind, deployed on Cloudflare Pages.

## Stack

- **Astro 5** — static, prerendered, ships zero JS by default
- **Tailwind CSS 3** — utility classes + a thin token layer in `src/styles/global.css`
- **Cloudflare Pages** — host (auto-deploy on push to `main`)
- **Cloudflare Web Analytics** — opt-in, no cookies, no GDPR banner needed

## Edit the content

All copy lives in plain TypeScript files — no JSX edits needed for common changes.

| What | Where |
|---|---|
| Hero copy & CTAs | `src/components/Hero.astro` |
| Project case studies | `src/data/projects.ts` |
| Experience timeline | `src/data/experience.ts` |
| About paragraph + skills grid | `src/components/About.astro` |
| Contact block / "Available for" | `src/components/Contact.astro` |
| Site title / description / OG | `src/data/site.ts` |
| CV PDF | `public/Martin_Janus_CV.pdf` |
| Headshot | `public/headshot.jpg` — drops in here, Hero falls back to MJ monogram if missing |

To regenerate the OG image after a headline change:

```sh
python3 scripts/generate-og.py
```

The PNG is checked into the repo so the build doesn't need Python at deploy time.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves the production build locally
```

## Deploy

Push to `main` — Cloudflare Pages picks it up and rebuilds. Pages settings:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 20 or 22

Custom domain `martinjanus.dev` is configured in the Pages dashboard under
Workers & Pages → martinjanus-portfolio → Custom domains.

## License

Code is MIT. Content (copy, photos, CV) is © Martin Janus.
