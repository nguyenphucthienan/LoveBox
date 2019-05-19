import { Component, OnInit, Input } from '@angular/core';
import { CoupleQuestion } from 'src/app/core/models/couple-question.interface';
import { CoupleQuestionService } from 'src/app/core/services/couple-question.service';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { User } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-couple-question-list',
  templateUrl: './couple-question-list.component.html',
  styleUrls: ['./couple-question-list.component.scss']
})
export class CoupleQuestionListComponent implements OnInit {

  coupleQuestions: CoupleQuestion[];
  pagination: Pagination;

  @Input() user: User;

  constructor(private coupleQuestionService: CoupleQuestionService) { }

  ngOnInit() {
    this.coupleQuestionService.getCoupleQuestions(this.user.id, false)
      .subscribe((result: any) => {
        this.coupleQuestions = result.content;
        this.pagination = result.pagination;
      });
  }

  onScrollDown() {
    if (this.pagination && this.pagination.page < this.pagination.totalPages) {
      this.pagination.page += 1;
      this.coupleQuestionService.getCoupleQuestions(this.user.id, false, this.pagination)
        .subscribe((result: any) => {
          this.coupleQuestions = [...this.coupleQuestions, ...result.content];
          this.pagination = result.pagination;
        });
    }
  }

}
