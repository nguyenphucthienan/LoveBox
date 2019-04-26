import { Component, Input, OnInit } from '@angular/core';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';
import { User } from 'src/app/core/models/user.interface';
import { SingleQuestionService } from 'src/app/core/services/single-question.service';

@Component({
  selector: 'app-user-questions-list',
  templateUrl: './user-questions-list.component.html',
  styleUrls: ['./user-questions-list.component.scss']
})
export class UserQuestionsListComponent implements OnInit {

  singleQuestions: SingleQuestion[];
  pagination: Pagination;

  @Input() user: User;

  constructor(   private singleQuestionService: SingleQuestionService) { }

  ngOnInit() {
    this.singleQuestionService.getSingleQuestions(this.user.id, false)
      .subscribe((result: any) => {
        this.singleQuestions = result.content;
        this.pagination = result.pagination;
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
