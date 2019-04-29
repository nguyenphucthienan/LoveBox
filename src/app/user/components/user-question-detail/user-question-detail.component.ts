import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { SingleQuestionService } from 'src/app/core/services/single-question.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-question-detail',
  templateUrl: './user-question-detail.component.html',
  styleUrls: ['./user-question-detail.component.scss']
})
export class UserQuestionDetailComponent implements OnInit {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  user: User;
  singleQuestion: SingleQuestion;

  isLoved: boolean;
  numOfLoves: number;

  constructor(
    private route: ActivatedRoute,
    private singleQuestionService: SingleQuestionService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
      this.singleQuestion = data.singleQuestion;
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

    this.singleQuestionService.loveOrUnloveSingleQuestion(
      this.singleQuestion.answerer.id,
      this.singleQuestion.id
    ).subscribe((singleQuestion: SingleQuestion) => {
      this.singleQuestion = singleQuestion;
      this.updateValues();
    });
  }

  private updateValues() {
    this.isLoved = this.user.id && this.singleQuestion.loves.map(user => user.id).includes(this.user.id);
    this.numOfLoves = this.singleQuestion.loveCount || this.singleQuestion.loves.length;
  }

}
