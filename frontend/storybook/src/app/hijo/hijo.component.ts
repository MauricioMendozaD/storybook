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

  text:string = '';

  @Input() titulo?:string;

  @Output() cambioTexto = new EventEmitter<string>();

  emitirCambioTexto() {
    console.log("Texto cambiado: ", this.text);
    this.cambioTexto.emit(this.text);
  }

}
