import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonesComponent } from './botones/botones.component';
import { SidebarNavegacionComponent } from './sidebar-navegacion/sidebar-navegacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IteracionesComponent } from './iteraciones/iteraciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    SidebarNavegacionComponent,
    FormularioComponent,
    IteracionesComponent,
    PadreComponent,
    HijoComponent,
    AddMessagesComponent,
    ListMessagesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
