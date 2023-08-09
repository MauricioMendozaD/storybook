import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mensaje:string = "Hola Mundo!"
  numero:number = 0;

  text_color:string = '';
  texto_habilitado:string = 'Deshabilitar';
  boton_deshabilitado:boolean = false;

  decrementar() {
    this.numero--;
  }

  aumentar() {
    this.numero++;
  }

  toggleBoton() {
    this.boton_deshabilitado = !this.boton_deshabilitado;
    this.texto_habilitado = (this.boton_deshabilitado) ? this.texto_habilitado = 'Habilitar' : this.texto_habilitado = 'Deshabilitar'
  }

}
