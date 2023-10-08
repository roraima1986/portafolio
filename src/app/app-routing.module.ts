import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DesignPageComponent } from './pages/design-page/design-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WorksPageComponent } from './pages/works-page/works-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'trabajos', component: WorksPageComponent},
  {path: 'resumen', component: AboutPageComponent},
  {path: 'disenos', component: DesignPageComponent},
  {path: 'contacto', component: ContactPageComponent},
  {path: '**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
