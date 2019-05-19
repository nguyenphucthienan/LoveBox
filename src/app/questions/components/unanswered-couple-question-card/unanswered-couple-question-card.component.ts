import { Component, Input, OnInit } from '@angular/core';
import { CoupleQuestion } from 'src/app/core/models/couple-question.interface';
import { User } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-unanswered-couple-question-card',
  templateUrl: './unanswered-couple-question-card.component.html',
  styleUrls: ['./unanswered-couple-question-card.component.scss']
})
export class UnansweredCoupleQuestionCardComponent implements OnInit {

  @Input() user: User;
  @Input() coupleQuestion: CoupleQuestion;

  constructor() { }

  ngOnInit() {
  }

}
