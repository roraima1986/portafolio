import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';

const routes: Routes = [
  {path: 'index', component: HomePageComponent},
  {path: 'sobre-mi', component: AboutPageComponent},
  {path: 'portafolio', component: PortfolioPageComponent},
  {path: 'contacto', component: ContactPageComponent},
  {path: '**', redirectTo:'index'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
