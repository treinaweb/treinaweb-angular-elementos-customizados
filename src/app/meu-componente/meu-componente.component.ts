import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  //templateUrl: './meu-componente.component.html',
  //styleUrls: ['./meu-componente.component.css'],
  template: `<h1>Hello World!</h1>`,
  styles: [`h1{ color: blue; }`]
})
export class MeuComponenteComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
