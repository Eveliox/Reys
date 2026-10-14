import en, { type Dictionary } from './en.ts';
import es from './es.ts';
import type { Lang } from './routes.ts';

const dictionaries: Record<Lang, Dictionary> = { en, es };

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

export { languages, defaultLang, pathFor, alternatesFor, absoluteUrl, type Lang, type Route } from './routes.ts';
