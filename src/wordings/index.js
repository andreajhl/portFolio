const wordings = {
  about: {
    title: 'Acerca de mí',
    profession: 'Front End Developer',
    content:  `con más de 3 años de experiencia creando interfaces interactivas y atractivas, disfruto trabajar en equipos dinámicos y multidisciplinarios, aportando soluciones innovadoras y colaborativas. 
    \nMe destaco por convertir diseños creativos en código limpio y eficiente utilizando HTML, CSS y JavaScript, además de frameworks como React y Next.js.
    \nCuento con experiencia en la integración de APIs y en la optimización de rendimiento de sitios web. Actualmente, me encuentro en búsqueda de una nueva posición laboral donde pueda contribuir con mi conocimiento y continuar creciendo profesionalmente.
    `,
    options: {
      contact: 'Contactame',
      projects: 'Ver proyectos',
    },
  },
  navbar: {
    initial: 'Inicio',
    about: 'Acerca de mí',
    skill: 'Skill',
    projects: 'Proyectos',
    cv: 'Currículum',
    contact: 'Contacto',
    cv: 'Descargar CV',
  },
  home: {
    title: '!Hola! Soy Andrea',
    subtitle: 'Ssr. Front End Developer',
    cv: 'Currículum',
  },
  skill: {
    title: 'Skill',
    tech: {
      title: 'Tecnologías',
      languages: {
        title: 'Lenguajes',
        items: [
          'Javascript',
          'TypeScript',
          'Python',
          'HTML',
        ],
      },
      frameworks: {
        title: 'Frameworks',
        items: [
          'React',
          'NextJs',
          'Redux',
          'NodeJs',
        ],
      },
      styles: {
        title: 'Librerías de CSS',
        items:[
          'CSS',
          'Sass',
          'Tailwind',
          'Material-UI',  
        ],
      },
      others: {
        title: 'Otros',
        items: ['Jest', 'Cypress', 'Google Analytics'],
      },
    },
    tools: {
      title: 'Herramientas',
      items: [
        'GitHub',
        'Figma',
        'Jira',
        'Scrum',
      ],
    },
  },
  projects: {
    title: 'Proyectos Recientes',
    learnMore: 'Leer más',
    stackLabel: 'Tecnologías:',
    projects: {
      adGoat: {
        job: 'AdGoat',
        position: 'Ssr Front End',
        date: 'abr. 2023 - actualmente',
        subtitle: 'Ad Tech',
        stackTechnology: 'NextJs, TypeScript, Tailwind, Nodejs.',
        description: `Ofertas365: Plataforma de catálogos, integracions de Ads y actualizaciones diarias automatizadas.\n
        Tus Préstamos Top: Web para comparar préstamos personales, filtros personalizados e integración con APIs financieras para garantizar información precisa y en tiempo real.`,
      },
      ficohsa: {
        job: 'Fichosa',
        position: 'Ssr Front End',
        date: 'Oct. 2023 - abr. 2023',
        subtitle: 'Grupo Financiero',
        stackTechnology: 'NextJs, TypeScript, Martial-UI, Webpack.',
        description: 'Desarrollo de una biblioteca de componentes transversales para los demás squads del banco y creación de componentes funcionales (micro front ends) fundamentales para optimizar el tiempo de nuevos desarrollos y mantener la consistencia en el proyecto.',
      },
      mercadoLibre: {
        job: 'Mercado Libre',
        position: 'Ssr Software Engineer',
        date: 'Nov. 2021 - Oct. 2023',
        subtitle: 'E-commerce',
        stackTechnology: 'React, NextJs, JS, TS, Chart.js.',
        description: 'Desarrollo de un sistema de logistica para analisis y creacion de informes mediante el uso de tarjetas, tablas y graficas, permitiendo a las operaciones tomar acciones estrategicas para alcanzar los objetivos establecidos.',
      },
    },
  },
  contact: {
    title: '¿Buscas talento en Front End?',
    content: 'Con más de 3 años de experiencia creando soluciones interactivas y escalables, estoy lista para un nuevo desafío donde pueda aportar mis habilidades y seguir creciendo profesionalmente.\n\nSi buscas talento comprometido, ¡déjame un mensaje y conectemos!',
    form: {
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar',
      alert: {
        success: '¡Tu mensaje fue enviado! 🚀',
        error: 'Hubo un error al enviar tu mensaje.\nPor favor, inténtalo nuevamente. 🙁',
      },
    },
    channels: {
      strong: '¿Te apetece socializar?',
      content: '¡Encuéntrame también en estos espacios online!',
    },
  },
};

export default wordings;
