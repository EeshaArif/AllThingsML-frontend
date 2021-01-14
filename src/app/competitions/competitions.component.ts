import { CompetitionService } from './../_services/competition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css'],
})
export class CompetitionsComponent implements OnInit {
  constructor(public competitionService: CompetitionService) {}

  ngOnInit(): void {
    this.competitionService.getAllCompetitions();
  }
}
