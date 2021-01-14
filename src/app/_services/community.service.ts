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
  community?: Community;

  constructor(private http: HttpClient) {}
  getCommunityOfTopic(topic: string | null): Observable<CommunityResponse> {
    return this.http.get<CommunityResponse>(
      `${this.BASE_URL}?action=get_community&topic=${topic}`
    );
  }
}
