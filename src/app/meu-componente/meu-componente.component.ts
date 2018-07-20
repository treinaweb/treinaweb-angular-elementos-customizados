import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {
  nome = 'Treinaweb';
  @ViewChild('meuElemento') myElement: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.myElement);
  }

}
