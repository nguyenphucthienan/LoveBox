import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SingleQuestionService } from 'src/app/core/services/single-question.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit, OnDestroy {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  @Input() singleQuestion: SingleQuestion;

  private tokenSubscription: Subscription;
  private currentUserId: number;

  isLoved: boolean;
  numOfLoves: number;

  constructor(
    private authService: AuthService,
    private singleQuestionService: SingleQuestionService,
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

    this.singleQuestionService.loveOrUnloveSingleQuestion(
      this.singleQuestion.answerer.id,
      this.singleQuestion.id
    ).subscribe((singleQuestion: SingleQuestion) => {
      this.singleQuestion = singleQuestion;
      this.updateValues();
    });
  }

  private updateValues() {
    this.isLoved = this.currentUserId && this.singleQuestion.loves.map(user => user.id).includes(this.currentUserId);
    this.numOfLoves = this.singleQuestion.loveCount || this.singleQuestion.loves.length;
  }

  ngOnDestroy() {
    this.tokenSubscription.unsubscribe();
  }

}
