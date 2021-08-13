import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DadoComponent } from './dado/dado.component';
import { ResultadoComponent } from './resultado/resultado.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DadoComponent, ResultadoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
