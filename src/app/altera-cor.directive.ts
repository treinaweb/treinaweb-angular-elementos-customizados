import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlteraCor]'
})
export class AlteraCorDirective {

  constructor(
    private elementRef: ElementRef
  ) { 
    let color = '';
    switch(Math.floor(Math.random() * 4)){
      case 0: color = 'red'; break;
      case 1: color = 'green'; break;
      case 2: color = 'orange'; break;
      case 3: color = 'blue'; break;
    }

    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
