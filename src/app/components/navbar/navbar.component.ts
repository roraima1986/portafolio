import { Component } from '@angular/core';
import { routeNavbar } from '../../interfaces/navbar.interface';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent  {

  // Rutas del navbar
  public routeNavbar: routeNavbar[] = [
    {route: '', title: 'Inicio', icon: 'fa-house'},
    {route: 'trabajos', title: 'Trabajos', icon: 'fa-folder-open'},
    {route: 'resumen', title: 'Resumen', icon: 'fa-user'},
    {route: 'disenos', title: 'Diseños', icon: 'fa-pen-ruler'},
    {route: 'contacto', title: 'Contacto', icon: 'fa-envelope'},
  ]
  // Navbar visible
  public isNavbarVisible:boolean = true;

  toggleNavbar():void {
    this.isNavbarVisible = !this.isNavbarVisible;
  }
}


