import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communities-messages',
  templateUrl: './communities-messages.component.html',
  styleUrls: ['./communities-messages.component.css'],
})
export class CommunitiesMessagesComponent implements OnInit {
  topic: null | string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.topic = params.get('topic');
    });
  }
}
