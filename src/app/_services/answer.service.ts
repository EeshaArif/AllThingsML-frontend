import { environment } from './../../environments/environment';
import { Answer, AnswerResponse } from './../_models/answerModel';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  BASE_URL = `${environment.apiUrl}/answers.php`;
  private answerStore: Answer[] = [];
  private answerSubject: Subject<Answer[]> = new Subject();
  answers: Observable<Answer[]> = this.answerSubject.asObservable();
  constructor(private http: HttpClient) {}
  getAllAnswers(): void {
    this.http
      .get<AnswerResponse>(`${this.BASE_URL}`)
      .subscribe((answers) => {
        this.answerStore = answers.answers_list;
        this.answerSubject.next(this.answerStore);
      });
  }
}
