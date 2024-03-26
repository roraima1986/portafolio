import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent {

  isDarkMode: boolean = false;

  constructor(private renderer: Renderer2) {
    // Verificar el estado almacenado en el localStorage al cargar el componente
    const storedMode = localStorage.getItem('isDarkMode');
    if (storedMode) {
      this.isDarkMode = JSON.parse(storedMode);
      if (this.isDarkMode) {
        this.renderer.addClass(document.body, 'dark__mode');
      }
    }
  }

  toggleDarkMode() {

    this.isDarkMode = !this.isDarkMode

    if(this.isDarkMode) {

      this.renderer.addClass(document.body, 'dark__mode');
      // Guardar el estado en el localStorage
      localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));

    } else {

      this.renderer.removeClass(document.body, 'dark__mode');
      // Remover el estado en el localStorage
      localStorage.removeItem('isDarkMode');
    }

  }
}
