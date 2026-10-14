/**
 * Single source of truth for all business information.
 * Change a phone number, hours, a price, or add a location here and the
 * whole site (pages, footer, JSON-LD, sitemap, form) updates.
 *
 * Anything marked [PLACEHOLDER] still needs a real value — see README.md.
 */

export type DayKey = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';
/** Open ranges per day in 24h "HH:MM". An empty array means closed. */
export type WeeklyHours = Record<DayKey, [open: string, close: string][]>;

export type ServiceId = 'diagnostics' | 'german' | 'oil-change' | 'transmission' | 'classic';
export type PromoItemId = 'oilChange' | 'transmissionFluid' | 'airFilter';

export interface Location {
  id: string;
  slug: { en: string; es: string };
  /** Short neighborhood name shown in headings, e.g. "Little Havana". */
  name: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  /** [PLACEHOLDER] approximate — confirm exact coordinates from Google Maps. */
  geo: { lat: number; lng: number };
  phone: { display: string; e164: string };
  /** Number used for the click-to-text (sms:) button. */
  sms: { display: string; e164: string };
  timezone: string;
  hours: WeeklyHours;
  /** Neighborhoods served — used in copy and JSON-LD areaServed. */
  areaServed: string[];
  /** Direct link to this location's Google Business Profile / reviews. */
  googleUrl: string;
}

export interface Service {
  id: ServiceId;
  slug: { en: string; es: string };
  icon: 'gauge' | 'german' | 'oil' | 'gears' | 'classic';
  /** Premium specialties get the large dark feature card. */
  premium: boolean;
  /** Shown as "Starting at …". [PLACEHOLDER] */
  startingPrice: string;
}

const littleHavanaHours: WeeklyHours = {
  sun: [],
  mon: [['08:00', '16:00']],
  tue: [['08:00', '16:00']],
  wed: [['08:00', '16:00']],
  thu: [['08:00', '16:00']],
  fri: [['08:00', '17:00']],
  sat: [],
};

export const site = {
  name: "Rey's Auto Repair",
  /** [PLACEHOLDER] production domain, no trailing slash. Used for canonical URLs, sitemap, OG. */
  url: 'https://www.reysautorepair.example',
  /** [PLACEHOLDER] */
  email: 'info@reysautorepair.example',
  phone: { display: '(305) 541-7339', e164: '+13055417339' },
  rating: { value: 4.9, count: 700, countLabel: '700+' },
  /** [PLACEHOLDER] replace with the direct Google reviews link for the business profile. */
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rey's+Auto+Repair+527+SW+15th+Ave+Miami+FL+33135",
  /** JSON-LD priceRange. [PLACEHOLDER] */
  priceRange: '$$',
  /** [PLACEHOLDER] year the shop opened; null hides "years in business" copy. */
  foundedYear: null as number | null,
  /** [PLACEHOLDER] leave a value empty ('') to hide that icon. */
  socials: {
    facebook: '',
    instagram: '',
    google:
      "https://www.google.com/maps/search/?api=1&query=Rey's+Auto+Repair+527+SW+15th+Ave+Miami+FL+33135",
    yelp: '',
  },
  /**
   * Appointment form endpoint. PUBLIC_FORM_ENDPOINT (env var) overrides this.
   * [PLACEHOLDER] Formspree / Supabase function URL. See README "Connect the form".
   */
  formEndpoint: 'https://formspree.io/f/REPLACE_ME',
  /**
   * 'netlify' adds the Netlify Forms attributes and posts to "/" (endpoint ignored).
   * 'endpoint' posts to formEndpoint / PUBLIC_FORM_ENDPOINT (Formspree, Supabase, etc.).
   */
  formProvider: 'endpoint' as 'endpoint' | 'netlify',
} as const;

export const locations: Location[] = [
  {
    id: 'little-havana',
    slug: { en: 'little-havana', es: 'little-havana' },
    name: 'Little Havana',
    address: {
      street: '527 SW 15th Ave',
      city: 'Miami',
      region: 'FL',
      postalCode: '33135',
      country: 'US',
    },
    geo: { lat: 25.7686, lng: -80.2185 },
    phone: site.phone,
    /** [PLACEHOLDER] confirm this line can receive texts, or set a mobile number. */
    sms: site.phone,
    timezone: 'America/New_York',
    hours: littleHavanaHours,
    areaServed: [
      'Little Havana',
      'Shenandoah',
      'The Roads',
      'Brickell',
      'Coral Way',
      'West Flagler',
      'Miami',
    ],
    googleUrl: site.googleReviewsUrl,
  },
];

export const services: Service[] = [
  {
    id: 'german',
    slug: { en: 'german-car-repair', es: 'reparacion-carros-alemanes' },
    icon: 'german',
    premium: true,
    startingPrice: '$XX',
  },
  {
    id: 'classic',
    slug: { en: 'classic-car-repair', es: 'reparacion-carros-clasicos' },
    icon: 'classic',
    premium: true,
    startingPrice: '$XX',
  },
  {
    id: 'diagnostics',
    slug: { en: 'diagnostics', es: 'diagnostico' },
    icon: 'gauge',
    premium: false,
    startingPrice: '$XX',
  },
  {
    id: 'oil-change',
    slug: { en: 'oil-change', es: 'cambio-de-aceite' },
    icon: 'oil',
    premium: false,
    startingPrice: '$XX',
  },
  {
    id: 'transmission',
    slug: { en: 'transmission-service', es: 'servicio-de-transmision' },
    icon: 'gears',
    premium: false,
    startingPrice: '$XX',
  },
];

/** German makes we service — text only, never logos. */
export const germanMakes = ['BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche'] as const;

export const promo = {
  /** 0 = Sunday … 5 = Friday. Evaluated in each location's timezone. */
  dayOfWeek: 5,
  percentOff: 20,
  items: ['oilChange', 'transmissionFluid', 'airFilter'] as PromoItemId[],
  /** Service pages that show the promo callout. */
  services: ['oil-change', 'transmission'] as ServiceId[],
} as const;

/** Appointment slot length in minutes, and minimum gap before closing. */
export const booking = { slotMinutes: 30, lastSlotBeforeCloseMinutes: 30 } as const;

export const primaryLocation = locations[0]!;

export function getService(id: ServiceId): Service {
  const s = services.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown service ${id}`);
  return s;
}
