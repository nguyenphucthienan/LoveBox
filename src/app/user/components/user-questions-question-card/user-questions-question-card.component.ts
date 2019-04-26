import { Component, Input, OnInit } from '@angular/core';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';

@Component({
  selector: 'app-user-questions-question-card',
  templateUrl: './user-questions-question-card.component.html',
  styleUrls: ['./user-questions-question-card.component.scss']
})
export class UserQuestionsQuestionCardComponent implements OnInit {

  @Input() singleQuestion: SingleQuestion;

  constructor() { }

  ngOnInit() {
  }

}
