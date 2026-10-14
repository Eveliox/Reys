/** JSON-LD builders. All data comes from src/config/site.ts. */
import { locations, site, type Location } from '../config/site.ts';
import { absoluteUrl, pathFor, type Lang } from '../i18n/routes.ts';
import { groupHours } from './hours.ts';

const schemaDay: Record<string, string> = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday',
};

export function autoRepairSchema(location: Location, lang: Lang, description: string) {
  const url = absoluteUrl(pathFor(lang, { location: location.id }));
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${absoluteUrl(pathFor('en', { location: location.id }))}#business`,
    name: `${site.name} – ${location.name}`,
    description,
    url,
    telephone: location.phone.e164,
    email: site.email,
    priceRange: site.priceRange,
    image: absoluteUrl('/og-default.png'),
    inLanguage: lang,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address.street,
      addressLocality: location.address.city,
      addressRegion: location.address.region,
      postalCode: location.address.postalCode,
      addressCountry: location.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: location.geo.lat, longitude: location.geo.lng },
    hasMap: location.googleUrl,
    areaServed: location.areaServed.map((name) => ({ '@type': 'Place', name })),
    openingHoursSpecification: groupHours(location.hours).flatMap((g) =>
      g.ranges.map(([opens, closes]) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: g.days.map((d) => schemaDay[d]),
        opens,
        closes,
      })),
    ),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
    },
    sameAs: Object.values(site.socials).filter(Boolean),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function websiteSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: absoluteUrl(pathFor(lang, 'home')),
    inLanguage: lang,
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; lang: Lang }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    inLanguage: opts.lang,
    serviceType: opts.name,
    areaServed: { '@type': 'City', name: 'Miami' },
    provider: locations.map((l) => ({ '@id': `${absoluteUrl(pathFor('en', { location: l.id }))}#business` })),
  };
}
