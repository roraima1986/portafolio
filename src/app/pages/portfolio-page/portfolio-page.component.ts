import { Component } from '@angular/core';
import { Portfolio } from 'src/app/interfaces/portfolio.interface';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
})
export class PortfolioPageComponent {
  public portfolio!: Portfolio[];

  constructor(private portfolioService: PortfolioService){}

  ngOnInit(): void {
    this.portfolioService.getportfolioMini().then((data) => {
      this.portfolio = data;
    })

  }
}
