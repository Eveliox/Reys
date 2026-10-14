/**
 * Todo el texto en español. Debe tener la misma forma que en.ts:
 * si falta o sobra una clave, `npm run check` falla.
 * Datos del negocio (teléfono, horario, precios) vienen de src/config/site.ts.
 */
import type { Dictionary } from './en.ts';

const es = {
  htmlLang: 'es',
  ogLocale: 'es_US',
  switchLabel: 'English',
  switchAria: 'View this page in English',
  skipToContent: 'Saltar al contenido principal',

  nav: {
    label: 'Principal',
    services: 'Servicios',
    specials: 'Especiales del viernes',
    about: 'Nosotros',
    locations: 'Ubicación',
    book: 'Cita',
    home: 'Inicio',
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
  },

  cta: {
    callNow: 'Llame ahora',
    callUs: 'Llámenos',
    book: 'Pida su cita',
    bookShort: 'Cita',
    text: 'Envíe un texto',
    directions: 'Cómo llegar',
    allServices: 'Ver todos los servicios',
    details: 'Detalles',
    readMore: 'Más información',
  },

  rating: {
    outOf: (v: number) => `${v} de 5 estrellas`,
    reviews: (count: string) => `${count} reseñas en Google`,
    onGoogle: 'en Google',
    readOnGoogle: 'Lea nuestras reseñas en Google',
  },

  days: {
    mon: 'lunes',
    tue: 'martes',
    wed: 'miércoles',
    thu: 'jueves',
    fri: 'viernes',
    sat: 'sábado',
    sun: 'domingo',
  },
  daysShort: {
    mon: 'lun',
    tue: 'mar',
    wed: 'mié',
    thu: 'jue',
    fri: 'vie',
    sat: 'sáb',
    sun: 'dom',
  },

  hours: {
    title: 'Horario',
    closed: 'Cerrado',
    today: 'Hoy',
    openNow: 'Abierto ahora',
    closedNow: 'Cerrado ahora',
    closesAt: (t: string) => `hasta las ${t}`,
    closingSoon: (t: string) => `cierra pronto (${t})`,
    opensToday: (t: string) => `abre hoy a las ${t}`,
    opensTomorrow: (t: string) => `abre mañana a las ${t}`,
    opensOn: (day: string, t: string) => `abre el ${day} a las ${t}`,
    checking: 'Consultando horario…',
    range: (a: string, b: string) => `${a} – ${b}`,
    dayRange: (a: string, b: string) => `${a} a ${b}`,
  },

  meta: {
    home: {
      title: "Mecánico en Little Havana, Miami | Rey's Auto Repair",
      description:
        "Rey's Auto Repair, el taller mecánico de Little Havana con 4.9 estrellas: diagnóstico, carros alemanes (BMW, Mercedes-Benz, Audi, VW, Porsche), cambio de aceite, transmisiones y clásicos. (305) 541-7339.",
    },
    services: {
      title: "Servicios de mecánica en Miami | Rey's Auto Repair",
      description:
        'Diagnóstico, reparación de carros alemanes, cambio de aceite, transmisiones y carros clásicos en Little Havana, Miami. Vea nuestros servicios y pida su cita.',
    },
    about: {
      title: "Sobre Rey's Auto Repair | Mecánicos en Little Havana",
      description:
        "Conozca al equipo de Rey's Auto Repair, el taller de barrio en Little Havana, Miami, con 4.9 estrellas y más de 700 reseñas en Google.",
    },
    locations: {
      title: "Ubicación y horario | Rey's Auto Repair Miami",
      description:
        "Visite Rey's Auto Repair en 527 SW 15th Ave, Little Havana, Miami. Horario, cómo llegar y llamada con un toque.",
    },
    location: {
      title: (name: string) => `Taller mecánico en ${name}, Miami | Rey's Auto Repair`,
      description: (name: string, street: string) =>
        `Rey's Auto Repair ${name}: ${street}, Miami, FL. Horario, mapa, cómo llegar y llamada con un toque. 4.9 estrellas en Google.`,
    },
    book: {
      title: "Pida su cita | Rey's Auto Repair Little Havana",
      description:
        "Pida una cita en Rey's Auto Repair, Little Havana, Miami. Escoja un día entre semana y le llamamos para confirmar.",
    },
    notFound: {
      title: "Página no encontrada | Rey's Auto Repair",
      description: 'No pudimos encontrar esta página.',
    },
  },

  hero: {
    eyebrow: 'Mecánico en Little Havana · Miami',
    title: 'Mecánica honesta en el corazón de Little Havana.',
    subtitle:
      'Diagnóstico, especialistas en carros alemanes, clásicos y mantenimiento de todos los días, bien hecho desde la primera vez. ¿Se le rompió el carro? Llámenos ya.',
    imageAlt: "Un mecánico trabajando en un carro en el taller de Rey's Auto Repair",
  },

  trust: {
    label: 'Por qué confían en nosotros',
    items: [
      { title: '4.9★ en Google', text: 'Más de 700 reseñas de vecinos' },
      { title: 'Especialistas en alemanes', text: 'BMW · Mercedes · Audi · VW · Porsche' },
      { title: 'Expertos en clásicos', text: 'Carburadores, platinos y cromo' },
      {
        title: '[PLACEHOLDER: Años de experiencia]',
        text: '[PLACEHOLDER: Certificaciones / garantía]',
      },
    ],
  },

  promo: {
    eyebrow: 'Especiales del viernes',
    everyFriday: 'Todos los viernes',
    todayOnly: 'Solo hoy',
    title: (pct: number) => `${pct}% de descuento todos los viernes`,
    titleToday: (pct: number) => `${pct}% de descuento hoy`,
    lead: 'Tráigalo un viernes y ahorre en el mantenimiento que mantiene su carro fuera del taller.',
    items: {
      oilChange: 'Cambio de aceite',
      transmissionFluid: 'Servicio de líquido de transmisión',
      airFilter: 'Filtros de aire',
    },
    fine: 'Mencione el especial del viernes cuando llame o pida su cita.',
    callout: (pct: number) => `Los viernes: ${pct}% de descuento en este servicio.`,
  },

  services: {
    eyebrow: 'Lo que hacemos',
    title: 'Reparación y mantenimiento, del carro de diario al de colección.',
    intro:
      'Cada trabajo empieza con un buen diagnóstico y un precio claro. Esto es lo que mejor hacemos.',
    specialty: 'Especialidad',
    startingAt: (price: string) => `Desde ${price}`,
    startingAtLabel: 'Desde',
    whatWeDo: 'Qué incluye',
    faqTitle: 'Preguntas frecuentes',
    related: 'Otros servicios',
    breadcrumb: 'Servicios',
    ctaTitle: '¿Necesita este servicio?',
    ctaText: 'Llame para un estimado o pida su cita a la hora que le convenga.',
    items: {
      german: {
        name: 'Carros alemanes',
        short:
          'BMW, Mercedes-Benz, Audi, Volkswagen y Porsche: diagnóstico, mantenimiento y reparación con mecánicos que conocen estos carros al dedillo.',
        metaTitle: "Mecánico de carros alemanes en Miami | Rey's Auto Repair",
        metaDescription:
          'Reparación de carros alemanes en Miami: BMW, Mercedes-Benz, Audi, Volkswagen y Porsche. Diagnóstico, mantenimiento y reparación en Little Havana. 4.9★.',
        h1: 'Reparación de carros alemanes en Miami',
        intro:
          'Un carro alemán necesita un mecánico que lo conozca bien. Trabajamos con BMW, Mercedes-Benz, Audi, Volkswagen y Porsche todos los días: sabemos sus mantenimientos, sus fallas típicas y cómo resolverlas bien, sin adivinar.',
        includes: [
          'Diagnóstico de check engine y luces de advertencia',
          'Mantenimiento programado e inspecciones',
          'Salideros de aceite, sistema de enfriamiento y bomba de agua',
          'Frenos, suspensión y dirección',
          'Fallas eléctricas y de sensores',
        ],
        faqs: [
          {
            q: '¿Tengo que ir al dealer para mantener mi carro alemán en buen estado?',
            a: 'No. Damos servicio a BMW, Mercedes-Benz, Audi, Volkswagen y Porsche siguiendo el plan de mantenimiento del fabricante. Llámenos y hablamos de su carro.',
          },
          {
            q: '¿Pueden revisar una luz de advertencia en mi BMW o Mercedes?',
            a: 'Sí. Escaneamos, probamos y le explicamos qué tiene el carro antes de reparar, para que pague solo lo que necesita.',
          },
          {
            q: '¿Con qué marcas alemanas trabajan?',
            a: 'BMW, Mercedes-Benz, Audi, Volkswagen y Porsche, incluso modelos más viejos.',
          },
        ],
      },
      classic: {
        name: 'Carros clásicos',
        short:
          'Carburadores, encendido, enfriamiento y frenos para los carros que ya no se fabrican. Cuidamos su clásico como si fuera nuestro.',
        metaTitle: "Mecánico de carros clásicos en Miami | Rey's Auto Repair",
        metaDescription:
          'Reparación y servicio de carros clásicos en Little Havana, Miami: carburadores, encendido, enfriamiento, frenos y afinación. Llame al (305) 541-7339.',
        h1: 'Reparación y servicio de carros clásicos en Miami',
        intro:
          'En Little Havana sabemos de carros clásicos. Mantenemos en la calle carros antiguos y de colección con trabajo paciente y cuidadoso: afinación, carburador y encendido, enfriamiento, frenos y esos arreglos pequeños que hacen a un carro viejo confiable.',
        includes: [
          'Afinación, carburador y encendido',
          'Sistema de enfriamiento y calentamiento',
          'Frenos y suspensión',
          'Cambio de líquidos y revisiones de temporada',
          'Inspección antes de comprar',
        ],
        faqs: [
          {
            q: '¿Qué tipo de carros clásicos reparan?',
            a: 'Clásicos americanos y europeos. Llámenos con el año, la marca y el modelo, y le decimos con franqueza si es un trabajo para nosotros.',
          },
          {
            q: 'Mi clásico se calienta en el tráfico de Miami. ¿Me pueden ayudar?',
            a: 'Sí. Es uno de los problemas que más vemos. Revisamos radiador, ventilador, termostato y tiempo de encendido para encontrar la causa real.',
          },
          {
            q: '¿Pueden revisar un clásico antes de que lo compre?',
            a: 'Sí. Pida una inspección antes de comprar y le damos un informe claro de lo que está bien y lo que necesita trabajo.',
          },
        ],
      },
      diagnostics: {
        name: 'Diagnóstico',
        short:
          '¿Se le prendió el check engine, hace un ruido raro o no arranca? Primero encontramos el problema real y le damos una respuesta clara.',
        metaTitle: "Diagnóstico de carros en Little Havana | Rey's Auto Repair",
        metaDescription:
          '¿Luz de check engine? ¿El carro no arranca? Diagnóstico confiable en Little Havana, Miami. Le explicamos antes de reparar. Llame al (305) 541-7339.',
        h1: 'Diagnóstico de carros en Little Havana',
        intro:
          'Una luz de advertencia le dice que algo anda mal, pero no qué. Usamos escáner y pruebas a mano para dar con la causa, y se la explicamos en palabras sencillas antes de tocar nada.',
        includes: [
          'Luz de check engine y otras luces del tablero',
          'El carro no arranca o se apaga',
          'Ruidos, vibraciones y salideros',
          'Problemas eléctricos y batería que se descarga',
          'Aire acondicionado y calentamiento del motor',
        ],
        faqs: [
          {
            q: '¿Puedo manejar con la luz de check engine prendida?',
            a: 'Si la luz parpadea, deje de manejar y llámenos. Si está fija es menos urgente, pero revíselo pronto: los problemas pequeños salen caros cuando se dejan.',
          },
          {
            q: '¿Me explican el problema antes de reparar?',
            a: 'Siempre. Primero le damos el diagnóstico y el precio, y no se repara nada sin su aprobación.',
          },
          {
            q: 'Se me rompió el carro. ¿Qué hago?',
            a: 'Póngase en un lugar seguro y llámenos al (305) 541-7339. Le decimos la mejor manera de traerlo al taller.',
          },
        ],
      },
      'oil-change': {
        name: 'Cambio de aceite',
        short:
          'Convencional, semisintético o sintético, con el aceite y el filtro correctos para su motor. 20% de descuento los viernes.',
        metaTitle: "Cambio de aceite en Little Havana | Rey's Auto Repair",
        metaDescription:
          'Cambio de aceite en Little Havana, Miami: convencional y sintético, como lo pide su motor. 20% de descuento todos los viernes. Llame al (305) 541-7339.',
        h1: 'Cambio de aceite en Little Havana',
        intro:
          'El aceite limpio es el seguro más barato para su motor. Usamos el grado de aceite y el filtro que indica el fabricante, y de paso le damos un vistazo al resto del carro.',
        includes: [
          'Aceite convencional, semisintético y sintético',
          'Filtro de aceite nuevo en cada cambio',
          'Revisión y relleno de líquidos',
          'Presión de las gomas',
          'Revisión visual de salideros y piezas gastadas',
        ],
        faqs: [
          {
            q: '¿Cada cuánto debo cambiar el aceite?',
            a: 'Siga el manual del carro. Muchos carros modernos llegan a 5,000–10,000 millas con sintético. El calor y el tráfico de Miami cuentan como uso severo, así que pregúntenos qué le conviene a su carro.',
          },
          {
            q: '¿Necesito cita?',
            a: 'Con cita lo atendemos más rápido. También puede llamar para ver si tenemos espacio el mismo día.',
          },
          {
            q: '¿El descuento del cambio de aceite es todos los viernes?',
            a: 'Sí. Todos los viernes el cambio de aceite, el servicio de líquido de transmisión y los filtros de aire tienen 20% de descuento.',
          },
        ],
      },
      transmission: {
        name: 'Transmisión',
        short:
          '¿Patina, cambia duro o bota líquido? Servicio de líquido, diagnóstico y reparación de transmisiones automáticas y manuales.',
        metaTitle: "Servicio de transmisión en Miami | Rey's Auto Repair",
        metaDescription:
          'Servicio de líquido de transmisión, diagnóstico y reparación en Little Havana, Miami. 20% de descuento en servicio de líquido los viernes. (305) 541-7339.',
        h1: 'Servicio y reparación de transmisiones en Miami',
        intro:
          'Los problemas de transmisión no se arreglan solos. Empezamos con un diagnóstico honesto: a veces es el líquido o un sensor, no una transmisión nueva. Después le explicamos sus opciones.',
        includes: [
          'Servicio de líquido de transmisión',
          'Diagnóstico si patina, demora o cambia duro',
          'Reparación de salideros y sellos',
          'Transmisiones automáticas y manuales',
          'Revisión del clutch',
        ],
        faqs: [
          {
            q: '¿Cómo sé si mi transmisión necesita servicio?',
            a: 'Si patina, demora en entrar, cambia duro, huele a quemado o ve líquido rojo debajo del carro, tráigalo a revisar.',
          },
          {
            q: '¿Necesito una transmisión nueva?',
            a: 'No siempre. Muchos problemas son el líquido, un sensor o un salidero. Diagnosticamos antes de recomendar algo grande.',
          },
          {
            q: '¿El servicio de líquido de transmisión tiene descuento los viernes?',
            a: 'Sí, el servicio de líquido de transmisión tiene 20% de descuento todos los viernes.',
          },
        ],
      },
    },
  },

  whyUs: {
    eyebrow: 'Por qué Rey’s',
    title: 'Un taller de barrio que la gente recomienda de verdad.',
    items: [
      {
        title: '4.9 estrellas, más de 700 reseñas',
        text: 'Nuestra reputación la hicimos carro por carro y vecino por vecino. Lea lo que dicen nuestros clientes en Google.',
      },
      {
        title: 'Especialistas en carros alemanes',
        text: 'Si tiene BMW, Mercedes-Benz, Audi, Volkswagen o Porsche, no tiene que conformarse con el dealer.',
      },
      {
        title: 'Expertos en carros clásicos',
        text: 'Carburadores, platinos y el conocimiento de siempre para los carros que hicieron famosas las calles de Miami.',
      },
      {
        title: '[PLACEHOLDER: Garantía y certificaciones]',
        text: '[PLACEHOLDER: p. ej. “Técnicos certificados ASE. Garantía de 12 meses / 12,000 millas en piezas y mano de obra.”]',
      },
    ],
  },

  reviews: {
    eyebrow: 'Reseñas',
    title: 'Lo que dicen nuestros clientes',
    sampleBadge: 'Ejemplo. Reemplazar con una reseña real de Google',
    items: [
      {
        quote:
          'Encontraron el problema que otros dos talleres no vieron y me cobraron menos de lo que esperaba. Gente honesta.',
        name: 'Cliente de ejemplo A',
        detail: 'BMW Serie 3',
      },
      {
        quote: 'Mi carro del 67 anda mejor que en años. Se nota que de verdad les gustan los clásicos.',
        name: 'Cliente de ejemplo B',
        detail: 'Dueño de un clásico',
      },
      {
        quote:
          'Llamé un viernes, me dieron el descuento del cambio de aceite y salí rapidísimo. Ya es mi taller.',
        name: 'Cliente de ejemplo C',
        detail: 'Toyota Camry',
      },
    ],
  },

  form: {
    eyebrow: 'Cita en línea',
    title: 'Pida su cita',
    intro:
      'Escoja un día entre semana y una hora. Le llamamos o le escribimos para confirmar. Si se le rompió el carro o es urgente, llámenos ahora.',
    pageTitle: 'Pida su cita',
    legend: {
      you: 'Sus datos de contacto',
      vehicle: 'Su carro',
      visit: 'Su visita',
    },
    name: 'Nombre completo',
    phone: 'Teléfono',
    email: 'Correo electrónico',
    year: 'Año',
    make: 'Marca',
    model: 'Modelo',
    makePlaceholder: 'p. ej. BMW',
    modelPlaceholder: 'p. ej. 328i',
    service: 'Servicio que necesita',
    servicePlaceholder: 'Escoja un servicio',
    serviceOther: 'Otra cosa / no estoy seguro',
    date: 'Fecha preferida',
    dateHint: 'Solo de lunes a viernes.',
    time: 'Hora preferida',
    timePlaceholder: 'Primero escoja una fecha',
    timeChoose: 'Escoja una hora',
    notes: '¿Qué le pasa a su carro?',
    notesHint: 'Opcional. Ruidos, luces en el tablero, desde cuándo.',
    optional: '(opcional)',
    honeypot: 'Deje este campo vacío',
    submit: 'Pedir cita',
    submitting: 'Enviando…',
    required: 'Obligatorio',
    errorsSummary: (n: number) =>
      n === 1 ? 'Por favor corrija 1 campo.' : `Por favor corrija ${n} campos.`,
    errors: {
      name: 'Escriba su nombre.',
      phone: 'Escriba un número de teléfono de 10 dígitos.',
      email: 'Escriba un correo electrónico válido.',
      year: 'Escriba un año entre 1900 y el año que viene.',
      make: 'Escriba la marca.',
      model: 'Escriba el modelo.',
      service: 'Escoja un servicio.',
      date: 'Escoja una fecha.',
      dateWeekend: 'Los fines de semana estamos cerrados. Escoja de lunes a viernes.',
      datePast: 'Escoja una fecha futura.',
      time: 'Escoja una hora.',
    },
    successTitle: '¡Recibimos su solicitud, gracias!',
    successText:
      'Le llamamos o le escribimos en horario de trabajo para confirmar su cita. ¿Nos necesita antes?',
    errorTitle: 'Su solicitud no se envió.',
    errorText: 'Inténtelo otra vez, o llámenos y le hacemos la cita por teléfono.',
    privacy: 'Usamos sus datos solo para coordinar su cita.',
  },

  about: {
    eyebrow: 'Nosotros',
    title: "Rey's Auto Repair: el taller de barrio de Little Havana",
    lead: '[PLACEHOLDER: Una o dos oraciones sobre quién es Rey y cómo empezó el taller.]',
    storyTitle: 'Nuestra historia',
    story: [
      '[PLACEHOLDER: Historia, párrafo 1: cuándo y por qué abrió el taller, y sus raíces en Little Havana.]',
      '[PLACEHOLDER: Historia, párrafo 2: cómo surgió la especialidad en carros alemanes y clásicos.]',
      '[PLACEHOLDER: Historia, párrafo 3: qué puede esperar el cliente y qué defiende el taller.]',
    ],
    teamTitle: 'Nuestro equipo',
    team: [
      { name: '[PLACEHOLDER: Nombre]', role: 'Dueño / Mecánico principal' },
      { name: '[PLACEHOLDER: Nombre]', role: '[PLACEHOLDER: Puesto]' },
      { name: '[PLACEHOLDER: Nombre]', role: '[PLACEHOLDER: Puesto]' },
    ],
    teamPhotoAlt: (name: string) => `Foto de ${name}`,
  },

  locations: {
    eyebrow: 'Visítenos',
    title: 'Cómo encontrarnos',
    titleMany: 'Nuestras ubicaciones',
    intro: 'Servimos a Little Havana y los barrios cercanos de Miami.',
    address: 'Dirección',
    contact: 'Contacto',
    phone: 'Teléfono',
    serving: 'Servimos a',
    showMap: 'Ver mapa',
    mapTitle: (name: string) => `Mapa de Rey's Auto Repair ${name}`,
    mapNote: 'Carga Google Maps',
    viewLocation: 'Ver ubicación',
    detailTitle: (name: string) => `Rey's Auto Repair ${name}`,
    detailLead: (name: string) => `Su taller mecánico en ${name}, Miami.`,
  },

  footer: {
    tagline: 'Mecánica honesta en Little Havana, Miami.',
    hours: 'Horario',
    contact: 'Contacto',
    services: 'Servicios',
    follow: 'Síganos',
    rights: 'Todos los derechos reservados.',
  },

  breadcrumb: { label: 'Ruta de navegación', home: 'Inicio' },

  notFound: {
    title: 'No encontramos esa página.',
    text: 'Puede que el enlace esté roto o que la página se haya movido.',
    home: 'Ir al inicio',
    altLang: 'Page not found · Go to the English homepage',
  },
} satisfies Dictionary;

export default es;
