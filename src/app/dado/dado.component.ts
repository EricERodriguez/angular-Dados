import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  ngOnInit() {}

  //se declaran las variables
  dado1: number = 0;
  dado2: number = 0;
  dado3: number = 0;

  //funcion para generar los valores de los dados
  retornarAleatorio() {
    this.dado1 = Math.trunc(Math.random() * 6) + 1;
    this.dado2 = Math.trunc(Math.random() * 6) + 1;
    this.dado3 = Math.trunc(Math.random() * 6) + 1;

    return Math.trunc(Math.random() * 6) + 1;
  }
}
