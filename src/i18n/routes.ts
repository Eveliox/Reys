/**
 * Maps every page to its English and Spanish path. The language toggle,
 * hreflang tags, and sitemap alternates all read from here.
 */
import { locations, services, site, type ServiceId } from '../config/site.ts';

export const languages = ['en', 'es'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

export type Route =
  | 'home'
  | 'services'
  | 'about'
  | 'locations'
  | 'book'
  | { service: ServiceId }
  | { location: string };

const staticPaths = {
  home: { en: '/', es: '/es/' },
  services: { en: '/services/', es: '/es/servicios/' },
  about: { en: '/about/', es: '/es/nosotros/' },
  locations: { en: '/locations/', es: '/es/ubicaciones/' },
  book: { en: '/book/', es: '/es/cita/' },
} as const;

export function pathFor(lang: Lang, route: Route): string {
  if (typeof route === 'string') return staticPaths[route][lang];
  if ('service' in route) {
    const s = services.find((x) => x.id === route.service);
    if (!s) throw new Error(`Unknown service ${route.service}`);
    return `${staticPaths.services[lang]}${s.slug[lang]}/`;
  }
  const loc = locations.find((x) => x.id === route.location);
  if (!loc) throw new Error(`Unknown location ${route.location}`);
  return `${staticPaths.locations[lang]}${loc.slug[lang]}/`;
}

export function alternatesFor(route: Route): Record<Lang, string> {
  return { en: pathFor('en', route), es: pathFor('es', route) };
}

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).href;
}

/** Every route on the site (used by the sitemap). */
export function allRoutes(): Route[] {
  return [
    'home',
    'services',
    ...services.map((s) => ({ service: s.id })),
    'about',
    'locations',
    ...locations.map((l) => ({ location: l.id })),
    'book',
  ];
}

/** hreflang alternates for one sitemap URL. */
export function sitemapLinksFor(url: string): { url: string; lang: string }[] {
  const pathname = new URL(url).pathname;
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  for (const route of allRoutes()) {
    const alt = alternatesFor(route);
    if (alt.en === normalized || alt.es === normalized) {
      return [
        { lang: 'en-US', url: absoluteUrl(alt.en) },
        { lang: 'es-US', url: absoluteUrl(alt.es) },
        { lang: 'x-default', url: absoluteUrl(alt.en) },
      ];
    }
  }
  return [];
}
