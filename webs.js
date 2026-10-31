// Cómo añadir una demo o un cliente nuevo:
//  1. Deja su miniatura en img/tarjetas/ (webp 1200×750 o 1200×630, captura real de la web, no IA).
//  2. Copia un bloque { ... } en «demos» o en «clientes» (en el orden en que debe salir) y cambia
//     nombre, etiqueta («Sector · Demo» / «Sector · Cliente»), url, img, texto y, si hace falta, pos (encuadre de la foto).
//  3. Guarda y sube. El contador de la pestaña y los botones Ver web / Copiar / WhatsApp salen solos.
window.WEBS = {
  demos: [
    { nombre: "Brasa Negra", etiqueta: "Hamburguesería · Demo", url: "https://manuroma-es.github.io/brasa-negra/",
      img: "img/tarjetas/brasa-negra.webp", pos: "left center",
      texto: "Smash burgers a la brasa. Montaje con scroll, carta animada, reservas y mapa con humo." },
    { nombre: "Álex Vega", etiqueta: "Entrenador personal · Demo", url: "https://manuroma-es.github.io/alex-vega/",
      img: "img/tarjetas/alex-vega.webp?v=2", pos: "left center",
      texto: "Entrenador personal en Jerez. Portada con scroll, giro de 360°, antes y después, planes en abanico y mapa con ruta animada." },
    { nombre: "Clic 24", etiqueta: "Cerrajería · Demo", url: "https://manuroma-es.github.io/clic24/",
      img: "img/tarjetas/clic24.webp", pos: "left center",
      texto: "Cerrajeros 24 horas en Cuenca. Puerta que se abre con el scroll, apertura de coches y cajas fuertes, y mapa con ruta animada." }
  ],
  clientes: [
    { nombre: "obraservi360", etiqueta: "Reformas y servicios · Cliente", url: "https://obraservi360.com/",
      img: "img/tarjetas/obraservi360.webp",
      texto: "Reformas, estructuras metálicas, jardinería y electricidad en toda la provincia de Cádiz, con un solo equipo." },
    { nombre: "ASIDI PRO", etiqueta: "Plataforma B2B · Cliente", url: "https://asidipro.com/",
      img: "img/tarjetas/asidipro.webp?v=2",
      texto: "Plataforma de anuncios B2B de maquinaria, materiales, transporte y equipamiento industrial, ordenada por categorías." },
    { nombre: "Susurro de Arabia", etiqueta: "Tienda online · Cliente", url: "https://susurrodearabia.com/",
      img: "img/tarjetas/susurrodearabia.webp",
      texto: "Tienda online de perfumería árabe: oud, ámbar y esencias orientales para mujer, hombre y unisex." },
    { nombre: "AutoBrillo Detailing", etiqueta: "Detailing de coches · Cliente", url: "https://autobrillodetailing.com/",
      img: "img/tarjetas/autobrillodetailing.webp",
      texto: "Taller de detailing con reserva directa por WhatsApp. «Cuidamos tu coche como si fuera nuestro.»" },
    { nombre: "Frutería Franma", etiqueta: "Frutería · Cliente", url: "https://franma.top/",
      img: "img/tarjetas/franma.webp",
      texto: "Frutas y verduras frescas, exóticas y étnicas en Chiclana de la Frontera, con atención cercana." }
  ]
};
