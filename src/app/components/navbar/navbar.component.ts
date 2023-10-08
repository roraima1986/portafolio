import { Component } from '@angular/core';
import { routeNavbar } from './navbar.interface';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent  {

  // Rutas del navbar
  public routeNavbar: routeNavbar[] = [
    {route: '', title: 'Inicio', icon: './../../../assets/img/icons/home.svg'},
    {route: 'trabajos', title: 'Trabajos', icon: './../../../assets/img/icons/folder.svg'},
    {route: 'resumen', title: 'Resumen', icon: './../../../assets/img/icons/user.svg'},
    {route: 'disenos', title: 'Diseño', icon: './../../../assets/img/icons/layout.svg'},
    {route: 'contacto', title: 'Contacto', icon: './../../../assets/img/icons/envelope.svg'},
  ]
  // Navbar visible
  public isNavbarVisible:boolean = true;

  toggleNavbar():void {
    this.isNavbarVisible = !this.isNavbarVisible;
  }
}
