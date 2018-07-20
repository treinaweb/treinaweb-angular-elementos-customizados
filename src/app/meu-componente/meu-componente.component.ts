import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {
  nome = 'Treinaweb';
  @Input() nomeExterno;
  @Output() myClick = new EventEmitter();


  constructor() { }

  ngOnInit() {
    
  }

  callClick(){
    this.myClick.emit(123);
  }

}
