import { Component } from '@angular/core';
import { Experience } from 'src/app/interfaces/experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {

  public experiences: Experience[] = [
    {
      time: 'Oct 2023 - Actualmente',
      company: 'Colabora',
      position: 'Desarrollador Frontend',
      job_description: [
        'Aplicaciones web utilizando HTML, CSS y JavaScript.',
        'Implementación de diseños responsivos.',
        'Interfaces de usuario interactivas utilizando React.',
      ]
    },
    {
      time: 'Nov 2021 - Oct 2023',
      company: 'Informática Marco Moya EIRL',
      position: 'Desarrollador Frontend',
      job_description: [
        'Aplicaciones web utilizando HTML, CSS y JavaScript.',
        'Implementación de diseños responsivos.',
        'Mantenimiento y optimización de sitios web existentes.',
        'Colaboración con el equipo de Backend.',
      ]
    }

  ]

}
