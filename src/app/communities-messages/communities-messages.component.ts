import { DatePipe } from '@angular/common';
import { Community } from './../_models/communityModel';
import { CommunityService } from './../_services/community.service';
import { MessageService } from './../_services/message.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/messageModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-communities-messages',
  templateUrl: './communities-messages.component.html',
  styleUrls: ['./communities-messages.component.css'],
})
export class CommunitiesMessagesComponent implements OnInit {
  topic: null | string = '';
  form!: FormGroup;
  message: Message = {
    text: '',
    owner: '',
    created_at: '',
  };
  constructor(
    private route: ActivatedRoute,
    private communityService: CommunityService,
    public messageService: MessageService,
    private fb: FormBuilder,
    private datePipe: DatePipe
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
        this.message.c_id = communities.communities_list[0].c_id;
      });

    this.form = this.fb.group({
      owner: [this.message.owner, [Validators.required]],
      text: [this.message.text, [Validators.required]],
    });
  }
  post(): void {
    this.message.created_at =
      this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss')?.toString() ||
      '';
    this.messageService.postMessage(this.message);
    this.message.text = '';
    this.message.owner = '';
  }
}
