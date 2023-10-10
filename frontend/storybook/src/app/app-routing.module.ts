import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IteracionesComponent } from './iteraciones/iteraciones.component';
import { PadreComponent } from './padre/padre.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactoEmailComponent } from './contacto-email/contacto-email.component';
import { ContactoPhoneComponent } from './contacto-phone/contacto-phone.component';
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
    path:"contacto",
    component: ContactoComponent,
    children: [
      {
        path: "email",
        component: ContactoEmailComponent
      },
      {
        path: "phone",
        component: ContactoPhoneComponent
      }
    ]
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
  declarations: [],
  imports: [
//    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
