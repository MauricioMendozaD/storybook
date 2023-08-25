import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: string[] = [];

  addMessage(mensaje: string) {
    this.messages.push(mensaje);
  }
}
