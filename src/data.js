export const data = {
  name: 'Diego De La Sotta',
  initials: 'DD',
  role: 'Desarrollador Web Full Stack',
  location: 'Santiago, Chile',
  email: 'diego.delasotta1@gmail.com',
  github: 'https://github.com/Mottabronx',
  linkedin: 'https://linkedin.com/in/ddelasotta/',
  whatsapp: 'https://wa.me/56995379045',

  about: [
    'Desarrollador web full stack especializado en React y Node.js. Construyo interfaces modernas y aplicaciones web completas que combinan buen diseño con código limpio.',
    'Disponible para proyectos freelance remotos. Respondo en menos de 24 horas.',
  ],

  stack: ['React', 'Node.js', 'HTML / CSS', 'JavaScript', 'REST APIs', 'Git', 'Vite', 'Express'],

  projects: [
    {
      id: 1,
      name: 'WeatherNow',
      type: 'App del clima',
      description: 'App de clima en tiempo real con búsqueda por ciudad, autocompletado, geolocalización, pronóstico de 5 días y gráfico de temperatura.',
      stack: ['React', 'Vite', 'OpenWeather API', 'CSS Modules'],
      demo: 'https://weathernow-one-theta.vercel.app/',
      github: 'https://github.com/Mottabronx/weathernow',
      color: '#1a3a6a',
      accent: '#4a9eff',
    },
    {
      id: 2,
      name: 'ShopFlow',
      type: 'E-commerce',
      description: 'Tienda de ropa full stack con catálogo filtrable, carrito de compras, detalle de producto y checkout con guardado de pedidos.',
      stack: ['React', 'Node.js', 'Express', 'React Router'],
      demo: 'https://shop-flow-frontend-plum.vercel.app/',
      github: 'https://github.com/Mottabronx/ShopFlow',
      color: '#1a1a2e',
      accent: '#c8572a',
    }
  ],

  services: [
    { name: 'Landing pages', desc: 'Páginas de presentación profesionales para tu negocio', price: 'desde $100.000' },
    { name: 'Sitio web completo', desc: 'Múltiples páginas, formulario de contacto y diseño responsive', price: 'desde $200.000' },
    { name: 'Tienda online', desc: 'E-commerce con catálogo de productos y carrito de compras', price: 'desde $350.000' },
    { name: 'Mantención', desc: 'Actualizaciones, correcciones y mejoras a sitios existentes', price: 'desde $45.000' },
  ],
}
