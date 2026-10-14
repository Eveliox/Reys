/**
 * All English copy. Spanish lives in es.ts and must match this shape —
 * a missing or extra key fails `npm run check`.
 * Business facts (phone, hours, prices) come from src/config/site.ts.
 */
import type { DayKey, PromoItemId, ServiceId } from '../config/site.ts';

const en = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  switchLabel: 'Español',
  switchAria: 'Ver esta página en español',
  skipToContent: 'Skip to main content',

  nav: {
    label: 'Main',
    services: 'Services',
    specials: 'Friday Specials',
    about: 'About',
    locations: 'Location',
    book: 'Book',
    home: 'Home',
    menu: 'Menu',
    closeMenu: 'Close menu',
  },

  cta: {
    callNow: 'Call Now',
    callUs: 'Call us',
    book: 'Book Appointment',
    bookShort: 'Book',
    text: 'Text Us',
    directions: 'Directions',
    allServices: 'See all services',
    details: 'Details',
    bandTitle: 'Car trouble? We’re here to help.',
    bandText: 'Call to arrange a weekday appointment.',
    readMore: 'Learn more',
  },

  rating: {
    outOf: (v: number) => `${v} out of 5 stars`,
    reviews: (count: string) => `${count} Google reviews`,
    onGoogle: 'on Google',
    readOnGoogle: 'Read our reviews on Google',
  },

  days: {
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'Wednesday',
    thu: 'Thursday',
    fri: 'Friday',
    sat: 'Saturday',
    sun: 'Sunday',
  } satisfies Record<DayKey, string>,
  daysShort: {
    mon: 'Mon',
    tue: 'Tue',
    wed: 'Wed',
    thu: 'Thu',
    fri: 'Fri',
    sat: 'Sat',
    sun: 'Sun',
  } satisfies Record<DayKey, string>,

  hours: {
    title: 'Hours',
    closed: 'Closed',
    today: 'Today',
    openNow: 'Open now',
    closedNow: 'Closed now',
    closesAt: (t: string) => `until ${t}`,
    closingSoon: (t: string) => `closing soon (${t})`,
    opensToday: (t: string) => `opens today at ${t}`,
    opensTomorrow: (t: string) => `opens tomorrow at ${t}`,
    opensOn: (day: string, t: string) => `opens ${day} at ${t}`,
    checking: 'Checking hours…',
    range: (a: string, b: string) => `${a} – ${b}`,
    dayRange: (a: string, b: string) => `${a}–${b}`,
  },

  meta: {
    home: {
      title: "Auto Repair in Little Havana, Miami | Rey's Auto Repair",
      description:
        "Rey's Auto Repair is Little Havana's {rating}-star auto shop: diagnostics, German car repair (BMW, Mercedes-Benz, Audi, VW, Porsche), oil changes, transmissions and classic cars. Call {phone}.",
    },
    services: {
      title: "Auto Repair Services in Miami | Rey's Auto Repair",
      description:
        'Diagnostics, German and classic car repair, brakes, engine, A/C, electrical, tires, transmission, and oil changes in Little Havana, Miami. Explore our services.',
    },
    about: {
      title: "About Rey's Auto Repair | Little Havana Mechanics",
      description:
        "Meet the team behind Rey's Auto Repair, a neighborhood auto shop in Little Havana, Miami.",
    },
    locations: {
      title: "Locations & Hours | Rey's Auto Repair Miami",
      description:
        "Find Rey's Auto Repair at {address} in Little Havana, Miami. Hours, directions, and click-to-call.",
    },
    location: {
      title: (name: string) => `Rey's Auto Repair ${name}: Hours & Directions | Miami`,
      description: (name: string, street: string) =>
        `Rey's Auto Repair ${name}: ${street}, Miami, FL. Hours, directions, map, and one-tap calling. Rated {rating} stars on Google.`,
    },
    book: {
      title: "Book an Appointment | Rey's Auto Repair Little Havana",
      description:
        "Request an appointment at Rey's Auto Repair in Little Havana, Miami. Pick a weekday time and we'll call to confirm.",
    },
    notFound: {
      title: "Page Not Found | Rey's Auto Repair",
      description: 'This page could not be found.',
    },
  },

  hero: {
    eyebrow: 'Auto repair · Little Havana, Miami',
    title: 'Expert care. Local roots.',
    subtitle:
      'German engineering. Classic character. Everyday reliability. Auto repair and maintenance in the heart of Little Havana.',
    imageAlt: "A mechanic working on a car in the Rey's Auto Repair shop",
  },

  trust: {
    label: 'Why drivers trust us',
    items: [
      { title: '{rating}★ on Google', text: '{reviewCount} reviews from neighbors' },
      { title: 'German specialists', text: 'BMW · Mercedes · Audi · VW · Porsche' },
      { title: 'Classic car expertise', text: 'Carbs, points, and chrome' },
      {
        title: 'Little Havana, Miami',
        text: '527 SW 15th Ave, Miami. Find our hours and get directions below.',
      },
    ],
  },

  promo: {
    eyebrow: 'Friday Specials',
    everyFriday: 'Every Friday',
    todayOnly: 'Today only',
    title: (pct: number) => `${pct}% off every Friday`,
    titleToday: (pct: number) => `${pct}% off today`,
    lead: 'Bring it in on a Friday and save on the maintenance that keeps your car out of the shop.',
    items: {
      oilChange: 'Oil changes',
      transmissionFluid: 'Transmission fluid service',
      airFilter: 'Air filters',
    } satisfies Record<PromoItemId, string>,
    fine: 'Mention the Friday special when you call or book.',
    off: (pct: number) => `${pct}% off`,
    callout: (pct: number) => `Fridays: ${pct}% off this service.`,
  },

  services: {
    eyebrow: 'What we do',
    title: 'Whatever you drive. We’re here for it.',
    intro:
      "Every job starts with a clear diagnosis and a straight answer on cost. Here's what we do best.",
    specialty: 'Specialty',
    startingAt: (price: string) => `Starting at ${price}`,
    startingAtLabel: 'Starting at',
    fullListTitle: 'Everything we do',
    fullListIntro: 'The full list of repairs and services we offer, by category.',
    whatWeDo: 'What we handle',
    faqTitle: 'Common questions',
    related: 'Other services',
    breadcrumb: 'Services',
    ctaTitle: 'Need this done?',
    ctaText: 'Call for a quote, or book a time that works for you.',
    items: {
      brakes: {
        name: 'Brake Repair',
        short:
          'Squealing, grinding, or a soft pedal? We inspect your brakes and fix what’s actually worn, nothing more.',
        metaTitle: "Brake Repair in Little Havana, Miami | Rey's Auto Repair",
        metaDescription:
          'Brake repair in Little Havana, Miami: inspections, pads and rotors, and fixes for squealing, grinding, or a soft pedal. Call {phone}.',
        h1: 'Brake repair in Little Havana',
        intro:
          'Brakes are the one system you can’t afford to guess about. We inspect the pads, rotors, and hydraulic system, show you what’s worn, and repair it so your car stops straight and confidently.',
        includes: [
          'Brake inspections',
          'Brake pads and rotors',
          'Squealing, grinding, or pulling to one side',
          'Soft or spongy brake pedal',
          'Brake warning light diagnosis',
        ],
        faqs: [
          {
            q: 'Why are my brakes squealing?',
            a: 'Often it’s worn pads, but it can also be the rotors or hardware. Bring it in and we’ll check before recommending anything.',
          },
          {
            q: 'My brake pedal feels soft. Is it safe to drive?',
            a: 'A soft or sinking pedal can mean a hydraulic problem. Drive as little as possible and call us at {phone}.',
          },
          {
            q: 'Do you repair brakes on German and classic cars?',
            a: 'Yes. We service brakes on everyday cars, German vehicles, and classics.',
          },
        ],
      },
      engine: {
        name: 'Engine Repair',
        short:
          'Misfires, rough idle, leaks, or loss of power: we find the cause and repair your engine properly.',
        metaTitle: "Engine Repair in Miami | Rey's Auto Repair Little Havana",
        metaDescription:
          'Engine repair in Little Havana, Miami: misfires, rough idle, oil leaks, overheating, and loss of power, diagnosed before we repair. Call {phone}.',
        h1: 'Engine repair in Miami',
        intro:
          'Engine trouble usually starts small: a misfire, a leak, a light on the dash. We diagnose the root cause first, explain your options, and then make the repair.',
        includes: [
          'Engine repair',
          'Misfires, rough idle, and loss of power',
          'Oil leaks',
          'Overheating',
          'Engine oil light diagnosis',
        ],
        faqs: [
          {
            q: 'My engine is running rough. What should I do?',
            a: 'Have it checked soon. A misfire left alone can damage other parts. If the check-engine light is flashing, stop driving and call us.',
          },
          {
            q: 'Why is my engine oil light on?',
            a: 'It can mean low oil level or low oil pressure. Check your oil and, if the light stays on, don’t keep driving. Call us at {phone}.',
          },
          {
            q: 'Will you tell me the cost before repairing?',
            a: 'Yes. You get the diagnosis and the cost first, and nothing is repaired without your OK.',
          },
        ],
      },
      electrical: {
        name: 'Battery & Electrical Repair',
        short:
          'Dead battery, flickering lights, or a car that drains overnight? Battery, lighting, and electrical repairs.',
        metaTitle: "Car Battery & Electrical Repair Miami | Rey's Auto Repair",
        metaDescription:
          'Car battery replacement and electrical repair in Little Havana, Miami: batteries, battery drain, charging problems, and lights. Call {phone}.',
        h1: 'Battery and electrical repair in Miami',
        intro:
          'Miami heat is hard on batteries and wiring. We test the battery and charging system, track down electrical faults, and repair lights so your car starts every morning.',
        includes: [
          'Battery testing and replacement',
          'Battery drain and charging problems',
          'Headlights, taillights, and other lights',
          'Electrical system repair',
          'Warning lights and electrical faults',
        ],
        faqs: [
          {
            q: 'How do I know if I need a new battery?',
            a: 'Slow cranking, dim lights, or a battery that’s several years old are common signs. We can test it and tell you.',
          },
          {
            q: 'My battery keeps dying. Is it the battery?',
            a: 'Not always. A charging problem, or something drawing power with the car off, can drain a good battery. We test to find out.',
          },
          {
            q: 'Do you fix headlights and taillights?',
            a: 'Yes. We repair automotive lights, from burned-out bulbs to wiring problems.',
          },
        ],
      },
      'ac-heating': {
        name: 'A/C & Heating Repair',
        short:
          'A/C blowing warm? Heater or defroster not working? We diagnose and repair your car’s climate system.',
        metaTitle: "Car A/C Repair in Miami | Rey's Auto Repair Little Havana",
        metaDescription:
          'Car A/C and heating repair in Little Havana, Miami: A/C blowing warm, weak airflow, and heater or defroster problems. Call {phone}.',
        h1: 'Car A/C and heating repair in Miami',
        intro:
          'In Miami, a working A/C isn’t optional. We find out why your system isn’t keeping up, whether it’s a leak, an electrical problem, or a failing part, and repair it.',
        includes: [
          'A/C blowing warm or not cold enough',
          'Weak airflow from the vents',
          'Heater and defroster problems',
          'Strange smells or noises from the vents',
          'Climate system diagnosis',
        ],
        faqs: [
          {
            q: 'Why is my car’s A/C blowing warm air?',
            a: 'Common causes include low refrigerant from a leak, an electrical fault, or a failing compressor. We diagnose before replacing anything.',
          },
          {
            q: 'Do I just need an A/C recharge?',
            a: 'If the system is low, there’s usually a leak. Recharging without finding it often means warm air again soon, so we check first.',
          },
          {
            q: 'Do you fix heaters and defrosters too?',
            a: 'Yes. We work on the whole heating and A/C system.',
          },
        ],
      },
      suspension: {
        name: 'Steering & Suspension',
        short:
          'Clunks over bumps, pulling, or a loose steering wheel? Steering and suspension repair for a smooth, safe ride.',
        metaTitle: "Steering & Suspension Repair Miami | Rey's Auto Repair",
        metaDescription:
          'Steering and suspension repair in Little Havana, Miami: clunks over bumps, pulling, a bouncy ride, and loose steering. Call {phone}.',
        h1: 'Steering and suspension repair in Miami',
        intro:
          'Miami potholes take a toll. Worn steering and suspension parts affect handling, braking, and tire life. We find what’s worn and replace it.',
        includes: [
          'Steering and suspension repair',
          'Clunks or rattles over bumps',
          'Pulling or wandering',
          'Bouncy or rough ride',
          'Uneven tire wear',
        ],
        faqs: [
          {
            q: 'What’s that clunk when I go over bumps?',
            a: 'Often a worn suspension part, like a link, bushing, or ball joint. We inspect the car to find it.',
          },
          {
            q: 'Why does my car pull to one side?',
            a: 'It can be steering or suspension wear, tire pressure, or brakes. We check them together.',
          },
          {
            q: 'Is a loose steering wheel dangerous?',
            a: 'It can be. Extra play can mean worn steering parts, so have it inspected soon.',
          },
        ],
      },
      exhaust: {
        name: 'Exhaust Repair',
        short:
          'Loud exhaust, rattles underneath, or fumes? We repair exhaust leaks, pipes, and mufflers.',
        metaTitle: "Exhaust Repair in Little Havana, Miami | Rey's Auto Repair",
        metaDescription:
          'Exhaust repair in Little Havana, Miami: loud exhaust, leaks, rattles, and damaged pipes or mufflers. Call {phone}.',
        h1: 'Exhaust repair in Little Havana',
        intro:
          'A car that’s suddenly louder usually has an exhaust leak, and exhaust fumes don’t belong in the cabin. We find the leak or loose part and repair it.',
        includes: [
          'Exhaust repair',
          'Exhaust leaks',
          'Loud exhaust or rattles underneath',
          'Mufflers and pipes',
          'Damaged or loose hangers',
        ],
        faqs: [
          {
            q: 'Why did my car suddenly get louder?',
            a: 'Usually it’s an exhaust leak or a damaged muffler or pipe. Have it checked.',
          },
          {
            q: 'I smell exhaust inside the car. What should I do?',
            a: 'Open the windows, drive as little as possible, and call us at {phone}. Exhaust fumes in the cabin can be dangerous.',
          },
          {
            q: 'Do you repair exhaust systems on classic cars?',
            a: 'Yes. Call us with the year, make, and model.',
          },
        ],
      },
      tires: {
        name: 'Tires & TPMS',
        short:
          'Tire installation, repair, rotation, and balancing, plus tire pressure light (TPMS) diagnosis and repair.',
        metaTitle: "Tire Repair & Installation in Miami | Rey's Auto Repair",
        metaDescription:
          'Tire service in Little Havana, Miami: installation, flat repair, rotation, balancing, and tire pressure light (TPMS) diagnosis and repair. Call {phone}.',
        h1: 'Tire service in Little Havana',
        intro:
          'From a nail in the tread to a tire pressure light that won’t go off, we handle tire installation, repair, rotation, and balancing, and we diagnose and repair TPMS sensors.',
        includes: [
          'Tire installation',
          'Tire repair',
          'Tire rotation',
          'Tire balancing',
          'Tire pressure light (TPMS) diagnosis and repair',
        ],
        faqs: [
          {
            q: 'Can my flat tire be repaired?',
            a: 'Many punctures in the tread can be. Sidewall damage usually means replacement. We’ll inspect it and tell you.',
          },
          {
            q: 'Why is my tire pressure light on?',
            a: 'Usually one tire is low. If the pressures are correct and the light stays on or flashes, a TPMS sensor may need attention.',
          },
          {
            q: 'How often should I rotate my tires?',
            a: 'Follow your owner’s manual. Many cars call for a rotation every 5,000–7,500 miles. Ask us what’s right for your car.',
          },
        ],
      },
      maintenance: {
        name: 'Maintenance & Inspections',
        short:
          'Routine maintenance to keep your car reliable, plus pre-purchase inspections before you buy a used car.',
        metaTitle: "Car Maintenance & Inspections Miami | Rey's Auto Repair",
        metaDescription:
          'Routine car maintenance and pre-purchase inspections in Little Havana, Miami. Air filters {promoPct}% off on Fridays. Call {phone}.',
        h1: 'Car maintenance and pre-purchase inspections in Miami',
        intro:
          'Regular maintenance is how small problems stay small. We follow your vehicle’s maintenance schedule, and before you buy a used car, we’ll inspect it and tell you what you’re getting.',
        includes: [
          'Routine maintenance',
          'Fluid checks and service',
          'Air filters',
          'Belts and hoses',
          'Pre-purchase inspections',
        ],
        faqs: [
          {
            q: 'What does routine maintenance include?',
            a: 'It depends on your car and mileage. We follow the manufacturer’s schedule and explain what’s due now and what can wait.',
          },
          {
            q: 'Should I get a used car inspected before buying it?',
            a: 'Yes. A pre-purchase inspection can uncover problems a test drive won’t.',
          },
          {
            q: 'Are air filters discounted on Fridays?',
            a: 'Yes, air filters are {promoPct}% off every Friday.',
          },
        ],
      },
      german: {
        name: 'German Vehicle Repair',
        short:
          'BMW, Mercedes-Benz, Audi, Volkswagen, and Porsche: diagnostics, maintenance, and repair from mechanics who know these cars inside and out.',
        metaTitle: "German Car Repair Miami: BMW, Mercedes, Audi | Rey's",
        metaDescription:
          'German car repair in Miami for BMW, Mercedes-Benz, Audi, Volkswagen and Porsche. Specialist diagnostics, maintenance and repair in Little Havana. Rated {rating}★.',
        h1: 'German car repair in Miami',
        intro:
          'German engineering rewards a mechanic who knows its habits. We work on BMW, Mercedes-Benz, Audi, Volkswagen, and Porsche every day, so we know the maintenance schedules, the common failure points, and how to fix them properly without guesswork.',
        includes: [
          'Check-engine and warning-light diagnostics',
          'Scheduled maintenance and inspections',
          'Oil leaks, cooling system, and water pump repair',
          'Brakes, suspension, and steering',
          'Electrical and sensor faults',
        ],
        faqs: [
          {
            q: 'Do I have to go to the dealer to keep my German car running right?',
            a: 'No. We service BMW, Mercedes-Benz, Audi, Volkswagen, and Porsche vehicles and follow the manufacturer maintenance schedule. Call us to talk through your car.',
          },
          {
            q: 'Can you diagnose a warning light on my BMW or Mercedes?',
            a: "Yes. We scan, test, and explain what's actually wrong before any repair, so you only pay for what the car needs.",
          },
          {
            q: 'Which German makes do you work on?',
            a: 'BMW, Mercedes-Benz, Audi, Volkswagen, and Porsche, including older models.',
          },
        ],
      },
      classic: {
        name: 'Classic Car Repair & Service',
        short:
          'Carburetors, ignition, cooling, and brakes for the cars they don’t build anymore. We treat your classic like it’s ours.',
        metaTitle: "Classic Car Repair in Miami | Rey's Auto Repair",
        metaDescription:
          'Classic car repair and service in Little Havana, Miami: carburetors, ignition, cooling, brakes and tune-ups for vintage cars. Call {phone}.',
        h1: 'Classic car repair and service in Miami',
        intro:
          'Little Havana knows classic cars. We keep vintage and collector cars on the road with patient, careful work: tune-ups, carburetor and ignition work, cooling systems, brakes, and the small fixes that keep an old car reliable.',
        includes: [
          'Tune-ups, carburetor, and ignition work',
          'Cooling system and overheating fixes',
          'Brake and suspension service',
          'Fluid service and seasonal checkups',
          'Pre-purchase inspections',
        ],
        faqs: [
          {
            q: 'What kinds of classic cars do you work on?',
            a: 'American and European classics. Call us with the year, make, and model and we’ll tell you honestly if it’s a good fit for our shop.',
          },
          {
            q: 'My classic overheats in Miami traffic. Can you help?',
            a: 'Yes. Overheating is one of the most common problems we see. We check the radiator, fan, thermostat, and timing to find the real cause.',
          },
          {
            q: 'Can you inspect a classic car before I buy it?',
            a: 'Yes. Book a pre-purchase inspection and we’ll give you a clear report on what’s good and what needs work.',
          },
        ],
      },
      diagnostics: {
        name: 'Diagnostics',
        short:
          'Check-engine light, strange noise, or won’t start? We find the real problem first, then give you a straight answer.',
        metaTitle: "Car Diagnostics in Little Havana, Miami | Rey's Auto Repair",
        metaDescription:
          'Check engine light on? Car won’t start? Accurate car diagnostics in Little Havana, Miami. Honest answers before any repair. Call {phone}.',
        h1: 'Car diagnostics in Little Havana',
        intro:
          'A warning light tells you something is wrong, not what. We combine scan tools with hands-on testing to pinpoint the cause, then explain it in plain language before we touch anything.',
        includes: [
          'Check engine light diagnosis',
          'No-start diagnosis',
          'Noise diagnosis',
          'Vibration diagnosis',
          'Engine oil light diagnosis',
          'General diagnosis when something just feels off',
        ],
        faqs: [
          {
            q: 'Is it safe to drive with my check-engine light on?',
            a: 'A flashing light means stop driving and call us. A steady light is less urgent, but have it checked soon. Small problems get expensive when ignored.',
          },
          {
            q: 'Do you explain the problem before doing any repair?',
            a: 'Always. You get the diagnosis and the cost first, and nothing gets repaired without your OK.',
          },
          {
            q: 'My car broke down. What should I do?',
            a: 'Get somewhere safe and call us at {phone}. We’ll tell you the best way to get it to the shop.',
          },
        ],
      },
      'oil-change': {
        name: 'Oil Changes',
        short:
          'Conventional, synthetic blend, or full synthetic, with the right oil and filter for your engine. {promoPct}% off on Fridays.',
        metaTitle: "Oil Change in Little Havana, Miami | Rey's Auto Repair",
        metaDescription:
          'Oil changes in Little Havana, Miami: conventional and synthetic, done right for your engine. {promoPct}% off every Friday. Call {phone}.',
        h1: 'Oil changes in Little Havana',
        intro:
          'Fresh oil is the cheapest insurance your engine can get. We use the oil grade and filter your manufacturer specifies, and take a quick look at the rest of the car while it’s in.',
        includes: [
          'Conventional, synthetic blend, and full synthetic oil',
          'New oil filter on every change',
          'Fluid level top-off',
          'Tire pressure check',
          'Quick visual check for leaks and worn parts',
        ],
        faqs: [
          {
            q: 'How often should I change my oil?',
            a: 'Follow your owner’s manual. Many modern cars run 5,000–10,000 miles on synthetic. Miami heat and stop-and-go traffic count as severe use, so ask us what’s right for your car.',
          },
          {
            q: 'Do I need an appointment?',
            a: 'Booking a time is the fastest way in. You can also call to check same-day availability.',
          },
          {
            q: 'Is the Friday discount on oil changes every week?',
            a: 'Yes, every Friday oil changes, transmission fluid service, and air filters are {promoPct}% off.',
          },
        ],
      },
      transmission: {
        name: 'Transmission Services',
        short:
          'Slipping, hard shifts, or leaks? Fluid service, diagnostics, and repair for automatic and manual transmissions.',
        metaTitle: "Transmission Service & Repair Miami | Rey's Auto Repair",
        metaDescription:
          'Transmission fluid service, diagnostics and repair in Little Havana, Miami. {promoPct}% off transmission fluid service on Fridays. Call {phone}.',
        h1: 'Transmission service and repair in Miami',
        intro:
          'Transmission trouble rarely fixes itself. We start with an honest diagnosis. Sometimes it’s a fluid service or a sensor, not a rebuild. Then we tell you your options.',
        includes: [
          'Transmission repair',
          'Transmission fluid service',
          'Transmission leak inspection',
          'Slipping, delayed, or hard-shift diagnosis',
          'Seal and leak repair',
        ],
        faqs: [
          {
            q: 'How do I know if my transmission needs service?',
            a: 'Slipping, delayed engagement, harsh shifts, a burning smell, or red fluid under the car are all signs to have it checked.',
          },
          {
            q: 'Do I need a new transmission?',
            a: 'Not always. Many problems come down to fluid, a sensor, or a leak. We diagnose before recommending anything major.',
          },
          {
            q: 'Is transmission fluid service discounted on Fridays?',
            a: 'Yes, transmission fluid service is {promoPct}% off every Friday.',
          },
        ],
      },
    } satisfies Record<ServiceId, unknown>,
  },

  whyUs: {
    eyebrow: 'Why Rey’s',
    title: 'A neighborhood shop people actually recommend.',
    items: [
      {
        title: 'Read our customer reviews',
        text: 'Our reputation was built one car and one neighbor at a time. Read what customers say on Google.',
      },
      {
        title: 'German vehicle specialists',
        text: 'BMW, Mercedes-Benz, Audi, Volkswagen, and Porsche owners don’t have to settle for the dealer.',
      },
      {
        title: 'Classic car expertise',
        text: 'Carburetors, points, and old-school know-how for the cars that made Miami’s streets famous.',
      },
      {
        title: 'Right here in Little Havana',
        text: '527 SW 15th Ave, Miami. Find our hours and get directions below.',
      },
    ],
  },

  reviews: {
    eyebrow: 'Reviews',
    title: 'What our customers say',
    sampleBadge: 'Sample. Replace with a real Google review',
    items: [
      {
        quote:
          'They found the problem two other shops missed and charged me less than I expected. Honest people.',
        name: 'Sample Customer A',
        detail: 'BMW 3 Series',
      },
      {
        quote: 'My ’67 runs better than it has in years. You can tell they actually love old cars.',
        name: 'Sample Customer B',
        detail: 'Classic car owner',
      },
      {
        quote: 'Called on a Friday, got the oil change discount, in and out. My go-to shop now.',
        name: 'Sample Customer C',
        detail: 'Toyota Camry',
      },
    ],
  },

  form: {
    eyebrow: 'Book online',
    title: 'Request an appointment',
    intro:
      'Pick a weekday and time. We’ll call or text to confirm. For a breakdown or anything urgent, call us now.',
    pageTitle: 'Book an appointment',
    legend: {
      you: 'Your contact info',
      vehicle: 'Your vehicle',
      visit: 'Your visit',
    },
    name: 'Full name',
    phone: 'Phone',
    email: 'Email',
    year: 'Year',
    make: 'Make',
    model: 'Model',
    makePlaceholder: 'e.g. BMW',
    modelPlaceholder: 'e.g. 328i',
    service: 'Service needed',
    servicePlaceholder: 'Choose a service',
    serviceOther: 'Something else / not sure',
    date: 'Preferred date',
    dateHint: 'Monday–Friday only.',
    time: 'Preferred time',
    timePlaceholder: 'Choose a date first',
    timeChoose: 'Choose a time',
    notes: 'What’s going on with your car?',
    notesHint: 'Optional. Noises, warning lights, when it started.',
    optional: '(optional)',
    honeypot: 'Leave this field empty',
    submit: 'Request appointment',
    submitting: 'Sending…',
    required: 'Required',
    errorsSummary: (n: number) =>
      n === 1 ? 'Please fix 1 field below.' : `Please fix ${n} fields below.`,
    errors: {
      name: 'Please enter your name.',
      phone: 'Please enter a 10-digit phone number.',
      email: 'Please enter a valid email address.',
      year: 'Please enter a year between 1900 and next year.',
      make: 'Please enter the make.',
      model: 'Please enter the model.',
      service: 'Please choose a service.',
      date: 'Please choose a date.',
      dateWeekend: 'We’re closed on weekends. Please choose Monday–Friday.',
      datePast: 'Please choose a future date.',
      time: 'Please choose a time.',
    },
    successTitle: 'Request received. Thank you!',
    successText:
      'We’ll call or text you during business hours to confirm your appointment. Need us sooner?',
    errorTitle: 'Your request didn’t go through.',
    errorText: 'Please try again, or call us and we’ll book you over the phone.',
    privacy: 'We only use your info to schedule your appointment.',
  },

  about: {
    eyebrow: 'About us',
    title: "Rey's Auto Repair: Little Havana's neighborhood shop",
    lead: 'Your neighborhood destination for diagnostics, German vehicle repair, classic car care, and routine maintenance in Little Havana.',
    storyTitle: 'Car care, close to home.',
    story: [
      'Our shop is at 527 SW 15th Ave in Little Havana, Miami. From your daily commute to a weekend drive, keeping your vehicle running starts with understanding what it needs.',
      'Explore our services: German vehicles, classic cars, diagnostics, brakes, engine and electrical repair, A/C and heating, tires, oil changes, and transmission service.',
      'Call us to discuss a concern, ask about a service, or arrange your visit. You can find our weekday hours and directions on the location page.',
    ],
    teamTitle: 'Meet the team',
    team: [
      { name: '[PLACEHOLDER: Name]', role: 'Owner / Lead Mechanic' },
      { name: '[PLACEHOLDER: Name]', role: '[PLACEHOLDER: Role]' },
      { name: '[PLACEHOLDER: Name]', role: '[PLACEHOLDER: Role]' },
    ],
    teamPhotoAlt: (name: string) => `Photo of ${name}`,
  },

  locations: {
    eyebrow: 'Visit us',
    title: 'Find the shop',
    titleMany: 'Our locations',
    intro: 'Serving Little Havana and the surrounding Miami neighborhoods.',
    address: 'Address',
    contact: 'Contact',
    phone: 'Phone',
    serving: 'Serving',
    showMap: 'Show map',
    mapTitle: (name: string) => `Map of Rey's Auto Repair ${name}`,
    mapNote: 'Loads Google Maps',
    viewLocation: 'Location details',
    detailTitle: (name: string) => `Rey's Auto Repair ${name}`,
    detailLead: (name: string) => `Your auto repair shop in ${name}, Miami.`,
  },

  footer: {
    tagline: 'Honest auto repair in Little Havana, Miami.',
    hours: 'Hours',
    contact: 'Contact',
    services: 'Services',
    follow: 'Follow us',
    rights: 'All rights reserved.',
  },

  breadcrumb: { label: 'Breadcrumb', home: 'Home' },

  notFound: {
    title: 'We couldn’t find that page.',
    text: 'The link may be broken or the page may have moved.',
    home: 'Go to the homepage',
  },
};

export type Dictionary = typeof en;
export default en;
