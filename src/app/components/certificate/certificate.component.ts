import { Component } from '@angular/core';
import { Certificate } from 'src/app/interfaces/certificate.interface';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent {
  public certificates: Certificate[] = [
    {
      name:           'Master en CSS3 Avanzado: Maqueta 3 sitios web profesionales',
      institute:      'Udemy',
      id_certificate: 'UC-13cf28fb-26d6-4d84-b39b-3dc94914ee80/',
      url_credencial: 'https://www.udemy.com/certificate/UC-13cf28fb-26d6-4d84-b39b-3dc94914ee80/',
      date:           '01/02/2024',
      image:          './assets/img/certificates/master-css-avanzado.jpg'
    },
    {
      name:           'Angular: De cero a experto - Edición 2023',
      institute:      'Udemy',
      id_certificate: 'UC-bbf17962-c001-4952-877f-4d958247535e',
      url_credencial: 'https://www.udemy.com/certificate/UC-bbf17962-c001-4952-877f-4d958247535e/',
      date:           '28/10/2023',
      image:          './assets/img/certificates/curso-angular.jpg'
    },
    {
      name:           'Master en TypeScript, JavaScript Moderno, ES2023, APIs HTML5',
      institute:      'Udemy',
      id_certificate: 'UC-679cffb2-8482-4c43-85fd-b04198f05e88',
      url_credencial: 'https://www.udemy.com/certificate/UC-43fcb55f-535c-478c-a201-0ad5b302f8e1/',
      date:           '02/10/2023',
      image:          './assets/img/certificates/master-js-avanzado.jpg'
    },
    {
      name:           'Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS',
      institute:      'Udemy',
      id_certificate: 'UC-43fcb55f-535c-478c-a201-0ad5b302f8e1',
      url_credencial: '',
      date:           '08/08/2023',
      image:          './assets/img/certificates/master-js.jpg'
    },
    {
      name:           'Angular Esencial',
      institute:      'Linkedin Learning',
      id_certificate: 'eba314fe50d10bfbb2e971ec33ff87bdaa3d500a12f01f990659ef2cd53603c0',
      url_credencial: 'https://www.linkedin.com/learning/certificates/eba314fe50d10bfbb2e971ec33ff87bdaa3d500a12f01f990659ef2cd53603c0',
      date:           '06/06/2023',
      image:          './assets/img/certificates/angular-esencial.jpg'
    },
    {
      name:           'TypeScript Esencial',
      institute:      'Linkedin Learning',
      id_certificate: 'd9a1643c5874f6bf5bc49348a8e731ce8bfb0d6421d26d433c53dd43e9068381',
      url_credencial: 'https://www.linkedin.com/learning/certificates/d9a1643c5874f6bf5bc49348a8e731ce8bfb0d6421d26d433c53dd43e9068381',
      date:           '31/05/2023',
      image:          './assets/img/certificates/typescript-esencial.jpg'
    },
    {
      name:           'JavaScript Esencial',
      institute:      'Linkedin Learning',
      id_certificate: 'bcb2ba8daa08e80dcd4ef08ceee19a58a7abd5709b41687e9ba26d97fb345a2a',
      url_credencial: 'https://www.linkedin.com/learning/certificates/bcb2ba8daa08e80dcd4ef08ceee19a58a7abd5709b41687e9ba26d97fb345a2a',
      date:           '28/05/2023',
      image:          './assets/img/certificates/js-esencial.jpg'
    },
    {
      name:           'Master en CSS: Responsive, SAAS, Flexbox, Grid y Bootstrap',
      institute:      'Udemy',
      id_certificate: 'UC-70ff0b09-426f-42f3-aed0-26f91c6dcee4',
      url_credencial: 'https://www.udemy.com/certificate/UC-70ff0b09-426f-42f3-aed0-26f91c6dcee4/',
      date:           '19/08/2022',
      image:          './assets/img/certificates/master-css.jpg'
    },



  ]
}
