import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlotanteDirective } from './directives/flotante.directive';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FlotanteDirective, EstadisticasComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
