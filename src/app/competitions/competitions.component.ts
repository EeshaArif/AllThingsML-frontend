import { CompetitionService } from './../_services/competition.service';
import { Component, OnInit } from '@angular/core';
import { Competition } from '../_models/competitionModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css'],
})
export class CompetitionsComponent implements OnInit {
  competitionForm: Competition = {
  name: '',
  description: '',
  start_date: '',
  end_date: '',
  image: '',
  prize: '',
  host: '',
  link: '',
  }
  constructor(public competitionService: CompetitionService,
    private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.competitionService.getAllCompetitions();
  }
  addCompetition(): void {
    this.competitionService.postCompetition(this.competitionForm);
    this.competitionForm.name = '';
    this.competitionForm.description = '';
    this.competitionForm.start_date = '';
    this.competitionForm.end_date = '';
    this.competitionForm.image = '';
    this.competitionForm.prize = '';
    this.competitionForm.host= '';
    this.competitionForm.link = ''; 
  }
}

