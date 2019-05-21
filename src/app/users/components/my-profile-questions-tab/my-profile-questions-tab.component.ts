import { Component, Input, OnInit } from '@angular/core';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';
import { SortMode } from 'src/app/core/models/sort-mode.interface';
import { User } from 'src/app/core/models/user.interface';
import { SingleQuestionService } from 'src/app/core/services/single-question.service';

@Component({
  selector: 'app-my-profile-questions-tab',
  templateUrl: './my-profile-questions-tab.component.html',
  styleUrls: ['./my-profile-questions-tab.component.scss']
})
export class MyProfileQuestionsTabComponent implements OnInit {

  private readonly defaultSortMode: SortMode = {
    sortBy: 'answeredAt',
    isSortAscending: false
  };

  @Input() myUser: User;

  singleQuestions: SingleQuestion[] = [];
  pagination: Pagination;
  loading = true;

  constructor(private singleQuestionService: SingleQuestionService) { }

  ngOnInit() {
    this.singleQuestionService.getSingleQuestions(
      this.myUser.id, true,
      undefined, this.defaultSortMode
    ).subscribe((result: any) => {
      this.singleQuestions = result.content;
      this.pagination = result.pagination;
      this.loading = false;
    });
  }

  onScrollDown() {
    if (this.pagination.page < this.pagination.totalPages) {
      this.pagination.page += 1;
      this.singleQuestionService.getSingleQuestions(
        this.myUser.id, true,
        this.pagination, this.defaultSortMode
      ).subscribe((result: any) => {
        this.singleQuestions = [...this.singleQuestions, ...result.content];
        this.pagination = result.pagination;
      });
    }
  }

}
