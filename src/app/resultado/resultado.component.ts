import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  //se llaman las variables para usar en este componente
  @Input() dado1: number;
  @Input() dado2: number;
  @Input() dado3: number;
  constructor() {}

  ngOnInit() {}
}
