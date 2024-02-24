import { Component } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

  public skills: Skill[] = [
    {
      category: 'Lenguajes',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python']
    },
    {
      category: 'Frameworks',
      items: ['Angular', 'Bootstrap', 'Tailwind CSS', 'Django']
    },
    {
      category: 'Librerias',
      items: ['React']
    },
    {
      category: 'Herramientas',
      items: ['GitHub', 'Visual Studio Code']
    },
    {
      category: 'Base de Datos',
      items: ['MySQL']
    },
  ]

}
