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

The hero video is silent, H.264, 720p, fast-start. Source file is retained at project root. Re-encode on macOS with `swift scripts/optimize-video.swift INPUT.mp4 NEW_OUTPUT.mp4`; the output path must not already exist. The web asset is `public/videos/auto-care.mp4`. It autoplays muted and loops for all visitors (including reduced-motion), pauses when scrolled out of view, and has a visible Pause/Play button. Devices in battery-saver mode may block autoplay; the poster and Play button show instead.

Social image layout: `scripts/og-image.html`, rendered at 1200×630 to `public/og-default.png`. Favicon: `public/favicon.svg`.

## Business research (2026-10-14)

Address and telephone match public listings:
- https://www.loc8nearme.com/florida/miami/reys-auto-repair-services/4315617/
- https://www.autotechiq.com/auto-repair-shop/51653/reys-auto-repair-services

Hours conflict between listings, so no hours were changed:
- https://www.cityof.com/fl/miami/reys-auto-repair-2750881
- https://www.autotechiq.com/auto-repair-shop/51653/reys-auto-repair-services

## Interactive experience

The homepage includes the video hero, a keyboard-accessible service accordion with coordinated photos, and subtle section entrances. Motion is disabled when reduced motion is requested; service details remain usable without JavaScript.

Without a form endpoint, the visit planner collects only service and vehicle details in the page, then provides a phone-call recap. It sends nothing and makes no booking. Service links preselect the planner using `?service=<service-id>`.

With a configured endpoint, the appointment form becomes a four-step request: service, vehicle, preferred time, contact. Validation runs before advancing, input survives Back, and a recap is shown before submission. A failed request keeps input for retry; success appears only after an OK response. The live endpoint still needs an end-to-end delivery check before launch.

Photography and verified repair-story collection: see `CONTENT-BRIEF.md`.

### Lead inquiry form

The home and booking pages include bilingual lead inquiry forms. Sending stays disabled until `PUBLIC_LEAD_FORM_ENDPOINT` is set. Configure a form provider to accept POST form data and return a successful HTTP status only after accepting the inquiry; set the business recipient in that provider and rebuild. Enable provider-side spam protection and validation. Do not put API keys or email credentials in this public variable. Verify actual email delivery before launch. The form collects name, email, optional phone, service, and message, plus language and a honeypot. Failed requests retain entered details; no personal details are saved in browser storage.
