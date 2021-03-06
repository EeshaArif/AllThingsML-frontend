import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../environments/environment';
import { Answer, AnswerResponse } from './../_models/answerModel';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  BASE_URL = `${environment.apiUrl}/answers.php`;
  private answerStore: Answer[] = [];
  private answerSubject: Subject<Answer[]> = new Subject();
  answers: Observable<Answer[]> = this.answerSubject.asObservable();
  constructor(private http: HttpClient, private sb: MatSnackBar) {}
  getAllAnswers(): void {
    this.http.get<AnswerResponse>(`${this.BASE_URL}`).subscribe((answers) => {
      this.answerStore = answers.answers_list;
      this.answerSubject.next(this.answerStore);
    });
  }

  deleteAnswerWithId(id: number): void {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        a_id: id,
      },
    };
    this.http
      .delete<AnswerResponse>(`${this.BASE_URL}`, options)
      .subscribe((res) => {
        this.answerStore = this.answerStore.filter(
          (obj) => obj.q_id !== res.answers_list[0].a_id
        );
        this.answerSubject.next(this.answerStore);
        this.sb.open('successfully deleted answer!!', 'close', {
          duration: 2000,
        });
      });
  }
  postAnswer(answer: Answer): void {
    this.http
      .post<AnswerResponse>(`${this.BASE_URL}`, answer)
      .subscribe((res) => {
        this.getAllAnswers();
        this.sb.open('successfully posted answer!!', 'close', {
          duration: 5000,
        });
      });
  }
}
