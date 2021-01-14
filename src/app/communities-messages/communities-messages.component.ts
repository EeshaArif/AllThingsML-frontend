import { Community } from './../_models/communityModel';
import { CommunityService } from './../_services/community.service';
import { MessageService } from './../_services/message.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communities-messages',
  templateUrl: './communities-messages.component.html',
  styleUrls: ['./communities-messages.component.css'],
})
export class CommunitiesMessagesComponent implements OnInit {
  topic: null | string = '';
  constructor(
    private route: ActivatedRoute,
    private communityService: CommunityService,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.topic = params.get('topic');
    });
    this.communityService
      .getCommunityOfTopic(this.topic)
      .subscribe((communities) => {
        this.messageService.getMessagesOfCommunity(
          communities.communities_list[0].c_id
        );
      });
  }
}
