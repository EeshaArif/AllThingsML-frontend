import { QuestionResponse } from './../_models/questionModel';
import { Observable, Subject } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../_models/questionModel';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  BASE_URL = `${environment.apiUrl}/questions.php`;
  private questionStore: Question[] = [];
  private questionSubject: Subject<Question[]> = new Subject();
  questions: Observable<Question[]> = this.questionSubject.asObservable();
  constructor(private http: HttpClient) {}

  getAllQuestions(): void {
    this.http
      .get<QuestionResponse>(`${this.BASE_URL}`)
      .subscribe((questions) => {
        this.questionStore = questions.questions_list;
        this.questionSubject.next(this.questionStore);
      });
  }
  deleteQuestionWithId(id: number): void {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        q_id: id,
      },
    };
    this.http
      .delete<QuestionResponse>(`${this.BASE_URL}`, options)
      .subscribe((res) => {
        this.questionStore = this.questionStore.filter(
          (obj) => obj.q_id !== res.questions_list[0].q_id
        );
        this.questionSubject.next(this.questionStore);
      });
  }
}
