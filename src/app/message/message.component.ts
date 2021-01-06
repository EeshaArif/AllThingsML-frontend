import { MessageService } from './../_services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getAllMessages();
  }
}
