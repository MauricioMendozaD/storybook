import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  // Para formulario reactivo
  nombreReactivo = new FormControl('', Validators.required);
  emailReactivo = new FormControl('', [Validators.required, Validators.email]);

  get nombreReactivo2() {
    return this.formReactivo.get('nombreReactivo') as FormControl;
  }

  get emailReactivo2() {
    return this.formReactivo.get('emailReactivo') as FormControl;
  }

  // Para formulario reactivo con formgroup
  formReactivo = new FormGroup({
    'nombreReactivo': new FormControl('', Validators.required),
    'emailReactivo' : new FormControl('', [Validators.required, Validators.email])
  });

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

  procesarFormularioReactivo() {
    console.log("Procesando: " + this.nombreReactivo + ', email: ' + this.emailReactivo);
  }

  procesarFormularioReactivo2() {
    console.log("Procesando: ", this.formReactivo.value);
  }

}
