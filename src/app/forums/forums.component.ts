import { Question } from './../_models/questionModel';
import { AnswerService } from './../_services/answer.service';
import { QuestionService } from './../_services/question.service';
import { Component, OnInit } from '@angular/core';
import { Answer } from '../_models/answerModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css'],
})
export class ForumsComponent implements OnInit {
  answers?: Answer[];
  answerForm: Answer = {
    q_id: 0,
    answer: '',
    answered_by: '',
    created_at: '',
  };
  questionForm: Question = {
    question: '',
    asked_by: '',
    created_at: '',
  };
  constructor(
    public questionService: QuestionService,
    private answerService: AnswerService,
    private datePipe: DatePipe
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
  answerQuestion(id: number | undefined): void {
    this.answerForm.created_at =
      this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss')?.toString() ||
      '';
    if (id !== undefined) {
      this.answerForm.q_id = id;
    }
    this.answerService.postAnswer(this.answerForm);
    this.answerForm.answer = '';
    this.answerForm.answered_by = '';
    this.callAnswers();
  }
  askQuestion(): void {
    this.questionForm.created_at =
      this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss')?.toString() ||
      '';
    this.questionService.postQuestion(this.questionForm);
    this.questionForm.question = '';
    this.questionForm.asked_by = '';
  }
}
