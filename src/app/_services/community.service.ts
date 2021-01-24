import { environment } from './../../environments/environment';
import { Community, CommunityResponse } from './../_models/communityModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  BASE_URL = `${environment.apiUrl}/communities.php`;
  private communityStore: Community[] = [];
  private communitySubject: Subject<Community[]> = new Subject();
  communities: Observable<Community[]> = this.communitySubject.asObservable();

  constructor(private http: HttpClient) {}
  getAllCommunities(): void {
    this.http
      .get<CommunityResponse>(`${this.BASE_URL}`)
      .subscribe((communities) => {
        this.communityStore = communities.communities_list;
        this.communitySubject.next(this.communityStore);
      });
  }
  getCommunityOfTopic(topic: string | null): Observable<CommunityResponse> {
    return this.http.get<CommunityResponse>(
      `${this.BASE_URL}?topic=${topic}`
    );
  }
}
