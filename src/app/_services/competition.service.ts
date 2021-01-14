import { Subject, Observable } from 'rxjs';
import {
  Competition,
  CompetitionResponse,
} from './../_models/competitionModel';
import { HttpClient } from '@angular/common/http';
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
      .get<CompetitionResponse>(`${this.BASE_URL}?action=get_competitions_list`)
      .subscribe((competitions) => {
        this.competitionStore = competitions.competitions_list;
        this.competitionSubject.next(this.competitionStore);
      });
  }
}
