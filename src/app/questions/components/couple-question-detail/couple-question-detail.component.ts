import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoupleQuestion } from 'src/app/core/models/couple-question.interface';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { CoupleQuestionService } from 'src/app/core/services/couple-question.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-couple-question-detail',
  templateUrl: './couple-question-detail.component.html',
  styleUrls: ['./couple-question-detail.component.scss']
})
export class CoupleQuestionDetailComponent implements OnInit {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  user: User;
  coupleQuestion: CoupleQuestion;

  isLoved: boolean;
  numOfLoves: number;

  constructor(
    private route: ActivatedRoute,
    private coupleQuestionService: CoupleQuestionService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
      this.coupleQuestion = data.coupleQuestion;
      this.updateValues();
    });
  }

  loveQuestion() {
    if (!this.user) {
      this.alertService.error('You need to login to love this question');
      return;
    }

    if (this.isLoved) {
      this.numOfLoves -= 1;
    } else {
      this.numOfLoves += 1;
    }

    this.isLoved = !this.isLoved;

    this.coupleQuestionService.loveOrUnloveCoupleQuestion(
      this.coupleQuestion.firstAnswerer.id,
      this.coupleQuestion.id
    ).subscribe((coupleQuestion: CoupleQuestion) => {
      this.coupleQuestion = coupleQuestion;
      this.updateValues();
    });
  }

  private updateValues() {
    this.isLoved = this.user.id && this.coupleQuestion.loves.map(user => user.id).includes(this.user.id);
    this.numOfLoves = this.coupleQuestion.loves.length;
  }

}
