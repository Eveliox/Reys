import type { WeeklyHours } from '../config/site.ts';
import type { Dictionary } from '../i18n/en.ts';
import type { Lang } from '../i18n/routes.ts';
import { formatTime, groupHours } from './hours.ts';

/** Compact hours, e.g. ["Mon–Thu", "8:00 AM – 4:00 PM"], ["Sat–Sun", "Closed"]. */
export function hoursSummary(hours: WeeklyHours, lang: Lang, t: Dictionary): [string, string][] {
  return groupHours(hours).map(({ days, ranges }) => {
    const first = t.daysShort[days[0]!];
    const last = t.daysShort[days[days.length - 1]!];
    const label = days.length === 1 ? first : t.hours.dayRange(first, last);
    const value = ranges.length
      ? ranges.map(([a, b]) => t.hours.range(formatTime(a, lang), formatTime(b, lang))).join(', ')
      : t.hours.closed;
    return [capitalize(label), value];
  });
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function fullAddress(a: {
  street: string;
  city: string;
  region: string;
  postalCode: string;
}) {
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
}

export function directionsUrl(a: {
  street: string;
  city: string;
  region: string;
  postalCode: string;
}) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress(a))}`;
}

export function mapEmbedUrl(
  name: string,
  a: { street: string; city: string; region: string; postalCode: string },
  lang: Lang,
) {
  return `https://www.google.com/maps?q=${encodeURIComponent(`${name}, ${fullAddress(a)}`)}&hl=${lang}&z=16&output=embed`;
}
