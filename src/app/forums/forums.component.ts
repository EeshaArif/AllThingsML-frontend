import { MatSnackBar } from '@angular/material/snack-bar';
import { AnswerService } from './../_services/answer.service';
import { QuestionService } from './../_services/question.service';
import { Component, OnInit } from '@angular/core';
import { Answer } from '../_models/answerModel';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css'],
})
export class ForumsComponent implements OnInit {
  answers?: Answer[];
  constructor(
    public questionService: QuestionService,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {
    this.questionService.getAllQuestions();
    this.callAnswers();
  }
  callAnswers(): void {
    this.answerService.getAllAnswers();
    this.answerService.answers.subscribe((answers) => {
      this.answers = answers;
    });
  }
  getAnswersOfQuestion(id: number): Answer[] {
    let answersByQuestion: Answer[] = [];
    if (this.answers != null) {
      answersByQuestion = this.answers.filter((answer) => answer.q_id === id);
    }

    return answersByQuestion;
  }

  deleteQuestion(id: number | undefined): void {
    if (id !== undefined) {
      this.questionService.deleteQuestionWithId(id);
    }
  }
  deleteAnswer(id: number | undefined): void {
    if (id !== undefined) {
      this.answerService.deleteAnswerWithId(id);
      this.callAnswers();
    }
  }
  answerQuestion(id: number | undefined): void {}
}
