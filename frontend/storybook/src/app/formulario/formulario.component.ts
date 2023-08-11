import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarAlertaExitoso: boolean = false;
  mostrarAlertaError: boolean = false;

  persona:Persona = {
    nombre: '',
    edad: 0
  }

  persona2:Persona = {
    nombre: '',
    edad: 0
  }

  mostrarEnConsola(name:string) {
    console.log("nombre: ", name);
  }

  mostrarEnConsolaConSnackbar(name:string) {
    console.log("nombre: ", name);
    if (name != '') {
      this.mostrarAlertaExitoso = true;
      this.mostrarAlertaError = false;
    } else {
      this.mostrarAlertaError = true;
      this.mostrarAlertaExitoso = false;
    }
    
  }

  procesar() {
    console.log("procesando: ", this.persona);
  }

  procesarConValidacion() {
    console.log("procesando: ", this.persona);
  }

}
