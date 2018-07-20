import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {
  nome = 'Treinaweb';
  @Input() nomeExterno;


  constructor() { }

  ngOnInit() {
    
  }

}
