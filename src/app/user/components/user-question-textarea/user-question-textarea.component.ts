import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-question-textarea',
  templateUrl: './user-question-textarea.component.html',
  styleUrls: ['./user-question-textarea.component.scss']
})
export class UserQuestionTextareaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendQuestion(value: string) {
    console.log('Question', value);
  }

}
