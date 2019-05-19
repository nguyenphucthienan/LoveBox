import { Component, Input, OnInit } from '@angular/core';
import { CoupleQuestion } from 'src/app/core/models/couple-question.interface';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { User } from 'src/app/core/models/user.interface';
import { CoupleQuestionService } from 'src/app/core/services/couple-question.service';

@Component({
  selector: 'app-news-feed-couple-question-list',
  templateUrl: './news-feed-couple-question-list.component.html',
  styleUrls: ['./news-feed-couple-question-list.component.scss']
})
export class NewsFeedCoupleQuestionListComponent implements OnInit {

  coupleQuestions: CoupleQuestion[];
  pagination: Pagination;

  @Input() user: User;

  constructor(private coupleQuestionService: CoupleQuestionService) { }

  ngOnInit() {
    this.coupleQuestionService.getCoupleQuestionsInNewsFeed(this.user.id)
      .subscribe((result: any) => {
        this.coupleQuestions = result.content;
        this.pagination = result.pagination;
      });
  }

  onScrollDown() {
    if (this.pagination && this.pagination.page < this.pagination.totalPages) {
      this.pagination.page += 1;
      this.coupleQuestionService.getCoupleQuestionsInNewsFeed(this.user.id, this.pagination)
        .subscribe((result: any) => {
          this.coupleQuestions = [...this.coupleQuestions, ...result.content];
          this.pagination = result.pagination;
        });
    }
  }

}
