import { Subject, Observable } from 'rxjs';
import {
  Competition,
  CompetitionResponse,
} from './../_models/competitionModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  BASE_URL = `${environment.apiUrl}/competitions.php`;
  private competitionStore: Competition[] = [];
  private competitionSubject: Subject<Competition[]> = new Subject();
  competitions: Observable<
    Competition[]
  > = this.competitionSubject.asObservable();

  constructor(private http: HttpClient) {}
  getAllCompetitions(): void {
    this.http
      .get<CompetitionResponse>(`${this.BASE_URL}`)
      .subscribe((competitions) => {
        this.competitionStore = competitions.competitions_list;
        this.competitionSubject.next(this.competitionStore);
      });
  }

  deleteCompetitionWithId(cid: number): void {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: cid,
      },
    };
    this.http
      .delete<CompetitionResponse>(`${this.BASE_URL}`, options)
      .subscribe((res) => {
        this.competitionStore = this.competitionStore.filter(
          (obj) => obj.id !== res.competitions_list[0].id
        );
        this.competitionSubject.next(this.competitionStore);
      });
  }
  postCompetition(competition: Competition): void {
    this.http
      .post<CompetitionResponse>(`${this.BASE_URL}`, competition)
      .subscribe((res) => {
        this.getAllCompetitions();
      });
  }
  updateCompetition(competition: Competition): void {
    this.http
      .put<CompetitionResponse>(`${this.BASE_URL}`, competition)
      .subscribe((res) => {
        this.getAllCompetitions();
      });
  }
}
