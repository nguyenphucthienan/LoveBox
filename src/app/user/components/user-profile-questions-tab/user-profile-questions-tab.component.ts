import { Component, Input, OnInit } from '@angular/core';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { SingleQuestionService } from 'src/app/core/services/single-question.service';

@Component({
  selector: 'app-user-profile-questions-tab',
  templateUrl: './user-profile-questions-tab.component.html',
  styleUrls: ['./user-profile-questions-tab.component.scss']
})
export class UserProfileQuestionsTabComponent implements OnInit {

  singleQuestions: SingleQuestion[];
  pagination: Pagination;

  @Input() user: User;

  constructor(
    private singleQuestionService: SingleQuestionService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.singleQuestionService.getSingleQuestions(this.user.id, true)
      .subscribe((result: any) => {
        this.singleQuestions = result.content;
        this.pagination = result.pagination;
      });
  }

  sendQuestion(questionText: string) {
    this.singleQuestionService.createSingleQuestion(this.user.id, questionText)
      .subscribe(question => {
        this.alertService.success('Ask question successfully');
      });
  }

  onScrollDown() {
    if (this.pagination.page < this.pagination.totalPages) {
      this.pagination.page += 1;
      this.singleQuestionService.getSingleQuestions(this.user.id, true, this.pagination)
        .subscribe((result: any) => {
          this.singleQuestions = [...this.singleQuestions, ...result.content];
          this.pagination = result.pagination;
        });
    }
  }

}
