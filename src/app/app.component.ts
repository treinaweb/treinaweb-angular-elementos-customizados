import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isVisible = true;

  constructor(){
    setTimeout(() => {
      this.isVisible = false;
    }, 1000);
  }
}
