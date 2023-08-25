import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //textoCompartido:string = '';

  @Input() titulo?:string;
  @Input() textoCompartido?:string;

  @Output() textoCompartidoChange = new EventEmitter<string>();

  emitirCambioTexto() {
    console.log("Texto cambiado: ", this.textoCompartido);
    this.textoCompartidoChange.emit(this.textoCompartido);
  }

}
