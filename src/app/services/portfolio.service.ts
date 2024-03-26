import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getPortfolio() {
    return [
      {
        id           : 8,
        photo        : "./assets/img/projects/develop-design.jpg",
        title        : "Agencia de Diseño y Desarrollo Web",
        skill        : ["HTML", "CSS", "JavaScript"],
        description  : "Maquetacion de sitio web realizado solo con HTML y CSS de una Agencia de Diseño y Desarrollo Web. Diseño Responsivo.",
        date_project : "21/01/2024",
        observation  : "Master CSS3 Avanzado",
        link_github  : "https://github.com/roraima1986/web-development.github.io",
        link_website : "https://roraima1986.github.io/web-development.github.io/",
        is_active    : true,
      },

      {
        id           : 7,
        photo        : "./assets/img/projects/portfolio-design.png",
        title        : "Mi Portafolio",
        skill        : ["Angular"],
        description  : "Página web de mi portafolio, donde muestro mis proyectos, practicas y habilidades. El diseño de la página es responsivo y fue creado usando el framework de Angular.",
        date_project : "05/10/2023",
        observation  : "",
        link_github  : "https://github.com/roraima1986/portafolio",
        link_website : "",
        is_active    : true,
      },
      {
        id           : 6,
        photo        : "./assets/img/projects/country-app-design.jpg",
        title        : "Aplicación de países",
        skill        : ["Angular", "Bootstrap"],
        description  : "Plataforma de búsqueda de países por su capital, nombre y región. Desarrollada utilizando Angular y una API Rest.",
        date_project : "01/08/2023",
        observation  : "",
        link_github  : "https://github.com/roraima1986/country-app",
        link_website : "https://roraima1986.github.io/country-app/",
        is_active    : true,
      },
      {
        id           : 5,
        photo        : "./assets/img/projects/avila-mood.png",
        title        : "Sistema de Inventario",
        skill        : ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", "Django"],
        description  : "Sistema de registro de productos diseñado para un centro estético. Desarrollado con los frameworks Django y Bootstrap, con el soporte de Sweetalert2 para la generación de alertas y Datatable para la visualización de tablas. Diseño Responsivo",
        date_project : "01/06/2023",
        observation  : "Cliente: Ávila Mood",
        link_github  : "https://github.com/roraima1986/software_peluqueria.github.io",
        link_website : "",
        is_active    : true,
      },
      {
        id           : 4,
        photo        : "./assets/img/projects/panel-control-design.jpg",
        title        : "Sistema de Control de Pagos",
        skill        : ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", "Django"],
        description  : "Sistema de registro y control de pagos de los clientes de la plataforma OPTICACLOUD. Desarrollado con los frameworks Django y Bootstrap, e integrando Sweetalert2 para la generación de alertas y Datatable para una visualización eficiente de tablas.",
        date_project : "01/03/2023",
        observation  : "Cliente: OPTICACLOUD",
        link_github  : "https://github.com/roraima1986/clientesOpticacloud",
        link_website : "",
        is_active    : true,
      },
      {
        id           : 3,
        photo        : "./assets/img/projects/optiaustral-website-design.jpg",
        title        : "Página Web OptiAustral",
        skill        : ["HTML", "CSS", "Bootstrap", "JQuery"],
        description  : "Página web estática para una óptica, desarrollada utilizando el framework Bootstrap para garantizar un diseño responsivo y adaptable a diferentes dispositivos.",
        date_project : "01/10/2022",
        observation  : "Cliente: OptiAustral",
        link_github  : "https://github.com/roraima1986/optiaustral.github.io",
        link_website : "http://optiaustral.cl/",
        is_active    : true,
      },
      {
        id           : 2,
        photo        : "./assets/img/projects/animaciones-css-design.jpg",
        title        : "Animaciones CSS",
        skill        : ["HTML", "CSS"],
        description  : "Maquetación web de practica para mostrar habilidades en animaciones con CSS.",
        date_project : "10/08/2022",
        observation  : "Master CSS",
        link_github  : "https://github.com/roraima1986/cssanimations.github.io",
        link_website : "https://roraima1986.github.io/cssanimations.github.io/",
        is_active    : true,
      },
      {
        id           : 1,
        photo        : "./assets/img/projects/opticacloud-website-design.jpg",
        title        : "Página Web OPTICACLOUD",
        skill        : ["HTML", "CSS", "Bootstrap", "JQuery"],
        description  : "Página web estática diseñada para presentar información sobre OPTICACLOUD, un software especializado en ópticas. Desarrollada utilizando el framework Bootstrap para asegurar un diseño responsivo y adaptable a diversos dispositivos.",
        date_project : "01/03/2021",
        observation  : "Cliente: OPTICACLOUD",
        link_github  : "https://github.com/roraima1986/opticacloud.github.io",
        link_website : "https://roraima1986.github.io/opticacloud.github.io/",
        is_active    : true,
      },
    ]
  }

  getportfolioMini() {
    return Promise.resolve(this.getPortfolio());
  }
}
