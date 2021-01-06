import { MessageService } from './_services/message.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  title = 'all-things-ml';
  ngOnInit(): void {
    this.messageService.getAllMessages();
  }
}
