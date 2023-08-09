import { Component, OnInit } from '@angular/core';

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

}
