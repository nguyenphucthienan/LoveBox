import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';
import { User } from 'src/app/core/models/user.interface';
import { SingleQuestionService } from 'src/app/core/services/single-question.service';

@Component({
  selector: 'app-user-me-questions-tab',
  templateUrl: './user-me-questions-tab.component.html',
  styleUrls: ['./user-me-questions-tab.component.scss']
})
export class UserMeQuestionsTabComponent implements OnInit {

  @Input() myUser: User;

  singleQuestions: SingleQuestion[] = [];
  pagination: Pagination;

  constructor(
    private fb: FormBuilder,
    private singleQuestionService: SingleQuestionService
  ) { }

  ngOnInit() {
    this.singleQuestionService.getSingleQuestions(this.myUser.id, true)
      .subscribe((result: any) => {
        this.singleQuestions = result.content;
        this.pagination = result.pagination;
      });
  }

  onScrollDown() {
    if (this.pagination.page < this.pagination.totalPages) {
      this.pagination.page += 1;
      this.singleQuestionService.getSingleQuestions(this.myUser.id, true, this.pagination)
        .subscribe((result: any) => {
          this.singleQuestions = [...this.singleQuestions, ...result.content];
          this.pagination = result.pagination;
        });
    }
  }

}
