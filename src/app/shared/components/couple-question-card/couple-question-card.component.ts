import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoupleQuestion } from 'src/app/core/models/couple-question.interface';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoupleQuestionService } from 'src/app/core/services/couple-question.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-couple-question-card',
  templateUrl: './couple-question-card.component.html',
  styleUrls: ['./couple-question-card.component.scss']
})
export class CoupleQuestionCardComponent implements OnInit, OnChanges, OnDestroy {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  @Input() user: User;
  @Input() coupleQuestion: CoupleQuestion;

  private tokenSubscription: Subscription;
  private currentUserId: number;

  isLoved: boolean;
  numOfLoves: number;

  constructor(
    private authService: AuthService,
    private coupleQuestionService: CoupleQuestionService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.tokenSubscription = this.authService.decodedToken$
      .subscribe(token => {
        if (token) {
          this.currentUserId = Number(token.sub);
        }
      });

    this.updateValues();
  }

  ngOnChanges() {
    const tempCoupleQuestion = { ...this.coupleQuestion };
    if (this.user.id === this.coupleQuestion.secondAnswerer.id) {
      this.coupleQuestion.firstAnswerer = tempCoupleQuestion.secondAnswerer;
      this.coupleQuestion.firstAnswerText = tempCoupleQuestion.secondAnswerText;
      this.coupleQuestion.secondAnswerer = tempCoupleQuestion.firstAnswerer;
      this.coupleQuestion.secondAnswerText = tempCoupleQuestion.firstAnswerText;
    }
  }

  loveQuestion() {
    if (!this.currentUserId) {
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
    this.isLoved = this.currentUserId && this.coupleQuestion.loves.map(user => user.id).includes(this.currentUserId);
    this.numOfLoves = this.coupleQuestion.loves.length;
  }

  ngOnDestroy() {
    this.tokenSubscription.unsubscribe();
  }

}
