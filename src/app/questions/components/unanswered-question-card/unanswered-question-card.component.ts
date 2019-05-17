import { Component, Input, OnInit } from '@angular/core';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';

@Component({
  selector: 'app-unanswered-question-card',
  templateUrl: './unanswered-question-card.component.html',
  styleUrls: ['./unanswered-question-card.component.scss']
})
export class UnansweredQuestionCardComponent implements OnInit {

  @Input() singleQuestion: SingleQuestion;

  constructor() { }

  ngOnInit() {
  }

}
