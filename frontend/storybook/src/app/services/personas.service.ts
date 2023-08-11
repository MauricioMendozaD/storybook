import { Persona } from './../interfaces/persona';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor() { }

  obtenerListaPersonas() {
    let personas:Persona[];

    personas = [{
      nombre: 'Juan',
      edad: 5
    },{
      nombre: 'Norma',
      edad: 28
    }, {
      nombre: 'Joaquin',
      edad: 6
    }]

    return personas;
  }
}
