export default {
  global: {
    componenteFormativo: 'Estructura comercial turística',
    descripcionCurso:
      'En este componente formativo de la estructura comercial turística se pretende dar a conocer algunos de los elementos que la conforman, como lo son los portafolios de servicios turísticos, sus componentes y la forma correcta de utilizarlos. Adicionalmente, se conocerán los elementos necesarios para la comercialización y la comunicación asertiva dentro de la estructura turística.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Portafolio de servicios',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Comercialización del portafolio turístico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comunicación asertiva',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Portafolio de servicios',
      referencia:
        'Cando Pilataxi, L. A., Vera Ayala, J. N., & Martin Moreno, I. A. (2022). <em>Portafolio de lineamientos para la reactivación de los principales servicios y atractivos turísticos del cantón Nobol</em> (Doctoral dissertation, Escuela Superior Politécnica del Litoral, Guayaquil), ESPOL. FCSH.). ',
      tipo: 'Tesis',
      link: 'https://www.dspace.espol.edu.ec/handle/123456789/53087 ',
    },
    {
      tema: 'comercialización de portafolio de servicios ',
      referencia:
        'Fernández, A. Villarán, A. (2017). <em>Promoción y comercialización de productos y servicios turísticos locales</em>. Ediciones Paraninfo, SA. ',
      tipo: 'Libro ',
      link:
        'https://books.google.es/books?hl=es&lr=&id=2Lo8DwAAQBAJ&oi=fnd&pg=PP1&dq=comercializaci%C3%B3n+portafolios+de+servicios+tur%C3%ADsticos&ots=uLauITQJcu&sig=8T4ctqki2re9e_SwaVaSx__GldI#v=onepage&q=comercializaci%C3%B3n%20portafolios%20de%20servicios%20tur%C3%ADsticos&f=false ',
    },
    {
      tema: 'Comunicación asertiva',
      referencia:
        'Aguilar, J. E. (2019). <em>Comunicación asertiva</em>. Direccióndepersonal.com. ',
      tipo: 'Manual didáctico',
      link: 'http://www.direcciondepersonal.com/comunicacion_asertiva.pdf',
    },
    {
      tema: 'técnicas de recolección.',
      referencia:
        'Caro, L. (2021). <em>7 técnicas e instrumentos para la recolección de datos</em>. Equipo Editorial. ',
      tipo: 'Instructivo ',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w25172w/M1CCT05_S3_7_Tecnicas_e_instrumentos.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'es una habilidad que le permite a las personas dirigirse a otras de manera directa y efectiva.',
    },
    {
      termino: 'Certificación',
      significado:
        'logro o conmemoración inscrita en un documento para su autenticidad.',
    },
    {
      termino: 'Comercio',
      significado:
        'actividad económica que consiste en la compra y venta de productos y servicios.',
    },
    {
      termino: 'Estrategia',
      significado:
        'son todos aquellos planes y proyecciones que se tienen en cuenta para alcanzar un objetivo o una meta.',
    },
    {
      termino: 'Estructura',
      significado: 'manera de organizar u ordenar un conjunto de elementos.',
    },
    {
      termino: 'Gestión',
      significado:
        'conjunto de trámites y procesos utilizados para adquirir un beneficio propio o colectivo.',
    },
    {
      termino: 'Interpretación',
      significado:
        'demostrar de manera clara y concisa el conocimiento sobre algo o alguien.',
    },
    {
      termino: 'Portafolio',
      significado:
        'es el conjunto de productos y servicios cuyo fin es ser ofrecido a un público específico.',
    },
    {
      termino: 'Proceso',
      significado: 'es un suceso de acciones para lograr una meta.',
    },
    {
      termino: 'Servicio',
      significado: 'conjunto de acción y utilidades usadas para un bien común.',
    },
  ],
  referencias: [
    {
      referencia:
        'Molina, P. G. (2016). <em>Promoción y comercialización de productos y servicios turísticos locales. UF 0084</em>. Tutor Formación.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=owQKDQAAQBAJ&oi=fnd&pg=PA7&dq=procesos+de+comercializacion+turistica&ots=OqsOgHbvaN&sig=nCyW7WmFidnQUxdLzLK3SumL9bw#v=onepage&q&f=false',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
