# Rey’s Auto Repair — Azul handoff

The site is a bilingual static Astro build. Run `npm run check`, `npm run build`, and `npm run verify` before release.

## Client details to confirm

- **Production domain:** replace `site.url` in `src/config/site.ts`. While its hostname ends in `.example`, pages are noindex and robots.txt blocks crawling. Changing the domain and rebuilding enables indexing and updates canonical URLs, language alternates, sitemap, and social image URLs.
- **Appointments:** set `PUBLIC_FORM_ENDPOINT` to the approved form service, or configure Netlify Forms. Until connected, booking pages offer telephone scheduling. Never use a client secret in a `PUBLIC_` variable.
- **Email and SMS:** replace the placeholder email; set `location.sms` only after confirming a number receives texts. Until then, only phone and directions are offered.
- **Hours:** confirm with the client. Public listings conflict, especially Saturday hours. Existing configured hours have been preserved; they drive the hours table, open status, and booking slots.
- **Promotions:** confirm the 20% Friday offer and its terms before launch.
- **Google profile:** obtain the direct profile/review link. Current link uses a Maps business search. The unverified 700+ review count is no longer displayed and aggregate-rating schema is omitted. Confirm approximate coordinates before adding geographic schema.

## Brand and media

Red: `#c8102e`. White backgrounds, Archivo typography. Azul credit links to https://azulwebdev.com in both-language footers.

Photo sources: `src/assets/editorial/CREDITS.md`. Shop photos and video were supplied by the client/agency. Confirm permission for supplied media before release.

The hero video is silent, H.264, 720p, fast-start. Source file is retained at project root. Re-encode on macOS with `swift scripts/optimize-video.swift INPUT.mp4 NEW_OUTPUT.mp4`; the output path must not already exist. The web asset is `public/videos/auto-care.mp4`. Its separate poster stays visible for reduced-motion and data-saving visitors until they choose playback.

Social image layout: `scripts/og-image.html`, rendered at 1200×630 to `public/og-default.png`. Favicon: `public/favicon.svg`.

## Business research (2026-10-14)

Address and telephone match public listings:
- https://www.loc8nearme.com/florida/miami/reys-auto-repair-services/4315617/
- https://www.autotechiq.com/auto-repair-shop/51653/reys-auto-repair-services

Hours conflict between listings, so no hours were changed:
- https://www.cityof.com/fl/miami/reys-auto-repair-2750881
- https://www.autotechiq.com/auto-repair-shop/51653/reys-auto-repair-services
