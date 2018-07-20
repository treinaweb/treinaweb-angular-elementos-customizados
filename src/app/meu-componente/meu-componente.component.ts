import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {
  myStyle = '';

  get mySafeStyle(){
    return  this.sanitizer.bypassSecurityTrustStyle(this.myStyle);
  }

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

}
