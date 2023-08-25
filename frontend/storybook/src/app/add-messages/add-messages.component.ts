import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent implements OnInit {

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
  }

  mensaje: string = "";

  addMessage() {
    console.log("mensaje: ", this.mensaje);
    this.messagesService.addMessage(this.mensaje);
    this.mensaje = "";
  }

}
