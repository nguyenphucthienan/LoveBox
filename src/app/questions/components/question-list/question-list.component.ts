import { Component, Input, OnInit } from '@angular/core';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';
import { User } from 'src/app/core/models/user.interface';
import { SingleQuestionService } from 'src/app/core/services/single-question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  singleQuestions: SingleQuestion[] = [];
  pagination: Pagination;
  loading = true;

  @Input() user: User;

  constructor(private singleQuestionService: SingleQuestionService) { }

  ngOnInit() {
    this.singleQuestionService.getSingleQuestions(this.user.id, false)
      .subscribe((result: any) => {
        this.singleQuestions = result.content;
        this.pagination = result.pagination;
        this.loading = false;
      });
  }

  onScrollDown() {
    if (this.pagination && this.pagination.page < this.pagination.totalPages) {
      this.pagination.page += 1;
      this.singleQuestionService.getSingleQuestions(this.user.id, false, this.pagination)
        .subscribe((result: any) => {
          this.singleQuestions = [...this.singleQuestions, ...result.content];
          this.pagination = result.pagination;
        });
    }
  }

}
