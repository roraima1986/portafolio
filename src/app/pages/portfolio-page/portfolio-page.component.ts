import { Component } from '@angular/core';
import { Portfolio } from 'src/app/interfaces/portfolio.interface';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {
  public portfolio!: Portfolio[];
  public filteredPortfolio: Portfolio[] = [];
  public currentFilter: string = 'destacado' // Establecer 'destacado' como filtro inicial


  constructor(private portfolioService: PortfolioService){}

  ngOnInit(): void {
    this.portfolioService.getportfolioMini().then((data:Portfolio[]) => {
      this.portfolio = data;
      this.filteredProjects(this.currentFilter);
    })
  }

  filteredProjects(filter: string): void {
    this.currentFilter = filter;
    if(filter === 'all') {
      this.filteredPortfolio = this.portfolio;
    } else if(filter === 'destacado') {
      this.filteredPortfolio = this.portfolio.filter(project => project.is_destacad);
    }else {
      this.filteredPortfolio = this.portfolio.filter(project => project.skill.includes(filter))
    }
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
