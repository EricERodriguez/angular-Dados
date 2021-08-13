import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

/**
 * Implementar una aplicación que muestre tres dados
 * (usar el componente creado llamado 'dado') y un botón.
 * Cuando se presione el botón generar tres valores
 * aleatorios y pasarlos a los componentes respectivos
 * para que se muestren. El componente principal (app-component)
 * debe pasarle, por proyección de contenido, un mensaje al
 * componente 'resultado' que el usuario ganó si los tres dados
 * tienen el mismo valor.
 */

//  retornarAleatorio() {
//   return Math.trunc(Math.random() * 6) + 1;
// }
