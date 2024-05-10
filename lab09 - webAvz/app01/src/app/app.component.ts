import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app01';

  //////--------PARA LOS BOTONES DE RUTA--------//////

  //Constructor del componente
  constructor() {}

  //Función 'navigateTo' que toma una ruta como argumento y redirige a esa ruta
  navigateTo(route: string) {

    //Redirige a la URL especificada utilizando 'window.location.href'
    window.location.href = route;
  }
}
