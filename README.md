# Rey's Auto Repair: website

Bilingual (English / Spanish) marketing site for Rey's Auto Repair in Little Havana, Miami.

Built with **Astro 7** (static HTML, very little JavaScript) and **Tailwind CSS 4**. It deploys to Vercel or Netlify with no configuration.

- 23 static pages: home, services (plus 5 service pages), about, locations (plus 1 location page), and booking, each in EN and ES under `/es/`, plus a 404 page
- Mobile-first, with a sticky "Call Now" bar on phones
- Local SEO: unique titles and descriptions per page and language, `hreflang`, Open Graph, `AutoRepair` / `Service` / `FAQPage` / `BreadcrumbList` JSON-LD, `sitemap-index.xml`, `robots.txt`
- Lighthouse (mobile and desktop) scored 100 for performance, accessibility, best practices, and SEO on the home, service, location, about, booking, and Spanish pages

---

## Run it locally

Requires Node 22.12 or newer.

```bash
npm install
npm run dev        # http://localhost:4321 with live reload
```

Other scripts:

| Command           | What it does                                                                  |
| ----------------- | ----------------------------------------------------------------------------- |
| `npm run build`   | Builds the static site into `dist/`                                           |
| `npm run preview` | Serves `dist/` locally                                                        |
| `npm run check`   | Type-checks everything (also catches missing Spanish translations)            |
| `npm test`        | Tests the business-hours / Friday / time-slot logic                           |
| `npm run verify`  | After a build: checks unique titles, one H1 per page, valid JSON-LD, hreflang |
| `npm run format`  | Formats code with Prettier                                                    |

---

## Where things live

```
src/config/site.ts     ← ALL business info: name, phone, email, hours, locations, services, prices, promo
src/i18n/en.ts         ← ALL English copy (headlines, service descriptions, FAQs, form labels, SEO titles)
src/i18n/es.ts         ← ALL Spanish copy (same keys as en.ts)
src/i18n/routes.ts     ← URL for every page in each language (/services/ ↔ /es/servicios/)
src/styles/global.css  ← Colors, fonts, buttons, form styles (design tokens at the top)
src/components/        ← Page sections (Hero, FridaySpecial, ServiceGrid, AppointmentForm, …)
src/views/             ← Full page templates, shared by the EN and ES routes
src/pages/             ← Thin route files (one per URL), which just pick the language
public/                ← favicon, social share image (og-default.png), apple-touch-icon
```

---

## Editing `src/config/site.ts`

This is the only file you need for business facts. Change a value, rebuild, and it updates everywhere: header, footer, buttons, hours tables, open/closed indicator, JSON-LD, sitemap, form.

| Setting                              | Notes                                                                                                                                   |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `site.url`                           | Your real domain, e.g. `https://www.reysautorepair.com` (no trailing slash). Used for canonical URLs, the sitemap, and social previews. |
| `site.phone`                         | `display` is what people see; `e164` is what phones dial (`+1` + 10 digits).                                                            |
| `site.email`                         | Shown in the footer and location pages.                                                                                                 |
| `site.rating`                        | Google rating and review count. Copy uses `{rating}` / `{reviewCount}` tokens, so it updates automatically.                             |
| `site.googleReviewsUrl`              | Link for "Read our reviews on Google".                                                                                                  |
| `site.socials`                       | Leave a value `''` to hide that icon.                                                                                                   |
| `site.formEndpoint` / `formProvider` | See [Connect the form](#connect-the-appointment-form).                                                                                  |
| `locations[]`                        | One entry per shop (see below).                                                                                                         |
| `services[]`                         | Slugs (URL per language), icon, `premium` (big dark "Specialty" card), `startingPrice`.                                                 |
| `promo`                              | Day of week (`5` = Friday), `percentOff`, and which items and services it applies to.                                                   |
| `booking`                            | Appointment slot length and how close to closing the last slot can be.                                                                  |

**Hours** are 24-hour `"HH:MM"` ranges per day. An empty array means closed:

```ts
hours: {
  mon: [['08:00', '16:00']],
  fri: [['08:00', '17:00']],
  sat: [],                     // closed
  // a lunch break would be: [['08:00', '12:00'], ['13:00', '17:00']]
}
```

**Copy tokens.** The text files use `{phone}`, `{rating}`, `{reviewCount}`, `{reviewCountNum}`, `{promoPct}`, and `{address}`, so these facts never need to be edited in the copy. To change wording, edit `en.ts` and `es.ts`. If a key is missing from `es.ts`, `npm run check` fails.

---

## Add a new location

1. Add an entry to `locations` in `src/config/site.ts`:

   ```ts
   {
     id: 'coral-gables',
     slug: { en: 'coral-gables', es: 'coral-gables' },
     name: 'Coral Gables',
     address: { street: '123 Example Rd', city: 'Coral Gables', region: 'FL', postalCode: '33134', country: 'US' },
     geo: { lat: 25.7215, lng: -80.2684 },   // right-click the pin in Google Maps to copy these
     phone: { display: '(305) 555-0123', e164: '+13055550123' },
     sms:   { display: '(305) 555-0123', e164: '+13055550123' },
     timezone: 'America/New_York',
     hours: { sun: [], mon: [['08:00','17:00']], tue: [['08:00','17:00']], wed: [['08:00','17:00']],
              thu: [['08:00','17:00']], fri: [['08:00','17:00']], sat: [] },
     areaServed: ['Coral Gables', 'Coconut Grove'],
     googleUrl: 'https://maps.app.goo.gl/…',
   },
   ```

2. Run `npm run build`. Nothing else is required. You automatically get:
   - `/locations/coral-gables/` and `/es/ubicaciones/coral-gables/` pages with a map, hours table, open-now status, and Call / Text / Directions buttons
   - A card on the home page and the locations page (headings switch to "Our locations")
   - Hours and address in the footer
   - A "Location" dropdown in the appointment form (time slots follow that location's hours)
   - Its own `AutoRepair` JSON-LD, plus sitemap entries with hreflang

The first location in the list is treated as the main one (hero open/closed badge, Friday-promo timezone).

---

## Connect the appointment form

The form sends a standard `POST` with these fields: `name`, `phone`, `email`, `vehicle_year`, `vehicle_make`, `vehicle_model`, `service`, `preferred_date` (YYYY-MM-DD), `preferred_time` (HH:MM), `notes`, `location`, `language`, plus `_subject` and `form-name`. The honeypot field `company_website` must be empty: the page itself drops bot submissions, and Netlify drops them too.

With JavaScript, the form submits in the background and shows an inline success or error state. Without JavaScript, it falls back to a normal form post.

### Option A: Formspree (works on any host)

1. Create a form at formspree.io and copy its endpoint (`https://formspree.io/f/abcdwxyz`).
2. Either set an environment variable in Vercel/Netlify:
   ```
   PUBLIC_FORM_ENDPOINT=https://formspree.io/f/abcdwxyz
   ```
   or replace `formEndpoint` in `site.ts`. Then redeploy.

### Option B: Netlify Forms (if hosting on Netlify)

1. In `site.ts`, set `formProvider: 'netlify'`.
2. Deploy. Netlify detects the `appointment` form automatically. Turn on email notifications under **Site → Forms → Notifications**.

### Option C: Supabase Edge Function (or any endpoint you control)

Set `PUBLIC_FORM_ENDPOINT=https://<project>.supabase.co/functions/v1/appointment`. The function receives `multipart/form-data` and must allow CORS from your domain. Minimal example:

```ts
// supabase/functions/appointment/index.ts
const cors = {
  'Access-Control-Allow-Origin': 'https://www.reysautorepair.com',
  'Access-Control-Allow-Headers': 'accept, content-type',
};
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
  const form = await req.formData();
  if (form.get('company_website')) return new Response('{}', { headers: cors }); // bot
  // …insert into a table / send an email…
  return Response.json({ ok: true }, { headers: cors });
});
```

Any non-2xx response shows the error message, which includes a "call us" link.

---

## Add photos

Every image spot is an `ImageSlot` with a stable id (`data-image-slot="…"` in the HTML), so they're easy to find:

| Slot id                                                                                                  | Where                               |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `hero`                                                                                                   | Home hero (`Hero.astro`)            |
| `service-german`, `service-classic`, `service-diagnostics`, `service-oil-change`, `service-transmission` | Service pages (`ServicePage.astro`) |
| `about-shop`                                                                                             | About page header                   |
| `team-1`, `team-2`, `team-3`                                                                             | About page team grid                |

To swap one in, put the photo in `src/assets/`, import it, and pass it as `src`:

```astro
---
import heroPhoto from '../assets/hero.jpg';
---

<ImageSlot id="hero" src={heroPhoto} alt={t.hero.imageAlt} … />
```

Astro resizes and compresses it automatically (AVIF/WebP, responsive sizes). No manufacturer logos.

The social share image `public/og-default.png` (1200×630) was rendered from `scripts/og-image.html`. Replace it with a real photo or logo version when you have one.

---

## Deploy

Before your first deploy, set `site.url` in `src/config/site.ts` to the real domain.

**Vercel:** Import the Git repo → Framework preset is detected as **Astro** → Deploy. Optionally add `PUBLIC_FORM_ENDPOINT` under Settings → Environment Variables.

**Netlify:** Add new site → Import the repo. Netlify detects Astro (build `npm run build`, publish `dist`). Node 22 comes from `.nvmrc`. Optionally add `PUBLIC_FORM_ENDPOINT` under Site configuration → Environment variables.

After launch:

- Submit `https://<your-domain>/sitemap-index.xml` in Google Search Console.
- Make sure the Google Business Profile has the same name, address, phone, and website URL as `site.ts` (NAP consistency matters for local ranking).
- Note: Google generally won't show review stars in search results for a business's own `aggregateRating` markup. The data is still valid and helps Google match the site to the business profile.

---

## Design notes

- **Palette** (tokens in `src/styles/global.css`): deep ink-teal `#0e2a33`, warm cream `#faf5ec`, a single "mamey" terracotta accent `#b8411c`, and brass `#c29a57` (only on dark backgrounds). Contrast ratios are documented next to the tokens. All text pairs meet WCAG AA.
- **Typography:** Archivo (self-hosted, 35 KB, preloaded).
- **Local touch:** a faint pattern inspired by Cuban cement tiles (_losas hidráulicas_) behind the hero, the Friday banner, and dark sections.
- **Friday Specials and open/closed now:** both are computed in the visitor's browser using the shop's `America/New_York` time, so they're never stale on a static site. The "Today only" swap causes no layout shift.
- **Google Map** loads only when someone taps "Show map", which keeps pages fast and avoids Google cookies until needed.
