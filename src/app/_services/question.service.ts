import { QuestionResponse } from './../_models/questionModel';
import { Observable, Subject } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
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
}
