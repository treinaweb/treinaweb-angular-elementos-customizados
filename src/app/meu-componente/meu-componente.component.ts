import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('abc');
  }

  ngOnDestroy(){
    console.log('tchau!');
  }

}
