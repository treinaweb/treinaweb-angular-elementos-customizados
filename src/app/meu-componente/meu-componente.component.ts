import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {
  @Input() nome;
  @Output() nomeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onChangeName(){
    this.nomeChange.emit(this.nome);
  }

}
