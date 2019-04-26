import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';
import { SingleQuestionService } from 'src/app/core/services/single-question.service';

@Component({
  selector: 'app-user-profile-questions-tab',
  templateUrl: './user-profile-questions-tab.component.html',
  styleUrls: ['./user-profile-questions-tab.component.scss']
})
export class UserProfileQuestionsTabComponent implements OnInit {

  @Input() user: User;

  constructor(private singleQuestionService: SingleQuestionService) { }

  ngOnInit() {
    this.singleQuestionService.getSingleQuestions(this.user.id, true)
      .subscribe(questions => console.log('questions', questions));
  }

  sendQuestion(questionText: string) {
    this.singleQuestionService.createSingleQuestion(this.user.id, questionText)
      .subscribe(question => console.log('question', question));
  }

}
