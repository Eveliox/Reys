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
    bandTitle: '¿Problemas con el carro? Estamos para ayudarle.',
    bandText: 'Llámenos para programar su visita de lunes a viernes.',
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
        "Rey's Auto Repair, el taller mecánico de Little Havana con {rating} estrellas: diagnóstico, carros alemanes (BMW, Mercedes-Benz, Audi, VW, Porsche), cambio de aceite, transmisiones y clásicos. {phone}.",
    },
    services: {
      title: "Servicios de mecánica en Miami | Rey's Auto Repair",
      description:
        'Diagnóstico, carros alemanes y clásicos, frenos, motor, aire acondicionado, sistema eléctrico, gomas, transmisión y cambio de aceite en Little Havana, Miami.',
    },
    about: {
      title: "Sobre Rey's Auto Repair | Mecánicos en Little Havana",
      description:
        "Conozca al equipo de Rey's Auto Repair, el taller de barrio en Little Havana, Miami.",
    },
    locations: {
      title: "Ubicación y horario | Rey's Auto Repair Miami",
      description:
        "Visite Rey's Auto Repair en {address}, Little Havana, Miami. Horario, cómo llegar y llamada con un toque.",
    },
    location: {
      title: (name: string) => `Rey's Auto Repair ${name}: horario y cómo llegar | Miami`,
      description: (name: string, street: string) =>
        `Rey's Auto Repair ${name}: ${street}, Miami, FL. Horario, mapa, cómo llegar y llamada con un toque. {rating} estrellas en Google.`,
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
    title: 'Cuidado experto. Raíces locales.',
    subtitle:
      'Ingeniería alemana, carros clásicos y tu vehículo de cada día. Reparación y mantenimiento en el corazón de Little Havana.',
    imageAlt: "Un mecánico trabajando en un carro en el taller de Rey's Auto Repair",
  },

  trust: {
    label: 'Por qué confían en nosotros',
    items: [
      { title: '{rating}★ en Google', text: 'Más de {reviewCountNum} reseñas de vecinos' },
      { title: 'Especialistas en alemanes', text: 'BMW · Mercedes · Audi · VW · Porsche' },
      { title: 'Expertos en clásicos', text: 'Carburadores, platinos y cromo' },
      {
        title: 'Little Havana, Miami',
        text: '527 SW 15th Ave · Miami. Consulta nuestros horarios y cómo llegar.',
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
    off: (pct: number) => `${pct}% de descuento`,
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
    fullListTitle: 'Todo lo que hacemos',
    fullListIntro: 'La lista completa de reparaciones y servicios que ofrecemos, por categoría.',
    whatWeDo: 'Qué incluye',
    faqTitle: 'Preguntas frecuentes',
    related: 'Otros servicios',
    breadcrumb: 'Servicios',
    ctaTitle: '¿Necesita este servicio?',
    ctaText: 'Llame para un estimado o pida su cita a la hora que le convenga.',
    items: {
      brakes: {
        name: 'Frenos',
        short:
          '¿Chillan, raspan o el pedal está suave? Revisamos sus frenos y arreglamos lo que de verdad está gastado, nada más.',
        metaTitle: "Reparación de frenos en Little Havana | Rey's Auto Repair",
        metaDescription:
          'Reparación de frenos en Little Havana, Miami: revisión, pastillas y discos, y frenos que chillan, raspan o tienen el pedal suave. Llame al {phone}.',
        h1: 'Reparación de frenos en Little Havana',
        intro:
          'Con los frenos no se puede adivinar. Revisamos pastillas, discos y el sistema hidráulico, le enseñamos lo que está gastado y lo reparamos para que su carro frene derecho y con seguridad.',
        includes: [
          'Revisión de frenos',
          'Pastillas y discos de freno',
          'Frenos que chillan, raspan o halan hacia un lado',
          'Pedal de freno suave o esponjoso',
          'Diagnóstico de la luz de frenos',
        ],
        faqs: [
          {
            q: '¿Por qué me chillan los frenos?',
            a: 'Muchas veces son pastillas gastadas, pero también pueden ser los discos o los herrajes. Tráigalo y lo revisamos antes de recomendar nada.',
          },
          {
            q: 'El pedal de freno se siente suave. ¿Puedo manejar?',
            a: 'Un pedal suave o que se hunde puede ser un problema hidráulico. Maneje lo menos posible y llámenos al {phone}.',
          },
          {
            q: '¿Reparan frenos de carros alemanes y clásicos?',
            a: 'Sí. Damos servicio de frenos a carros de diario, alemanes y clásicos.',
          },
        ],
      },
      engine: {
        name: 'Reparación de motor',
        short:
          'Motor que falla, tiembla, bota aceite o pierde fuerza: encontramos la causa y lo reparamos como es.',
        metaTitle: "Reparación de motor en Miami | Rey's Auto Repair",
        metaDescription:
          'Reparación de motor en Little Havana, Miami: motor que falla o tiembla, salideros de aceite, calentamiento y pérdida de fuerza. Llame al {phone}.',
        h1: 'Reparación de motor en Miami',
        intro:
          'Los problemas del motor casi siempre empiezan pequeños: un fallo, un salidero, una luz en el tablero. Primero diagnosticamos la causa, le explicamos sus opciones y después hacemos la reparación.',
        includes: [
          'Reparación de motor',
          'Motor que falla, tiembla o pierde fuerza',
          'Salideros de aceite',
          'Calentamiento del motor',
          'Diagnóstico de la luz del aceite',
        ],
        faqs: [
          {
            q: 'Mi motor está fallando. ¿Qué hago?',
            a: 'Revíselo pronto. Un fallo que se deja puede dañar otras piezas. Si la luz de check engine parpadea, deje de manejar y llámenos.',
          },
          {
            q: '¿Por qué se prendió la luz del aceite?',
            a: 'Puede ser poco aceite o baja presión de aceite. Revise el nivel y, si la luz sigue prendida, no siga manejando. Llámenos al {phone}.',
          },
          {
            q: '¿Me dicen el precio antes de reparar?',
            a: 'Sí. Primero le damos el diagnóstico y el precio, y no se repara nada sin su aprobación.',
          },
        ],
      },
      electrical: {
        name: 'Batería y sistema eléctrico',
        short:
          '¿Batería muerta, luces que parpadean o un carro que amanece descargado? Baterías, luces y reparaciones eléctricas.',
        metaTitle: "Batería y sistema eléctrico en Miami | Rey's Auto Repair",
        metaDescription:
          'Cambio de batería y reparación eléctrica en Little Havana, Miami: baterías, batería que se descarga, problemas de carga y luces. Llame al {phone}.',
        h1: 'Batería y reparación eléctrica en Miami',
        intro:
          'El calor de Miami castiga las baterías y los cables. Probamos la batería y el sistema de carga, buscamos las fallas eléctricas y reparamos las luces para que su carro arranque todas las mañanas.',
        includes: [
          'Prueba y cambio de batería',
          'Batería que se descarga y problemas de carga',
          'Luces delanteras, traseras y demás',
          'Reparación del sistema eléctrico',
          'Luces de advertencia y fallas eléctricas',
        ],
        faqs: [
          {
            q: '¿Cómo sé si necesito una batería nueva?',
            a: 'Si el carro arranca lento, las luces están débiles o la batería tiene varios años, es hora de revisarla. Se la probamos y le decimos.',
          },
          {
            q: 'La batería se me descarga a cada rato. ¿Es la batería?',
            a: 'No siempre. Un problema de carga, o algo que consume corriente con el carro apagado, puede descargar una batería buena. Hacemos pruebas para saberlo.',
          },
          {
            q: '¿Arreglan las luces delanteras y traseras?',
            a: 'Sí. Reparamos las luces del carro, desde un bombillo fundido hasta problemas de cables.',
          },
        ],
      },
      'ac-heating': {
        name: 'Aire acondicionado y calefacción',
        short:
          '¿El aire echa caliente? ¿La calefacción o el desempañador no funcionan? Diagnosticamos y reparamos el sistema de clima de su carro.',
        metaTitle: "Aire acondicionado de carros en Miami | Rey's Auto Repair",
        metaDescription:
          'Reparación de aire acondicionado y calefacción de carros en Little Havana, Miami: aire que no enfría, poco flujo de aire o calefacción. Llame al {phone}.',
        h1: 'Aire acondicionado y calefacción para su carro en Miami',
        intro:
          'En Miami, el aire acondicionado no es un lujo. Averiguamos por qué su sistema no da abasto, ya sea un salidero, un problema eléctrico o una pieza que está fallando, y lo reparamos.',
        includes: [
          'Aire que echa caliente o no enfría bien',
          'Poco aire por las rejillas',
          'Problemas de calefacción y desempañador',
          'Olores o ruidos raros por las rejillas',
          'Diagnóstico del sistema de clima',
        ],
        faqs: [
          {
            q: '¿Por qué el aire de mi carro echa caliente?',
            a: 'Las causas más comunes son poco gas por un salidero, una falla eléctrica o un compresor que está fallando. Diagnosticamos antes de cambiar nada.',
          },
          {
            q: '¿Solo necesito cargarle gas al aire?',
            a: 'Si al sistema le falta gas, casi siempre hay un salidero. Si se carga sin encontrarlo, el aire vuelve a echar caliente pronto. Por eso primero revisamos.',
          },
          {
            q: '¿También arreglan la calefacción y el desempañador?',
            a: 'Sí. Trabajamos todo el sistema de aire acondicionado y calefacción.',
          },
        ],
      },
      suspension: {
        name: 'Dirección y suspensión',
        short:
          '¿Golpes en los baches, el carro hala o el timón tiene juego? Reparación de dirección y suspensión para un manejo suave y seguro.',
        metaTitle: "Dirección y suspensión en Miami | Rey's Auto Repair",
        metaDescription:
          'Reparación de dirección y suspensión en Little Havana, Miami: golpes en los baches, carro que hala o rebota, y timón con juego. Llame al {phone}.',
        h1: 'Reparación de dirección y suspensión en Miami',
        intro:
          'Los baches de Miami pasan factura. Las piezas gastadas de la dirección y la suspensión afectan el manejo, el frenado y la vida de las gomas. Encontramos lo que está gastado y lo cambiamos.',
        includes: [
          'Reparación de dirección y suspensión',
          'Golpes o ruidos en los baches',
          'Carro que hala o no va derecho',
          'Carro que rebota o anda duro',
          'Gomas que se gastan disparejas',
        ],
        faqs: [
          {
            q: '¿Qué es ese golpe cuando paso por un bache?',
            a: 'Muchas veces es una pieza gastada de la suspensión, como un link, un buje o una rótula. Revisamos el carro para encontrarla.',
          },
          {
            q: '¿Por qué mi carro hala hacia un lado?',
            a: 'Puede ser desgaste en la dirección o la suspensión, la presión de las gomas o los frenos. Revisamos todo junto.',
          },
          {
            q: '¿Es peligroso que el timón tenga juego?',
            a: 'Puede serlo. Mucho juego puede indicar piezas de dirección gastadas, así que revíselo pronto.',
          },
        ],
      },
      exhaust: {
        name: 'Escape',
        short:
          '¿El carro suena más alto, algo vibra por debajo o huele a humo? Reparamos salideros, tubos y mofles del escape.',
        metaTitle: "Reparación de escape en Little Havana | Rey's Auto Repair",
        metaDescription:
          'Reparación del sistema de escape en Little Havana, Miami: carro que suena alto, salideros, ruidos y tubos o mofles dañados. Llame al {phone}.',
        h1: 'Reparación de escape en Little Havana',
        intro:
          'Si el carro de pronto suena más alto, casi siempre es un salidero en el escape, y el humo del escape no debe entrar al carro. Encontramos el salidero o la pieza suelta y lo reparamos.',
        includes: [
          'Reparación del escape',
          'Salideros en el escape',
          'Carro que suena alto o ruidos por debajo',
          'Mofles y tubos',
          'Soportes dañados o sueltos',
        ],
        faqs: [
          {
            q: '¿Por qué mi carro de pronto suena más alto?',
            a: 'Por lo general es un salidero en el escape o un mofle o tubo dañado. Tráigalo a revisar.',
          },
          {
            q: 'Huele a humo de escape dentro del carro. ¿Qué hago?',
            a: 'Abra las ventanillas, maneje lo menos posible y llámenos al {phone}. El humo del escape dentro del carro puede ser peligroso.',
          },
          {
            q: '¿Reparan el escape de carros clásicos?',
            a: 'Sí. Llámenos con el año, la marca y el modelo.',
          },
        ],
      },
      tires: {
        name: 'Gomas y TPMS',
        short:
          'Montaje, reparación, rotación y balanceo de gomas, más diagnóstico y reparación del sensor de presión (TPMS).',
        metaTitle: "Gomas y llantas en Miami | Rey's Auto Repair Little Havana",
        metaDescription:
          'Gomas (llantas) en Little Havana, Miami: montaje, ponchaduras, rotación, balanceo y diagnóstico de la luz de presión (TPMS). Llame al {phone}.',
        h1: 'Servicio de gomas en Little Havana',
        intro:
          'Desde un clavo en la goma hasta una luz de presión que no se apaga: montamos, reparamos, rotamos y balanceamos gomas, y diagnosticamos y reparamos los sensores de presión (TPMS).',
        includes: [
          'Montaje de gomas',
          'Reparación de gomas y ponchaduras',
          'Rotación de gomas',
          'Balanceo de gomas',
          'Diagnóstico y reparación de la luz de presión (TPMS)',
        ],
        faqs: [
          {
            q: '¿Se puede arreglar mi goma ponchada?',
            a: 'Muchas ponchaduras en la banda se pueden reparar. Si el daño está en el costado, casi siempre hay que cambiarla. La revisamos y le decimos.',
          },
          {
            q: '¿Por qué se prendió la luz de presión de las gomas?',
            a: 'Casi siempre es una goma baja. Si la presión está bien y la luz sigue prendida o parpadea, puede ser un sensor TPMS.',
          },
          {
            q: '¿Cada cuánto debo rotar las gomas?',
            a: 'Siga el manual del carro. Muchos recomiendan rotarlas cada 5,000–7,500 millas. Pregúntenos qué le conviene a su carro.',
          },
        ],
      },
      maintenance: {
        name: 'Mantenimiento e inspecciones',
        short:
          'Mantenimiento de rutina para que su carro sea confiable, e inspecciones antes de comprar un carro usado.',
        metaTitle: "Mantenimiento e inspecciones en Miami | Rey's Auto Repair",
        metaDescription:
          'Mantenimiento de rutina e inspección antes de comprar en Little Havana, Miami. Filtros de aire con {promoPct}% de descuento los viernes. Llame al {phone}.',
        h1: 'Mantenimiento e inspección antes de comprar en Miami',
        intro:
          'Con mantenimiento regular, los problemas pequeños no crecen. Seguimos el plan de mantenimiento de su carro y, antes de que compre un carro usado, se lo revisamos y le decimos lo que está comprando.',
        includes: [
          'Mantenimiento de rutina',
          'Revisión y cambio de líquidos',
          'Filtros de aire',
          'Correas y mangueras',
          'Inspección antes de comprar',
        ],
        faqs: [
          {
            q: '¿Qué incluye el mantenimiento de rutina?',
            a: 'Depende del carro y del millaje. Seguimos el plan del fabricante y le explicamos qué toca ahora y qué puede esperar.',
          },
          {
            q: '¿Debo revisar un carro usado antes de comprarlo?',
            a: 'Sí. Una inspección antes de comprar puede descubrir problemas que no se notan en una prueba de manejo.',
          },
          {
            q: '¿Los filtros de aire tienen descuento los viernes?',
            a: 'Sí, los filtros de aire tienen {promoPct}% de descuento todos los viernes.',
          },
        ],
      },
      german: {
        name: 'Carros alemanes',
        short:
          'BMW, Mercedes-Benz, Audi, Volkswagen y Porsche: diagnóstico, mantenimiento y reparación con mecánicos que conocen estos carros al dedillo.',
        metaTitle: "Mecánico de carros alemanes en Miami | Rey's Auto Repair",
        metaDescription:
          'Reparación de carros alemanes en Miami: BMW, Mercedes-Benz, Audi, Volkswagen y Porsche. Diagnóstico, mantenimiento y reparación en Little Havana. {rating}★.',
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
          'Reparación y servicio de carros clásicos en Little Havana, Miami: carburadores, encendido, enfriamiento, frenos y afinación. Llame al {phone}.',
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
          '¿Luz de check engine? ¿El carro no arranca? Diagnóstico confiable en Little Havana, Miami. Le explicamos antes de reparar. Llame al {phone}.',
        h1: 'Diagnóstico de carros en Little Havana',
        intro:
          'Una luz de advertencia le dice que algo anda mal, pero no qué. Usamos escáner y pruebas a mano para dar con la causa, y se la explicamos en palabras sencillas antes de tocar nada.',
        includes: [
          'Diagnóstico de la luz de check engine',
          'Carro que no arranca',
          'Diagnóstico de ruidos',
          'Diagnóstico de vibraciones',
          'Diagnóstico de la luz del aceite',
          'Diagnóstico general cuando algo no se siente bien',
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
            a: 'Póngase en un lugar seguro y llámenos al {phone}. Le decimos la mejor manera de traerlo al taller.',
          },
        ],
      },
      'oil-change': {
        name: 'Cambio de aceite',
        short:
          'Convencional, semisintético o sintético, con el aceite y el filtro correctos para su motor. {promoPct}% de descuento los viernes.',
        metaTitle: "Cambio de aceite en Little Havana | Rey's Auto Repair",
        metaDescription:
          'Cambio de aceite en Little Havana, Miami: convencional y sintético, como lo pide su motor. {promoPct}% de descuento todos los viernes. Llame al {phone}.',
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
            a: 'Sí. Todos los viernes el cambio de aceite, el servicio de líquido de transmisión y los filtros de aire tienen {promoPct}% de descuento.',
          },
        ],
      },
      transmission: {
        name: 'Transmisión',
        short:
          '¿Patina, cambia duro o bota líquido? Servicio de líquido, diagnóstico y reparación de transmisiones automáticas y manuales.',
        metaTitle: "Servicio de transmisión en Miami | Rey's Auto Repair",
        metaDescription:
          'Servicio de líquido de transmisión, diagnóstico y reparación en Little Havana, Miami. {promoPct}% de descuento en servicio de líquido los viernes. {phone}.',
        h1: 'Servicio y reparación de transmisiones en Miami',
        intro:
          'Los problemas de transmisión no se arreglan solos. Empezamos con un diagnóstico honesto: a veces es el líquido o un sensor, no una transmisión nueva. Después le explicamos sus opciones.',
        includes: [
          'Reparación de transmisión',
          'Servicio de líquido de transmisión',
          'Inspección de salideros de transmisión',
          'Diagnóstico si patina, demora o cambia duro',
          'Reparación de sellos y salideros',
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
            a: 'Sí, el servicio de líquido de transmisión tiene {promoPct}% de descuento todos los viernes.',
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
        title: 'Lea las reseñas de nuestros clientes',
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
        title: 'Visítanos en Little Havana',
        text: '527 SW 15th Ave · Miami. Consulta nuestros horarios y cómo llegar.',
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
        quote:
          'Mi carro del 67 anda mejor que en años. Se nota que de verdad les gustan los clásicos.',
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
    lead: 'Tu taller de barrio para diagnóstico, reparación de carros alemanes, cuidado de clásicos y mantenimiento en Little Havana.',
    storyTitle: 'El cuidado de tu carro, cerca de casa.',
    story: [
      'Estamos en 527 SW 15th Ave, Little Havana, Miami. El cuidado de tu vehículo empieza por entender lo que necesita.',
      'Explora nuestros servicios: carros alemanes y clásicos, diagnóstico, frenos, motor y sistema eléctrico, aire acondicionado y calefacción, gomas, cambios de aceite y transmisión.',
      'Llámanos para hablar sobre tu carro, consultar un servicio o planificar tu visita. Encuentra nuestros horarios y cómo llegar en la página de ubicación.',
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
  },
} satisfies Dictionary;

export default es;
