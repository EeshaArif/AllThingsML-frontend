import { MessageResponse } from './../_models/messageModel';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../_models/messageModel';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  BASE_URL = environment.apiUrl;
  private MessagesStore: Message[] = [];
  private MessageSubject: Subject<Message[]> = new Subject();
  messages: Observable<Message[]> = this.MessageSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getAllMessages();
  }
  getAllMessages(): void {
    this.http
      .get<MessageResponse>(`${this.BASE_URL}?action=get_message_list`)
      .subscribe((messages: MessageResponse) => {
        this.MessagesStore = messages.message_list;
        this.MessageSubject.next(this.MessagesStore);
        console.log(messages);
      });
  }
}
