const wordings = {
  about: {
    title: 'Acerca de mí',
    profession: 'Front End Developer',
    content: (profession) => `Soy Andrea Hernandéz, ${profession} con 3 años de experiencia. Me apasiona crear interfaces interactivas y atractivas.
    /nConvierto diseños creatvos en código limpio y eficiente utilizando HTML, CDD y Javascript, junto con frameworks como React y Next.js. Tengo experiencia en la integración de APIs y la optimizacion del rendimiento en sitios webs.
    /nSiempre busco nuevas oportunidades para crecer y mantenerme actualizada. Me considero una comunicadora efectiva y disfruto colaborar en equipos dinámicos y mutidisciplinarios.`,
    options: {
      contact: 'Contactame',
      projects: 'Ver proyectos',
    }
  },
  navbar: {
    initial: 'Inicio',
    about: 'Acerca de mí',
    skill: 'Skill',
    projects: 'Proyectos',
    cv: 'Currículum',
    contact: 'Contacto'
  },
  home: {
    title: '!Hola! Soy Andrea',
    subtitle: 'Ssr. Front End Developer',
    button: 'Currículum'
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
          'HTML',
        ],
      },
      frameworks: {
        title: 'Frameworks',
        items: [
          'React',
          'Redux',
          'NextJs',
          'NodeJs',
          'Express',
        ],
      },
      styles: {
        title: 'Librerías de CSS',
        items:[
          'CSS',
          'Sass',
          'Bootstrap',
          'Material-UI',          
        ],
      },
      testing: {
        title: 'Testing',
        items: ['Jest'],
      },
      analysis: {
        title: 'Análisis y seguimiento',
        items: ['Google Analytics'],
      },
      graphics: {
        title: 'Gráficos',
        items: ['ChartJS']
      },
    },
    tools: {
      title: 'Herramientas',
      items: [
        'GitHub',
        'Trello',
        'Jira',
        'Scrum',
        'Slack'
      ]
    }
  },
  projects: {
    title: 'Ultimos Proyectos',
    learnMore: 'Leer más',
    stackLabel: 'Tecnologías principales',
    projects: {
      ficohsa: {
        title: 'Fichosa',
        date: 'Oct. 2023 - actualmente',
        subtitle: 'Grupo Financiero',
        stackTechnology: 'NextJs, TS, Webpack',
        description: 'Desarrollo de una biblioteca de componentes transversales para los demás squads del banco y creación de componentes funcionales (micro front ends) fundamentales para optimizar el tiempo de nuevos desarrollos y mantener la consistencia en el proyecto.',
      },
      mercadoLibre: {
        title: 'Mercado Libre',
        date: 'Nov. 2021- Oct. 2023',
        subtitle: 'E-commerce',
        stackTechnology: 'React, NextJs, JS, TS, Chart.js',
        description: 'Desarrollo de un sistema de logistica para analisis y creacion de informes mediante el uso de tarjetas, tablas y graficas, permitiendo a las operaciones tomar acciones estrategicas para alcanzar los objetivos establecidos.',
      },
      famosos: {
        title: 'Famosos.com',
        date: '2021',
        subtitle: 'E-commerce',
        stackTechnology: 'Nextjs, React, TS, JS',
        description: 'Desarrollo de una plataforma de comercio digital con pasarela de pago, mediante la cual el usuario puede adquirir videos personalizados o autografos digitales de sus artistas preferidos, y los artistas pueden ver el estatus de sus pedidos y pagos.',
      },
    }
  }
};

export default wordings;
