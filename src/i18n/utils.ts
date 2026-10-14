import { primaryLocation, promo, site } from '../config/site.ts';
import en, { type Dictionary } from './en.ts';
import es from './es.ts';
import type { Lang } from './routes.ts';

/**
 * Copy can reference business facts with tokens so they're only ever set in
 * src/config/site.ts: {phone} {rating} {reviewCount} {reviewCountNum} {promoPct} {address}
 */
const tokens: Record<string, string> = {
  '{phone}': site.phone.display,
  '{rating}': String(site.rating.value),
  '{reviewCount}': site.rating.countLabel,
  '{reviewCountNum}': String(site.rating.count),
  '{promoPct}': String(promo.percentOff),
  '{address}': primaryLocation.address.street,
};
const tokenRe = new RegExp(Object.keys(tokens).map((k) => k.replace(/[{}]/g, '\\$&')).join('|'), 'g');

export function fillTokens(s: string): string {
  return s.replace(tokenRe, (m) => tokens[m] ?? m);
}

function fill<T>(value: T): T {
  if (typeof value === 'string') return fillTokens(value) as T;
  if (typeof value === 'function') {
    return ((...args: unknown[]) => fill((value as (...a: unknown[]) => unknown)(...args))) as T;
  }
  if (Array.isArray(value)) return value.map(fill) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fill(v)])) as T;
  }
  return value;
}

const dictionaries: Record<Lang, Dictionary> = { en: fill(en), es: fill(es as Dictionary) };

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}
