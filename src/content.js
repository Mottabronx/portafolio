export const profile = {
  name: 'Diego De La Sotta',
  initials: 'DD',
  location: 'Santiago, Chile',
  email: 'diego.delasotta1@gmail.com',
  github: 'https://github.com/Mottabronx',
  linkedin: 'https://linkedin.com/in/ddelasotta/',
  cv: '/cv.html',
}

export const content = {
  es: {
    langLabel: 'EN',
    nav: [
      { id: 'proyectos', label: 'Proyectos' },
      { id: 'trayectoria', label: 'Trayectoria' },
      { id: 'stack', label: 'Stack' },
      { id: 'sobre-mi', label: 'Sobre mí' },
    ],
    navCta: 'Contacto',
    cvLabel: 'Ver CV',
    seal: 'Disponible para roles full-time',
    heroKicker: 'Ficha técnica · Full stack developer',
    heroTitle: 'Construyo aplicaciones web completas que llegan a producción.',
    heroSub:
      'Trabajo con React y Node.js. Tengo dos productos desplegados y con código abierto, y busco mi próximo rol full-time en Santiago o remoto.',
    primaryCta: 'Revisar proyectos',
    secondaryCta: 'Copiar email',
    copied: 'Copiado',
    specs: [
      ['Rol', 'Full stack developer'],
      ['Base', 'Santiago, Chile · Remoto'],
      ['Foco', 'React · Node.js · Express'],
      ['Prueba', '2 apps desplegadas'],
      ['Idiomas', 'Español nativo · Inglés técnico'],
      ['Estado', 'Disponible ahora'],
    ],
    projectsTitle: 'Proyectos',
    projectsIntro:
      'Dos casos con código y demo en vivo. Lo que me importa mostrar: qué problema resolvía cada uno y qué parte construí yo.',
    viewLive: 'Ver en vivo',
    viewCode: 'Código',
    projects: [
      {
        id: 'weathernow',
        featured: true,
        name: 'WeatherNow',
        kind: 'Aplicación del clima · Front-end',
        summary:
          'App del clima en tiempo real. La construí para practicar consumo de APIs con buena experiencia de búsqueda: autocompletado de ciudades, geolocalización y pronóstico extendido sin recargas.',
        built: ['Búsqueda con autocompletado y debounce', 'Geolocalización del navegador', 'Pronóstico de 5 días y gráfico de temperatura', 'Despliegue continuo en Vercel'],
        stack: ['React', 'Vite', 'OpenWeather API', 'CSS Modules'],
        demo: 'https://weathernow-one-theta.vercel.app/',
        github: 'https://github.com/Mottabronx/weathernow',
      },
      {
        id: 'shopflow',
        featured: false,
        name: 'ShopFlow',
        kind: 'Tienda de ropa · Full stack',
        summary:
          'Tienda completa con catálogo filtrable, ficha de producto, carrito persistente y checkout que guarda pedidos en el back-end.',
        built: ['Catálogo con filtros y detalle de producto', 'Carrito con estado persistente', 'API REST de pedidos con Express', 'Ruteo y layout responsive'],
        stack: ['React', 'Node.js', 'Express', 'React Router'],
        demo: 'https://shop-flow-frontend-plum.vercel.app/',
        github: 'https://github.com/Mottabronx/ShopFlow',
      },
    ],
    pathTitle: 'Trayectoria',
    pathIntro: 'Registro breve. Sin relleno: lo que he hecho y dónde estoy.',
    path: [
      {
        period: '2024 — ahora',
        role: 'Desarrollador full stack · Independiente',
        place: 'Santiago / Remoto',
        detail:
          'Diseño y desarrollo de apps con React y Node. Dos productos publicados, despliegue y mantención propios.',
      },
      {
        period: '2023 — 2024',
        role: 'Formación intensiva · Proyectos aplicados',
        place: 'Autodidacta',
        detail:
          'JavaScript moderno, React, APIs REST con Express, Git y despliegue. Cada módulo terminó en un proyecto desplegado.',
      },
    ],
    stackTitle: 'Stack',
    stackIntro: 'Lo que uso en producción hoy, agrupado por dónde lo aplico.',
    stackGroups: [
      { name: 'Front-end', items: ['React', 'React Router', 'JavaScript', 'HTML / CSS', 'Vite', 'CSS Modules'], note: 'Uso habitual' },
      { name: 'Back-end', items: ['Node.js', 'Express', 'REST APIs', 'Manejo de formularios y pedidos'], note: 'En producción en ShopFlow' },
      { name: 'Herramientas', items: ['Git / GitHub', 'Vercel', 'DevTools', 'Figma básico'], note: 'Flujo diario' },
    ],
    aboutTitle: 'Sobre mí',
    about: [
      'Soy desarrollador full stack en Santiago. Me gusta el trabajo completo: entender lo que se necesita, construir la interfaz y dejar el back-end funcionando.',
      'Busco un rol full-time donde pueda aportar en front-end con React y seguir creciendo en back-end. Aprendo rápido y documento lo que hago.',
    ],
    facts: [
      ['Modalidad', 'Presencial en Santiago o remoto'],
      ['Respuesta', 'Menos de 24 horas'],
      ['Enfoque', 'Front-end fuerte, back-end funcional'],
    ],
    contactTitle: 'Contacto',
    contactLead: 'Si tienes un rol full stack o junior, me interesa conversar.',
    contactNote: 'Escríbeme con el nombre del rol y la empresa. Respondo en menos de 24 horas.',
  },

  en: {
    langLabel: 'ES',
    nav: [
      { id: 'proyectos', label: 'Projects' },
      { id: 'trayectoria', label: 'Background' },
      { id: 'stack', label: 'Stack' },
      { id: 'sobre-mi', label: 'About' },
    ],
    navCta: 'Contact',
    cvLabel: 'View résumé',
    seal: 'Open to full-time roles',
    heroKicker: 'Spec sheet · Full stack developer',
    heroTitle: 'I build complete web apps that reach production.',
    heroSub:
      'I work with React and Node.js. Two deployed products with open source code, looking for my next full-time role in Santiago or remote.',
    primaryCta: 'Review projects',
    secondaryCta: 'Copy email',
    copied: 'Copied',
    specs: [
      ['Role', 'Full stack developer'],
      ['Based', 'Santiago, Chile · Remote'],
      ['Focus', 'React · Node.js · Express'],
      ['Proof', '2 deployed apps + open source'],
      ['Languages', 'Spanish native · Technical English'],
      ['Status', 'Available now'],
    ],
    projectsTitle: 'Projects',
    projectsIntro:
      'Two cases with live demo and code. What matters here: what problem each one solved and which part I built.',
    viewLive: 'Live demo',
    viewCode: 'Code',
    projects: [
      {
        id: 'weathernow',
        featured: true,
        name: 'WeatherNow',
        kind: 'Weather app · Front-end',
        summary:
          'Real-time weather app. Built to practice API consumption with solid search UX: city autocomplete, geolocation and extended forecast without reloads.',
        built: ['Search with autocomplete and debounce', 'Browser geolocation', '5-day forecast and temperature chart', 'Continuous deployment on Vercel'],
        stack: ['React', 'Vite', 'OpenWeather API', 'CSS Modules'],
        demo: 'https://weathernow-one-theta.vercel.app/',
        github: 'https://github.com/Mottabronx/weathernow',
      },
      {
        id: 'shopflow',
        featured: false,
        name: 'ShopFlow',
        kind: 'Clothing store · Full stack',
        summary:
          'Full store with filterable catalog, product pages, persistent cart and checkout that saves orders to the back end.',
        built: ['Catalog with filters and product detail', 'Persistent cart state', 'Order REST API with Express', 'Routing and responsive layout'],
        stack: ['React', 'Node.js', 'Express', 'React Router'],
        demo: 'https://shop-flow-frontend-plum.vercel.app/',
        github: 'https://github.com/Mottabronx/ShopFlow',
      },
    ],
    pathTitle: 'Background',
    pathIntro: 'Short log. No filler: what I have done and where I am.',
    path: [
      {
        period: '2024 — now',
        role: 'Full stack developer · Independent',
        place: 'Santiago / Remote',
        detail: 'Design and development of apps with React and Node. Two shipped products, own deployment and maintenance.',
      },
      {
        period: '2023 — 2024',
        role: 'Intensive training · Applied projects',
        place: 'Self-taught',
        detail: 'Modern JavaScript, React, REST APIs with Express, Git and deployment. Every module ended in a deployed project.',
      },
    ],
    stackTitle: 'Stack',
    stackIntro: 'What I use in production today, grouped by where it applies.',
    stackGroups: [
      { name: 'Front-end', items: ['React', 'React Router', 'JavaScript', 'HTML / CSS', 'Vite', 'CSS Modules'], note: 'Daily use' },
      { name: 'Back-end', items: ['Node.js', 'Express', 'REST APIs', 'Form and order handling'], note: 'In production in ShopFlow' },
      { name: 'Tooling', items: ['Git / GitHub', 'Vercel', 'DevTools', 'Basic Figma'], note: 'Daily workflow' },
    ],
    aboutTitle: 'About',
    about: [
      'I am a full stack developer in Santiago. I like the complete job: understanding what is needed, building the interface and leaving the back end running.',
      'I am looking for a full-time role where I can contribute in front-end with React and keep growing in back-end. Fast learner, I document my work.',
    ],
    facts: [
      ['Mode', 'On-site in Santiago or remote'],
      ['Reply', 'Under 24 hours'],
      ['Focus', 'Strong front-end, working back-end'],
    ],
    contactTitle: 'Contact',
    contactLead: 'If you have a full stack or junior role, I want to hear about it.',
    contactNote: 'Write with the role title and company. I reply in under 24 hours.',
  },
}
