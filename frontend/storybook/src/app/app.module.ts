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

import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes:Routes = [
  {
    path: "home",
    component: AppComponent
  },
  {
    path: "botones",
    component: BotonesComponent
  },
  {
    path: "formularios",
    component: FormularioComponent
  },
  {
    path: "iteraciones",
    component: IteracionesComponent
  },
  {
    path: "intercomunicacion",
    component: PadreComponent
  },
  {
    path: "intercomunicacion/:id",
    component: PadreComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

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
    MessagesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
