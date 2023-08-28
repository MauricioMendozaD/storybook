import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.parametro = params['id'];
    });
  }

  textoEnviar = 'Texto para hijo';
  texto:string = '';
  textoCompartido:string = '';
  parametro?:string;

  emitirCambioTexto() {
    console.log("cambio texto: ", this.textoCompartido)
  }

  textoCompartidoChange() {
    console.log("cambio texto compartido: ", this.textoCompartido);
  }

}
