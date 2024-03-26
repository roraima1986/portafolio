import { Component } from '@angular/core';
import { routeNavbar } from '../../interfaces/navbar.interface';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  {

  // Rutas del navbar
  public routeNavbar: routeNavbar[] = [
    {route: 'inicio', title: 'Inicio', icon: 'fa-house'},
    {route: 'sobre-mi', title: 'Sobre mí', icon: 'fa-user'},
    {route: 'portafolio', title: 'Portafolio', icon: 'fa-briefcase'},
    {route: 'contacto', title: 'Contacto', icon: 'fa-envelope'},
  ]

}


