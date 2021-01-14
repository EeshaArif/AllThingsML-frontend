import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../_services/community.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {

  constructor(public communityService: CommunityService) { }

  ngOnInit(): void {
    this.communityService.getAllCommunities();
  }

}
