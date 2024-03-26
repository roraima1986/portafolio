import { Component } from '@angular/core';
import { Portfolio } from 'src/app/interfaces/portfolio.interface';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ])
  ]
})
export class PortfolioPageComponent {
  public portfolio!: Portfolio[];

  constructor(private portfolioService: PortfolioService){}

  ngOnInit(): void {
    this.portfolioService.getportfolioMini().then((data:Portfolio[]) => {
      this.portfolio = data;
    })
  }

  // Color de fondo de las habilidades/categoorias
  onBgColorSkill(skill:string){
    switch (skill){
      case 'HTML':
        return '#E34F26';
      case 'CSS':
        return '#264de4';
      case 'JavaScript':
        return '#f0db4f';
      case 'Bootstrap':
        return '#563d7c';
      case 'Jquery':
        return '#0769AD';
      case 'Angular':
        return '#DD0031';
      case 'React':
        return '#61DAFB';
      case 'Django':
        return '#092E20';
      default:
        return 'styles.$blue'
    }
  }

  // Color de las letras de las habilidades/categoorias
  onColorSkill(skill:string){
    switch (skill){
      case 'JavaScript':
        return '#000';
      default:
        return '#fff'
    }
  }

}
