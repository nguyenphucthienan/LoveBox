import { Component, Input, OnInit } from '@angular/core';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';
import { User } from 'src/app/core/models/user.interface';
import { SingleQuestionService } from 'src/app/core/services/single-question.service';

@Component({
  selector: 'app-news-feed-question-list',
  templateUrl: './news-feed-question-list.component.html',
  styleUrls: ['./news-feed-question-list.component.scss']
})
export class NewsFeedQuestionListComponent implements OnInit {

  singleQuestions: SingleQuestion[];
  pagination: Pagination;

  @Input() user: User;

  constructor(private singleQuestionService: SingleQuestionService) { }

  ngOnInit() {
    this.singleQuestionService.getSingleQuestionsInNewsFeed(this.user.id)
      .subscribe((result: any) => {
        this.singleQuestions = result.content;
        this.pagination = result.pagination;
      });
  }

  onScrollDown() {
    if (this.pagination && this.pagination.page < this.pagination.totalPages) {
      this.pagination.page += 1;
      this.singleQuestionService.getSingleQuestionsInNewsFeed(this.user.id, this.pagination)
        .subscribe((result: any) => {
          this.singleQuestions = [...this.singleQuestions, ...result.content];
          this.pagination = result.pagination;
        });
    }
  }

}
