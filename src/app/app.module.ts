import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { AlteraCorDirective } from './altera-cor.directive';
import { NgUnlessDirective } from './ng-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    AlteraCorDirective,
    NgUnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
