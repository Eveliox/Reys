/**
 * Timezone-aware business-hours helpers. Pure functions with no DOM access, so
 * they run both at build time (Astro) and in the browser (client scripts).
 */
import type { DayKey, WeeklyHours } from '../config/site.ts';

export const dayKeys: DayKey[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
/** Display / table order: Monday first. */
export const weekOrder: DayKey[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const shortToKey: Record<string, DayKey> = {
  Sun: 'sun',
  Mon: 'mon',
  Tue: 'tue',
  Wed: 'wed',
  Thu: 'thu',
  Fri: 'fri',
  Sat: 'sat',
};

export interface ZonedNow {
  day: DayKey;
  dayIndex: number;
  /** Minutes since local midnight. */
  minutes: number;
  /** Local calendar date, YYYY-MM-DD. */
  isoDate: string;
}

export function nowInZone(timeZone: string, date: Date = new Date()): ZonedNow {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? '';
  const day = shortToKey[get('weekday')] ?? 'sun';
  return {
    day,
    dayIndex: dayKeys.indexOf(day),
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
    isoDate: `${get('year')}-${get('month')}-${get('day')}`,
  };
}

export function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
}

export function fromMinutes(total: number): string {
  const h = Math.floor(total / 60);
  const m = total % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/** "16:00" → "4:00 PM" (en) or "4:00 p.m." (es). */
export function formatTime(hhmm: string, lang: 'en' | 'es'): string {
  const mins = toMinutes(hhmm);
  const h24 = Math.floor(mins / 60);
  const m = mins % 60;
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  const am = h24 < 12;
  const suffix = lang === 'es' ? (am ? 'a.m.' : 'p.m.') : am ? 'AM' : 'PM';
  return `${h12}:${String(m).padStart(2, '0')} ${suffix}`;
}

export type OpenStatus =
  | { open: true; closesAt: string; closingSoon: boolean }
  | {
      open: false;
      nextOpen: { day: DayKey; time: string; isToday: boolean; isTomorrow: boolean } | null;
    };

export function openStatus(
  hours: WeeklyHours,
  timeZone: string,
  date: Date = new Date(),
): OpenStatus {
  const now = nowInZone(timeZone, date);
  for (const [open, close] of hours[now.day]) {
    const o = toMinutes(open);
    const c = toMinutes(close);
    if (now.minutes >= o && now.minutes < c) {
      return { open: true, closesAt: close, closingSoon: c - now.minutes <= 60 };
    }
  }
  for (let offset = 0; offset < 8; offset++) {
    const day = dayKeys[(now.dayIndex + offset) % 7]!;
    const ranges = hours[day];
    for (const [open] of ranges) {
      if (offset === 0 && toMinutes(open) <= now.minutes) continue;
      return {
        open: false,
        nextOpen: { day, time: open, isToday: offset === 0, isTomorrow: offset === 1 },
      };
    }
  }
  return { open: false, nextOpen: null };
}

export function isPromoDay(dayOfWeek: number, timeZone: string, date: Date = new Date()): boolean {
  return nowInZone(timeZone, date).dayIndex === dayOfWeek;
}

/** Day of week for a YYYY-MM-DD string, independent of the viewer's timezone. */
export function dayKeyForIsoDate(iso: string): DayKey | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return null;
  const d = new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])));
  if (Number.isNaN(d.getTime())) return null;
  return dayKeys[d.getUTCDay()]!;
}

/** Bookable start times for a day, e.g. 08:00 … 15:30 when open 08:00–16:00. */
export function timeSlots(
  ranges: [string, string][],
  slotMinutes: number,
  lastSlotBeforeCloseMinutes: number,
): string[] {
  const slots: string[] = [];
  for (const [open, close] of ranges) {
    const last = toMinutes(close) - lastSlotBeforeCloseMinutes;
    for (let t = toMinutes(open); t <= last; t += slotMinutes) slots.push(fromMinutes(t));
  }
  return slots;
}

/** Add days to a YYYY-MM-DD string. */
export function addDays(iso: string, days: number): string {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y!, m! - 1, d! + days));
  return dt.toISOString().slice(0, 10);
}

/** Earliest bookable date: the next day the shop is open (never same-day). */
export function firstBookableDate(
  hours: WeeklyHours,
  timeZone: string,
  date: Date = new Date(),
): string {
  const today = nowInZone(timeZone, date).isoDate;
  for (let i = 1; i <= 14; i++) {
    const iso = addDays(today, i);
    const key = dayKeyForIsoDate(iso);
    if (key && hours[key].length) return iso;
  }
  return addDays(today, 1);
}

/** Group days with identical hours, for compact display and JSON-LD. */
export function groupHours(hours: WeeklyHours): { days: DayKey[]; ranges: [string, string][] }[] {
  const groups: { days: DayKey[]; ranges: [string, string][] }[] = [];
  for (const day of weekOrder) {
    const ranges = hours[day];
    const sig = JSON.stringify(ranges);
    const last = groups[groups.length - 1];
    if (last && JSON.stringify(last.ranges) === sig) last.days.push(day);
    else groups.push({ days: [day], ranges });
  }
  return groups;
}
