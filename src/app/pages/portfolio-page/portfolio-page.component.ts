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
  public filteredPortfolio!: Portfolio[];
  public currentFilter: string = 'all'

  constructor(private portfolioService: PortfolioService){}

  ngOnInit(): void {
    this.portfolioService.getportfolioMini().then((data) => {
      this.portfolio = data;
      this.filteredPortfolio = data;
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


}
