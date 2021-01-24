import { MessageResponse, Message } from './../_models/messageModel';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  BASE_URL = `${environment.apiUrl}/messages.php`;
  private MessagesStore: Message[] = [];
  private MessageSubject: Subject<Message[]> = new Subject();
  messages: Observable<Message[]> = this.MessageSubject.asObservable();

  constructor(private http: HttpClient) {
    // this.getAllMessages();
  }
  getAllMessages(): void {
    this.http
      .get<MessageResponse>(`${this.BASE_URL}`)
      .subscribe((messages: MessageResponse) => {
        this.MessagesStore = messages.messages_list;
        this.MessageSubject.next(this.MessagesStore);
        console.log(messages.messages_list);
      });
  }
  getMessagesOfCommunity(communityId: number | undefined): void {
    if (communityId !== undefined) {
      this.http
        .get<MessageResponse>(
          `${this.BASE_URL}?community_id=${communityId}`
        )
        .subscribe((messages: MessageResponse) => {
          this.MessagesStore = messages.messages_list;
          this.MessageSubject.next(this.MessagesStore);
        });
    }
  }
  postMessage(message: Message): void {
    this.http
      .post<MessageResponse>(`${this.BASE_URL}`, message)
      .subscribe((res: MessageResponse) => {
        this.MessagesStore.push(res.messages_list[0]);
        this.MessageSubject.next(this.MessagesStore);
      });
  }
}
