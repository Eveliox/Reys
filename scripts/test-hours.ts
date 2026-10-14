// Quick sanity checks for src/lib/hours.ts. Run: node scripts/test-hours.ts
import assert from 'node:assert/strict';
import { primaryLocation as loc, booking } from '../src/config/site.ts';
import {
  firstBookableDate,
  isPromoDay,
  openStatus,
  timeSlots,
  dayKeyForIsoDate,
} from '../src/lib/hours.ts';

const tz = loc.timezone;
// 2026-10-16 is a Friday. 03:30 UTC Sat = 23:30 Fri in Miami (EDT, UTC-4).
assert.equal(isPromoDay(5, tz, new Date('2026-10-17T03:30:00Z')), true, 'late Friday NY is Friday');
assert.equal(
  isPromoDay(5, tz, new Date('2026-10-17T04:30:00Z')),
  false,
  '00:30 Sat NY is not Friday',
);
assert.equal(isPromoDay(5, tz, new Date('2026-10-16T04:30:00Z')), true, '00:30 Fri NY is Friday');

// Open/closed boundaries, Wednesday 2026-10-14 (EDT).
assert.equal(
  openStatus(loc.hours, tz, new Date('2026-10-14T11:59:00Z')).open,
  false,
  '7:59 closed',
);
assert.equal(openStatus(loc.hours, tz, new Date('2026-10-14T12:00:00Z')).open, true, '8:00 open');
assert.equal(openStatus(loc.hours, tz, new Date('2026-10-14T19:59:00Z')).open, true, '15:59 open');
assert.equal(
  openStatus(loc.hours, tz, new Date('2026-10-14T20:00:00Z')).open,
  false,
  '16:00 closed',
);
// Friday 4:30pm open, Saturday closed → next open Monday.
assert.equal(
  openStatus(loc.hours, tz, new Date('2026-10-16T20:30:00Z')).open,
  true,
  'Fri 16:30 open',
);
const sat = openStatus(loc.hours, tz, new Date('2026-10-17T15:00:00Z'));
assert.ok(
  !sat.open && sat.nextOpen?.day === 'mon' && sat.nextOpen.time === '08:00',
  'Sat → Mon 8:00',
);
const wedEve = openStatus(loc.hours, tz, new Date('2026-10-14T22:00:00Z'));
assert.ok(!wedEve.open && wedEve.nextOpen?.isTomorrow, 'Wed evening → opens tomorrow');

// Slots
const mon = timeSlots(loc.hours.mon, booking.slotMinutes, booking.lastSlotBeforeCloseMinutes);
const fri = timeSlots(loc.hours.fri, booking.slotMinutes, booking.lastSlotBeforeCloseMinutes);
assert.equal(mon[0], '08:00');
assert.equal(mon.at(-1), '15:30');
assert.equal(fri.at(-1), '16:30');
assert.equal(timeSlots(loc.hours.sat, 30, 30).length, 0);

assert.equal(dayKeyForIsoDate('2026-10-16'), 'fri');
// Thursday evening → next bookable is Friday; Friday → Monday.
assert.equal(firstBookableDate(loc.hours, tz, new Date('2026-10-15T22:00:00Z')), '2026-10-16');
assert.equal(firstBookableDate(loc.hours, tz, new Date('2026-10-16T14:00:00Z')), '2026-10-19');

console.log('hours.ts: all checks passed');
