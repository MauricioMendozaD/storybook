import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-iteraciones',
  templateUrl: './iteraciones.component.html',
  styleUrls: ['./iteraciones.component.css']
})
export class IteracionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personaService = new PersonasService();

  personas:Persona[] = this.personaService.obtenerListaPersonas();

}
