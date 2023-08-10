import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonesComponent } from './botones/botones.component';
import { SidebarNavegacionComponent } from './sidebar-navegacion/sidebar-navegacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IteracionesComponent } from './iteraciones/iteraciones.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    SidebarNavegacionComponent,
    FormularioComponent,
    IteracionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
