import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-question-textarea',
  templateUrl: './user-question-textarea.component.html',
  styleUrls: ['./user-question-textarea.component.scss']
})
export class UserQuestionTextareaComponent implements OnInit {

  @Output() send = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendQuestion(question: string) {
    this.send.emit(question);
  }

}
